import {ButtonProps} from "./Button.props";

import s from './Button.module.css';
import cn from "classnames";

export const Button = ({children, appearance, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(s.btn, className, {
                [s.primary]: appearance == 'primary',
                [s.ghost]: appearance == 'ghost'
            })}
            {...props}
        >
            {children}
        </button>
    )
};