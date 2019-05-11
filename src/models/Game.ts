import {
    Piece,
    getPieceOfType,
    PAWN_TYPE,
} from "../components/Piece";

type CoordinateKey = string;
type BoardState = { [ key: string]: Piece };

export class Game {
    boardState: BoardState;
    activePiece: Nullable<Piece> = null;

    constructor() {
        this.boardState = this.getInitialBoardState();
    }

    setActivePiece(x: number, y: number): Piece | null {
        const piece = this.getPiece(x, y);
        this.activePiece = piece || null;
        return this.getActivePiece();
    }

    getActivePiece() {
        return this.activePiece;
    }

    getCoordinateKey(x: number, y: number): CoordinateKey {
        return `[${ x }, ${ y }]`;
    }

    getInitialBoardState(): BoardState {
        return {};
    }

    getRows(): number {
        return 10;
    }

    getColumns(): number {
        return 10;
    }

    getPiece(x: number, y: number): Nullable<Piece> {
        return this.getPieceByCoordinateKey(this.getCoordinateKey(x, y));
    }

    getPieceByCoordinateKey(key: CoordinateKey): Nullable<Piece> {
        return this.boardState[key] || null;
    }

    isValidDest(x: number, y: number): boolean {
        return !!this.activePiece && this.activePiece.canMoveToCoordinate(x, y);
    }
}

class GridGame extends Game {}

class Chess extends GridGame {
    getInitialBoardState(): BoardState {
        return {
            [this.getCoordinateKey(0, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(0, 8).setTeam('white'),
            [this.getCoordinateKey(1, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(1, 8).setTeam('white'),
            [this.getCoordinateKey(2, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(2, 8).setTeam('white'),
            [this.getCoordinateKey(3, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(3, 8).setTeam('white'),
            [this.getCoordinateKey(4, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(4, 8).setTeam('white'),
            [this.getCoordinateKey(5, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(5, 8).setTeam('white'),
            [this.getCoordinateKey(6, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(6, 8).setTeam('white'),
            [this.getCoordinateKey(7, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(7, 8).setTeam('white'),
            [this.getCoordinateKey(8, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(8, 8).setTeam('white'),
            [this.getCoordinateKey(9, 8)]: getPieceOfType(PAWN_TYPE).setCoordinates(9, 8).setTeam('white'),
            [this.getCoordinateKey(0, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(0, 1).setTeam('black'),
            [this.getCoordinateKey(1, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(1, 1).setTeam('black'),
            [this.getCoordinateKey(2, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(2, 1).setTeam('black'),
            [this.getCoordinateKey(3, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(3, 1).setTeam('black'),
            [this.getCoordinateKey(4, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(4, 1).setTeam('black'),
            [this.getCoordinateKey(5, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(5, 1).setTeam('black'),
            [this.getCoordinateKey(6, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(6, 1).setTeam('black'),
            [this.getCoordinateKey(7, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(7, 1).setTeam('black'),
            [this.getCoordinateKey(8, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(8, 1).setTeam('black'),
            [this.getCoordinateKey(9, 1)]: getPieceOfType(PAWN_TYPE).setCoordinates(9, 1).setTeam('black'),
        }
    }
}

export type GameType = 'chess';
export const CHESS_TYPE: GameType = 'chess';

export function getGame(gameType: GameType): Game {
    return new Chess();
}
