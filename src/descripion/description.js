import React  from "react";
import styles from "./description.module.scss";


function Description() {
  

  return (
    <>
      {" "}
      <div className={styles.wrapper}>
     <div  className={styles.logo}>
        <a href="https://kardia.com/">
          <img  src={require("../images/kardiamobile.png")} style={{width: "35rem",height: "29rem"}}/>
         </a>
         
         </div>
 <div className={styles.description}>
        <h1>
        Medical Grade ECG <span>at home </span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur <br/>
        nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.</p>

    <div className={styles.buttons}>
        
        <button className={styles.btn}> Buy Now</button>
        <div className={styles.video}>
            <div> <img  src={require("../images/rightarrowicon.png")} style={{width: "26px",height: "2rem"}}/></div>
       
        <span className={styles.videoText}>Watch video</span>
        </div>
        
    </div>
    <div className={styles.devicesolid}>
        
    <div> <img  src={require("../images/deviceSold.png")}/></div>
       
</div>
 </div>
    
   
</div>
     </>
  );
}

export default Description;
