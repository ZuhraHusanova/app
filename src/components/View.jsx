import React from "react";
import nayza from './assets/img/Arrow 3.png';
import right from './assets/img/Arrow 4.png';
import girl from './assets/img/girl.png';


function View() {
    return (
        <div className="view">
            <div className="container">
                <div className="view-top">
                    <h4 className="view-title">View our projects</h4>
                    <a href="#" className="view-link">
                        <span>View More</span>
                        <img src={nayza} />
                    </a>
                </div>
                <div className="view-row">
                    <div className="view-left">
                        <div className="view-card">
                            <h5 className="view-subtitle">Workhub office Webflow Webflow Design</h5>
                            <p className="view-info">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                            <a href="#" className="view-link2">
                                <span>View project</span>
                                <img src={right} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="view-right">
                        <div className="view-back">
                           <div className="view-above">
                           <h5 className="view-subtitle">Unisaas Website
                                Design</h5>
                            <a href="#" className="view-link2">
                                <span>View project</span>
                                <img src={right} alt="" />
                            </a>
                           </div>
                        </div>
                        <div>
                            <img src={girl} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default View;