
import Button from "../Button";
import "./BlogCard.css"

export default function BlogCard(prop) {
    return <>
        <div className="blog_card">
            <img src={prop.imgSrc} alt="img" />
            
            <div className="content">
                <h3>{prop.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolores sit amet consectetur</p>
                <Button title="read more" color="blue" />
            </div>
        </div>
    </>
}