import {Container} from "react-bootstrap";
import "./Intro.css"
import backGround from "../assets/intro/bg-img.png";
import Logo from "../assets/intro/logo_1.png"

export const Intro = () => {
    return (
        <Container fluid={true} className="container-intro ">
            <div className="background-image">
                <img className="img-fluid w-100" src={backGround} alt={""}/>
                <div className="logo-image">
                    <img className="img-fluid logo" src={Logo} alt={""}/>
                </div>
                <div className="container-text ">
                    <ul className="container-ul">
                        <li>
                            <span className="container-text-first ">
                                WE BRING TECHNOLOGY
                            </span>
                        </li>
                        <li>
                            <span className="container-text-second p-3 mt-2">
                            TO YOUR
                            </span>
                        </li>
                        <li>
                            <span className="container-text-third ">
                            FINGERTIPS
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
