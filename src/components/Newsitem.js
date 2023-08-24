import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl, author,date, source}=this.props;
    return (
      <div>
        <div className="card my-3" style={{}}>
          <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right:'0' }}>

            <span className="badge rounded-pill bg-danger" style={{left: "90%", zindex:'1'}}>{source}</span>
          </div>
                <img src={imageurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark btn-primary">Read more</a>
                </div>
</div>
      </div>
    )
  }
}
