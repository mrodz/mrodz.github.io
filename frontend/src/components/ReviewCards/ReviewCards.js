import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './ReviewCards.css';

function ReviewCard(props) {
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        if (props?.initial) {
            setFocused(props.initial);
        }
    }, []);

    return (
        <div className={`review-card ${focus === props.id ? 'review-card-visible' : 'review-card-hidden'}`}>
            Yelp #{props.id}
        </div>
    );
}

var focus = 0;

function* generateCards() {
    for (let i = 0; i < 7; i++) {
        yield <ReviewCard key={i} id={i} />
    }
}

function ReviewsTray() {
    const cards = [...generateCards()];
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    
    /**
     * @todo_tomorrow - steal someone else's code for making a tray of cards.
     */

    return (
        <div className='reviews-tray'>
            <button onClick={() => { focus = Math.max(0, focus - 1); forceUpdate() }}>L</button>
            <div className='reviews'>
                {cards}
            </div>
            <button onClick={() => { focus = Math.min(cards.length - 1, focus + 1); forceUpdate() }}>R</button>
        </div>
    );
}

/**
 * @deprecated
 */
function YelpReviews_DEPCRECATED() {
    const [info, setInfo] = useState(null);
    const [reviews, setReviews] = useState(null);

    // will only load once, on component mount.
    useEffect(() => { Axios.get('http://localhost:5000/yelp/restaurant-info').then(e => setReviews(e.data)) }, []);
    useEffect(() => { Axios.get('http://localhost:5000/yelp/restaurant-reviews').then(e => setReviews(e.data)) }, []);

    alert('reviews: ' + JSON.stringify(reviews));
    alert('info: ' + JSON.stringify(info));

    return (
        <span>
            {/* [{JSON.stringify(reviews)}{JSON.stringify(info)}] */}
        </span>
    );
}

export default function ReviewCards() {
    return (
        <div className='review-cards'>
            <div className='reviews-title'>
                What People are Saying About Us:
            </div>
            <ReviewsTray />
        </div>
    );
}