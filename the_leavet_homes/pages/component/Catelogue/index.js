import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "../../../styles/main.module.css";
import Image from "next/image";
import logo from "../../../pages/assets/logo.png";
import Link from "next/link";

export default function Index() {
  return (
    <Container fluid className={styles.catelogueHolder}>
      <Container>
        <br></br>
        <h3 className={styles.catelogueHeading}>Download our Catalogue</h3>
        <p className={styles.catelogueDescription}>
          Want a complete list of all our products and features, all in one
          place? Click on the button bellow and get started! Feel free to
          contact us with an queries you might have.
        </p>
        <button className={styles.downloadButton}>Download</button>
      </Container>
    </Container>
  );
}
