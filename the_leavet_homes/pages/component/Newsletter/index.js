import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import styles from "../../../styles/main.module.css";
import Image from "next/image";
import logo from "../../../pages/assets/logo.png";
import Link from "next/link";

export default function Index() {
  return (
    <Container
      fluid
      className={styles.catelogueHolder}
      style={{ background: "#efebeb" }}
    >
      <Container>
        <br></br>
        <h3 className={styles.catelogueHeading}>Subscribe to our newsletter</h3>
        <p className={styles.catelogueDescription}>
          Subscribe to our newsletter to get regular updates on our products and
          offers.
        </p>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Control required type="text" placeholder="Fullname" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Control required type="text" placeholder="Email address" />
          </Form.Group>
          <button className={styles.downloadButton}>Subscribe</button>
        </Row>
      </Container>
    </Container>
  );
}
