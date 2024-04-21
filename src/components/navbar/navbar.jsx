import "./navbar.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { Link } from 'react-scroll'

function Navbar() {

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <ul className="navbarItemsContainer">
            <li className="navbarItems"><Link to="/" spy={true} smooth={true} offset={-100} duration={500}>PLAY</Link></li>
            <li className="navbarItems"><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>ABOUT</Link></li>
            <li className="navbarItems"><Link to="ranking" spy={true} smooth={true} offset={-100} duration={500}>RANKING</Link></li>
            <li className="navbarItems"><Link to="/" spy={true} smooth={true} offset={-100} duration={500}>GALIENOMICS</Link></li>
          </ul>
        </div>
        <div className="rrssContainer">
          <button className="rrssButton">
            <FaXTwitter style={{ color: "black", fontSize: "25px" }} />
          </button>
          <button className="rrssButton">
            <FaPaperPlane style={{ color: "black", fontSize: "25px" }} />
          </button>
          <button className="rrssButton">
            <FaDiscord style={{ color: "black", fontSize: "25px" }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
