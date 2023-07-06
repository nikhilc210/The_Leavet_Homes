import React, { useState } from "react";
import Header from "../pages/component/Header/index";
import TopMessage from "../pages/component/TopMeassage/index";
import Category from "../pages/component/Category/index";
import Footer from "../pages/component/Footer/index";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Form, Input, Radio } from "antd";
import Head from "next/head";

export default function Login() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <TopMessage />
      <Header />
      <Category />
      <Container style={{ minHeight: "600px" }}>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                requiredMarkValue: requiredMark,
              }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark}
            >
              <div style={{ marginTop: "100px" }}>
                <div>
                  <h3 style={{ fontSize: "22px", marginBottom: "20px" }}>
                    Login
                  </h3>
                </div>
                <Form.Item label="Email Address" required>
                  <Input placeholder="Please enter email address" />
                </Form.Item>
                <Form.Item label="Password" required>
                  <Input.Password placeholder="Please enter password" />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      background: "#313652",
                      color: "#FFF",
                      width: "100%",
                    }}
                  >
                    Login
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
