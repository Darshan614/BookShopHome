import classes from "./Card.module.css";

function Card(prop) {
  const Cardo = props => (
    <div class="col-md-3">
      <div className={classes.icard}>
        <div className={classes.image}>
          <img src={props.imgUrl} height="120" className={classes.image} alt="10"></img>
        </div>
        <p className={classes.bookname}>{props.title}</p>
        <div className={classes.price2}>
          <span className={classes.price}>
            <span> &#8377;{props.price}</span>
          </span>{" "}
          <span className={classes.originalprice}>
            <s>{props.originalprice}</s>
          </span>
        </div>
      </div>
    </div>
  );

  const CardContainer = props => (
    <div className={classes.cardscontainer}>
      {props.cards.map(card => (
        <Cardo
          title={card.title}
          originalprice={card.originalprice}
          price={card.price}
          content={card.content}
          imgUrl={card.imgUrl}
        />
      ))}
    </div>
  );
  
  return (
    <div class="row">
      <CardContainer cards={prop.data} />
    </div>
  );
}

export default Card;
