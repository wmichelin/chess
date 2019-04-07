import React from 'react';
import './index.css';

interface Props {
    children?: React.ReactChildren | string;
    x: number;
    y: number;
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
        { props.children }
    </div>
);

export default BoardSpace;