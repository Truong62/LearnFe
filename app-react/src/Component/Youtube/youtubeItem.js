import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div className="youtube-item">
            <div className="img-youtube">
                <img src={props.imgThumnail} alt="" />
            </div>
            <div className="footer">
                <div className="img-logo">
                    <img src={props.logo} alt="" />
                </div>
                <div className="info">
                    <h3>{props.title || "This is null"}</h3>
                    <h4>{props.name}</h4>
                </div>
            </div>
        </div>
    );
};

export default YoutubeItem;