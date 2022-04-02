import {Container} from "react-bootstrap";
import "./VideoContent.css"
import vidImage from "../assets/advertisement/Rectangle 6.png"

export const VideoContent = () => {
    return (
        <Container fluid={true}>
            <Container fluid={true} className="d-flex justify-content-center vstack gap-5">
                <Container>
                    <div className="content-title">
                        <span className="white-title">WE'RE THE <span className="light-blue-text">FUTURE</span></span>
                    </div>
                </Container>
                <Container>
                    <div>
                        <img src={vidImage} className="img-fluid w-100" alt={""}/>
                    </div>
                </Container>
            </Container>
        </Container>
    )
}
