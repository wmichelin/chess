import React from 'react';

import BoardSpace from '../BoardSpace';
import {
    Piece,
    getPiece
} from '../Piece';
import './index.css';

type BoardState = { [k: string]: Piece; }

interface Props {
    rows: number;
    columns: number;
}

const CLASSNAME = 'board__column';

class Board extends React.Component<Props> {
    pieces: BoardState;

    constructor(props: Props) {
        super(props);

        this.pieces = {
            [this.getCoordinateKey(0, 1)]: getPiece(),
            [this.getCoordinateKey(1, 1)]: getPiece(),
        };
    }

    getCoordinateKey(x: number, y: number): string {
        return `[${ x }, ${ y }]`;
    }

    getPiece(x: number, y: number): Nullable<Piece> {
        return this.pieces[this.getCoordinateKey(x, y)] || null;
    }

    getBoard() {
        const board = [];
        for (let x = 0; x < this.props.columns; x++) {
            const row = [];
            for (let y = 0; y < this.props.rows; y++) {
                row.push(
                    <BoardSpace
                        key={ this.getCoordinateKey(x, y) }
                        x={ x }
                        y={ y }
                        piece={ this.getPiece(x, y) }
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