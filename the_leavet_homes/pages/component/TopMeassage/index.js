import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../../styles/main.module.css";
export default function Index() {
  return (
    <Container fluid className={styles.topMessageContainer}>
      <p className={styles.topMessage}>
        Hassle-free returns. 30-day postage paid returns
      </p>
    </Container>
  );
}
