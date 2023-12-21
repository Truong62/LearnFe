// import React, { createContext, useContext, useState } from 'react';

// const fakeData = [
//     {
//         id: 1,
//         url: "https://wallpaper-house.com/data/out/11/wallpaper2you_472626.jpg",
//         isLike: false,
//     },
//     {
//         id: 2,
//         url: "https://wallpaper-house.com/data/out/11/wallpaper2you_472626.jpg",
//         isLike: false,
//     },
//     {
//         id: 3,
//         url: "https://wallpaper-house.com/data/out/11/wallpaper2you_472626.jpg",
//         isLike: false,
//     },
//     {
//         id: 4,
//         url: "https://wallpaper-house.com/data/out/11/wallpaper2you_472626.jpg",
//         isLike: false,
//     },
//     {
//         id: 5,
//         url: "https://wallpaper-house.com/data/out/11/wallpaper2you_472626.jpg",
//         isLike: false,
//     },
// ]

// const Galleryontext = createContext();
// function GalleryProvider(props) {
//     const [photo, setPhoto] = useState(fakeData);
//     const [cart, setCart] = useState([]);
//     const [likeList, setLikelist] = useState([]);
//     const value = {photo,cart,likeList, setPhoto, setCart,setLikelist}
//     console.log(photo)
//     console.log("shjdhjasdh")
//     return <Galleryontext.Provider value= {value} {...props}></Galleryontext.Provider>
// }


// function useGallery() {
//     const context = useContext(Galleryontext)
//     if (typeof context === "undefined") {
//         throw new Error("useGallery must be used within AuthProvider");
//     }
//     return context
// }

// export { useGallery, GalleryProvider }