import React from 'react';
import './CSS/CSS_FILE.css';
import './CSS/responsive.css';
function About() {

    return (
        <div>
            <div class="section" id="initials">
                <div class="item1" id="pic">
                    <img src="/images/Sahil.jpeg" alt='Notfound' />
                </div>
                <div class="item1" id="namee">
                    <div class="p1">
                        <h2>Hello I'm</h2>
                    </div>
                    <div class="p2">
                        <h1 class="glitch">
                            <span aria-hidden="true">Sahil Aggarwal</span>
                            Sahil Aggarwal
                            <span aria-hidden="true">Sahil Aggarwal</span>
                        </h1>
                    </div>
                    <div>
                        <span class="dynamic-text"></span>
                    </div>
                </div>
                <div class="item1" id="linksss">
                    <a href="https://github.com/SahilAggarwall"><i class='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/sahilaggarwall"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://wa.me//+917056032744"><i class='bx bxl-whatsapp'></i></a>
                </div>
            </div>
        </div>
    );
}
export default About;
