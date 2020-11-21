import React, {useState} from 'react'
import { Container,Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import load from './spin.gif'

const VideoDetails = ({video}) => {
    const [subscribe, setSubscribe] = useState("SUBSCRIBE");

    const clickHandle = ()=>{
        setSubscribe("SUBSCRIBED")
    }

    
    if(!video) return <div style={{color:'white',textAlign:'center'}}>
        <img src={load} alt="loader"/>
    </div>;

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
           <Container>
               <Row>
                   <Col md={12} className="play">
                       <Col className="player">
                           <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
                       </Col>

                       <div className="information">
                           <h2>{video.snippet.title} - {video.snippet.channelTitle}</h2>
                           <Row>
                                <Col lg={8} md={12}>
                                    <p>{video.snippet.publishTime}</p>
                                </Col>     
                                <Col lg={4} md={12}>
                                    <button onClick={clickHandle} className="subscribe">{subscribe}</button>
                                </Col>   
                           </Row>  
                       </div>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default VideoDetails
