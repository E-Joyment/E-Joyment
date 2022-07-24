import twiIcon from  "../../assets/twi.png";
import facIcon from  "../../assets/fac.png";
import insIcon from  "../../assets/ins.png";
import pinIcon from  "../../assets/pin.png";
import "./footer.css"
//import {FacebookIcon, PinterestIcon,TwitterIcon } from 'react-share';

export default function Footer(){
  return (
  <section >
      <div className="footerContainer">
        <div className="detail">
          <div className="share">
          <div className="footerLogo">
            <div className="footerLogoA">A</div>
            <div className="footerLogoL">Atelier</div>
          </div>
              <div className="footerIcons">
                <div className="footerIconDiv"><img className="footerIcon" src={twiIcon} alt=""/></div>
                <div className="footerIconDiv"><img className="footerIcon" src={facIcon} alt=""/></div>
                <div className="footerIconDiv"><img className="footerIcon" src={insIcon} alt=""/></div>
                <div className="footerIconDiv"><img className="footerIcon" src={pinIcon} alt=""/></div>
              </div>
          </div>
          <div className="account">
            <div className="title">Atelier</div>
            <span>Create Account</span>
            <span>Login</span>
            <span>Status</span>
          </div>
          <div className="about">
            <div className="title">Company</div>
            <span>About</span>
            <span>Community</span>
            <span>Contact</span>
            <span>Career</span>
          </div>
          <div className="resource">
            <div className="title">Resource</div>
            <span>Customer Service</span>
            <span>Help Center</span>
            <span>Blog</span>
          </div>
          <div className="policy">
            <div className="title">Policy</div>
            <span>Terms and Conditions</span>
            <span>Security</span>
            <span>Privacy</span>
          </div>
      </div>
      <div className="copyright">Copyright © 2022</div>
    </div>
  </section>);
};