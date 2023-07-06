import React, { useState } from "react";
import TopMessage from "../pages/component/TopMeassage/index";
import Header from "../pages/component/Header/index";
import Category from "../pages/component/Category/index";
import Footer from "../pages/component/Footer/index";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { BsFilterCircle } from "react-icons/bs";
import { AiOutlineSortAscending } from "react-icons/ai";
import ProductHolder from "../pages/component/ProductHolder/index";
import Image from "next/image";

import { Divider, Space, Radio, Select } from "antd";
import top from "../pages/assets/header.jpeg";
import styles from "../styles/Home.module.css";

export default function CategoryProduct() {
  const [value, setValue] = useState(1);
  const [sort, setSort] = useState([
    {
      value: "Alphabatical A-Z",
      label: "Alphabatical A-Z",
    },
    {
      value: "Alphabatical Z-A",
      label: "Alphabatical Z-A",
    },
    {
      value: "Price Low-High",
      label: "Price Low-High",
    },
    {
      value: "Price High-Low",
      label: "Price High-Low",
    },
  ]);
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "Social Saver",
      image:
        "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Serve in style",
      actualPrice: "7999",
      offerPrice: "5999",
      off: "25%",
    },
    {
      id: 2,
      name: "Macbook Cover",
      image:
        "https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Serve in style",
      actualPrice: "7999",
      offerPrice: "5999",
      off: "25%",
    },
    {
      id: 3,
      name: "The Wine Sake",
      image:
        "https://images.pexels.com/photos/16552388/pexels-photo-16552388/free-photo-of-close-up-of-red-wine-poured-into-a-wineglass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Serve in style",
      actualPrice: "7999",
      offerPrice: "5999",
      off: "25%",
    },
    {
      id: 4,
      name: "The Knowledge Case-Round",
      image:
        "https://images.pexels.com/photos/6373309/pexels-photo-6373309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Serve in style",
      actualPrice: "7999",
      offerPrice: "5999",
      off: "25%",
    },
  ]);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Head>
        <title>Category Name</title>
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
          <h2 style={{ color: "#FFF" }}>Category Name</h2>
        </Container>
      </Container>
      <Container fluid style={{ padding: "20px", width: "95%" }}>
        <Row>
          <Col md={2}>
            <div>
              <div
                className={styles.filterHolderHeader}
                style={{ display: "flex", marginTop: "20px" }}
              >
                <BsFilterCircle size={25} />
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Filter
                </p>
              </div>
              <Divider />
            </div>

            <div style={{ marginTop: "25px", marginBottom: "25px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Availability
              </h3>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={"In stock"}>In stock (2)</Radio>
                  <Radio value={"Out of stock (0)"}>Out of stock (0)</Radio>
                </Space>
              </Radio.Group>
            </div>
            <div style={{ marginTop: "25px", marginBottom: "25px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Price</h3>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={"0 - 999"}>0 - 999</Radio>
                  <Radio value={"1000 - 1999"}>1000 - 1999</Radio>
                  <Radio value={"2000 - 2999"}>2000 - 2999</Radio>
                </Space>
              </Radio.Group>
            </div>
            <Divider />
            <div>
              <div
                className={styles.filterHolderHeader}
                style={{ display: "flex", marginTop: "20px" }}
              >
                <AiOutlineSortAscending size={25} />
                <p
                  style={{
                    fontSize: "18px",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Sort
                </p>
              </div>

              <div>
                <Space wrap>
                  <Select
                    defaultValue="Alphabatical A-Z"
                    style={{
                      width: "100%",
                    }}
                    onChange={handleChange}
                    options={sort}
                  />
                </Space>
              </div>
            </div>
          </Col>
          <Col md={10}>
            <ProductHolder title={""} data={product} />
            <ProductHolder title={""} data={product} />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <ProductHolder title={"Newly launched"} data={product} />
        <ProductHolder title={"Best Sellers"} data={product} />
      </Container>
      <Footer />
    </>
  );
}
