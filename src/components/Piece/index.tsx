enum PieceType {
    PAWN = 'PAWN',
}

export class Piece {
    render(): string {
        return 'piece';
    }
}

class Pawn extends Piece {
    render(): string {
        return 'pawn';
    }
}

export const getPiece = (): Piece => new Pawn();
