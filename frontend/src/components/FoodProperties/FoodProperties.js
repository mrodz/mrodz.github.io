// HUGE thanks to https://uxwing.com/ for the free icons!
import glutenFree from './gluten-free.png';
import vegan from './vegan.png';
import starred from './stars-color.png'

import './FoodProperties.css';
import Tooltip from '../Tooltip/Tooltip';

function buildImage(imgTag, tooltipText, count) {
    return (
        <Tooltip key={count} text={tooltipText}>
            <div className='food-properties-bubble'>
                {imgTag}
            </div>
        </Tooltip>
    );
}

function FoodProperties(props) {
    let images = [];
    let count = 0;
    if (props?.vegan) 
        images.push(buildImage(<img src={vegan} alt='vegan' />, 'Vegetarian Option', count++));
    if (props?.glutenFree)
        images.push(buildImage(<img src={glutenFree} alt='gluten free' />, 'Gluten Free Option', count++));
    if (props?.starred)
        images.push(buildImage(<img src={starred} alt='favorite dish' />, 'Signature Dish', count++));

    return <div className='food-properties'>{images}</div>
}

export default FoodProperties;