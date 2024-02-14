import React  from "react";
import styles from "./partner.module.scss";


function Partner() {
  

  return (
    <>
      {" "}
      <div className={styles.wrapper}>
     <div  className={styles.partner}>
       <h1>Trusted by Top  Hospitals</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br/>
       facilisis eleifend quam, non efficitur nisi mattis quis. </p>
         
         </div>
    <div className={styles.partnerLogo}>
       
       <img  src={require("../images/logopartner2.png")} style={{marginLeft: "8%",
    marginTop: "2%"}}/>
          <img  src={require("../images/logopartner1.png")} style={{
    marginTop: "2%"}}/>
          <img  src={require("../images/logopartner2.png")} style={{marginLeft: "8%",
    marginTop: "2%"}}/>
       
   </div>
    
   
</div>
     </>
  );
}

export default Partner;
