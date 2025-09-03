import "./Navbar.css"
import { Search } from 'lucide-react';
import { User } from 'lucide-react';

export default function Navbar(){
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="navbar_logo">
                            <p>new<span>house</span> </p>
                        </div>
                        <ul className="navbar_links">
                            <li className="">Home</li>
                            <li className="">about</li>
                            <li className="">furnitures</li>
                            <li className="">blog</li>
                            <li className="">contact us</li>
                        </ul>
                        <div className="navbar_actions">
                            <a href="#">login <User size={20}/></a>
                            <a href="#"><Search size={20}/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}