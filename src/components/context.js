import React, { Component } from 'react';
import {placeInfo, reviews, detailInfo,news} from '../data';

const InfoContext = React.createContext();


class InfoProvider extends Component {

    state = {
        info: placeInfo,
        reviews: reviews,
        detailInfo: detailInfo,
        news: news
    }

    getItem = id => {
        const item = this.state.info.find(item => item.id === id);
        return item;
    }


    handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() =>{
            return {
                detailInfo: item
            }
        });
    }
    
    render() {
        return (
            <div>
                <InfoContext.Provider value={{
                    info: this.state.info,
                    reviews: this.state.reviews,
                    detailInfo: this.state.detailInfo,
                    news: this.state.news,
                    maps: this.state.mpas,
                    headerTitle: this.state.headerTitle,
                    headerSubTitle: this.state.headerSubTitle,
                    headerText: this.state.headerText,
                    name: this.state.name,
                    avatar:this.state.avatar,
                    comment:this.state.comment,
                    handleDetail: this.handleDetail
                }}>
                    {this.props.children}
                </InfoContext.Provider>
            </div>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export  {InfoProvider, InfoConsumer};