import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";
import Swiper from "react-id-swiper";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Gallery = (): JSX.Element => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const params = {
    lazy: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  return (
    <>
      <Helmet>
        <title>Gallery | TITLE</title>
        <meta name="description" content="Gallery" />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-padded">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">Gallery</h2>
              </div>
              <div className="column is-6 is-offset-3">
                <Swiper {...params}>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe wearing a particularly Scottish-looking jacket"
                      data-src="https://via.placeholder.com/640x480"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph"
                      data-src="https://via.placeholder.com/640x480"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph"
                      data-src="https://via.placeholder.com/640x480"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Gallery;
