import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetail from './ProductDetail/ProductDetail';
import Topbar from './Topbar/Topbar';

class App extends Component {
  state = {
    productData: ProductData /*通常會是在這裡宣告從後台抓取的data*/,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) => {
    console.log('Update detected!');
    this.setState({currentPreviewImagePos: pos});
    console.log('App.js updated');
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos});
  }

  render(){
    return (
      <div className="App">    
        <Topbar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
          <div className={classes.ProductData}>
            <ProductDetail data={this.state.productData} onFeatureItemClick={this.onFeatureItemClick} onColorOptionClick={this.onColorOptionClick}  currentPreviewImagePos={this.state.currentPreviewImagePos} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
