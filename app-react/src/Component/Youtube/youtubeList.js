import React from 'react';
import { youtubeData } from '../../Data-api';
import YoutubeItem from './youtubeItem';

const YoutubeList = (props) => {

    return (
        <div className="yt-list">
            {props.children}
            {youtubeData.map((item, index) => {
                return (<YoutubeItem
                    key={item.id}
                    imgThumnail={item.imgThumnail}
                    logo={item.logo}
                    title={item.title}
                    name={item.name}></YoutubeItem>)

            })}
        </div>
    );
};

export default YoutubeList;