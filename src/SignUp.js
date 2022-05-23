import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const handleSubmit = () => alert("You submitted successfully");
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form className="myForm1" onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    placeholder="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    required
                  />
                  <br />
                  <MDBInput
                    placeholder="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    required
                  />
                  <br />
                  <MDBInput
                    placeholder="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    required
                  />
                  <br />
                  <MDBInput
                    placeholder="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    required
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <Button color="cyan" type="submit">
                    Register
                  </Button>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
