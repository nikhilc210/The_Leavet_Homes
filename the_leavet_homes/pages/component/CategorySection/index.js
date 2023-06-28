import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../../../styles/main.module.css";

export default function Index() {
  const [category, setCategory] = useState([
    {
      id: 1,
      name: "All About The Bars",
      image:
        "https://ii1.pepperfry.com/media/catalog/product/a/l/800x880/all-in-one-bar-cabinet-with-built-in-fridge-in-olive-green-colour-by-speedx-home-bars-all-in-one-bar-dhyhnn.jpg",
    },
    {
      id: 2,
      name: "Serve in style",
      image:
        "https://static.toiimg.com/thumb/msid-78516165,width-400,resizemode-4/78516165.jpg",
    },
    {
      id: 3,
      name: "Utility at its Best",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyRkT01I-r3VuZ7k5cG7W7p5TY3SjV0ow8g&usqp=CAU",
    },
    {
      id: 4,
      name: "Luxury Cases",
      image:
        "https://image.made-in-china.com/202f0j00avMUgBEGbmbd/Luxury-Brand-Designer-Mobile-Phone-Cases-for-iPhone-12-Fashion-Cell-Phone-Cover.webp",
    },
    {
      id: 5,
      name: "Jewel Care",
      image:
        "https://m.media-amazon.com/images/I/411SZtBS+TL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 6,
      name: "Luxury Furnishing",
      image:
        "https://shop.gkwretail.com/cdn/shop/products/Designer-Sofa-Set-in-Fabric-L-Shape_3.jpg?v=1651899140",
    },
    {
      id: 7,
      name: "Artistic Decor",
      image:
        "https://m.media-amazon.com/images/I/61o+yF3lsaL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 8,
      name: "Luxury Mirrors",
      image:
        "https://cdn.shopify.com/s/files/1/1368/6597/products/VDR-645_800x.png?v=1647858883",
    },
  ]);
  return (
    <div>
      <Container>
        <h2 className={styles.categoryHeading}>Our Product Categories</h2>
        <Row>
          {category.map((item) => {
            return (
              <Col md={3} className={styles.categoryHolder} key={item.id}>
                <center>
                  <Image
                    src={item.image}
                    fluid
                    className={styles.categoryImage}
                  />
                </center>
                <p className={styles.categoryHolderName}>{item.name}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
