import React  from "react";
import styles from "./footer.module.scss";



function Footer() {
 

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.footerContainer}`}>
       
        <div className={styles.sections}>
          <div className={styles.sectionData}>
            
            <a href="https://kardia.com/">
            <img  src={require("../images/kardialogo.png")} style={{width: "7rem"}}/>
           </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Morbi sit amet neque tortor. </p>
         
               <div className={styles.media}>

                {
                  ["You tube.png","Twitter.png","Ig.png","FB.png"].map((icon, index) => {
                      return (
                        <div key={index}>
                          
                            <a target="_blank" href={"#"}>
                              <img
                                src={require(`../images/${icon}`)}
                                width={"32px"}
                                height={"32px"}
                              />
                            </a>
                          
                        </div>
                      );
                    })
                  }
              </div>
          </div>
          <div className={styles.sectionData} style={{width:"7rem"}}>
            <h6>Quick Links</h6>

            
            {["About Us"," How to Order","Testmonial"].map(link=><p
               
               >
                {link}
                
               </p>)}
             
              
          </div>
          <div className={styles.sectionData}>
            <h6>Contact Us</h6>
            <div className={styles.contactDetails}>
            
              <div className={styles.contact}>
               
              <img
              src={require(`../images/mail.png`)}
                                width={"32px"}
                                height={"32px"}
                              />
                <div className={styles.info}>
                  Hello@website.com
                </div>
              </div>
              <div className={styles.contact}>
              <img
              src={require(`../images/location.png`)}
                                width={"32px"}
                                height={"32px"}
                              />
                <div className={styles.info}>
                  <div className={styles.text}>Lorem ipsum dolor</div>
                 
                </div>
              </div>
              <div className={styles.contact}>
              <img
              src={require(`../images/phone.png`)}
                                width={"32px"}
                                height={"32px"}
                              />
                <div className={styles.info}>
                  <div className={styles.text}>+02 5421234560</div>
                 
                </div>
              </div>
             
             
             
            </div>
          </div>
          <div className={styles.sectionData}>
            
            <div className={styles.contactDetails}>
              
                <div className={styles.sendLink}>
                <h6>News letter</h6>
                <div className={styles.linkSend}>
                  <input placeholder="Enter Your Mail" />
                  <div className={styles.button}>SUBSCRIBE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
     
    
    </div>
  );
}

export default Footer;
