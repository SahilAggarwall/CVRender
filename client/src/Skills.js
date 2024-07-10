import React from 'react';
import './CSS/CSS_FILE.css';
import './CSS/responsive.css';
function Skills() {
    return (
        <div>
            <div class="section" id="skills">
                <div class="skillh1" id="headin">
                    <h1>S</h1>
                    <h1>K</h1>
                    <h1>I</h1>
                    <h1>L</h1>
                    <h1>L</h1>
                    <h1>S</h1>
                </div>
                <div class="item3">
                    <div class="programming1 sectionn">
                        <div class="skillshead">
                            <center>Programming</center>
                        </div>
                        <div class="skillsitems1">
                            <div class="skillsitem">
                                <img src="/images/html.png" alt="NotFound"/>
                                <h3>HTML</h3>
                            </div>
                            <div class="skillsitem">
                                <img src="/images/css.png" alt="NotFound"/>
                                <h3>CSS</h3>
                            </div>
                            <div class="skillsitem">
                                <img src="/images/javascript.png" alt="NotFound"/>
                                <h3>JavaScript</h3>
                            </div>
                            <div class="skillsitem">
                                <img src="/images/react.png" alt="NotFound"/>
                                <h3>React</h3>
                            </div>
                            <div class="skillsitem"></div>
                        </div>
                    </div>
                    <div class="programming2 sectionn">
                        <div class="subprogram">
                            <div class="skillshead">
                                <center>Backend</center>
                            </div>
                            <div class="skillsitems2">
                                <div class="skillsitem">
                                    <img src="/images/cpp.png" alt="NotFound"/>
                                    <h3>C++</h3>
                                </div>
                                <div class="skillsitem">
                                    <img src="/images/java.png" alt="NotFound"/>
                                    <h3>Java</h3>
                                </div>
                            </div>
                        </div>
                        <div class="subprogram">
                            <div class="skillshead">
                                <center>Databases</center>
                            </div>
                            <div class="skillsitems2">
                                <div class="skillsitem">
                                    <img src="/images/mongodb.png" alt="NotFound"/>
                                    <h3>MongoDB</h3>
                                </div>
                                <div class="skillsitem">
                                    <img src="/images/mysql.png" alt="NotFound"/>
                                    <h3>MySQL</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;
