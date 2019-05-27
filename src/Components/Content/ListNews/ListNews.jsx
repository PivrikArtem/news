import React from 'react';
import './ListNews.css'
import {Component} from 'react';

class ListNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredNews: [],
        };
        this.addNews = this.addNews.bind(this);
    }

    componentWillReceiveProps({news}) {
        this.setState({filteredNews: news.slice(0, 3)});
    }

    addNews() {
        const {news, NEWS_PAGE, changeEndedNews} = this.props;
        const {filteredNews} = this.state;

        const otherNews = news.slice(filteredNews.length, filteredNews.length + NEWS_PAGE);
        if (otherNews.length !== 0) {
            const endedNews = [...filteredNews, ...otherNews];

            this.setState({filteredNews: endedNews});
        } else {
            changeEndedNews();
        }
    }

    render() {
        const {endedNews} = this.props;
        const {filteredNews} = this.state;

        const loadBtn = !endedNews ? 
        <div id="container">
        <button className="load_more" onClick={this.addNews}>
            <div>
                <div className="circle">
                    <span className="icon2 arrow2"></span>
                </div>
                <p className="button_text">Load More</p>
            </div>
        </button>
        </div>
        : <span></span>;
        return (
            <div className="news">
                {
                    filteredNews.map((elem, index) => {
                        return <div className="news_item" key={index}>
                            <div className="news_meta">
                                <img className='img-article' src={elem.urlToImage}/>
                            </div>
                            <div className="news_description">
                                <a target="_blank" href={elem.url}>
                                    <h2 className="news_description-title">{elem.title}</h2>
                                    <h3 className="news_description-source">{elem.source.name}</h3>
                                    <p className="news_description-description">{elem.description}</p>
                                </a>
                            </div>
                        </div>
                    })
                }
                {this.props.news.length == 0 ? <h1 className="no-data">There are no articles matching your request.</h1> : loadBtn}
            </div>
        )
    }

}

export default ListNews;
