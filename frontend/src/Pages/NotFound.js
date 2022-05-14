import { Link } from "react-router-dom";
import AnimatedUnderline from '../components/AnimatedUnderline/AnimatedUnderline.tsx'
import './NotFound.css';
import '../medias.css'

// todo
export default function NotFound() {
    return (
        <div className="page-404-wrapper">
            <div className="error-number-404">
                404
            </div>
            <div className="error-page-content">
                <div>
                    It appears this page doesn't exist :(
                </div>
                <div style={{ marginTop: '1rem' }}>
                    Possible Fixes:
                    <ol style={{ marginBlockStart: '0' }}>
                        <li>Check the URL for typos</li>
                        <li>Make sure the page you're looking for exists</li>
                        <li>If all else fails, go&hellip;</li>
                    </ol>
                </div>
                <div className="back-to-home-wrapper">
                    <Link to="/" className="back-to-home-link">
                        <AnimatedUnderline colors={{from: '#000000', to: '#000000'}}>
                            Back to Home
                        </AnimatedUnderline>
                        <div className="bouncing-arrow" />
                    </Link>
                </div>
            </div>
        </div>
    );
}