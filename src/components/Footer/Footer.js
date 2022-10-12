import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import footerLogo from '../../img/logo/footer.png'

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="text-center text-white footer mt-5">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4 pb-0">
                        <div className="mb-3">
                            <Link to={"/"} >
                                <img src={footerLogo} alt="" />
                            </Link>
                        </div>
                        <section className="mb-4">
                            <a
                                className="btn text-white btn-floating m-1 icons"
                                href="#!"
                                role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></a>
                            <a
                                className="btn text-white btn-floating m-1 icons"
                                href="#!"
                                role="button"
                            ><i className="fab fa-twitter"></i
                            ></a>
                            <a
                                className="btn text-white btn-floating m-1 icons"
                                href="#!"
                                role="button"
                            ><i className="fab fa-instagram"></i
                            ></a>
                            <a
                                className="btn text-white btn-floating m-1 icons"
                                href="#!"
                                role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>
                            <a
                                className="btn text-white btn-floating m-1 icons"
                                href="#!"
                                role="button"
                            ><i className="fab fa-github"></i
                            ></a>
                        </section>
                        {/* <!-- Section: Social media --> */}
                    </div>
                    {/* <!-- Grid container end--> */}

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