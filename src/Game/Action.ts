export enum ActionType {
    ATTACK,
    SWITCH,
    GAMEOVER
}

interface Action {
    isPlayer: boolean; // player or opponent
    type: ActionType;
    moveIndex: number;
}

export default Action;