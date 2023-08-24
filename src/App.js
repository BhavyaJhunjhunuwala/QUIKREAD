import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import LoadingBar from 'react-top-loading-bar'


import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  
  apikey=process.env.React_app_apikey
  state={
    process: 0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }


  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />  
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={100} country="in" category="general" />}></Route>
          <Route exact path="/bussiness" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={100} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pagesize={100} country="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={100} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={100} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={100} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={100} country="in" category="technology"/>}></Route> 
        </Routes>
        </Router> 
      </div>
    ) 
  }
}

