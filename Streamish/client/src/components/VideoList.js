import React, { useEffect, useState } from "react";
import Video from './Video';
import Comment from "./Comment";
import VideoSearch from './Search';
import { getAllVideosWithComments } from "../modules/videoManager";


const VideoList = () => {
    const [videos, setVideos] = useState([]);


    const getVideosWithComments = () => {
        getAllVideosWithComments()
            .then(videos => setVideos(videos))
    };





    useEffect(() => {
        getVideosWithComments();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <VideoSearch setVideos={setVideos} />
                </div>
                {/* <input type='text' className="search" required onChange={handleSearch} id="search_box" placeholder="Search for a video..." /> */}
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <>
                            <Video video={video} key={video.id} />
                            {video.comments.map((comment) => (<Comment comment={comment} key={comment.id} />
                            ))}
                        </>
                    ))}

                </div>
            </div>
        </>
    );
};

export default VideoList;