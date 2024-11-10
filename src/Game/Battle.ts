import Dialogue from "../Dialogue/Dialogue";
import Courses from "./Courses";
import Player from "./Player";
import Professor from "./Professor";
import ProfessorTemplate from './ProfessorTemplate';
import Action from "./Action";
import Course from "./Course";
import { ActionType } from "./Action";

class Battle {
    private dialogue: Dialogue;
    private course: Course | undefined;
    private player: Player;
    private opponent: Player;
    public actionStack: Action[] = [];
    private playerActiveProfessorIndex: number = 0;
    private opponentActiveProfessorIndex: number = 0;

    constructor(dialogue: Dialogue, playerTeam: ProfessorTemplate[], courseID: string) {
        this.dialogue = dialogue;

        this.course = Courses.get(courseID);
        if (!this.course) { // catch nonexistent courses
            throw new Error(`Course with ID ${courseID} not found`);
        }

        // get opponent professors from course
        let opponentProfessorTemplates = this.course.getProfessors();
        let professors = opponentProfessorTemplates.map(opponentProfessorTemplates => new Professor(opponentProfessorTemplates));
        this.opponent = new Player(professors);

        // get player professors from Player
        let playerProfessorTemplates: ProfessorTemplate[] = playerTeam;
        let playerProfessors: Professor[] = playerProfessorTemplates.map(professorsTemplate => new Professor(professorsTemplate));
        this.player = new Player(playerProfessors);
    }

    public getPlayerProfessors() {
        return this.player.getProfessors();
    }

    public getOpponentProfessors(): Professor[] {
        return this.opponent.getProfessors();
    }

    public getActiveProfessor(): Professor {
        return this.player.getProfessors()[this.playerActiveProfessorIndex]
    }

    public getOpponentActiveProfessor(): Professor {
        return this.opponent.getProfessors()[this.opponentActiveProfessorIndex]
    }

    // UI sends engine an action
    // engine processes action
    // engine updates state of battle (player and opponent active professors) for player and opponent action
    // UI will check for changes in state for each action
    public processAction(action: Action): boolean {
        // UI calls process action on an action
        // engine adds player action to queue in a random order
        // update state of battle based on random action (first action in queue)
        // engine returns to UI whether there's actions left (bool)
        // UI checks for dialogue / UI changes
        // if there's moves left, UI calls update() again

        // actionStack assumed to be empty at the start of each Battle
        
        // add given player action to queue
        this.actionStack.push(action);

        // throw error when length of opponent professor moves is 0
        if (this.opponent.getProfessors()[0].getMoves().length === 0) {
            throw new Error("Opponent professor has no moves");
        }

        // add opponent action to queue
        this.actionStack.push({
            isPlayer: false,
            type: ActionType.ATTACK,
            moveIndex: this.getRandomNumber(0, this.opponent.getProfessors()[this.opponentActiveProfessorIndex].getMoves().length - 1)
        });

        
        this.actionStack.sort(() => Math.random() - 0.5);

        return this.gameLoop()
    }

    public gameLoop(): boolean {
        /*
        updates the state of the battle based on the top action in the actionStack

        returns whether there are actions left in the actionStack
        */
        
        if (this.actionStack.length > 0) {
            let action = this.actionStack.pop();

            if (action && action.type === ActionType.ATTACK) {
                if (action.isPlayer) {
                    let playerActiveProfessor = this.player.getProfessors()[this.playerActiveProfessorIndex];
                    let opponentActiveProfessor = this.opponent.getProfessors()[this.opponentActiveProfessorIndex];
                    let move = playerActiveProfessor.getMoves()[action.moveIndex];
                    if (move === undefined) {
                        throw new Error("Player professor has no moves");
                    }

                    let crit = Math.random() < (move.critChance ? move.critChance : 0.1); // 10% chance (or given) of critical hit
                    playerActiveProfessor.attackOpponent(opponentActiveProfessor, move, crit);

                    this.dialogue.addText(`${playerActiveProfessor.getName()} used ${move.name}!`);
                    if (crit) {
                        this.dialogue.addText("It's a critical hit!");
                    }

                    // if opponent professor is defeated
                    if (opponentActiveProfessor.getHealth() <= 0) {
                        this.dialogue.addText(`${opponentActiveProfessor.getName()} has fainted!`);
                        this.actionStack.pop(); // remove opponent's previous active prof action from actionStack
                        this.opponentActiveProfessorIndex++;

                        // if there are more opponent professors
                        if (!this.isGameOver()) {
                            this.actionStack.push({
                                isPlayer: false,
                                type: ActionType.SWITCH,
                                moveIndex: -1,
                            });
                        }
                    }
                } else if (!action.isPlayer) {
                    let opponentActiveProfessor = this.opponent.getProfessors()[this.opponentActiveProfessorIndex];
                    let playerActiveProfessor = this.player.getProfessors()[this.playerActiveProfessorIndex];
                    let move = opponentActiveProfessor.getMoves()[action.moveIndex];
                    if (move === undefined) {
                        throw new Error("Opponent professor has no moves");
                    }

                    let crit = Math.random() < (move.critChance ? move.critChance : 0.1); // 10% chance (or given) of critical hit
                    opponentActiveProfessor.attackOpponent(playerActiveProfessor, move, crit);

                    this.dialogue.addText(`${opponentActiveProfessor.getName()} used ${move.name}!`);
                    if (crit) {
                        this.dialogue.addText("It's a critical hit!");
                    }

                    // if player professor is defeated
                    if (playerActiveProfessor.getHealth() <= 0) {
                        this.dialogue.addText(`${playerActiveProfessor.getName()} has fainted!`);
                        this.actionStack.pop(); // remove player's previous active prof action from actionStack
                        this.playerActiveProfessorIndex++;

                        // if there are more player professors
                        if (!this.isGameOver()) {
                            this.actionStack.push({
                                isPlayer: true,
                                type: ActionType.SWITCH,
                                moveIndex: -1,
                            });
                        }
                    }
                }
            } else if (action && action.type === ActionType.SWITCH) {
                if (action.isPlayer) {
                    this.dialogue.addText(`You send out ${this.getActiveProfessor().getName()}`);
                } else if (!action.isPlayer) {
                    this.dialogue.addText(`Opponent switched to ${this.getOpponentActiveProfessor().getName()}`);  
                }
            } else if (action && action.type === ActionType.GAMEOVER) {
                if (this.isGameOver() === 1) {
                    this.dialogue.addText(`You've failed ${this.course?.getCourseNumber()} and were expelled from CICS! Try Isenberg instead!`);
                } else if (this.isGameOver() === -1) {
                    this.dialogue.addText(`You've passed ${this.course?.getCourseNumber()}!`);
                }
            }

        }

        return this.actionStack.length > 0;
    }

    isGameOver(): number {
        // check if both player and opponent has professors left
        // return 0 if both player and opponent has professors left
        // return 1 if player wins ==> opponent has no professors left
        // return -1 if opponent wins ==> player has no professors left

        if (this.playerActiveProfessorIndex >= this.player.getProfessors().length) {
            return -1;
        } else if (this.opponentActiveProfessorIndex >= this.opponent.getProfessors().length) {
            return 1;
        }

        return 0;
    }

    getRandomNumber(min: number, max: number): number {
        /*
        Returns a random number in the interval [min, max]
        */
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export default Battle;