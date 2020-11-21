import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoItem from './VideoItem';


const VideoList = ({videos, onVideoSelect}) => {
        const listOfVideos = videos.map((video)=>(
            <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
        ))
    return (
        <>            
            <Container>
                <Row>
                    <Col lg={12}>
                        {listOfVideos}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default VideoList