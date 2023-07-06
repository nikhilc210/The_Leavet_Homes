import React, { useState } from "react";
import Head from "next/head";
import TopMessage from "../pages/component/TopMeassage/index";
import Header from "../pages/component/Header/index";
import Category from "../pages/component/Category/index";
import Footer from "../pages/component/Footer/index";
import Quantity from "../pages/component/Quantity/index";
import { Space, Tag, Divider, Form, Input, Button } from "antd";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

export default function Cart() {
  const [cartProduct, setCartProduct] = useState([
    {
      id: 1,
      productName: "Social Server Big",
      productImage:
        "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: "4",
      orignalPrice: "39996",
      discountedPrice: "29996",
      saved: "10000",
    },
    {
      id: 2,
      productName: "Social Server Big",
      productImage:
        "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: "4",
      orignalPrice: "39996",
      discountedPrice: "29996",
      saved: "10000",
    },
    {
      id: 3,
      productName: "Social Server Big",
      productImage:
        "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: "4",
      orignalPrice: "39996",
      discountedPrice: "29996",
      saved: "10000",
    },
    {
      id: 4,
      productName: "Social Server Big",
      productImage:
        "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: "4",
      orignalPrice: "39996",
      discountedPrice: "29996",
      saved: "10000",
    },
    {
      id: 5,
      productName: "Social Server Big",
      productImage:
        "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: "4",
      orignalPrice: "39996",
      discountedPrice: "29996",
      saved: "10000",
    },
    {
      id: 6,
      productName: "Social Server Big",
      productImage:
        "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: "4",
      orignalPrice: "39996",
      discountedPrice: "29996",
      saved: "10000",
    },
  ]);
  const onRequiredTypeChange = ({ requiredMarkValue }) => {};
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <TopMessage />
      <Header />
      <Category />
      <Container
        fluid
        style={{
          height: "200px",
          width: "100%",
          background: "#000",
        }}
      >
        <Container>
          <br></br>
          <br></br>
          <br></br>
          <h2 style={{ color: "#FFF" }}>Cart</h2>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col md={8}>
            <div
              style={{
                marginTop: "50px",
                background: "#F8F8F8",
                padding: "10px",
              }}
            >
              <Row>
                {cartProduct.map((item) => {
                  return (
                    <>
                      <Col md={12} key={item.id}>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={item.productImage}
                              fluid
                              style={{ width: "100%", height: "150px" }}
                            />
                          </Col>
                          <Col md={4}>
                            <h3
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              {item.productName}
                            </h3>
                            <p>Product Category</p>
                          </Col>
                          <Col md={3}>
                            <h3
                              style={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                              Quantity
                            </h3>
                            <Space style={{ marginTop: "10px" }}>
                              <Row>
                                <Col md={4}>
                                  <center>
                                    <button
                                      style={{
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "50%",
                                        border: "none",
                                        color: "#FFF",
                                        backgroundColor: "#313652",
                                      }}
                                    >
                                      +
                                    </button>
                                  </center>
                                </Col>
                                <Col md={4}>
                                  <center>
                                    <p style={{ marginTop: "5px" }}>
                                      {item.quantity}
                                    </p>
                                  </center>
                                </Col>
                                <Col md={4}>
                                  <center>
                                    <button
                                      style={{
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "50%",
                                        border: "none",
                                        color: "#FFF",
                                        backgroundColor: "#313652",
                                      }}
                                    >
                                      -
                                    </button>
                                  </center>
                                </Col>
                              </Row>
                            </Space>
                          </Col>
                          <Col md={3}>
                            <AiOutlineDelete
                              size={22}
                              color={"#313652"}
                              style={{ float: "right", marginTop: "10px" }}
                            />
                            <Space
                              direction="vertical"
                              size="middle"
                              style={{
                                display: "flex",
                                marginTop: "5px",
                              }}
                            >
                              <h3
                                style={{
                                  textDecoration: "line-through",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                }}
                              >
                                INR {item.orignalPrice} /-
                              </h3>
                              <h3
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                }}
                              >
                                INR {item.discountedPrice} /-
                              </h3>
                              <Tag color="#313652">
                                You Saved INR {item.saved}
                              </Tag>
                            </Space>
                          </Col>
                        </Row>
                      </Col>
                      <Divider
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      />
                    </>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col md={4}>
            <div
              style={{
                marginTop: "50px",
                background: "#F8F8F8",
                padding: "20px",
              }}
            >
              <Space>
                <p>Subtotal: INR 39996</p>
              </Space>
              <br></br>
              <Space>
                <p>Discount: INR 10000</p>
              </Space>
              <br></br>
              <Space>
                <h3>TOTAL</h3>
              </Space>
              <br></br>
              <Space>
                <h3 style={{ fontWeight: "bold" }}>INR 29996</h3>
              </Space>
              <br></br>
              <Divider />
              <div>
                <Form layout="vertical" onValuesChange={onRequiredTypeChange}>
                  <Form.Item
                    label="Discount Code"
                    required
                    tooltip="Discount Code"
                  >
                    <Input placeholder="XXXXXX" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      style={{
                        background: "#313652",
                        color: "#FFF",
                        width: "100%",
                      }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      style={{
                        background: "#313652",
                        color: "#FFF",
                        width: "100%",
                      }}
                    >
                      Checkout
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
