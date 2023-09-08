'use client'

import {useEffect, useState, KeyboardEvent} from "react";
import {RatingProps} from "./Rating.props";

import s from './Rating.module.css';
import cn from "classnames";
import Star from '/public/Star.svg';

export const Rating = ({rating, setRating, isEditable = false, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r, i) => {
            return (
                <Star
                    key={i}
                    className={cn(s.star, {
                        [s.filled]: i < currentRating,
                        [s.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => handleSetRating(i + 1)}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                />
            )
        })
        setRatingArray(updateArray)
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return
        }
        constructRating(i)
    }

    const handleSetRating = (i: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(i)
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code != 'Space' || !setRating) {
            return
        }
        setRating(i)
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};