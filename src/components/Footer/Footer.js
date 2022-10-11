import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="text-center text-white footer mt-5">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4 pb-0">

                        <section className="mb-4">
                            <a
                                className="btn text-white btn-floating m-1 bg-danger"
                                href="#!"
                                role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></a>


                            <a
                                className="btn text-white btn-floating m-1 bg-danger"
                                href="#!"
                                role="button"
                            ><i className="fab fa-twitter"></i
                            ></a>


                            <a
                                className="btn text-white btn-floating m-1 bg-danger"
                                href="#!"
                                role="button"
                            ><i className="fab fa-google"></i
                            ></a>


                            <a
                                className="btn text-white btn-floating m-1 bg-danger"
                                href="#!"
                                role="button"
                            ><i className="fab fa-instagram"></i
                            ></a>


                            <a
                                className="btn text-white btn-floating m-1 bg-danger"
                                href="#!"
                                role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>

                            <a
                                className="btn text-white btn-floating m-1 bg-danger"
                                href="#!"
                                role="button"
                            ><i className="fab fa-github"></i
                            ></a>
                        </section>
                        {/* <!-- Section: Social media --> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3">
                        © 2022 Copyright |
                        <a className="text-white" href="/"> mrperfect </a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>

            </div>
        </div>
    );
};

export default Footer;