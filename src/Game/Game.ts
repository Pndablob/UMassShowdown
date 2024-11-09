import Dialogue from "../Dialogue/Dialogue";

class Game {
    private dialogue: Dialogue;
    private player: Player;
    // private opponent: Player;

    getPlayerProfessors() {
        return this.player.getProfessors();
    }

    updateState() {
        // update state of battle
    }

    // getOpponentProfessors() {
    //     return this.opponent.getProfessors();
    // }

    constructor(dialogue: Dialogue, player: Player, opponentID: number) {
        this.dialogue = dialogue;
        this.player = player;
        
        // construct opponent: Player based on opponent ID

        // call initBattle
    }

    initBattle() {
        // get player professors
        // get opponent professors
        // start battle
    }
}

export default Game;