import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="v-c">
                    <b>WESTCHESTER</b>
                </div>
                <div className="contacts">
                    <div className="v-c">
                        <div style={{ marginRight: '1rem' }}>
                            Call Us:&nbsp;
                        </div>
                        <div>
                            (310) 670-8122
                        </div>
                    </div>
                    <div className="v-c">
                        <div style={{ marginRight: '1rem' }}>
                            Visit Us:
                        </div>
                        <div>
                            5490 W. Centinela Ave., Westchester, CA 90045
                        </div>
                    </div>
                </div>
                <div style={{ borderLeft: 'black solid 2px', paddingLeft: '1rem' }}>
                    <b>Hours</b>
                    <div className="hours">
                        <div>
                            <div>Lunch</div>
                            <div>Dinner</div>
                        </div>
                        <div>
                            <div>@ 11am-3:30pm (Mon-Fri)</div>
                            <div>@ 5pm-9pm (Sun-Thurs), 5pm-10pm (Fri-Sat)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '1rem' }}>
                <div>
                    <i>
                        Free delivery with minimum order (limited area). For more information
                        and our catering prices, please call us during our business hours.
                    </i>
                </div>
                <div style={{ paddingTop: '.5rem' }}>
                    &copy; 2022 Compari's Trattoria and Pizzeria; Website by Mateo Rodriguez
                </div>
            </div>
        </div>
    );
}