import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../styles/main.module.css";
import Image from "next/image";
import logo from "../../../pages/assets/logo.png";
import Link from "next/link";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Index() {
  const [usefullLink, setUsefullLink] = useState([
    {
      id: 1,
      lable: "Home",
      link: "#",
    },
    {
      id: 2,
      lable: "Products",
      link: "#",
    },
    {
      id: 3,
      lable: "Search",
      link: "#",
    },
    {
      id: 4,
      lable: "Signin",
      link: "#",
    },
    {
      id: 5,
      lable: "Signup",
      link: "#",
    },
    {
      id: 6,
      lable: "Contact",
      link: "#",
    },
  ]);
  const [legal, setLegal] = useState([
    {
      id: 1,
      lable: "Privacy Policy",
      link: "#",
    },
    {
      id: 2,
      lable: "Terms & Condition",
      link: "#",
    },
    {
      id: 3,
      lable: "Shipping Policy",
      link: "#",
    },
    {
      id: 4,
      lable: "Payment Policy",
      link: "#",
    },
    {
      id: 5,
      lable: "Refund Policy",
      link: "#",
    },
  ]);
  return (
    <Container fluid className={styles.footerContainer}>
      <Container>
        <Row>
          <Col md={3}>
            <div className={styles.logoHolder}>
              <Image src={logo} width={100} height={100} />
              <h3 className={styles.footerTitle}>The Leavet Homes</h3>
              <p className={styles.footerDetail}>
                We are a manufacturer of leather-based products with premium
                craftmenship!
              </p>
            </div>
          </Col>
          <Col md={3} style={{ padding: "20px" }}>
            <div className={styles.footerInner}>
              <h3 className={styles.footerTitle}>Usefull Links</h3>
              <br></br>
              {usefullLink.map((item) => {
                return (
                  <div key={item.id} style={{ marginTop: 7, marginBottom: 7 }}>
                    <Link href={item.link} className={styles.link}>
                      <p className={styles.h5}>{item.lable}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col md={3} style={{ padding: "20px" }}>
            <div className={styles.footerInner}>
              <h3 className={styles.footerTitle}>Legal</h3>
              <br></br>
              {legal.map((item) => {
                return (
                  <div key={item.id} style={{ marginTop: 7, marginBottom: 7 }}>
                    <Link href={item.link} className={styles.link}>
                      <p className={styles.h5}>{item.lable}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col md={3}>
            <div className={styles.footerInner} style={{ padding: "20px" }}>
              <h3 className={styles.footerTitle}>Social Media</h3>
              <br></br>
              <Row>
                <Col md={2}>
                  <Link href={"#"} target={"_blank"}>
                    <BsFacebook size={30} color={"#3b5998"} />
                  </Link>
                </Col>
                <Col md={2}>
                  <Link href={"#"} target={"_blank"}>
                    <AiFillInstagram size={30} color={"#E4405F"} />
                  </Link>
                </Col>
                <Col md={2}>
                  <Link href={"#"} target={"_blank"}>
                    <BsPinterest size={30} color={"#c8232c"} />
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
