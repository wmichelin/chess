type PieceType = 'pawn';
export const PAWN_TYPE: PieceType = 'pawn';

type Team = 'black' | 'white';
const WHITE_TEAM: Team = 'white';
const BLACK_TEAM: Team = 'black';

export class Piece {
    hasMoved: boolean = false;

    x: number = -1;
    y: number = -1;
    team: Team | null = null;

    setTeam(team: Team | null) {
        this.team = team;
        return this;
    }

    setCoordinates(x: number, y: number): Piece {
        this.x = x;
        this.y = y;
        return this;
    }

    canMoveToCoordinate(x: number, y: number): boolean {
        return false;
    }

    render(): string {
        return 'piece';
    }
}

export class Pawn extends Piece {
    render(): string {
        return `${ this.team }pawn`;
    }

    canMoveToCoordinate(x: number, y: number): boolean {
        if (this.x !== x) return false;
        if (this.team === WHITE_TEAM) {
            return y === this.y - 1 || y === this.y - 2
        }
        return y === this.y + 1 || y === this.y + 2;
    }
}

export const getPieceOfType = (type: PieceType): Piece => new Pawn();
