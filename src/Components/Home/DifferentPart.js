import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import differnet from "../../Assets/Data/DifferentPart.json";

const DifferentPart = () => {
  return (
    <div className="different_part py-2 py-lg-5">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="text-primary text-center mb-3 mb-lg-5">
              What Make US Different
            </h2>
          </Col>
          {differnet.map((item, index) => (
            <Col lg={4} key={index} className="col-12 col-lg-4 text-center text-lg-start">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <img
                    src={require(`../../Assets/images/different-part/${item.img}.webp`)}
                    alt=""
                  />
                </div>
                <div className="col-12 col-lg-9">
                  <span className="stroke subtitle-1-b mb-1">{item.no}</span>
                  <h4 className="text-primary subtitle-2 mb-2">
                    {item.title}
                  </h4>
                  <p className="icon body-text">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DifferentPart;
