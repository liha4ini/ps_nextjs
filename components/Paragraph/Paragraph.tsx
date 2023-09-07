import React from 'react';
import {ParagraphProps} from "./Paragraph.props";

import s from './Paragraph.module.css';
import cn from "classnames";

export const Paragraph = ({size = 'm', children, className, ...props}: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(s.p, className, {
                [s.s]: size == 's',
                [s.m]: size == 'm',
                [s.l]: size == 'l',
            })}
            {...props}
        >
            {children}
        </p>
    );
};

