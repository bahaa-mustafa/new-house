import "./Card.css"

export default function Card(pros){
    return<>
    <section className="card">
        <div className="container">
            <div className="row">
                <div className="card_img">
                    <img src={pros.imgSrc} alt="image" />
                </div>
                <div className="card_text">
                    <div className="head">
                        <h3>{pros.title}</h3>
                    </div>
                    <div className="price">
                        <h4><span>$</span>{pros.price}</h4>
                        <a href="#">buy now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}