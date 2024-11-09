interface Action {
    isPlayer: boolean; // player or opponent
    isSwitch: boolean; // switch or attack
    moveIndex: number;
}

export default Action;