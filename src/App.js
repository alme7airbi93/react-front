import './App.css';
import {Header} from "./nav-bar/Header";
import {Container} from "react-bootstrap";
import {Intro} from "./intro/Intro";

function App() {
  return (
    <Container fluid={true} className="App" >
            <Header/>
            <Intro/>
    </Container>
  );
}

export default App;
