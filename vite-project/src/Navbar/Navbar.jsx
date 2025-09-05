import "./Navbar.css"
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { Menu } from 'lucide-react';

export default function Navbar(){
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="navbar_logo">
                            <p>new<span>house</span> </p>
                        </div>
                        <input type="checkbox" name="menu" id="menu" hidden/>
                        <div className="navbar_links">
                            <a href="#home">Home</a>
                            <a href="#about">about</a>
                            <a href="#furnitures">furnitures</a>
                            <a href="#blog">blog</a>
                            <a href="#contact">contact us</a>
                        </div>
                        <div className="navbar_actions">
                            <a href="#">login <User size={20}/></a>
                            <a href="#"><Search size={20}/></a>
                        </div>
                        <label className="menu" htmlFor="menu"><Menu/></label>
                    </div>
                </div>
            </nav>
        </>
    )
}