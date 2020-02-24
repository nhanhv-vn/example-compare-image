import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapperContainer: {
    maxWidth: '80%',
    maxHeight: '80vh',
    margin: 'auto'
  },
  actionsWrapper: {
    padding: '15px 0'
  }
});

export  const ImagesCompare = props => {

  const [isVertical, setIsVertical] = useState(false);
  const [sizeSlider, setSizeSlider] = useState(20);
  const [lineWidth, setLineWidth] = useState(2);
  const [color, setColor] = useState(false);

  const handleVertical = () => setIsVertical(!isVertical);
  const handleZoomInSlider = () => sizeSlider <= 100 ? setSizeSlider(sizeSlider * 2) : sizeSlider;
  const handleZoomOutSlider = () => sizeSlider > 10 ? setSizeSlider(sizeSlider / 2) : sizeSlider;
  const handleIncreaseLineWidth = () => lineWidth <= 10 ? setLineWidth(lineWidth + 1) : lineWidth;
  const handleDecreaseLineWidth = () => lineWidth > 1 ? setLineWidth(lineWidth - 1) : lineWidth;
  const handleChangeColor = () => setColor(!color);

  const classes = useStyles();

  return(<Grid className={classes.wrapperContainer} container={true}>
    <Grid className={classes.actionsWrapper} container={true} spacing={2}>
      <Grid item={true}><Button onClick={handleZoomInSlider} variant="contained" color="primary">ZoonIn Slider</Button></Grid>
      <Grid item={true}><Button onClick={handleZoomOutSlider} variant="contained" color="primary">ZoonOut Slider</Button></Grid>
      <Grid item={true}><Button onClick={handleChangeColor} variant="contained" color="primary">Change Color</Button></Grid>
      <Grid item={true}><Button onClick={handleIncreaseLineWidth} variant="contained" color="primary">+</Button></Grid>
      <Grid item={true}><Button onClick={handleDecreaseLineWidth} variant="contained" color="primary">-</Button></Grid>
      <Grid item={true}><Button onClick={handleVertical} variant="contained" color="primary">{isVertical ? "Horizontally" : "Vertical" }</Button></Grid>
    </Grid>
    <Grid className={classes.actionsWrapper} container={true} spacing={2}>
      <ReactCompareImage {
        ...{
          ...props, 
          vertical: isVertical, 
          handleSize: sizeSlider, 
          sliderLineColor: color? '#E66626': '#fff',
          sliderLineWidth: lineWidth
        }
      } />
    </Grid>
  </Grid>)
}
