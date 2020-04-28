import React from 'react';
import Banner from '../Images/banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Button, ButtonToolbar } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <Container>
      <div id="call-to-action">
        <h1>Looking for a Forever Friend?</h1>
        <ButtonToolbar id="adopt-now">
          <Button variant="primary" size="lg">
            <Link to="/adoptme"> Adopt Now </Link>
          </Button>
        </ButtonToolbar>
      </div>
      <div className="row justify-content-md-center">
        <Image src={Banner} className="banner-image" alt="banner-image" fluid />
      </div>
    </Container>
  );
};

export default HomeBanner;
