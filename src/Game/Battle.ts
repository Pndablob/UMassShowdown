import Dialogue from "../Dialogue/Dialogue";
import Courses from "./Courses";
import Player from "./Player";
import Professor from "./Professor";
import ProfessorTemplate from './ProfessorTemplate';
import Action from "./Action";
import Course from "./Course";

class Battle {
    private dialogue: Dialogue;
    private course: Course | undefined;
    private player: Player;
    private opponent: Player;
    private actionStack: Action[] = [];
    private playerActiveProfessorIndex: number = 0;
    private opponentActiveProfessorIndex: number = 0;
    private gameOver: number = 0; // 0 if game is still ongoing, 1 if player wins, -1 if opponent wins

    constructor(dialogue: Dialogue, playerTeam: ProfessorTemplate[], courseID: string) {
        this.dialogue = dialogue;
        
        this.course = Courses.get(courseID);
        if (!this.course) { // catch nonexistent courses
            throw new Error(`Course with ID ${courseID} not found`);
        }

        // get opponent professors from course
        let professorsTemplates = this.course.getProfessors();
        let professors = professorsTemplates.map(professorTemplate => new Professor(professorTemplate));
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
            isSwitch: false,
            moveIndex: this.getRandomNumber(0, this.opponent.getProfessors()[0].getMoves().length - 1)
        });

        // randomly shuffle actionStack
        this.actionStack.sort(() => Math.random() - 0.5);

        return this.gameLoop()
    }

    public gameLoop(): boolean {
        // check if there's any actions left
        // if there's actions left, update state of battle
        // return true if there's actions left

        if (this.actionStack.length > 0 && !this.gameOver) {
            let action = this.actionStack.pop();

            if (action && action.isSwitch) {
                // process player switch action
                if (action.isPlayer) {
                    this.playerActiveProfessorIndex += 1;
                    this.dialogue.addText(`You sent out <b>${this.getActiveProfessor().getName()}</b>`);
                } else {
                    this.opponentActiveProfessorIndex += 1;
                    this.dialogue.addText(`Opponent switched to ${this.getOpponentActiveProfessor().getName()}`);
                }
            } else if (action && action.isPlayer) {
                // process player action ==> attack opponent active professor
                let playerActiveProfessor = this.player.getProfessors()[this.playerActiveProfessorIndex];
                let opponentActiveProfessor = this.opponent.getProfessors()[this.opponentActiveProfessorIndex];
                let move = playerActiveProfessor.getMoves()[action.moveIndex];
                playerActiveProfessor.attackOpponent(opponentActiveProfessor, move);

                this.dialogue.addText(`${playerActiveProfessor.getName()} used ${move.name}!`);

                // check if opponent professor is defeated and switch to next professor
                if (opponentActiveProfessor.getHealth() <= 0) {
                    // remove defeated professor action from stack
                    this.actionStack.pop();

                    this.actionStack.push({
                        isPlayer: false,
                        isSwitch: true,
                        moveIndex: -1
                    });

                    this.dialogue.addText(`${opponentActiveProfessor.getName()} fainted!`);
                }
            } else if (action) {
                // process opponent action ==> attack player active professor
                let opponentActiveProfessor = this.opponent.getProfessors()[this.opponentActiveProfessorIndex];
                let playerActiveProfessor = this.player.getProfessors()[this.playerActiveProfessorIndex];
                let move = opponentActiveProfessor.getMoves()[action.moveIndex];
                opponentActiveProfessor.attackOpponent(playerActiveProfessor, move);

                this.dialogue.addText(`${opponentActiveProfessor.getName()} used ${move.name}!`);

                // check if player professor is defeated and switch to next professor
                if (playerActiveProfessor.getHealth() <= 0) {
                    // remove defeated professor action from stack
                    this.actionStack.pop()

                    this.actionStack.push({
                        isPlayer: true,
                        isSwitch: true,
                        moveIndex: -1
                    });

                    this.dialogue.addText(`${playerActiveProfessor.getName()} fainted!`);
                }
            }
        }

        this.gameOver = this.isGameOver();

        // return whether there are actions left regardless of game over
        return this.actionStack.length > 0;

        // UI should check for:
        // - game over
        // - dialogue
        // - state of active professors (player and opponent)
    }

    isGameOver(): number {
        // check if both player and opponent has professors left
        // return 0 if both player and opponent has professors left
        // return 1 if player wins ==> opponent has no professors left
        // return -1 if opponent wins ==> player has no professors left

        if (this.playerActiveProfessorIndex >= this.player.getProfessors().length) {
            this.dialogue.addText(`You've failed ${this.course?.getCourseNumber} You've been expelled from CICS, try Isenberg instead!`);
            return -1;
        } else if (this.opponentActiveProfessorIndex >= this.opponent.getProfessors().length) {
            this.dialogue.addText("You've defeated all the professors! You've graduated from CICS! Congratulations!");
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
