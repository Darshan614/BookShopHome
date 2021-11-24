import { Fragment } from 'react';
import classes from './NovelCategory.module.css';

function NovelCategory(){
    return (
        <Fragment>
            <div class="container">
        <h2 className={classes.title}>Novels for you</h2>
        <div id="carouselExampleControls" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/novels1.PNG" className={classes.photo1} alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="/novels2.PNG" className={classes.photo1} alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="/novels3.PNG" className={classes.photo1} alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="/novels4.PNG" className={classes.photo1} alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</Fragment>
    )
}

export default NovelCategory;