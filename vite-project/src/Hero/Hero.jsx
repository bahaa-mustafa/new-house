import Button from "../Button";
import "./Hero.css"
import heroImg from "./assets/slider-img.png"

export default function Hero() {
    return (
        <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="hero_text">
                        <div className="head">
                            <h1>for all your furniture needs</h1>
                        </div>
                        <div className="describtion">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi enim accusantium debitis earum sunt dolores blanditiis optio veritatis repellat voluptatibus illo provident quam odit, voluptates, illum obcaecati magnam nihil?</p>
                        </div>
                        <div className="btns">
                            <Button title="Contact us" color="orng" />
                            <Button title="about us" color="blue" />
                        </div>
                    </div>
                    <div className="hero_img">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}