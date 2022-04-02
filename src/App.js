import './App.css';
import {Header} from "./nav-bar/Header";
import {Container} from "react-bootstrap";
import {Intro} from "./intro/Intro";
import {Services} from "./services/Services";
import {VideoContent} from "./video-content/VideoContent";

function App() {
  return (
    <Container fluid={true} className="App" >
            <Header/>
            <Intro/>
            <Services/>
            <VideoContent/>
    </Container>
  );
}

export default App;
