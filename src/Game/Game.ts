import Dialogue from "../Dialogue/Dialogue";
import Courses from "./Courses";
import Player from "./Player";
import Professor from "./Professor";
import Action from "./Action";

class Game {
    private dialogue: Dialogue;
    private player: Player;
    private opponent: Player;
    private actionQueue: Array<Action> = [];
    private playerActiveProfessor: Professor|undefined;
    private opponentActiveProfessor: Professor|undefined;

    constructor(dialogue: Dialogue, player: Player, courseID: string) {
        this.dialogue = dialogue;
        this.player = player;
        
        // construct opponent Player based on course ID
        // get course based on course ID
        let course = Courses.get(courseID);
        
        // catch nonexistent course
        if (!course) {
            throw new Error(`Course with ID ${courseID} not found`);
        }

        // get professors from course
        let professorsTemplates = course.getProfessors();
        let professors = professorsTemplates.map(professorTemplate => new Professor(professorTemplate));
        this.opponent = new Player(professors, []);

        // start battle by calling initBattle
    }

    public getPlayerProfessors() {
        return this.player.getProfessors();
    }

    public getOpponentProfessors() {
        return this.opponent.getProfessors();
    }

    public getActiveProfessor() {
        return this.playerActiveProfessor;
    }

    public getOpponentActiveProfessor() {
        return this.opponentActiveProfessor;
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
            } else {
                // process opponent action ==> attack player active professor
            }

            return true;
        }

        // no actions left
        return false
    }

    attack(receiver: Player, attacker: Player, move: string) {
        // get attacker active professor
        // get receiver active professor
        // get move from attacker active professor
        // calculate damage = power * attack * critical chance * random modifier
        // apply damage to receiver active professor
    }

    initBattle() {
        // get player professors
        // get opponent professors
        // start battle
    }
}

export default Game;
