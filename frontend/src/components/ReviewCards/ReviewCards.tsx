import React, { FC } from 'react';
import './ReviewCards.css';
import '../../index.d.ts';
import '../FoodProperties/stars-color.png';
import { star } from '../FoodProperties/FoodProperties';

interface ReviewCardProps {
    id: string,
    review: ReviewTemplate,
    pfp: React.ReactNode,
    children?: React.ReactNode,
}

interface ReviewTemplate {
    username: string,
    rating: number,
    description: string,
    origin?: string
}

function* buildStars(count: number) {
    for (let i = 0; i < count; i++) {
        yield <img src={star} alt={'\u2605'} style={{ width: '1.2rem', height: '1.2rem' }}/>
    }
}

const ReviewCard: FC<ReviewCardProps> = (props) => {
    var bgClass;
    
    if (props.review?.origin.match(/yelp/g) !== null) {
        bgClass = 'yelp-styling';
    } else if (props.review?.origin.match(/tripadvisor/g) !== null) {
        bgClass = 'tripadvisor-styling';
    } else {
        console.log('no default styling provided for component \'ReviewCard\' (ReviewCard.tsx:26)');
    }

    return (
        <div className={`review-card ${bgClass}`} id={props.id}>
            <div className='review-metadata'>
                {props.pfp}
                <div>
                    <div className='review-username'>{props.review?.username}</div>
                    <div className='review-stars'>{[...buildStars(props.review?.rating)]}</div>
                </div>
            </div>
            <div className='review-content'>
                {props.children}
            </div>
        </div>
    );
}



const reviews: ReviewTemplate[] = [
    {
        username: 'Faith T.',
        rating: 5,
        description: 'The cutest little mom and pop Italian spot',
        origin: 'https://www.yelp.com/biz/comparis-los-angeles?hrid=k2_vU4CRDodHW0DWjW8K-Q&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)'
    },
    {
        username: 'TRWagner',
        rating: 5,
        description: 'The food\'s the same as it was 40 years ago: fantastic.',
        origin: 'https://www.tripadvisor.com/ShowUserReviews-g32655-d358091-r545551723-Compari_s_Pizza_Italian-Los_Angeles_California.html'
    },
    {
        username: 'Stephanie B.',
        rating: 5,
        description: 'I have never felt something so real and tasted anything so good.\nIt\'s perfect for a date or hanging out with friends.',
        origin: 'https://www.yelp.com/biz/comparis-los-angeles?hrid=YpS8E1VyJJySTWYx78-tUQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)'
    },
    {
        username: 'Nina G.',
        rating: 5,
        description: 'It\'s a Hidden Gem of City of Angeles.',
        origin: 'https://www.yelp.com/biz/comparis-los-angeles?hrid=w9x1EQy2S9_RG3hSnjuR6Q&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)'
    },
    {
        username: 'Fred E.',
        rating: 4,
        description: 'Name a better spot.... I\'ll wait!',
        origin: 'https://www.yelp.com/biz/comparis-los-angeles?hrid=XVV01LdsqR-FuIqUsD6Kzw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)'
    },
    {
        username: 'ibaol',
        rating: 4,
        description: 'The service is good and the owners are friendly and welcoming. Great pizza and pasta. Excellent value for your money.',
        origin: 'https://www.tripadvisor.com/ShowUserReviews-g32655-d358091-r124269235-Compari_s_Pizza_Italian-Los_Angeles_California.html'
    }
];

function* generateCards() {
    for (let i = 1; i <= reviews.length; i++) {
        let id = `card-${i}`;
        let review = reviews[i - 1];
        
        yield {
            card: (
                <ReviewCard key={i} id={id} review={review} pfp={<img src="data:image/jpeg;base64,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"></img>}>
                    {review?.description}
                </ReviewCard>
            ),
            link: <a href={'#' + id} className='reviews-tray-link'>{i}</a>
        }
    }
}

function ReviewsTray() {
    const cards = [...generateCards()];

    /**
     * @todo_tomorrow - steal someone else's code for making a tray of cards.
     */

    return (
        <div className='reviews-tray'>
            <div className='review-slides'>
                {cards.map(e => e.card)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='reviews-tray-link-wrapper'>
                    {cards.map(e => e.link)}
                </div>
            </div>
        </div>
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