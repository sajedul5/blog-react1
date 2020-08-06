import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
                <div className="row">
                {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    {/* Column 2*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                            <li><a href="/" >lorem ipsum</a></li>
                        </ul>
                    </div>
                </div>
                {/* Footer bottom */}
                <hr className="bg-light"/>
                <div className="footer-bottom text-center">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()}&nbsp;
                        <a href="https://www.mdsajedulislam.com/" target="" className="">www.mdsajedulislam.com</a> - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
            
        </FooterContainer>
    );
};

export default Footer;

    const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 2rem;
        color: var(--mainWhite);
    }

    .footer-bottom{
        padding-top: 1rem;
        padding-bottom: 2rem;
        
    }

    ul li a{
        color: var(--mainGrey);
        text-decoration: none;
    }

    ul li a:hover{
        color: var(--mainGreyLight);
    }

    `;