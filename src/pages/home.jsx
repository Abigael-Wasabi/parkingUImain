import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/footer';
import { Button } from 'react-bootstrap';
import NavB from '../layouts/navB';


const Home = () => {
    
return (
  <div>
    <NavB/>
    <div className=" d-flex justify-content-center"><Footer/></div>

      <div className="app-background"> 
            <Link to="/signup">
                <Button>GET STARTED</Button>
            </Link>
        </div>
      </div>
  );
};

export default Home;
