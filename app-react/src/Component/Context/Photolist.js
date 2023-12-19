import React from 'react';
import { useGallery } from './gallery-context';

const Photolist = () => {
    const {photo} = useGallery()
    console.log(photo)
    return (
        <div>
            Photolist
        </div>
    );
};

export default Photolist;