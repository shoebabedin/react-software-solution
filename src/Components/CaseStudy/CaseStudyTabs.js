import Isotope from "isotope-layout";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const CaseStudyTabs = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");


  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      // sanity check
      filterKey === "*"
        ? isotope.arrange({ filter: `*`})
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <div className="case-studies py-2 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center primary-1">OUR RECENT PROJECT</p>
            <h2 className="text-primary text-center mb-5">
              Latest Case Studies
            </h2>

            {/* <!-- isotop --> */}
            <div className="isotop-part">
              {/* <!-- isotop nav --> */}
              <div className="menu_iso" id="custom-filter">
         
                <li>
                  <a onClick={() => setFilterKey("*")}  className={`${filterKey === '*' && 'is-checked'}`}>All</a>
                </li>
                <li>
                  <a onClick={() => setFilterKey("item1")} className={`${filterKey === 'item1' && 'is-checked'}`}>Mobile app</a>
                </li>
                <li>
                  <a onClick={() => setFilterKey("item2")} className={`${filterKey === 'item2' && 'is-checked'}`}>WebSite</a>
                </li>
                <li>
                  <a onClick={() => setFilterKey("item3")} className={`${filterKey === 'item3' && 'is-checked'}`}>E-commerce</a>
                </li>
                <li>
                  <a onClick={() => setFilterKey("item4")} className={`${filterKey === 'item4' && 'is-checked'}`}>Game</a>
                </li>
              </div>
              {/* <!-- isotop nav -->
                  <!-- isotop content --> */}
              <div className="container_gallery_iso">
                <div className="row iso-container filter-container">
             
                  

                      {/* <!-- ----1---- --> */}
                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item1">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item1.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item2">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item2.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item3">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item3.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item4">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item4.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  {/* <!-- -----2----- --> */}
                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item2">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item5.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item3">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item6.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item1">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item7.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item4">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item1.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  {/* <!-- ----3--- --> */}

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item1">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item2.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item3">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item3.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item2">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item4.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item4">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item5.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  {/* <!-- ----4------ --> */}

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item3">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item6.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item2">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item7.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item1">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item1.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 cent isotope-item filter-item item4">
                    <div className="img_iso">
                      <img
                        src={require('../../Assets/images/case-study/item2.webp')}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link to="/case-study-details">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- isotop content --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTabs;
