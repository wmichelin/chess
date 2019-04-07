import React from 'react';

import BoardSpace from '../BoardSpace';

interface Props {
    rows: number;
    columns: number;
}

class Board extends React.Component<Props> {
    getBoard() {
        const board = [];
        for (let x = 0; x < this.props.columns; x++) {
            const row = [];
            for (let y = 0; y < this.props.rows; y++) {
                row.push(<BoardSpace x={ x } y={ y } key={ `${ x }-${ y }` }>{ `(${ x },${ y })` }</BoardSpace>);
            }
            board.push(row);
        }

        return board;
    }

    render() {
        return (
            <React.Fragment>
                {
                     this.getBoard().map(row => (
                        <div style={ { 'display': 'inline-block' } }>{ row }</div>
                     ))
                }
            </React.Fragment>
        );
    }
}

export default Board;