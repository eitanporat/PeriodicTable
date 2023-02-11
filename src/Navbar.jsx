import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <>
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid style={{height : "10vh" }}>
        <Navbar.Brand href="#home" style={{alignItems: "middle"}}>         
        <img src="https://ptable.com/icon/ptable-logo.svg" alt="Ptable logo" />
        <span>  of Diseases</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );
}

export default BasicExample;