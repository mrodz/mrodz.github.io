import React, { FC } from 'react';
import './ReviewCards.css';
import '../../index.d.ts';
import '../FoodProperties/stars-color.png';
import { star, emptyStar } from '../FoodProperties/FoodProperties';

interface ReviewCardProps {
    id: string,
    review: ReviewTemplate,
    children?: React.ReactNode
}

interface ProfileColor {
    r: number,
    g: number,
    b: number
}

interface ReviewTemplate {
    username: string,
    rating: number,
    description: string,
    origin?: string,
    profileColor: ProfileColor,
    date: string
}

function* generateStars(count: number) {
    for (let i = 0; i < 5; i++) {
        yield <img src={i < count ? star : emptyStar} alt={i < count ? '\u2605' : ''} style={{ width: '1.2rem', height: '1.2rem' }} />
    }
}

const ReviewCard: FC<ReviewCardProps> = (props) => {
    var bgClass: string[];

    if (props.review?.origin.match(/yelp/gi) !== null) {
        bgClass = ['yelp-styling', 'yelp-bg'];
    } else if (props.review?.origin.match(/tripadvisor/gi) !== null) {
        bgClass = ['tripadvisor-styling', 'tripadvisor-bg'];
    } else {
        console.log('no default styling provided for component \'ReviewCard\' (ReviewCard.tsx:26)');
    }

    const clearHTTP = /(^(https?:\/\/)(w{3})?\.)/;
    const clearParams = /(\/.*)/;

    return (
        <div className={`review-card ${bgClass[0]}`}>
            <a href={props.review.origin} target='_blank' rel='noopener noreferrer' className='review-outside-link'>
                <div className='review-card-top-wrapper'>
                    <div className='review-metadata'>
                        <ProfilePicture review={props?.review} />
                        <div className='review-metadata-info' id={props.id}>
                            <div className='review-username'>{props.review?.username}</div>
                            <div className='review-stars'>{[...generateStars(props.review?.rating)].map((e, i) => <React.Fragment key={i}>{e}</React.Fragment>)}</div>

                        </div>
                    </div>
                    <div className='review-content'>
                        <i>&quot;{props.children}&quot;</i>
                    </div>
                    <div className='review-content' style={{ marginTop: '1rem' }}>
                        - {props.review.date}
                    </div>
                </div>
                <div className='review-card-bottom-wrapper'>
                    <div className={`review-card-bottom-line ${bgClass[1]}`}></div>
                    <div style={{ width: 'fit-content' }}>
                        From {props?.review?.origin.replace(clearHTTP, '').replace(clearParams, '')}
                    </div>
                </div>
            </a>
        </div>
    );
}

function padZero(hex: string | number): string {
    if (typeof hex === 'number') {
        hex = '' + hex;
    }

    if (hex.length === 2) return hex;
    return '0' + hex;
}

function invertColor(hex: string, bw: boolean): string {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }

    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    if (hex.length !== 6) {
        throw new Error('Invalid HEX color -> ' + hex);
    }

    var [r, g, b] = [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];

    if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }

    // invert color components, pad each with zeros and return
    return rgbToHex(255 - r, 255 - g, 255 - g);
}

function rgbToHex(r: number, g: number, b: number): string {
    return "#" + padZero(r.toString(16)) + padZero(g.toString(16)) + padZero(b.toString(16));
}

const reviews: ReviewTemplate[] = require('./reviews.json');

const ProfilePicture: FC<{ review: ReviewTemplate }> = (props) => {
    const username = props.review.username;

    let names: string[] = username.split(/\s+/g);
    let combined: string;

    if (username === null || username === undefined || username === '') {
        combined = "N/A"
    } else {
        combined = names.length === 1
            ? names[0].length > 1
                ? names[0].substring(0, 2)
                : names[0].charAt(0)
            : names.reduce((prevName, name) => prevName.charAt(0) + name.charAt(0), '');
    }
    const { r, g, b } = { ...props.review.profileColor };
    const asHex = rgbToHex(r, g, b);

    return (
        <div className='review-pfp' style={{ background: asHex, color: invertColor(asHex, true) }}>
            <div>
                {combined.toLocaleUpperCase()}
            </div>
        </div>
    );
};

function* generateCards() {
    for (let i = 1; i <= reviews.length; i++) {
        let id = `card-${i}`;
        let review = reviews[i - 1];
        yield {
            card: (
                <ReviewCard key={i} id={id} review={review}>
                    {review?.description}
                </ReviewCard>
            ),
            link: <a href={'#' + id} className='reviews-tray-link'>{i}</a>
        }
    }
}

function ReviewsTray(): JSX.Element {
    const cards = [...generateCards()];

    return (
        <div className='reviews-tray'>
            <div className='review-slides'>
                {cards.map((e, i) => <React.Fragment key={i}>{e.card}</React.Fragment>)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='reviews-tray-link-wrapper'>
                    {cards.map((e, i) => <React.Fragment key={i}>{e.link}</React.Fragment>)}
                </div>
            </div>
        </div>
    );
}

export default function ReviewCards(): JSX.Element {
    return (
        <div className='review-cards'>
            <div className='reviews-title'>
                What People are Saying About Us:
            </div>
            <ReviewsTray />
        </div>
    );
}