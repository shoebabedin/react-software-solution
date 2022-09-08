import React from 'react';
import gellary from '../../Assets/Data/Gallery.json';

const Gellary = () => {
    return (
        <div className="about_gellary py-2 py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-provide">
                    {
                        gellary.map((item, index)=> 
                            
                            <div key={index} className="service-provide-item">
                            <img
                              className="img-fluid"
                              src={require(`../../Assets/images/about/${item.img}`)}
                              alt=""
                            />
                          </div>
                            )
                    }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Gellary;