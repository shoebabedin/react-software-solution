import React, { useState } from 'react';
import tabData from './TechnologyTab.json';



const TechnologyTabs = (props) => {
  const {head} = props;
  const [tabs, setTabs] = useState(tabData[0]);
  

  const handleClick = (e) => {
    setTabs(e);

  }
  return (
    <div className="platform_expert py-2 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {
              head ?
               
              <h2 className="text-primary text-center mb-5">{head}</h2>
              : 

            <h2 className="text-primary text-center mb-5">Technology we used</h2>
            }


       
            {/* <!-- tabs --> */}
            <div className="platform-tabs">
                
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {
                  tabData.map(item=>
                    <li key={item.id} className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${item.id === tabs.id && 'active'}`}
                    onClick={()=> handleClick(item)}
                  >
                    {item.tabName}
                  </button>
                </li>
                    )
                }
              </ul>
              <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active">
                  <div className="tab-item-part">
                  {
                    tabs.items.map((single, index)=>
                    <div key={index} className="tab-item text-center">
                      <div className='img'>
                        <img
                          src={require(`../../../Assets/images/service-mobile-app/${single.img}.webp`)}
                          alt=""
                        />
                      </div>
                      <p>{single.title}</p>
                    </div>
                    )
                  }
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyTabs;
