import React from "react";
import "./video.css";
function Video({ title, views, timee, channel, verified }) {
  return (
    <>
      <div className="video-player">
        <div>hello woruld</div>

        <img src="https://loremflickr.com/240/160" alt="random image"></img>
        <div>{title}</div>
        <div>{views}</div>
        <div>{timee}</div>
        <div>{channel}</div>
        <div>{verified}</div>
        <div>
         {verified ? "ORIGINAL WALA" : "jidr faLse ha"}
        </div>
      </div>
    </>
  );
}

export default Video;
