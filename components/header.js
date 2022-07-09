import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav' 
import 'bootstrap/dist/css/bootstrap.min.css';


function header(){
    return (
        <div className="header">  
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>

                    <Navbar.Brand 

                        href="/">Home
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link href="./about"> About </Nav.Link>
                        <Nav.Link href="./projects"> Projects </Nav.Link>                        
                        <Nav.Link href="./resume"> CV </Nav.Link>
                        <Nav.Link href="./contact"> Contact </Nav.Link>
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>      
        </div>
    )
}

export default header;