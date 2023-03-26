// SitePage.js

import { Container, Row, Col, Button } from 'react-bootstrap';

import { useRoutes } from 'src/hooks';

function SitePage() {
  const { handleSignInRoute } = useRoutes().useSignInRoute();
  const { handleSignUpRoute } = useRoutes().useSignUpRoute();

  return (
    <Container fluid>
      <div className="mx-auto d-flex align-items-center justify-content-center">
        <div className="w-100">
          <Row>
            <Col>
              <Button
                className="w-100 my-1 text-white"
                size="lg"
                variant="primary"
                onClick={handleSignInRoute}
              >
                <div>
                  <span className="fw-bold fs-5">Log into your account</span>
                </div>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="w-100 my-1"
                size="lg"
                variant="outline-primary"
                onClick={handleSignUpRoute}
              >
                <div>
                  <span className="fw-bold fs-5">Create an account</span>
                </div>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default SitePage;
