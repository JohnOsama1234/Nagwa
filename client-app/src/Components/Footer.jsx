import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-light text-center mb-5">
                <div className="container p-4 pb-0">
                    <section className="mb-4 ">
                        <a
                            className="btn text-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        ><i className="fab fa-facebook-f"></i></a>

                        <a
                            className="btn text-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        ><i className="fab fa-twitter"></i></a>

                        <a
                            className="btn text-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        ><i className="fab fa-google"></i></a>

                        <a
                            className="btn text-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        ><i className="fab fa-instagram"></i></a>
                        <a
                            className="btn text-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i ></a>
                        <a
                            className="btn text-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        ><i className="fab fa-github"></i></a>
                    </section>
                </div>

                <div className="text-center p-3" >
                    © 2023 Copyright:
                    <a className="text-dark" href="https://www.linkedin.com/company/teamnagwa/">Nagwa</a>
                </div>
            </footer>
        </>
    )
}
