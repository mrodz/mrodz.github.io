import './GlobalHeader.css';
import '../../medias.css';
import logo from './logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import Tooltip from '../Tooltip/Tooltip';

export default function GlobalHeader() {
    return (
        <div className='global-header'>
            <div className='header-wrapper'>
                <div className='vert-center'>
                    <div className='header-items'>
                        <Link to={{ pathname: "/", hash: "#" }}>
                            <img src={logo} className='logo' alt='logo' />
                        </Link>
                        <div className='name-wrapper'>
                            <div className='restaurant-name vert-center'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}