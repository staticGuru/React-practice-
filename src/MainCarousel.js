import React, { Component } from "react";
import "./MainCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class MainCarousel extends Component {
  render() {
    return (
      <div className="carousel">
        <Carousel
          infiniteLoop={true}
          stopOnHover={false}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80"
            />
            {/*<p className="legend">Legend 1</p>*/}
          </div>

          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80 "
            />
          </div>
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default MainCarousel;
