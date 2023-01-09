import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Promotion = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/68761/pexels-photo-68761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Interactive Learning</h3>
            <p>Effective learning and interaction with the online platform</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1698485/pexels-photo-1698485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Access to online lesson repository</h3>
            <p>Gain access to online lesson repository and get along with studies at ease</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>All best teachers at one place</h3>
            <p>
              All best teachers across the country to teach you the best!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <CardGroup>
        <Card>
          <Card.Img
            className="promoCard"
            variant="bottom"
            src="https://pbs.twimg.com/media/E2JFkAIWYAQFBZ5.jpg"
          />
          <Card.Body>
            <Card.Title><h4 align="center">Physics Paper Class</h4></Card.Title>
            <Card.Text>
             <h5 align="center">Nilantha Jayasuriya</h5>
             <p>Physics online paper class for 2022 Students</p>
             <br></br>
             <p>12 model papers with marking schemes every week</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 26 hours ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            className="promoCard"
            variant="top"
            src="https://i.ytimg.com/vi/2y0WiD_SYUM/maxresdefault.jpg"
          />
          <Card.Body>
            <Card.Title><h4 align="center">Chemistry Revision Class</h4></Card.Title>
            <Card.Text>
            <p>Chemistry online Revision class for 2022 Students</p>
             <br></br>
             <p>All the lessons from the begining will be discussed</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 18 hours ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            className="promoCard"
            variant="top"
            src="https://i.ytimg.com/vi/uiWGerB9k_o/maxresdefault.jpg"
          />
          <Card.Body>
            <Card.Title><h4 align="center">Physics Speed Class</h4></Card.Title>
            <Card.Text>
            <p>Physics online speed Revision class for 2022 Students</p>
             <br></br>
             <p>All the lessons from the begining will be discussed along with model papers</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 10 hours ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Promotion;
