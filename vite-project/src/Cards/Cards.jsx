
import Card from "./Card"
import "./Cards.css"
import img1 from "./assets/f1.png"
import img2 from "./assets/f2.png"
import img3 from "./assets/f3.png"
import img4 from "./assets/f4.png"
import img5 from "./assets/f5.png"
import img6 from "./assets/f6.png"

let card_content = [
    {"img":img1, "tilte":"brown chair design", "price":100.00},
    {"img":img2, "tilte":"double bed design", "price":200.00},
    {"img":img3, "tilte":"house chair design", "price":200.00},
    {"img":img4, "tilte":"brown table design", "price":100.00},
    {"img":img5, "tilte":"blue chair design", "price":200.00},
    {"img":img6, "tilte":"brown table design", "price":200.00}    
]

export default function Cards(){
    return <>
    <section className="cards">
        <div className="container">
            <div className="row">
                <div className="cards_text">
                    <h2>our furniture</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam earum magni, consequatur assumenda ea rerum modi</p>
                </div>
                <div className="cards_content">
                    {
                        card_content.map((content)=>(<Card  imgSrc={content.img} title={content.tilte} price={content.price}/>))
                    }
                </div>
            </div>
        </div>
    </section>
    </>
}