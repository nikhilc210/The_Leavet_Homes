import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Index(props) {
  return (
    <>
      <Row>
        <Col md={2}>
          <center>
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                outline: "none",
                border: "none",
                color: "#FFF",
                fontSize: "22px",
                fontWeight: "bold",
                background: "#313652",
              }}
              onClick={() => {
                props.updateQuty(parseInt(props.qty) + 1);
              }}
            >
              +
            </button>
          </center>
        </Col>
        <Col md={1}>
          <center>
            <h3 style={{ marginTop: "10px" }}>{props.qty}</h3>
          </center>
        </Col>
        <Col md={2}>
          <center>
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                outline: "none",
                border: "none",
                color: "#FFF",
                fontSize: "22px",
                fontWeight: "bold",
                background: "#313652",
              }}
              onClick={() => {
                if (props.qty == "1") {
                } else {
                  props.updateQuty(parseInt(props.qty) - 1);
                }
              }}
            >
              -
            </button>
          </center>
        </Col>
        {props.type == "Cart" ? null : (
          <>
            <Col md={7}>
              <button
                style={{
                  width: "40%",
                  height: "50px",

                  outline: "none",
                  border: "none",
                  color: "#FFF",
                  fontSize: "18px",

                  background: "#313652",
                }}
              >
                Add to cart
              </button>
            </Col>
          </>
        )}
      </Row>
    </>
  );
}
