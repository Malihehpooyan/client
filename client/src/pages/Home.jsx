import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindBikeForm from "../components/UI/FindBikeForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import bikeData from "../assets/data/bikeData";
import BikeItem from "../components/UI/BikeItem";

import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";
import PaymentMethod from "../components/UI/PaymentMethod";
import BookingForm from "../components/UI/BookingForm";


const Home = () => {
    return (
      <Helmet title="Home">
        {/*  hero section */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__bikes-left">
                  <h2>Find your bike here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindBikeForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

       {/* about section  */}
       <AboutSection />

 {/*  services section  */}
 <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>


 {/* =========== bike offer section ============= */}
 <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__subtitle">Our Bikes</h2>
              
            </Col>

            {bikeData.slice(0, 6).map((item) => (
              <BikeItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>


        <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" >
          </Col>
        </Row>
      </Container>
    </section>

      <BookingForm />


   
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
             
            </Col>
          </Row>
        </Container>
      </section>

      <PaymentMethod />



      </section>




      {/*  testimonial section  */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
 {/* blog section */}
 <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>


      </Helmet>
  );
};

      export default Home;