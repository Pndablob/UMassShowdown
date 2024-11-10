import Battle from "../Battle";
import Professor from "../Professor";

let move = {
    name: "Sleep",
    power: 0,
    critChance: 0,
    critMultiplier: 1,
    callback: function (player: Professor, opponent: Professor) {
        player.heal(50);
    }
}

export default move;