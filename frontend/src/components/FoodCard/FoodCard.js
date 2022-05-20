import FoodProperties from '../FoodProperties/FoodProperties';
import './FoodCard.css';
import '../../medias.css';
import React, { useState } from 'react';

function FoodCard(props) {
    const [isFocused, setFocused] = useState(false);

    const enterModal = () => {
        setFocused(true);
    }

    const exitModal = event => {
        if (event.target === event.currentTarget) {
            setFocused(false);
        }
    }

    return (
        <React.Fragment>
            <div className={`food-card ${isFocused ? 'bg-b' : 'bg-r'}`} onMouseDown={enterModal}>
                <div>
                    <div data-food-card-item-name>{props.item?.itemName}</div>
                    <div>{props.item?.options.map((e, index) => <div key={index}>{e?.label} for {e?.price}</div>)}</div>
                </div>
                <div>
                    <div>{props.item?.itemDescription}</div>
                    <FoodProperties vegan={props.item?.vegan} glutenFree={props.item?.glutenFree} starred={props.item?.starred} />
                </div>
            </div>
            <div className='food-card-expanded' data-is-focused={isFocused} onMouseDown={exitModal}>
                Lorem Ipsum Dolor Sit Amet
            </div>
        </React.Fragment>
    );
}

export default FoodCard;