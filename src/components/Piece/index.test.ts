import { Pawn } from "./index";

it('white pawn can move upwards up to two spaces', () => {
    const whitePawn = new Pawn().setCoordinates(9, 9).setTeam('white');
    expect(whitePawn.canMoveToCoordinate(9, 8)).toBe(true);
    expect(whitePawn.canMoveToCoordinate(9, 7)).toBe(true);
    expect(whitePawn.canMoveToCoordinate(9, 6)).toBe(false);
});

it('white pawn cant move down', () => {
    const whitePawn = new Pawn().setCoordinates(9, 0).setTeam('white');
    expect(whitePawn.canMoveToCoordinate(9, 1)).toBe(false);
    expect(whitePawn.canMoveToCoordinate(9, 2)).toBe(false);
});

it('black pawn can move downwards up to two spaces', () => {
    const blackPawn = new Pawn().setCoordinates(0, 0).setTeam('black');
    expect(blackPawn.canMoveToCoordinate(0, 1)).toBe(true);
    expect(blackPawn.canMoveToCoordinate(0, 2)).toBe(true);
    expect(blackPawn.canMoveToCoordinate(0, 3)).toBe(false);

    const blackPawn2 = new Pawn().setCoordinates(9, 1).setTeam('black');
    expect(blackPawn2.canMoveToCoordinate(9, 2)).toBe(true);
    expect(blackPawn2.canMoveToCoordinate(9, 3)).toBe(true);
    expect(blackPawn2.canMoveToCoordinate(9, 4)).toBe(false);
});

it('black pawn cant move up', () => {
    const blackPawn = new Pawn().setCoordinates(0, 2).setTeam('black');
    expect(blackPawn.canMoveToCoordinate(0, 1)).toBe(false);
    expect(blackPawn.canMoveToCoordinate(0, 0)).toBe(false);
});


it('pawns cant move sideways', () => {
    const whitePawn = new Pawn().setCoordinates(8, 8).setTeam('white');
    expect(whitePawn.canMoveToCoordinate(9, 8)).toBe(false);
    expect(whitePawn.canMoveToCoordinate(7, 8)).toBe(false);

    const blackPawn = new Pawn().setCoordinates(2, 0).setTeam('black');
    expect(blackPawn.canMoveToCoordinate(1, 0)).toBe(false);
    expect(blackPawn.canMoveToCoordinate(3, 0)).toBe(false);
});

it('pawns cant move to own space', () => {
    const whitePawn = new Pawn().setCoordinates(8, 8).setTeam('white');
    expect(whitePawn.canMoveToCoordinate(8, 8)).toBe(false);

    const blackPawn = new Pawn().setCoordinates(2, 0).setTeam('black');
    expect(blackPawn.canMoveToCoordinate(2, 0)).toBe(false);
});
