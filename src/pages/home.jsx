import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/footer';
import NavB from '../layouts/navB';
import { Row } from 'react-bootstrap';


function Home() {
  return (
    <div>
    <Row>
      <NavB/>
    </Row>
    <Row>
         <Link to="/signup">
            <button >GET STARTED</button>
          </Link>
    </Row>
    <Row>
      <Footer/>
    </Row>
    </div>
    // <div className='container'>
    //   <NavB />
    //   <div className="row">
       
    
       
    //   </div>

      

     

      

    //   <div className="d-flex justify-content-center mt-4">
    //     <Footer />
    //   </div>
    // </div>
  );
}

export default Home;
