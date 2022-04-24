import Axios from 'axios';
import './ReviewCards.css';

const key = require('../../API_SECRET.json');

async function ReviewCard() {
    try {
        const response = await Axios.get('https://api.yelp.com/v3/businesses/comparis-los-angeles');
        console.log(response);
        return (
            <></>
            // <span>{JSON.stringify(response)}</span>
        );
    } catch (error) {
        console.log(error.response);
    }
    // return (
    //     <div className='review-card'>
            
    //     </div>
    // );
}

export default function ReviewCards() {
    return (
        <div className='review-cards'>
            <ReviewCard />
            Test
        </div>
    );
}