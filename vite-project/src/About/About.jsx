import "./About.css"
import Button from "../Button"
import imgSrc from "./assets/about-img.png"

export default function About(){
    return <>
    <section className="about">
        <div className="container">
            <div className="row">
                <div className="about_img">
                    <img src={imgSrc} alt="about image" />
                </div>
                <div className="about_text">
                    <h3>about us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui eos repellendus omnis maxime repellat sit iste. Deserunt amet aliquam debitis enim reprehenderit suscipit vel magni voluptates ea ratione. Assumenda?</p>
                    <Button title="read more" color="blue"/>
                </div>
            </div>
        </div>
    </section>
    </>
}