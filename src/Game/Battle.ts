import Dialogue from "../Dialogue/Dialogue";
import Courses from "./Courses";
import Player from "./Player";
import Professor from "./Professor";
import ProfessorTemplate from './ProfessorTemplate';
import Action from "./Action";

class Battle {
    private dialogue: Dialogue;
    private player: Player;
    private opponent: Player;
    private actionQueue: Array<Action> = [];
    private playerActiveProfessor: Professor|undefined;
    private opponentActiveProfessor: Professor|undefined;
    private gameOver: number = 0; // 0 if game is still ongoing, 1 if player wins, -1 if opponent wins

    constructor(dialogue: Dialogue, playerTeam: ProfessorTemplate[], courseID: string) {
        this.dialogue = dialogue;
        
        // construct opponent Player based on course ID
        // get course based on course ID
        let course = Courses.get(courseID);
        
        // catch nonexistent course
        if (!course) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        // get opponent professors from course
        let professorsTemplates = course.getProfessors();
        let professors = professorsTemplates.map(professorTemplate => new Professor(professorTemplate));
        this.opponent = new Player(professors);
        this.opponentActiveProfessor = this.opponent.getProfessors()[0];

        // get player professors from Player
        let playerProfessorTemplates: ProfessorTemplate[] = playerTeam;
        let playerProfessors: Professor[] = playerProfessorTemplates.map(professorsTemplate => new Professor(professorsTemplate));
        this.player = new Player(playerProfessors);
        this.playerActiveProfessor = this.player.getProfessors()[0];
    }

    public getPlayerProfessors() {
        return this.player.getProfessors();
    }

    public getOpponentProfessors(): Professor[] {
        return this.opponent.getProfessors();
    }

    public getActiveProfessor(): Professor|undefined {
        return this.player.getProfessors()[0]
    }

    public getOpponentActiveProfessor(): Professor|undefined {
        return this.opponent.getProfessors()[0]
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

        // actionQueue assumed to be empty at the start of each Battle
        
        // add given player action to queue
        this.actionQueue.push(action);

        // add opponent action to queue
        this.actionQueue.push({
            isPlayer: false,
            moveIndex: this.getRandomNumber(0, this.opponent.getProfessors()[0].getMoves().length - 1)
        });

        // randomly shuffle actionqueue
        this.actionQueue.sort(() => Math.random() - 0.5);

        return this.updateState()
    }

    public updateState(): boolean {
        // check if there's any actions left
        // if there's actions left, update state of battle
        // return true if there's actions left

        if (this.actionQueue.length != 0) {
            let action = this.actionQueue.shift();
            if (action && action.isPlayer) {
                // process player action ==> attack opponent active professor
                if (this.playerActiveProfessor && this.opponentActiveProfessor) {
                    this.playerActiveProfessor.attackOpponent(this.opponentActiveProfessor, this.playerActiveProfessor.getMoves()[action.moveIndex]);
                }
            } else if (action) {
                // process opponent action ==> attack player active professor
                if (this.playerActiveProfessor && this.opponentActiveProfessor) {
                    this.opponentActiveProfessor.attackOpponent(this.playerActiveProfessor, this.opponentActiveProfessor.getMoves()[action.moveIndex]);
                }
            }

            this.gameOver = this.isGameOver();

            return true;
        }

        this.gameOver = this.isGameOver();

        // no actions left
        return false

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

        if (this.player.getProfessors().length == 0) {
            return -1;
        } else if (this.opponent.getProfessors().length == 0) {
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
