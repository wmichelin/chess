import React from 'react';

import './index.css';
import { Piece } from '../Piece';

interface Props {
    x: number;
    y: number;
    piece: Nullable<Piece>;
}

const DARK_MODE_CLASS_NAME = 'board-space';
const CLASS_NAME = 'board-space--dark-mode';

const getClassName = ({ x, y }: Props): string => {
    return !!((x % 2) ^ (y % 2))
        ? CLASS_NAME
        : DARK_MODE_CLASS_NAME;
};

const BoardSpace = (props: Props) => (
    <div className={ getClassName(props) }>
        { props.piece && props.piece.render() }
    </div>
);

export default BoardSpace;