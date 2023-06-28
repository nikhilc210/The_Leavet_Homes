import React from "react";
import { Image, Container } from "react-bootstrap";
import styles from "../../../styles/main.module.css";

export default function Index() {
  return (
    <Container fluid>
      <Image
        src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fluid
        className={styles.banner}
      />
    </Container>
  );
}
