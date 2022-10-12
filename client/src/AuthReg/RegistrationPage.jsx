import React, { useContext } from 'react';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { UserContext } from '../Context/UserContex';

export default function RegistrationPage() {
  const { regHandler } = useContext(UserContext);
  return (
    <Row>
      <Col>
        <Form onSubmit={(e) => regHandler(e, Object.fromEntries(new FormData(e.target)))}>
          <FormGroup floating>
            <Input
              id="exampleName"
              name="name"
              placeholder="Name"
              type="text"
            />
            <Label for="exampleName">
              Name
            </Label>
          </FormGroup>
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
          <Button>Knopka</Button>
        </Form>
      </Col>
    </Row>
  );
}
