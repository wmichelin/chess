import React from 'react';

import BoardSpace from '../BoardSpace';
import {
    Piece,
} from '../Piece';
import './index.css';
import {
    Game,
    getGame,
    GameType,
} from "../../models/Game";


type BoardState = { [k: string]: Piece; }

interface Props {
    gameType: GameType;
}

const CLASSNAME = 'board__column';

interface ComponentState {
    activePiece: Piece | null;
}

class Board extends React.Component<Props, ComponentState> {
    game: Game;
    rows: number;
    columns: number;

    constructor(props: Props) {
        super(props);
        this.game = getGame(this.props.gameType);
        this.rows = this.game.getRows();
        this.columns = this.game.getColumns();

        this.state = {
            activePiece: this.game.getActivePiece(),
        };
    }

    onSpaceClicked = (x: number, y: number) => {
        this.game.setActivePiece(x, y);
        this.setState({
            activePiece: this.game.getActivePiece(),
        });
    };

    getBoard() {
        const board = [];
        for (let x = 0; x < this.columns; x++) {
            const row = [];
            for (let y = 0; y < this.rows; y++) {
                row.push(
                    <BoardSpace
                        key={ this.game.getCoordinateKey(x, y) }
                        x={ x }
                        y={ y }
                        piece={ this.game.getPiece(x, y) }
                        isActive={ this.game.isValidDest(x, y) }
                        onClick={ () => this.onSpaceClicked(x, y) }
                    />
                );
            }
            board.push(row);
        }

        return board;
    }

    render() {
        return (
            <React.Fragment>
                {
                     this.getBoard().map((row, idx) => (
                        <div
                            key={ idx }
                            className={ CLASSNAME }
                        >
                            { row }
                        </div>
                     ))
                }
            </React.Fragment>
        );
    }
}

export default Board;
