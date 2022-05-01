import './GlobalHeader.css';
import '../../medias.css';
import logo from './logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import Tooltip from '../Tooltip/Tooltip.tsx';
import VerticallyCenter from '../VerticallyCenter/VerticallyCenter';
import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline';

function Logo() {
    return (
        <div className='logo-wrapper'>
            <Link to={{ pathname: "/", hash: "#" }} >
                <AnimatedUnderline colors={{ to: '#D9594C', from: '#C3BF6D' }}>
                    <img src={logo} className='logo' alt='logo' />
                </AnimatedUnderline>
            </Link>
        </div>
    );
}

export default function GlobalHeader() {
    return (
        <div className='global-header'>
            <VerticallyCenter>
                <Logo />
            </VerticallyCenter>
            <VerticallyCenter>
                <div className='restaurant-name'>
                    <div className='name-items'>
                        <AnimatedUnderline colors={{ to: '#D9594C', from: '#C3BF6D' }}>
                            <Link to={{ pathname: "/", hash: "#" }} className='name-link-to-hub'>
                                <Tooltip text="Back to home" top={false} defaultStyle>
                                    <span>
                                        Compari's<span data-tratorria-text>&nbsp;Italian Trattoria &amp; Pizzeria</span>
                                    </span>
                                </Tooltip>
                            </Link>
                        </AnimatedUnderline>
                        <span data-establishment-text>
                            &nbsp;&bull; Serving our Community Since 1960
                        </span>
                        <span data-location-text>
                            &nbsp;&bull; 5490 W. Centinela Ave, Westchester, CA 90045
                        </span>
                    </div>
                </div>
            </VerticallyCenter>
        </div>
    );
}