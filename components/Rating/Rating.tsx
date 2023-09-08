'use client'

import {RatingProps} from "./Rating.props";

import s from './Rating.module.css';
import cn from "classnames";
import {useEffect, useState} from "react";

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
                        [s.filled]: i < currentRating
                    })}
                />
            )
        })
        setRatingArray(updateArray)
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};