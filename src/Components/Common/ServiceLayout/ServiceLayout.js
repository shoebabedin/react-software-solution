import React from "react";
import Pricing from "../../Home/Pricing";
import WorkProcess from "../../Home/WorkProcess";
import TechnologyTabs from "../TechnologyTab/TechnologyTabs";

const serviceProvide = [
  {
    id: 0,
    img: 'item3',
    heading: 'Mobile',
    desc: 'GAME DEVELOPMENT'
  },
  {
    id: 1,
    img: 'item1',
    heading: 'Unity3D',
    desc: 'GAME DEVELOPMENT'
  },
  {
    id: 2,
    img: 'item2',
    heading: 'Web',
    desc: 'GAME DEVELOPMENT'
  },
  {
    id: 3,
    img: 'item4',
    heading: '2D/3D',
    desc: 'GAME DEVELOPMENT'
  },
  {
    id: 4,
    img: 'item5',
    heading: 'HTML5',
    desc: 'GAME DEVELOPMENT'
  },
]

const ServiceLayout = () => {
  const page = window.location.pathname;
  console.log(page);
  return (
    <div>
      {/* <ServiceBanner /> */}
      {page === "/game-development" && (
        <div className="platform_expert py-2 py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-primary text-center mb-5">
                  Service we will Provide
                </h2>

                <div className="service-provide">
                  {
                    serviceProvide.map(item => 
                      
                      
                  <div className="service-provide-item">
                    <img
                      className="img-fluid"
                      src={require(`../../../Assets/images/service-provide/${item.img}.webp`)}
                      alt=""
                    />
                    <div className="overlay">
                      <h2>{item.heading}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                      
                      )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {page !== "/game-development" &&
      <TechnologyTabs head={"Platform we expert on"} />
    }
      <WorkProcess />
      <Pricing />
    </div>
  );
};

export default ServiceLayout;
