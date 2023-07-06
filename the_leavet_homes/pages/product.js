import React, { useState } from "react";
import TopMessage from "../pages/component/TopMeassage/index";
import Header from "../pages/component/Header/index";
import Category from "../pages/component/Category/index";
import Footer from "../pages/component/Footer/index";
import Head from "next/head";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BsFilterCircle } from "react-icons/bs";
import { AiOutlineSortAscending } from "react-icons/ai";
import ProductHolder from "../pages/component/ProductHolder/index";

import Quantity from "../pages/component/Quantity/index";
import { Divider, Space, Radio, Select, Rate, Tag } from "antd";
import top from "../pages/assets/header.jpeg";
import ProductTags from "../pages/component/ProductTags/index";
import ReactImageMagnify from "react-image-magnify";
import styles from "../styles/Home.module.css";

export default function Product() {
  const [currentQty, setCurrentQty] = useState("1");
  const [propductImages, setPropductImages] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/6373309/pexels-photo-6373309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);
  const [tags, setTags] = useState([
    {
      id: 1,
      name: "Social Saver",
    },
    {
      id: 2,
      name: "Serving Tray",
    },
    {
      id: 3,
      name: "Leather Tray",
    },
    {
      id: 4,
      name: "Tray",
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
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <TopMessage />
      <Header />
      <Category />
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <div style={{ marginTop: "40px" }}>
                  {propductImages.map((item) => {
                    return (
                      <div key={item.id} style={{ padding: "10px" }}>
                        <Image
                          src={item.image}
                          width={150}
                          height={150}
                          alt={item.id}
                        />
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col md={8}>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    },
                    largeImage: {
                      src: "https://images.pexels.com/photos/13522187/pexels-photo-13522187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                      width: 1200,
                      height: 1800,
                    },
                  }}
                  style={{ marginTop: "40px" }}
                />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div
              className={styles.productDetailHolder}
              style={{ marginTop: "40px", padding: "20px" }}
            >
              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: "flex",
                }}
              >
                <h3 className={styles.productName} style={{ fontSize: "30px" }}>
                  Social Server Big
                </h3>
              </Space>

              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: "flex",
                }}
              >
                <p style={{ fontSize: "16px", color: "#42434d" }}>
                  Category Name
                </p>
              </Space>

              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: "flex",
                }}
              >
                <Rate />
              </Space>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>1 Tray.</p>
              </Space>
              <h3 style={{ fontSize: "22px" }}>Price</h3>
              <Space>
                <p className={styles.productActualPrice}>INR 9000/-</p>
                <p className={styles.productActualPrice}>INR 7999/-</p>
                <p>
                  <Tag color="#313652">You Save INR 1000</Tag>
                </p>
              </Space>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: "flex",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Quantity qty={currentQty} updateQuty={setCurrentQty} />
                <Divider />
                <h3 style={{ fontSize: "22px" }}>Product Info</h3>
                <p>
                  About the product This tray can be used as a serving tray,
                  ensuring a wonderful and essential serving experience at home.
                  Sleek yet essential design with beautiful leather weaved
                  handles that adapt for easy movement from room to room.
                </p>
                <Divider />
              </Space>
              <h3 style={{ fontSize: "22px" }}>Tags</h3>
              <Space>
                <ProductTags tags={tags} />
              </Space>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <ProductHolder title={"Newly launched"} data={product} />
        <ProductHolder title={"Best Sellers"} data={product} />
      </Container>
      <Footer />
    </>
  );
}
