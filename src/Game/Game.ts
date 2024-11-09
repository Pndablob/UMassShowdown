class Game {
    private player: Player;
    private opponent: Player;

    getPlayerProfessors() {
        return this.player.getProfessors();
    }

    getOpponentProfessors() {
        return this.opponent.getProfessors();
    }

    constructor(player: Player, opponent: Player) {
        this.player = player;
        this.opponent = opponent;
    }
    
    start() {
        console.log('Game start');
    }
    stop() {
        console.log('Game stop');
    }
}
