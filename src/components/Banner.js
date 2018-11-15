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
                Enjoy this nifty site time. Enjoy!
            </h3>
            <hr />
            <SocialLinks />
        </div>
    </div>
);

export default Banner;
