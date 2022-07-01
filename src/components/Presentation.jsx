import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

const Presentation = () => {
    return (
        <>
            <div>
                <h1>OI</h1>
                <p>Eu sou o Lucas!</p>
            </div>
            
            <StaticImage 
                src="https://avatars.githubusercontent.com/u/49842822?v=4"
                alt="Lucas Áquila"
            />
        </>
    )
};

export default Presentation;