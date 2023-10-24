// import {Link} from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// function MainNavbar(){
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container fluid>
//         <Link>
//             <img
//                 className="m-2" 
//                 style={{height: '40px'}}
//                 src={require("../assets/logoEstigma.png")} 
//                 alt="logo" 
//             />
//         </Link>
//         <Navbar.Brand as={Link} to="/">Mi Empresa</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         {/* Comentario */}
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{maxHeight:'100px'}}
//             navbarScroll
//           >
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//             <Nav.Link as={Link} to="/services">Services</Nav.Link>
//             <Nav.Link as={Link} to="/store">Store</Nav.Link>
//             <Nav.Link as={Link} to="/login">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };


// export default MainNavbar;



//--------------- Nav opcional ---------------//
import {Link} from "react-router-dom";
import '../styles/MainNavbar.css';
import logoEstigma from'../assets/logoEstigma.png'


function MainNavbar(){
  return (
    <header>
      <nav>
        <section class="contenedor nav">
          <div class="logo">
            <Link to="/">
                <img src={logoEstigma} alt="logo"/>
            </Link>
          </div>
          <div class="enlaces-header">
            <Link className="anch" to="/">Home</Link>
            <Link className="anch" to="/about">About</Link>
            <Link className="anch" to="/services">Services</Link>
            <Link className="anch" to="/store">Store</Link>
            <Link className="anch" to="/login">Login</Link>

            {/* {isAuthenticated ? (
              <button onClick={onLogout}>Cerrar Sesión</button>
            ) : null} */}
          </div>
          <div class="hamburguer">
              <i class="fa-solid fa-bars"></i>
          </div>
        </section>
      </nav>
    </header>
  );
};


export default MainNavbar;
