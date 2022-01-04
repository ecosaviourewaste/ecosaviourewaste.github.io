import {
  mdiArrowRight,
  mdiCircle,
  mdiDatabaseLockOutline,
  mdiHeadLightbulbOutline,
  mdiHomeAssistant,
  mdiLaptop,
  mdiNotebookEditOutline,
  mdiRecycle,
  mdiRecycleVariant,
  mdiTabletCellphone,
} from '@mdi/js';
import Icon, { Stack } from '@mdi/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import ImageSlider from '../Components/ImageSlider';
import plant from '../img/plant.svg';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { animateCSS } from '../helpers';

const stats = [
  {
    icon: mdiLaptop,
    title: 'Laptops Recycled',
    count: 144690,

    color: '#3e87c5',
  },
  {
    icon: mdiTabletCellphone,
    title: 'Mobiles Recycled',
    count: 88550,

    color: '#d00203',
  },
  {
    icon: mdiHomeAssistant,
    title: 'Home Appliances',
    count: 220580,

    color: '#feba05',
  },
  {
    icon: mdiRecycle,
    title: 'E-Waste Recycled',
    count: 92819,

    color: '#36794f',
  },
];
const services = [
  {
    icon: mdiRecycleVariant,
    title: 'Extended Product Recycler',
    text: 'Government of india has introduced an extended producer responsibility in the e-waste management rules, 2016.',
  },
  {
    icon: mdiNotebookEditOutline,
    title: 'Reverse Logistics',
    text: 'The process of moving goods from their typical final destination for the purpose of capturing value.',
  },
  {
    icon: mdiDatabaseLockOutline,
    title: 'Data Destruction',
    text: 'A one-stop solution for protecting personal information as well as handling your e-recycling needs. ',
  },
  {
    icon: mdiHeadLightbulbOutline,
    title: 'Another Title',
    text: 'Government of india has introduced an extended producer responsibility in the e-waste management rules, 2016.',
  },
];

