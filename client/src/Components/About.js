import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from 'react-bootstrap';
import Carolina from '../Images/KleinCarolina-photo.jpg';
import Rene from '../Images/BreslauerRene-photo.jpg';
import Tristan from '../Images/FavardTristan-photo.jpg';
import Elias from '../Images/ZabanehElias-photo.jpg';
import RenePets from '../Images/rene-pets.jpg';
import CarolinaPets from '../Images/carolina-pets.jpg';
import TristanPets from '../Images/Tristan-pets.jpg';
import EliasPets from '../Images/elias-pets.jpg';

const About = () => {
  console.log(Carolina);

  let teamMembers = [
    {
      name: 'Carolina',
      city: 'Palma de Mallorca',
      about:
        'I adore all animals and truly enjoyed collaborating on the creation of the FurEver App',
      future:
        'I look forward to becoming a Software Engineer based in Miami, where I can continue to work with like-minded people',
      image: Carolina,
      pets: CarolinaPets
    },
    {
      name: 'Elias',
      city: 'Mexico City',
      about:
        'I have a natural love of all animals mixed with an appreciation for the importance of biodiversity',
      future: 'In the future I would like to be a beach bum and learn to surf',
      image: Elias,
      pets: EliasPets
    },
    {
      name: 'Rene',
      city: 'Miami',
      about:
        'Having grown up around cats, dogs, and horses, animals have always been an important part of my life. I now have three pet rabbits who destroy everything they touch, but I love them anyways',
      future:
        'I look forward to growing my coding and design skills, while making the world a more animated place',
      image: Rene,
      pets: RenePets
    },
    {
      name: 'Tristan',
      city: 'Miami',
      about: 'I like computers, games, anime , music , manga, and movies',
      future:
        'In the future I want to be part of a team that creates the next big thing',
      image: Tristan,
      pets: TristanPets
    }
  ];
  return (
    <div>
      <div className="team-member-container d-flex flex-column align-items-center text-center">
        <h1 className="about-title text-center">About Us</h1>
      </div>
      <div className="aboutContainer">
        {teamMembers.map(teamMember => {
          return (
            <div className="d-flex justify-content">
              <Container className="flip-container">
                <Col>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          className="team-member-image"
                          src={teamMember.image}
                          alt="Team"
                        ></img>
                      </div>
                      <div className="flip-card-back">
                        <img
                          className="pets-image"
                          src={teamMember.pets}
                          alt="about me text"
                        ></img>

                        <h1 className="team-member-name">{`${teamMember.name}`}</h1>
                        <p className="team-member-bio">{`I'm from ${teamMember.city}. ${teamMember.about}. ${teamMember.future}.`}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Container>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
