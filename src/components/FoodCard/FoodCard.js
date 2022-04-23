import FoodProperties from '../FoodProperties/FoodProperties';
import './FoodCard.css';
import '../../medias.css';

function FoodCard(props) {
    // style={{ animation: `fade-in-card .6s ${.3 * props.index}s forwards` }}
    return (
        <div className='food-card'>
            <div>
                <div className='food-card-item-name'>{props.item?.itemName}</div>
                <div>{props.item?.options.map((e, index) => <div key={index}>{e?.label} for {e?.price}</div>)}</div>
            </div>
            <div>
                <div>{props.item?.itemDescription}</div>
                <FoodProperties vegan={props.item?.vegan} glutenFree={props.item?.glutenFree} starred={props.item?.starred} />
            </div>
        </div>
    );
}

export default FoodCard;