const Home = ({ isSmall }) => {
  useEffect(() => {
    animateCSS('#homeText', 'fadeInUp');
    animateCSS('#plant', 'fadeInRight').then(() => {
      animateCSS('#imageSlider', 'fadeIn');
      document.querySelector('#imageSlider').classList.remove('hidden');
    });
  }, []);

  const [aboutBoxVis, setAboutBoxVix] = useState(false);
  const [serviceBoxVis, setServiceBoxVis] = useState(false);

  useEffect(() => {
    if (aboutBoxVis) {
      animateCSS('#aboutbox', 'fadeInLeft');
      animateCSS('#statbox', 'fadeInRight');
      document.querySelector('#aboutbox').classList.remove('hidden');
      document.querySelector('#statbox').classList.remove('hidden');
    }
  }, [aboutBoxVis]);

  useEffect(() => {
    if (serviceBoxVis) {
      animateCSS('#servicehead', 'fadeInUp').then(() => {
        animateCSS('#servicedata', 'fadeInDown');
        document.querySelector('#servicedata').classList.remove('hidden');
      });
      document.querySelector('#servicehead').classList.remove('hidden');
    }
  }, [serviceBoxVis]);

  return (
    <>
      <div className="home-bg ">
        <div style={{ position: 'relative', overflowX: 'hidden' }}>
          <div id="plant" className="animate__delay-1s">
            <img
              alt=""
              src={plant}
              className="d-none d-lg-block"
              style={{
                width: isSmall ? '45vw' : '400px',
                transform: 'scaleX(-1)',
                position: 'absolute',
                right: 0,
                top: '4rem',
              }}
            />
          </div>

          <Container
            fluid
            className="px-lg-5 pt-lg-5 mt-5 animate__delay-1s"
            id="homeText"
          >
            <h2 className="font-weight-light mb-0 display-4">
              E-Waste Recycling
            </h2>
            <h3
              className={`font-weight-bold mt-0  ${
                isSmall ? 'display-4' : 'display-3 widen'
              }`}
            >
              SOLUTIONS
            </h3>
            <h5
              style={{ maxWidth: '700px', fontSize: '1.5rem' }}
              className="mb-4 pb-2"
            >
              Our simple process of E-Waste disposal can be your next step
              closer to sustainable future.
            </h5>
            <Link to="#">
              <button
                className="d-flex align-items-center px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light btn btn-dark btn-lg"
                style={{ fontSize: '15px' }}
              >
                Know More{' '}
                <Icon path={mdiArrowRight} className="ml-2" size={1} />
              </button>
            </Link>
          </Container>
        </div>
        <ImageSlider
          id="imageSlider"
          className="mt-4 mt-lg-5 animate__animated hidden animate__slow"
        />
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !aboutBoxVis) {
              setAboutBoxVix(true);
            }
          }}
        >
          <Container fluid className="py-4 py-lg-5 px-lg-5">
            <Row>
              <Col
                lg="5"
                id="aboutbox"
                className={`${isSmall ? '' : 'hidden'}  animate__faster`}
              >
                <div className="mb-4">
                  <h1 className="font-weight-bold display-4 text-center text-lg-left">
                    About Us
                  </h1>
                  <div>
                    <hr
                      style={{
                        margin: '0',
                        width: isSmall ? '50%' : '5rem',
                        float: 'left',
                        background: '#36794F',
                      }}
                    />
                    <hr
                      style={{
                        margin: '0',
                        width: isSmall ? '50%' : '5rem',
                        float: 'left',
                        background: '#FCBDBD',
                      }}
                    />
                  </div>
                </div>
                <p className="text-left lead">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. <br />
                  <br />
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                  Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </p>
              </Col>
              <Col
                lg={{
                  size: 6,
                  offset: 1,
                }}
                id="statbox"
                className={`mt-5 mt-lg-0 ${
                  isSmall ? '' : 'hidden'
                }  animate__faster`}
                style={{ overflow: 'hidden' }}
              >
                <Row>
                  {stats.map(({ icon, title, count, color }) => (
                    <Col key={title} xs="6" className="mb-5 text-center">
                      <Stack size={6}>
                        <Icon path={mdiCircle} size={6} color={color} />
                        <Icon path={icon} size={3} color="#fffffa" />
                      </Stack>
                      <div className="d-flex align-items-center justify-content-center">
                        <CountUp
                          end={count}
                          start={0}
                          startOnMount={false}
                          duration={2}
                          delay={0.1}
                          redraw={true}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span
                                className="h1 font-weight-bold mb-0 d-block"
                                style={{ color: color }}
                                ref={countUpRef}
                              />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                        <sup
                          className="h3 font-weight-bold"
                          style={{ color: color }}
                        >
                          +
                        </sup>
                      </div>

                      <p className="text-uppercase font-weight-light h5 mt-1">
                        {title}
                      </p>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </VisibilitySensor>
      </div>
      <div className="services-bg">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !serviceBoxVis) {
              setServiceBoxVis(true);
            }
          }}
        >
          <Container fluid className="px-lg-5" style={{ overflow: 'hidden' }}>
            <div className="py-4 py-lg-5 mt-4 mb-5">
              <div
                id="servicehead"
                className={`${isSmall ? '' : 'hidden'}  animate__faster`}
              >
                <h1 className="font-weight-bold display-4 text-center">
                  Our Services
                </h1>
                <div className="d-flex align-items-center justify-content-center">
                  <hr
                    style={{
                      margin: '0',
                      width: isSmall ? '50%' : '5rem',
                      background: '#36794F',
                    }}
                  />
                  <hr
                    style={{
                      margin: '0',
                      width: isSmall ? '50%' : '5rem',
                      background: '#FCBDBD',
                    }}
                  />
                </div>
              </div>
              <Row
                id="servicedata"
                className={`d-flex justify-content-center px-0 px-lg-5 ${
                  isSmall ? '' : 'hidden'
                }  animate__faster`}
              >
                {services.map(({ icon, title, text }) => (
                  <div key={title} className="col-12 col-lg-3 text-center mt-5">
                    <div
                      className="rounded-lg py-5 h-100"
                      style={{ background: 'rgba(63, 61, 86, 0.2)' }}
                    >
                      <div className="px-4 text-dark">
                        <Icon path={icon} size={4} color="#36794F" />
                        <p className="text-uppercase font-weight-bold widen head mb-3 mt-1">
                          {title}
                        </p>
                        <p className="font-weight-light mb-0">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Row>
            </div>
          </Container>
        </VisibilitySensor>
      </div>
    </>
  );
};
export default Home;