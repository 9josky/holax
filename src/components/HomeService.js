import React, { useState } from "react";
import HomeServiceItem from "./HomeServiceItem";
import Tabitem from "./Tabitem";

function HomeService() {
  const [activeTab, setActiveTab] = useState("de");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="software_service_area sec_pad">
      <div className="container">
        <HomeServiceItem
          Title="Our Service."
          TitleP=""
          sClass="sec_title text-center mb_70"
        />
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ul
              className="nav nav-tabs software_service_tab"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "de" ? "active" : ""}`}
                  onClick={() => handleTabChange("de")}
                  id="de-tab"
                  aria-controls="de"
                  role="tab"
                  // href="#de"
                >
                  24hrs care
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "saas" ? "active" : ""}`}
                  onClick={() => handleTabChange("saas")}
                  id="saas-tab"
                  aria-controls="saas"
                  role="tab"
                  // href="#saas"
                >
                  Hourly Home care
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "ma" ? "active" : ""}`}
                  onClick={() => handleTabChange("ma")}
                  id="ma-tab"
                  aria-controls="ma"
                  // href="#ma"
                >
                  Live-In care
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "secure" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("secure")}
                  id="secure-tab"
                  aria-controls="secure"
                  // href="#secure"
                >
                  overnight care
                </button>
              </li>
              {/* <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "scale" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("scale")}
                  id="scale-tab"
                  aria-controls="scale"
                  // href="#scale"
                >
                  Scale
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "monitor" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("monitor")}
                  id="monitor-tab"
                  aria-controls="monitor"
                  // href="#monitor"
                >
                  Monitor
                </button>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="tab-content software_service_tab_content">
              <div
                className={`tab-pane fade show  ${
                  activeTab === "de" ? "active" : ""
                }`}
                id="de"
                role="tabpanel"
                aria-labelledby="de-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team "
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className={`tab-pane fade show ${
                  activeTab === "saas" ? "active" : ""
                }`}
                id="saas"
                role="tabpanel"
                aria-labelledby="saas-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-user"
                    text=" Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className={`tab-pane fade show ${
                  activeTab === "ma" ? "active" : ""
                }`}
                id="ma"
                role="tabpanel"
                aria-labelledby="ma-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="TeamManagement"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              <div
                className={`tab-pane fade show 
               ${activeTab === "secure" ? "active" : ""}`}
                id="secure"
                role="tabpanel"
                aria-labelledby="secure-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team anagement"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div>
              {/* <div
                className={`tab-pane fade show ${
                  activeTab === "scale" ? "active" : ""
                }`}
                id="scale"
                role="tabpanel"
                aria-labelledby="scale-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="T Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div> */}
              {/* <div
                className={`tab-pane fade show ${
                  activeTab === "monitor" ? "active" : ""
                }`}
                id="monitor"
                role="tabpanel"
                aria-labelledby="monitor-tab"
              >
                <div className="row">
                  <Tabitem
                    ticon="ti-user"
                    text="Team Management"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-basketball"
                    text="Global Availability"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    ticon="ti-face-smile"
                    text="Cluster Deployments"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                  <Tabitem
                    colClass="offset-lg-2"
                    ticon="ti-harddrives"
                    text="Backups & Snapshots"
                    description="Crikey blow off chap knackered gosh bobby geeza gormless well, Charles cheeky bugger I cor blimey guvnor hanky panky jolly good."
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeService;
