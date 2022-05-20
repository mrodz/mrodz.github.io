import { Link } from "react-router-dom";
import { useState } from "react";
import Map from "../components/Map/Map";

// @ts-ignore
import Tooltip from "../components/Tooltip/Tooltip.tsx";
// @ts-ignore
import ReviewCards from "../components/ReviewCards/ReviewCards.tsx";

import './HomePage.css';
import '../medias.css';

interface LandingButtonProps {
    /**
     * The text in the tooltip that will show when hovered.
     */
    text: string,
    /**
     * The URL that the button will redirect to.
     */
    to: string,
    /**
     * Set an HTML ID to this element.
     */
    id?: string,
    /**
     * Add inline styles to the exterior link.
     */
    rootStyle?: React.CSSProperties,
    /**
     * Add inline styles to the content inside the tooltip.
     */
    style?: React.CSSProperties,
    /**
     * Required; it is the child elements.
     */
    children?: React.ReactNode
}

function LandingButton(props: LandingButtonProps): JSX.Element {
    const [hovering, setHovering] = useState(false);
    return (
        <Tooltip top={false} text={props.text}
            as={<Link to={props.to} className="reset-link" style={props?.rootStyle !== undefined ? props.rootStyle : {}}/>}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={props?.style !== undefined ? props.style : {}}>
            <div className={`landing-button${hovering ? ' landing-button-selected' : ''}`} id={props?.id !== undefined ? props.id : ''}>
                <span>
                    {props?.children}
                </span>
            </div>
        </Tooltip>
    );
}

function TopSection(): JSX.Element {
    return (
        <section className="landing-top-wrapper">
            <div className="landing-description">
                Open for indoor dining, take out, and delivery.
            </div>
            <nav className="landing-options">
                <LandingButton to='/menu' text='Click to view our latest menu' id="landing-menu" rootStyle={{ marginRight: '1rem', marginLeft: 'auto'}}>Our Menu</LandingButton>
                <LandingButton to='/delivery' text='Click for more info about deliveries' id="landing-delivery" rootStyle={{ marginLeft: 'auto', marginRight: 'auto'}}>Delivery Information</LandingButton>
                <LandingButton to='/hours' text='Click for our hours of operations' id="landing-hours" rootStyle={{ marginLeft: '1rem', marginRight: 'auto'}}>Our Hours</LandingButton>
            </nav>
        </section>
    );
}

function AboutUsSection(): JSX.Element {
    return (
        <section className="landing-middle-wrapper">
            <div className="about-us">
                <div className="about-us-welcome">Welcome to Compari's</div>
                <div className="about-us-info">
                    <p>
                        Here, we believe <i>Chi Mangia Bene, Vive Bene</i>&nbsp;&mdash;&nbsp;&quot;Those who eat well, live well.&quot;
                        We prepare all of our dishes with a passion to uphold this Italian saying, and hold ourselves the highest of
                        standards when it comes to sharing our native cuisine.
                    </p>
                    <p>
                        Our restaurant was established in 1960, and we've been operating that very kitchen ever since.
                        Our specialty is authentic food from Northern Italy; we take great pleasure in
                        providing an outstanding dining experience that seeks to immerse all who visit in the rich flavors of the region.
                    </p>
                    <p>
                        Our regular customers particularly value our fresh ingredients, quaint and cozy atmosphere, and friendly service.
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        <i>Grazie</i>, and we hope to serve you soon!
                    </p>
                </div>
            </div>
        </section>
    );
}

function ReviewsAndMapSection(): JSX.Element {
    return (
        <section className="landing-reviews-map">
            <div className="reviews-map-splitter">
                <div className="map-section-wrapper">
                    <Map />
                </div>
                <ReviewCards />
            </div>
        </section>
    );
}

export default function HomePage(): JSX.Element {
    return (
        <div className="landing-wrapper-all" id="">
            <TopSection />
            <AboutUsSection />
            <ReviewsAndMapSection />
        </div>

    );
}