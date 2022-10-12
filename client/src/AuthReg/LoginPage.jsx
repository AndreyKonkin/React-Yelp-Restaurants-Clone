import React, { useContext } from 'react';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { UserContext } from '../Context/UserContex';

export default function LoginPage() {
  const { logHandler } = useContext(UserContext);
  return (
    <Row>
      <Col>
        <Form onSubmit={(e) => logHandler(e, Object.fromEntries(new FormData(e.target)))}>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Label for="examplePassword">
              Password
            </Label>
          </FormGroup>
          <Button>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
