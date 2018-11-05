import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
    <div className="row banner">
        <div className="banner-text">
            <h1 className="responsive-headline">
                Welcome! <br/>
                I'm Philip Bankier
            </h1>
            <h3>
                My <span>other site</span> is down currently for development,
                so i made this nifty site for the mean time. Enjoy!
            </h3>
            <hr />
            <SocialLinks />
        </div>
    </div>
);

export default Banner;
