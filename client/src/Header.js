import React from 'react';
import './CSS/CSS_FILE.css';
import './CSS/responsive.css';
const Header = () => {
    return (
                <div class="header">
                    <div class="logo-name">
                        <a href="#Home">&nbsp;Sahil Aggarwal</a>
                    </div>
                    <div class="linkers">
                        <a href="#Home">&nbsp;Home</a>
                        <a href="#experience">&nbsp;&nbsp;Experience</a>
                        <a href="#skills">&nbsp;&nbsp;Skills</a>
                        <a href="#contact">&nbsp;&nbsp;Contact&nbsp;&nbsp;</a>
                    </div>
                </div>  
    );
}
export default Header;
