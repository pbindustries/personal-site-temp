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
                Data Engineer | Full-Stack Developer | Hardware Tinkerer | Economics Geek
            </h3>
            <hr />
            <SocialLinks />
        </div>
    </div>
);

export default Banner;
