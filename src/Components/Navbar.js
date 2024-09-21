import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
const Navbar = () => {
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} class="nav-logo" alt="backroads" />
        <button type="button" class="nav-toggle" id="nav-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      {/* <!-- left this comment on purpose --> */}
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="nav-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} target="_blank" className="nav-icon">
                rel="noopener")
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </nav>;
};

export default Navbar;
