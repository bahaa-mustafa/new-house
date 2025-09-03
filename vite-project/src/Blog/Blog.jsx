import BlogCard from "./BlogCard";
import "./Blog.css"

import img1 from "./assets/b1.jpg"
import img2 from "./assets/b2.jpg"
import img3 from "./assets/b3.jpg"

let content = [
    {"title":"Look even slightly believable if you are", "img":img1},
    {"title":"Anything embarrassing hidden in the middel", "img":img2},
    {"title":"Molestias magni nats dolores adio commodi", "img":img3}
]

export default function Blog(){
    return<>
    <div className="blog">
        <div className="container">
            <div className="row">
                <div className="blog_title">
                    <h3>latest blog</h3>
                </div>
                <div className="blog_cards">
                    {content.map((element, index) => (<BlogCard key={index} title={element.title} imgSrc={element.img} />))}                    
                </div>
            </div>
        </div>
    </div>
    </>
}