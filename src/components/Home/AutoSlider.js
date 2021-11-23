import { Fragment } from "react";
import classes from './AutoSlider.module.css';

function AutoSlider() {
  return (
    <Fragment>
      <div className={classes.slider}>
      <div class="container">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >

<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className={classes.imagee}>
            <img
              src="/Chemistry.png"
              width="100"
              height="350"
              class="d-block w-100"
              alt="Romantic Novels"
            ></img>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/Sellbooks.png"
              width="100"
              height="350"
              class="d-block w-100"
              alt="Fiction Novels"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="/Accountancy.png"
              width="100"
              height="350"
              class="d-block w-100"
              alt="Thriller"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="/Maths.png"
              width="100"
              height="350"
              class="d-block w-100"
              alt="Thriller"
            ></img>
          </div>
        </div>
      </div>
      </div>
      </div>
    </Fragment>
  );
}

export default AutoSlider;
