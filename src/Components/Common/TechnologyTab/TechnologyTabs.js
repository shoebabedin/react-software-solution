import React, { useState } from 'react';
import tabData from './TechnologyTab.json';



const TechnologyTabs = (props) => {
  const {head} = props;
  const [tabs, setTabs] = useState(tabData[0]);
  

  const handleClick = (e) => {
    setTabs(e);

  }
  return (
    <div class="platform_expert py-2 py-lg-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            {
              head ?
               
              <h2 class="text-primary text-center mb-5">{head}</h2>
              : 

            <h2 class="text-primary text-center mb-5">Technology we used</h2>
            }


       
            {/* <!-- tabs --> */}
            <div class="platform-tabs">
                
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {
                  tabData.map(item=>
                    <li key={item.id} class="nav-item" role="presentation">
                  <button
                    class={`nav-link ${item.id === tabs.id && 'active'}`}
                    onClick={()=> handleClick(item)}
                  >
                    {item.tabName}
                  </button>
                </li>
                    )
                }
              </ul>
              <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active">
                  <div class="tab-item-part">
                  {
                    tabs.items.map((single)=>
                    <div class="tab-item text-center">
                      <div className='img'>
                        <img
                          src={require(`../../../Assets/images/service-mobile-app/${single.img}`)}
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
