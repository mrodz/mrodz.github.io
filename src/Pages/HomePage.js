import { Link } from "react-router-dom";
import { useState } from "react";
import Map from "../components/Map/Map";
import Tooltip from "../components/Tooltip/Tooltip";
import './HomePage.css';
import '../medias.css';

function LandingButton(props) {
    const [hovering, setHovering] = useState(false);
    return (
        <Link to={props?.to} className={`landing-button ${hovering ? 'landing-button-selected' : ''}`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            <Tooltip top={false} text={props?.text}>
                <span>
                    {props?.children}
                </span>
            </Tooltip>
        </Link>
    );
}

export default function HomePage() {
    return (
        <div className="landing-wrapper-all" id="">
            <div className="landing-top-wrapper">
                <div className="landing-description">
                    Open for indoor dining, take out, and delivery.
                </div>
                <nav className="landing-options">
                    <LandingButton to='/menu' text='Click to view our latest menu'>Our Menu</LandingButton>
                    <LandingButton to='/delivery' text='Click for more info about deliveries'>Delivery Information</LandingButton>
                    <LandingButton to='/hours' text='Click for our hours of operations'>Our Hours</LandingButton>
                </nav>
            </div>
            <div className="landing-middle-wrapper">
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
            </div>
            <Map />

        </div>

    );
}