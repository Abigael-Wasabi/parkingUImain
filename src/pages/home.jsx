import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from '../layouts/footer';
import NavB from '../layouts/navB';

function Home() {
  return (
    <div>
      <NavB/>
      <div className=" d-flex justify-content-center"><Footer/></div>
      <Link to="/signup"><Button>GET STARTED</Button></Link>
    </div>
  )
}

export default Home;