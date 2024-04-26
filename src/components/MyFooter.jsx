import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi"; // Assuming you're using react-icons for Bootstrap icons

const MyFooter = () => (
  <footer>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Row>
            <Col className="mb-2">
              <BiLogoFacebook className="footer-icon me-2" fill="#f5f5f1" />
              <BiLogoInstagram className="footer-icon me-2" fill="#f5f5f1" />
              <BiLogoTwitter className="footer-icon me-2" fill="#f5f5f1" />
              <BiLogoYoutube className="footer-icon" fill="#f5f5f1" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <Col>
              <Row>
                <Col className="footer-links">
                  <Nav.Link href="#" alt="footer link">
                    Audio and Subtitles
                  </Nav.Link>
                  <Nav.Link href="#" alt="footer link">
                    Media Center
                  </Nav.Link>
                  <Nav.Link href="#" alt="footer link">
                    Privacy
                  </Nav.Link>
                  <Nav.Link href="#" alt="footer link">
                    Contact us
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <Nav.Link href="#" alt="footer link">
                    Audio Description
                  </Nav.Link>

                  <Nav.Link href="#" alt="footer link">
                    Investor Relations
                  </Nav.Link>

                  <Nav.Link href="#" alt="footer link">
                    Legal Notices
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <Nav.Link href="#" alt="footer link">
                    Help Center
                  </Nav.Link>

                  <Nav.Link href="#" alt="footer link">
                    Jobs
                  </Nav.Link>

                  <Nav.Link href="#" alt="footer link">
                    Cookie Preferences
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <Nav.Link href="#" alt="footer link">
                    Gift Cards
                  </Nav.Link>

                  <Nav.Link href="#" alt="footer link">
                    Terms of Use
                  </Nav.Link>

                  <Nav.Link href="#" alt="footer link">
                    Corporate Information
                  </Nav.Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button variant="secondary" size="sm" className="footer-button rounded-0 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
