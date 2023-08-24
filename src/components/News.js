import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps={
        country:'in',
        pagesize: 80,
        category:'general'
    }
   static propTypes={
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category:PropTypes.string,
}
    constructor(props)
    {
        super(props);
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`${this.props.category}` +"QUIKREAD"
    }

    async componentDidMount(){
        this.props.setProgress(0);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pagesize}`;
        this.setState({loading: true})
        let data= await fetch(url);
        let parsedata = await data.json();
        this.setState({articles: parsedata.articles,
             totalResults: parsedata.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

     handleNextclick= async ()=>{

        if(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pagesize))
        {

        }
        else
        {
            this.props.setProgress(0);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        this.setState({loading: true})
        let data= await fetch(url);
        let parsedata = await data.json();
        this.setState({
            page: this.state.page+1,
            articles: parsedata.articles,
            loading: false
        })
        this.props.setProgress(100);
    }
    }

     handlePreviousclick= async()=>{
        this.props.setProgress(0);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        this.setState({loading: true})
        let data= await fetch(url);
        let parsedata = await data.json();
        this.setState({
            page: this.state.page-1,
            articles: parsedata.articles,
            loading: false
        })
        this.props.setProgress(100);
    }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{marginTop:"90px"}}>QUIKREAD Top Headline's</h2>
       {this.state.loading && <Spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                    <Newsitem title={element.title?element.title.slice(0,50)+"...":""} description={element.description?element.description.slice(0,90)+"....":""} imageurl={element.urlToImage!=null?element.urlToImage:"https://th.bing.com/th/id/OIP.L51qzGCLtslIZn42Q0BFhgHaE7?pid=ImgDet&rs=1"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>      
        })} 
        </div>

        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePreviousclick}>&larr; Previous</button>
        <button  disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark mx-2" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}
