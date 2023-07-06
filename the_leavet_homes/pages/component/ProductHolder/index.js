import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../../../styles/main.module.css";
import Link from "next/link";

export default function Index(props) {
  return (
    <div>
      <Container>
        <h2 className={styles.productHomeTitle}>{props.title}</h2>
        <Row>
          {props.data.map((item) => {
            return (
              <Col md={3} className={styles.productMainHolder} key={item.id}>
                <Link href={"/product?id=" + item.id} className={styles.link}>
                  <div className={styles.productHolder}>
                    <Image
                      src={item.image}
                      fluid
                      className={styles.productImage}
                    />
                    <div>
                      <p
                        className={styles.productName}
                        style={{ fontSize: "14px" }}
                      >
                        {item.name}
                      </p>
                      <p className={styles.productCategory}>{item.category}</p>
                      <div style={{ display: "flex" }}>
                        <p className={styles.productActualPrice}>
                          INR {item.actualPrice}
                        </p>
                        <p className={styles.productOff}>({item.off})</p>
                      </div>
                      <p className={styles.productCurrentPrice}>
                        INR {item.offerPrice}
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
