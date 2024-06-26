"use state"
import React from 'react'

interface RatingProps {
    rating: number
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    return (
        <div className="rating max-md:rating-xs rating-sm">
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value={1}
                checked={rating === 1}
                onChange={(e) => console.log(e.target.value)}

            />
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value={2}
                checked={rating === 2}
                onChange={(e) => console.log(e.target.value)}

            />
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value={3}
                checked={rating === 3}
                onChange={(e) => console.log(e.target.value)}

            />
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value={4}
                checked={rating === 4}
                onChange={(e) => console.log(e.target.value)}
            />
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value={5}
                checked={rating === 5}
                onChange={(e) => console.log(e.target.value)}
            />
        </div>
    )
}

export default Rating