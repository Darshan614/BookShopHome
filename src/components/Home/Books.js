import React from 'react';
import Card from './Card';
import classes from './Books.module.css';

function Books(){
    const noveldata = [
        {
          id: 1,
          title: "Zero to One Notes By Peter Thiel",
          price: "275",
          originalprice: "550",
          discount: "50.0 % off",
          imgUrl: "/Zero to One Notes By Peter Thiel.PNG"
        },
        {
          id: 2,
          title: "Harry Potter & The cursed Child",
          price: 449,
          originalprice: "889",
          discount: "50.0 % off",
          imgUrl: "/Harry Potter & The cursed Child.PNG"
        },
        {
          id: 3,
          title: "Dollar Bahu by Sudha Murthy",
          price: 150,
          originalprice: "250",
          discount: "50.0 % off",
          imgUrl: "/Dollar Bahu by Sudha Murthy.PNG"
        },
        {
          id: 4,
          title: "Will you still love me? by Ravinder",
          price: 139,
          originalprice: "199",
          discount: "50.0 % off",
          imgUrl: "/Will you still love me by Ravinder.PNG"
        },
        {
          id: 5,
          title: "Hyperfocus by Chris Bailey",
          price: 250,
          originalprice: "1299",
          discount: "50.0 % off",
          imgUrl: "/Hyperfocus by Chris Bailey.PNG"
        },
        {
          id: 6,
          title: "Sapiens A brief History of ",
          price: 299,
          originalprice: "599",
          discount: "50.0 % off",
          imgUrl: "/Sapiens A brief History of.PNG"
        }
      ];
      const term1data = [
        {
          id: 1,
          title: "Oswaal CBSE Class 10 English",
          price: "275",
          originalprice: "550",
          discount: "50.0 % off",
          imgUrl: "/Oswaal CBSE Class 10 English.PNG"
        },
        {
          id: 2,
          title: "Oswaal CBSE Class 10 Math",
          price: 449,
          originalprice: "889",
          discount: "50.0 % off",
          imgUrl: "/Oswaal CBSE Class 10 Math.PNG"
        },
        {
          id: 3,
          title: "Oswaal CBSE Class 11 MCQ",
          price: 150,
          originalprice: "250",
          discount: "50.0 % off",
          imgUrl: "/Oswaal CBSE Class 11 MCQ.PNG"
        },
        {
          id: 4,
          title: "Educart CBSE Term 1 Sample Papers",
          price: 139,
          originalprice: "199",
          discount: "50.0 % off",
          imgUrl: "/Educart CBSE Term 1 Sample Papers.PNG"
        },
        {
          id: 5,
          title: "Oswaal CBSE Class 10 Term 1 MCQ",
          price: 250,
          originalprice: "1299",
          discount: "50.0 % off",
          imgUrl: "/Oswaal CBSE Class 10 Term 1 MCQ.PNG"
        },
        {
          id: 6,
          title: "Mastermind CBSE Term 1 Class 12",
          price: 299,
          originalprice: "599",
          discount: "50.0 % off",
          imgUrl: "/Mastermind CBSE Term 1 Class 12.PNG"
        }
      ];
      const iscboarddata = [
        {
          id: 1,
          title: "ISC Physics Class 12 Kumar Mittal",
          price: "275",
          originalprice: "550",
          discount: "50.0 % off",
          imgUrl: "/ISC Physics Class 12 Kumar Mittal.PNG"
        },
        {
          id: 2,
          title: "ISC Chemistry Class 11 HC Srivastava",
          price: 449,
          originalprice: "889",
          discount: "50.0 % off",
          imgUrl: "/ISC Chemistry Class 11 HC Srivastava.PNG"
        },
        {
          id: 3,
          title: "ISC Mathematics Class 12",
          price: 150,
          originalprice: "250",
          discount: "50.0 % off",
          imgUrl: "/ISC Mathematics Class 12.PNG"
        },
        {
          id: 4,
          title: "ISC Class 11 Mathematics ML ",
          price: 139,
          originalprice: "199",
          discount: "50.0 % off",
          imgUrl: "/ISC Class 11 Mathematics ML.PNG"
        },
        {
          id: 5,
          title: "Nootan ISC Chemistry Class 12",
          price: 250,
          originalprice: "1299",
          discount: "50.0 % off",
          imgUrl: "/Nootan ISC Chemistry Class 12.PNG"
        }
      ];
    return (
        <div class="container">
            <h2 className={classes.title}>Featured novels</h2>
             <Card data={noveldata}/> 
             <h2 className={classes.title}>Term 1 Exams 2021</h2>
             <Card data={term1data}/> 
             <h2 className={classes.title}>ISC Board Best Picks</h2>
             <Card data={iscboarddata}/> 
        </div>
 
    )
}

export default Books;