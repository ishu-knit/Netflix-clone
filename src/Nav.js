import React from "react";
import "./Nav.css"
import { useEffect,useState } from "react";

export default function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        
        window.addEventListener("scroll",()=>{
            if( window.scrollY > 100)
            handleShow(true);
            else
            handleShow(false);

        });

        return () => {
            window.removeEventListener("scroll",()=>{});

        };
    }, []);

    return (
        <>
            <div className={`nav ${show && "nav_black"} `} >
                    <img  className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
                    <img className="nav_avtar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            </div>
        </>
    )
}


