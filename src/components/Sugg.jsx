import React from 'react'

const Sugg = () => {
    const vid = [
        {
        id:Math.random(),
         imgVid :"https://i.ytimg.com/vi/-Osok3zjNXw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDNOOe9dlqwUA1GK3PhJ5MDN5wd0w",
         title : "How to create a REACT JS app | GOMASTERCLASS EP.2", 
         nameVideo : "GOMYCODE"
        },
        {
        id:Math.random(),
        imgVid :"https://i.ytimg.com/vi/VHrBDjE0jOI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCk_ZfI-wWB8QoWbE9Jr9ate24XfA",
        title : "Boumhel Hackerspace Reveal", 
        nameVideo : "GOMYCODE"
        },
        {
        id:Math.random(),
        imgVid :"https://i.ytimg.com/vi/-vzj8CrTWIY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBa73HLkvE4QOVsVC6JfsO4bEMp1g",
        title : "Nairobi Hackerspace Tour", 
        nameVideo : "GOMYCODE"
        }
    ]
  return (
    <div className='sugg'>
        <h3>Mix - GOMYCODE
            <span>Mixes are playlists Youtube makes for you</span></h3>
        {vid.map(el => 
        <div id="cart">
            
            <img width={"100px"} src={el.imgVid} alt="" />
            <div className="info-video">
            <h4>{el.title}</h4>
            <h6>{el.nameVideo}</h6>
            </div>
        </div>
    )}
    </div>
  );
};

export default Sugg