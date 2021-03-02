import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import Services from './components/services';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation data={this.state.landingPageData.Header} />
        <Header data={this.state.landingPageData.Header} />
        <Contact data={this.state.landingPageData.Contact} />
        <Features data={this.state.landingPageData.Features} />
        <Services data={this.state.landingPageData.Services} />
        {/* <Gallery /> */}
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Footer data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
