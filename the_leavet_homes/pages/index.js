import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import TopMessage from "../pages/component/TopMeassage/index";
import Header from "../pages/component/Header/index";
import Category from "../pages/component/Category/index";
import Slider from "../pages/component/Slider/index";
import CategorySection from "../pages/component/CategorySection/index";
import ProductHolder from "../pages/component/ProductHolder/index";
import Footer from "../pages/component/Footer/index";
import Catelogue from "../pages/component/Catelogue/index";
import Newsletter from "../pages/component/Newsletter/index";
import Banner from "../pages/component/Banner/index";
import styles from "../styles/Home.module.css";

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>The Leavet Homes</title>
        <meta
          name="description"
          content="The Leavet offers a big version of Elegant and Useful Design. Three Elements transportable bar case is a crowd pleaser anywhere you travel with it."
        />
        <link
          rel="preload"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
          href="https://cdn.shopify.com/static/fonts/ShopifySans--regular.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossorigin="anonymous"
          type="font/woff2"
          href="https://cdn.shopify.com/static/fonts/ShopifySans--bold.woff2"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <TopMessage />
        <Header />
        <Category />
        <Slider />
        <CategorySection />
        <ProductHolder title={"Newly launched"} data={product} />
        <ProductHolder title={"Best Sellers"} data={product} />
        <Catelogue />
        <Banner />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
