import './GlobalHeader.css';
import '../../medias.css';
import logo from './logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import Tooltip from '../Tooltip/Tooltip';
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
            {/* <div className='header-wrapper'> */}
            {/* <div className='vert-center'> */}
            {/* <div className='header-items'> */}
            {/* this bullshit is broken ... :(  */}
            {/* just re-write it, you haven't put too much work into this section. */}
            {/* <div> */}
            {/* <Link to={{ pathname: "/", hash: "#" }} className='logo-wrapper'>
                                <img src={logo} className='logo' alt='logo' />
                            </Link> */}
            {/* </div> */}
            {/* <div className='name-wrapper'> */}
            {/* <div className='restaurant-name vert-center'>
                <div className='name-items'>
                    <Link to={{ pathname: "/", hash: "#" }} className='name-link-to-hub'>
                        <Tooltip text="Back to home" top={false} defaultStyle>
                            <span className='name-link-to-hub-hover'>
                                Compari's<span className='extra-name'>&nbsp;Italian Trattoria &amp; Pizzeria</span>
                            </span>
                        </Tooltip>
                    </Link>
                    <span className='central-portion'>
                        &nbsp;&bull; Serving our Community Since 1960
                    </span>
                    <span className='last-portion'>
                        &nbsp;&bull; 5490 W. Centinela Ave, Westchester, CA 90045
                    </span>
                </div>
            </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    );
}