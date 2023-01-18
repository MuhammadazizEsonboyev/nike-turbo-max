import React from 'react'
import "./Navbar.css"
const logo = require("./img/Vector.png")

export default function Navbar() {
    return (
        <>
        <div className="container">
            <div className="row justify-content-between mt-5">
                <div className="col-2">
                    <img src={logo} alt="" />
                </div>
                <div className="col-4">
                    <ul className="list">
                        <li className="active list_item">Home</li>
                        <li className="list_item">Product</li>
                        <li className="list_item">About</li>
                        <li className="list_item">Review</li>
                    </ul>
                </div>
                <div className="col-2">
                    <button className="btn_nav">Shpo now</button></div>
            </div>
        </div>
        </>
    )
}
