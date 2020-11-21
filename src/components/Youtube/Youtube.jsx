import React, {useState, useEffect} from 'react'

import { Container,Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

import youtube from '../../api/youtube';
import NavBar from './NavBar';

const Youtube = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=>{
        handleSubmit('laycon');
    },[]);

    return (
        <>
            <div className="Youtube">
                <NavBar onSubmit={handleSubmit}/>
                <Container fluid>
                        <Row>
                            <Col lg={8} md={12} className="display">
                               <VideoDetails video={selectedVideo}/>
                            </Col>


                            <Col lg={4} md={12} className="list">
                                <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
                            </Col>
                        </Row>
                </Container>
            </div>
        </>
    )

    async function handleSubmit(searchTerm){
        const {data: {items: videos }} = await youtube.get("search", {
            params:{
                part:"snippet",
                maxResults:25,
                key:"AIzaSyBvu2kGsegc_qCTSLF2N4BzRBlaSHFSVJs",
                q:searchTerm,
            }
        });

        setVideos(videos);
        setSelectedVideo(videos[0]);
        console.log(videos)
    }
}

export default Youtube
