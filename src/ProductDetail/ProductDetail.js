import React from 'react';
import classes from './ProductDetail.module.css';

const ProductDetail = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage];

        if(pos === props.currentPreviewImagePos){
            classArr.push(classes.SelectedProductImage);
            console.log('Detail.js updated');
        }

        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
        );        
    });

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureItem];

        if (pos === props.currentSelectedFeature){
            classArr.push(classes.SelectedFeatureItem);
        }else if(pos === props.currentSelectedFeature){
            classArr.push(classes.SelectedFeatureItem);
        }

        return(
            <button key={pos} className={classArr.join(' ')} onClick={() => props.onFeatureItemClick(pos)}>{item}</button>
        );
    });

    return (
        <div>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
          
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
            </div>

            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                {featureList}
            </div>

            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
}

export default ProductDetail;