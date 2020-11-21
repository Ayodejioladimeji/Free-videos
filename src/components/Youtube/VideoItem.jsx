import React from 'react'
import { Media} from 'react-bootstrap';


const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div>
            <Media className="media" onClick={()=>onVideoSelect(video)}>
                <img className="mr-2 my-image" src={video.snippet.thumbnails.medium.url} alt="imaging"/>

                <Media.Body className="list-body">
                    <p className="list-name">{video.snippet.title} - {video.snippet.channelTitle}</p>
                    <p className="list-desc">{video.snippet.channelTitle}</p>
                    {/* <p className="list-view">2.4M views . 9 months ago</p> */}
                </Media.Body>
            </Media>
        </div>
    )
}

export default VideoItem
