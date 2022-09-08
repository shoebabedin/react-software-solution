import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import serviceSlider from "../../Assets/Data/serviceProvider.json";

const ServiceProvide = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="service_provide py-4 py-lg-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-primary mb-4 text-center">
              Service We Provide
            </h2>
            <p
              style={{ opacity: "0.5" }}
              className="subtitle-1-n text-teritiary text-center"
            >
              Particularly network business encounters for asset sucking
              arrangements. Progressively re-engineer agreeable
              <br className="d-none d-lg-block" />
              organizations by means of cross-media skill.
            </p>

           

            <Slider {...settings} className="service_provide_slider">
              {serviceSlider.map((item, i) => (
                <div key={i} className="service_provide_item">
                  <div className="d-flex gap-3 py-4">
                    <div className="icon">
                      <img
                        src={require(`../../Assets/images/serviceSlider/${item.logo}`)}
                        alt={item.title}
                      />
                    </div>
                    <div className="content">
                      <h3 className="subtitle-1-b text-primary mb-4">
                        {item.title}
                      </h3>
                      <ul className="">
                        {
                          item.items.map((child, i) => 
                            <li key={i} className="text-start text-secondary body-text mb-3 d-flex logo_list">
                              <span className="logo">
                               <img src={require(`../../Assets/images/serviceSlider/${child.icon}`)} alt="" />
                              </span>
                              {child.name}
                            </li>
                            )
                        }
                        
                      </ul>
                      <Link className="body-text text-3" to="#">
                        Read More
                        <span>
                          <svg
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5024 10.3756C14.1575 10.8069 14.2276 11.4362 14.659 11.7811C15.0903 12.126 15.7196 12.0559 16.0645 11.6245L19.5628 7.24896C20.1466 6.5187 20.1466 5.48138 19.5628 4.75112L16.0645 0.375577C15.7196 -0.0557883 15.0903 -0.1259 14.659 0.21898C14.2276 0.56386 14.1575 1.19313 14.5024 1.6245L17.2012 5.00004L0.999268 5.00004C0.446981 5.00004 -0.000732422 5.44775 -0.000732422 6.00004C-0.000732422 6.55232 0.446981 7.00004 0.999268 7.00004L17.2012 7.00004L14.5024 10.3756Z"
                              fill="#1A64EE"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvide;
