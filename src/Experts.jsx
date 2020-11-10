import React from "react";
import Card from "./Card.jsx";
import Data from './Data.jsx';
const Experts=()=>{
 return(
   <>
     <div className="container-fluid mb-5">
  <div className="row">
     <div className="col-10 mx-auto">
     <div className="row gy-4 mt-2">
     {
       Data.map((val,ind)=>{
         return<Card key={ind} src={val.src} title={val.title}
         button1={val.b1} button2={val.b2} about={val.About}
         > 
         </Card>
       })
     }
    </div>   
     </div>
     </div>
     </div>
     
   </>
 )
}
export default Experts;

