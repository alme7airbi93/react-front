import {Container} from "react-bootstrap";
import "./Intro.css"
import backGround from "../assets/intro/bg-img.png";
import Logo from "../assets/intro/logo_1.png"

export const Intro = () =>{
    return(
        <Container fluid={true} className="container-intro ">
            <div className="background-image">
                <img className="img-fluid w-100" src={backGround} alt={""}/>
                <div className="logo-image">
                    <img className="img-fluid " src={Logo} alt={""}/>
                </div>
            </div>
        </Container>
    )
}
