import React, { Component } from 'react';
import NewsCard from '../NewsCard';
import {InfoConsumer} from '../context';

class News extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    return data.news.map(item => {
                        return <NewsCard key={item} item={item} />
                    });
                }}
            </InfoConsumer>
        );
    }
}

export default News;