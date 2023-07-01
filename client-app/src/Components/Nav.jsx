import React from 'react'
// import { Link } from 'react-router-dom'
import nagwaLogo from '../nagwaLogo.jpeg'

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg   bg-light">
                <div className="container-fluid">
                    <div className='navbar-brand '>
                        <img className='w-25' src={nagwaLogo} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active " aria-current="page" href="#">Nagwa</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active" href="#">Quiz</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
