import React from 'react';

import './index.css';
import {Piece} from '../Piece';

interface Props {
    x: number;
    y: number;
    piece: Nullable<Piece>;
    isActive: boolean;

    onClick(): void;
}

const DARK_MODE_CLASS_NAME = 'board-space';
const CLASS_NAME = 'board-space--dark-mode';

const getClassName = ({x, y}: Props): string => {
    return !!((x % 2) ^ (y % 2))
        ? CLASS_NAME
        : DARK_MODE_CLASS_NAME;
};

const BoardSpace = (props: Props) => {
    const baseClassName = getClassName(props);
    const classNames = [baseClassName];
    if (props.isActive) {
        classNames.push(`${ baseClassName }--active`);
    }

    return (
        <div className={ classNames.join(' ') } onClick={ props.onClick }>
            { props.piece && props.piece.render() }
        </div>
    );
};

export default BoardSpace;
