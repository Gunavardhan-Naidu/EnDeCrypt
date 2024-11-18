
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';


function header() {
  return (
    <nav className="navbar">
    <div className="navbar-brand">EnDecrypt</div>
    <div className="navbar-links">
      <a href="#home">Home</a>
      <a href="#pricing">Pricing</a>
      <a href="#account">Account</a>
    </div>
  </nav>
  );
}

export default header;