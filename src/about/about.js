import React  from "react";
import styles from "./about.module.scss";


function About() {
  

  return (
    <>
      {" "}
      <div className={styles.wrapper}>
     
       <h1> Kardia By Alivecor</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien,
         cursus sed consectetur nec, tincidunt ac metus.  </p>

         <div className={styles.cardWrapper}>
        {[{title:"23",description:"Countries",subTitle:"+"},
        {title:"9600",description:"Hospitals",subTitle:"+"},
        {title:"5-",description:"Reviews on Amazon",subTitle:"Stars"},
        {title:"2M",description:"ECGs Daily",subTitle:"+"}].map((card, index) => (
          <div className={styles.card} >
            
           

            <div
                      key={index}
                      className={`${styles.items}`}
                    >
                      <div
                        className={styles.title}
                        style={{ paddingBottom: "0" }}
                      >
                        <span>{card.title}</span>
                        <span style={{color:"#6387C5"}}>{card.subTitle}</span>
                      </div>
                      <div className={styles.description}>{card.description}</div>
                    </div>
             
    
          </div>
        ))}
      </div>
         
</div>
     </>
  );
}

export default About;
