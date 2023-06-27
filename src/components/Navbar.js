import logo from "../images/logo.svg";
import { Pagelink,SocialLink } from "./Data";
const Navbar=()=>{

    return(
        <section>
            <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          
          {Pagelink.map((link)=>{
            return(<li Key={link.id}>
                <a href={link.href} className="nav-link"> {link.text}</a>
              </li>)
            
          })}
          {/* <li>
            <a href="#home" className="nav-link"> home </a>
          </li>

          <li>
            <a href="#about" className="nav-link"> about </a>
          </li>

          <li>
            <a href="#services" className="nav-link"> services </a>
          </li>

          <li>
            <a href="#tours" className="nav-link"> tours</a>
          </li> */}
        </ul>

        <ul class="nav-icons">
            {SocialLink.map((link)=>{
     const {id,icon,href}=link;
     return(
      <li key={id}>
            <a href={href} 
            target="_blank" 
            rel="noreferrer"
            className="nav-icon"
              ><i className={icon}></i ></a>
          </li>

     )})};
          {/* <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i class="fab fa-squarespace"></i
            ></a>
          </li> */}
        </ul>
      </div>
    </nav>

        </section>
    )}
export default Navbar;