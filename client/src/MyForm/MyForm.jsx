/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { PostsContext } from '../Context/PostContext';

export default function MyForm() {
  const { handleChange, handleSubmit, input } = useContext(PostsContext);
  return (
    <Row>
      <Col>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="postTitle">
              add Cafe
            </Label>
            <Input
              id="postTitle"
              name="title"
              placeholder="..."
              type="text"
              value={input}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Send</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
}
