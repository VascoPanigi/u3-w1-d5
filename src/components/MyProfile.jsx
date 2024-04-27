import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePicture from "../assets/avatar.png";

const MyProfile = () => {
  return (
    <div id="profile-body">
      <Container>
        <Row className="justify-content-center text-white profile-section-container">
          <Col lg={7} sm={12}>
            <div className="edit-title-container mb-4">
              <h1>Edit profile</h1>
            </div>
            <hr className="horizontal-rule" />

            <div className="profile-content-container">
              <Row>
                <Col sm={4}>
                  <div className="profile-img-container">
                    <img src={profilePicture} alt="your profile picture" />
                  </div>
                  <div className="pencil-container d-inline-block">
                    <a href="#" className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        className="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                      </svg>
                    </a>
                  </div>
                </Col>
                <Col sm={8}>
                  <form>
                    <fieldset disabled>
                      <div className="mb-3">
                        <input
                          type="text"
                          id="disabledTextInput"
                          className="form-control"
                          placeholder="Epicode Student"
                        />
                      </div>
                    </fieldset>
                  </form>
                  <div className="dropdown-container">
                    <h4>Language:</h4>
                    <Dropdown>
                      <Dropdown.Toggle variant="secondary" id="languages-btn">
                        English
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Italiano</Dropdown.Item>
                        <Dropdown.Item href="#">Norsk</Dropdown.Item>
                        <Dropdown.Item href="#">Svenska</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <hr className="horizontal-rule" />

                  <div className="maturity-settings-container">
                    <h4>Maturity Settings:</h4>
                    <Dropdown>
                      <Dropdown.Toggle variant="secondary" disabled className="text-white">
                        ALL MATURITY RATINGS
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">oh no</Dropdown.Item>
                        <Dropdown.Item href="#">aaaaa</Dropdown.Item>
                        <Dropdown.Item href="#">oddiooo</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <p>
                      Show titles of <span className="fw-bold">all maturity ratings</span> for this profile
                    </p>
                    <Button variant="dark">EDIT</Button>
                    <hr className="horizontal-rule" />
                  </div>
                  <div className="autoplay-controls-container">
                    <h4>Autoplay controls</h4>

                    <div className="form-check d-flex align-items-center">
                      <input className="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Autoplay next episode in a series on all devices
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input className="form-check-input bg-dark" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Autoplay previews while browsing on all devices
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <hr className="horizontal-rule" />

            <div className="buttons-container d-flex justify-content-between">
              <Col xs={3}>
                <Button variant="dark">SAVE</Button>
              </Col>
              <Col xs={3}>
                <Button variant="dark">CANCEL</Button>
              </Col>
              <Button variant="dark">DELETE PROFILE</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfile;
