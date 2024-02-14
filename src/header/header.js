import React  from "react";
import styles from "./header.module.scss";


function Header() {
  

  return (
    <>
      {" "}
      <div className={styles.wrapper}>
    <div  className={styles.logo}>
        <a href="https://kardia.com/">
          <img  src={require("../images/kardialogo.png")} style={{width: "7rem"}}/>
         </a></div>
    <div className={styles.nav}>
        <ul>
            <li >Home</li>
            <li>About Us</li>
            <li>Products <img  src={require("../images/downarrow.png")} style={{width: "19px"}}/></li>
            <li>Conact Us</li>
        </ul>
    </div>
    <div  className={styles.button}>
    <button className={styles.btn}> Buy Now</button>
    </div>
</div>
     </>
  );
}

export default Header;
