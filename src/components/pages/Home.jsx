import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../layout/Card";

import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div className="page container">
        <Helmet>
                <meta charSet="utf-8" />
                <title>MEE SUST </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

      <div className="row" style={{ height: "400px", overflow: "hidden" }}>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
          transitionTime={500}
        >
          <div>
            <img src="https://picsum.photos/seed/picsum/200/300"  alt="carousel"/>
          </div>
          <div>
            <img src="https://picsum.photos/400/300?grayscale"alt="carousel" />
          </div>
          <div>
            <img src="https://picsum.photos/400/300?grayscale" alt="carousel"/>
          </div>
        </Carousel>
      </div>
      <div className="pt-4 row">
        <div className="col-lg-8">
          <div className="row">
              <h3 className="p-3">EVENT</h3>
            <div className="col-lg-6">
              <Card />
            </div>
            <div className="col-lg-6">
              <Card />
            </div>
            <div className="col-lg-6">
              <Card />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h3 className="p-3">Notice</h3>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Home;
