import { useState } from 'react';
import './Map.css';

const key = require('./API_SECRET.json'); // hidden in .gitignore

export default function Map() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className='map-wrapper'>
            <div className='map-title'>
                Visit Us
            </div>
            <iframe
                className={`map ${!loaded ? 'map-loading' : ''}`}
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${key.key}&q=Compari's+Trattoria+Pizzeria,Westchester+CA&zoom=17`}
                allowFullScreen
                onLoad={() => setLoaded(true)}>
            </iframe>
        </div>
    );
}