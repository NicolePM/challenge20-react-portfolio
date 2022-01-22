import React from "react";
import jsphoto from "../../assets/code/js.PNG";
import cssphoto from "../../assets/code/css.PNG";
import sqlphoto from "../../assets/code/sql.PNG";
import nphoto from "../../assets/code/nd.PNG";
import rephoto from "../../assets/code/re.PNG";

function Resume() {
    return (
        <section data-testid="resume">
            <div><a href="../../assets/resume/NMitchellResume.pdf">Download Resume</a></div>
            <div className="row">
                <div className="column">
                    <div className="display">
                    <h5 className="text">Javascript</h5>
                        <img
                            src={jsphoto}
                        />
                    </div>
                </div>
                <div className="column">
                    <div className="display">
                    <h5 className="text">CSS Styling</h5>
                        <img
                            src={cssphoto}
                        />
                    </div>
                </div>
                <div className="column">
                    <div className="display">
                    <h5 className="text">T-SQL/ PL-SQL</h5>
                        <img
                            src={sqlphoto}
                        />
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
            <div className="column">
                    <div className="display">
                        <img
                            src={nphoto}
                        />
                    </div>
                </div>
                <div className="column">
                    <div className="display">
                        <img
                            src={rephoto}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;