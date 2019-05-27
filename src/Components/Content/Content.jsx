import React from 'react';
import SubHeader from './SubHeader/SubHeader';
import {Component} from 'react';
import ListBtns from './ListBtns/listBtns';
import axios from 'axios'
import ListNews from './ListNews/ListNews';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sourcesResponse: [],
            everythingResponse: null,
            countNewsThisPage: 0,
            endedNews: false,
            news: [],
            NO_DATA: "There are no articles matching your request.",
            NEWS_PAGE: 3,
            id: 0,
            nameNews: "News"

        };
        this.onBtnClick = this.onBtnClick.bind(this);
        this.changeEndedNews = this.changeEndedNews.bind(this);

    }

    componentWillMount() {

        axios.get('https://newsapi.org/v2/sources?apiKey=b03230efef814f21bf0df2c274b1966e')
            .then((response) => {
                this.setState({sourcesResponse: [...response.data.sources]});
            });
        axios.get(`https://newsapi.org/v2/everything?sources=abc-news&language=en&apiKey=9277a73cdc664a7c9650545a5ad56dc5`)
            .then((response) => {
                this.setState({news: [...response.data.articles]});
            });
    }


    onBtnClick(e) {

        this.setState({
            countNewsThisPage: 0,
            id: e.currentTarget.id
        });
        const {sourcesResponse, id} = this.state;
        const obj = {...sourcesResponse[id]};

        this.setState({nameNews: obj.name});
        axios.get(`https://newsapi.org/v2/everything?sources=${obj.id}&language=${obj.language}&apiKey=9277a73cdc664a7c9650545a5ad56dc5`)
            .then((response) => {
                this.setState({news: [...response.data.articles]});
            });
        this.setState({endedNews: false});
    }

    changeEndedNews() {
        this.setState({endedNews: true});
    }

    render() {
        const {countNewsThisPage, sourcesResponse, news, endedNews, NEWS_PAGE, nameNews} = this.state;
        const {onBtnClick, changeEndedNews} = this;
        return <div className="content">
            <SubHeader nameNews={nameNews}/>
            <ListBtns
                countNewsThisPage={countNewsThisPage}
                sourcesResponse={sourcesResponse}
                onBtnClick={onBtnClick}
            />
            <ListNews changeEndedNews={changeEndedNews} NEWS_PAGE={NEWS_PAGE} endedNews={endedNews} news={news}/>
        </div>
    }
}

export default Content;
