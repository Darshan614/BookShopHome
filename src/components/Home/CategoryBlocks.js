import classes from "./CategoryBlocks.module.css";

function CategoryBlocks() {
  return (
    <div className={classes.blocks}>
      <div class="container">
        <div class="row row-cols-1 row-cols-5 g-4">
          <div class="col">
            <div class="card h-20 border-0">
              {/* <img src="..." class="card-img-top" alt="10"></img> */}
              <div className={classes.block}>9</div>
              <div>
                <p className={classes.title}>Class IX</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-20 border-0">
              {/* <img src="..." class="card-img-top" alt="10"></img> */}
              <div className={classes.block}>10</div>
              <div>
                <p className={classes.title}>Class X</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-20 border-0">
              {/* <img src="..." class="card-img-top" alt="10"></img> */}
              <div className={classes.block}>11</div>
              <div>
                <p className={classes.title}>Class XI</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              {/* <img src="..." class="card-img-top" alt="9"></img> */}
              <div className={classes.block}>12</div>
              <div>
                <p className={classes.title}>Class XII</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              {/* <img src="..." class="card-img-top" alt="8"></img> */}
              <div className={classes.block}>1-8</div>
              <div>
                <p className={classes.title}>Class 1-8</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  for second row  */}

      <div class="container">
        <div class="row row-cols-1 row-cols-5 g-4">
          <div class="col">
            <div class="card h-20 border-0">
              {/* <img src="..." class="card-img-top" alt="10"></img> */}
              <div className={classes.exams}>IIT</div>
              <div>
                <p className={classes.title}>IIT JEE</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-20 border-0">
              {/* <img src="..." class="card-img-top" alt="10"></img> */}
              <div className={classes.exams}>NEET</div>
              <div>
                <p className={classes.title}>NEET</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-20 border-0">
              {/* <img src="..." class="card-img-top" alt="10"></img> */}
              <div className={classes.exams}>ICSE</div>
              <div>
                <p className={classes.title}>ICSE</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              {/* <img src="..." class="card-img-top" alt="9"></img> */}
              <div className={classes.exams}>Govt.</div>
              <div>
                <p className={classes.title}>GOVT</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              {/* <img src="..." class="card-img-top" alt="8"></img> */}
              <div className={classes.exams}>ENGG.</div>
              <div>
                <p className={classes.title}>ENGG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBlocks;
