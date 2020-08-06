import React, { Component } from 'react';
import {InfoConsumer} from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews';


class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;

                    return (
                        <React.Fragment>
                            <div className="container align-items-center ">
                                <h1 className="display-1 font-weight-bold text-center">{headerTitle}</h1>
                                <h4 className="display-5 text-center">{headerSubTitle}</h4>
                                <p className="text-center">{headerText}</p>
                                {/* social icons */}
                                <div className="container mt-5 my-5">
                                    <div className="row justify-content-center">
                                        <div className="col-2">
                                            <i className="fab fa-facebook-f" />
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-twitter" />
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-google-plus-g" />
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-reddit" />
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-whatsapp" />
                                        </div>
                                        <div className="col-2">
                                            <i className="fab fa-facebook-messenger" />
                                        </div>
                                    </div>
                                </div>
                                {/* Nav Link */}
                                <div className="container">
                                    <ul className="nav nav-tabs">
                                    {/* About Place */}
                                        <li className="nav-item">
                                            <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">
                                                About Place
                                            </a>
                                        </li>
                                        {/* Reviews  */}
                                        <li className="nav-item">
                                            <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">
                                                Review
                                            </a>
                                        </li>
                                        {/* Maps link */}
                                        <li className="nav-item">
                                            <a href="#map" className="nav-link " role="tab" data-toggle="tab">
                                                Maps
                                            </a>
                                        </li>
                                    </ul>
                                    {/* taps panc */}
                                    <div className="tab-content mb-5">
                                    {/* About Place Tab */}
                                        <div id="aboutPlace" className="tab-pane in active text-centern mt-5" role="tabpanel">
                                        <h2 className="mb-3">{title}</h2>
                                            <p>{description}</p>
                                            <img src={img}  alt={title} className="img-thumbnail img-fluid"/>
                                        </div>
                                    {/* Review */}
                                        <div className="tab-pane" id="reviews" role="tabpanel">
                                            <Reviews />
                                        </div>
                                    {/* Review */}
                                        <div className="tab-pane" id="map" role="tabpanel">
                                            <iframe  src={maps} style={{border: '0', height: '25.125rem', width:'', frameborder:'0'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </InfoConsumer>
        );
    }
}

export default Details;

