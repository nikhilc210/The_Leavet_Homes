import React, { useState } from "react";
import { Menu } from "antd";
import { Container } from "react-bootstrap";
import styles from "../../../styles/main.module.css";

export default function Index() {
  const [items, setItems] = useState([
    {
      label: "All About The Bars",
      key: 1,
    },
    {
      label: "Serve in style",
      key: 2,
    },
    {
      label: "Utility at its Best",
      key: 3,
    },
    {
      label: "Luxury Cases",
      key: 4,
    },
    {
      label: "Jewel Care",
      key: 5,
    },
    {
      label: "Luxury Furnishing",
      key: 6,
    },
    {
      label: "Artistic Decor",
      key: 7,
    },
    {
      label: "Luxury Mirrors",
      key: 8,
    },
  ]);
  const onClick = () => {};
  return (
    <div
      style={{
        background: "#383a46",
        border: "0.5px solid #c7c7c7",
        borderLeftWidth: "0px",
        borderRightWidth: "0px",
      }}
    >
      <Container>
        <Menu
          onClick={onClick}
          selectedKeys={items[0]}
          mode="horizontal"
          items={items}
          style={{
            color: "#fff",
            background: "#383a46",
            minHeight: "50px",
            borderTopColor: "#c7c7c7",
            borderTopWidth: "0.5px",
            textDecoration: "none",
          }}
        />
      </Container>
    </div>
  );
}
