import React, { useState, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";

const tabImages1 = {
  Provincial: "images/sisters/Passportsize.png",
  "Vice Provincial": "images/sisters/srCelineJoseph_ep.png",
  "Councillor MSP": "images/sisters/srNavamani.png",
  "Councillor ECEP": "images/sisters/srMArgret.png",
  "Councillor FAC": "images/sisters/Sr-Samboorna-Mary.png",
};
const tabContent1 = {
  Provincial: "Sr. Amali Anbarasi",
  "Vice Provincial": "Sr. Celine Joseph",
  "Councillor MSP": "Sr. Navamani",
  "Councillor ECEP": "Sr. Margaret",
  "Councillor FAC": "Sr. Samboorna Mary",
};
const tabImages2 = {
  "Superior General": "images/sisters/Sr.Alena.png",
  "Assistant Superior General": "images/sisters/Sr.Christine.png",
  "Chairperson of Spirituality": "images/sisters/Sr.Virgy.png",
  "Chairperson of Financial": "images/sisters/Sr.josephine.png",
  "Chairperson of Medico": "images/sisters/Sr.preethy.png",
};
const tabContent2 = {
  "Superior General": "Sr. Alena",
  "Assistant Superior General": "Sr. Christine",
  "Chairperson of Spirituality": "Sr. Virgy",
  "Chairperson of Financial": "Sr. Josephine",
  "Chairperson of Medico": "Sr. Preethy",
};
const imageStyles = {
  width: "212px",
  height: "219px",
};
const boxStyles1 = {
  boxShadow: "0px 7px 16px 0px rgba(172 ,153 ,153, 0.5)",
  padding: "7px 25px 9px 22px",
  backgroundColor: "#f7f7f7",
  maxWidth: "800px",
  marginBottom: "20px",
  // marginRight: "4rem",
};
const boxStyles2 = {
  boxShadow: "0px 7px 16px 0px rgba(172 ,153 ,153, 0.5)",
  padding: "7px 25px 9px 22px",
  backgroundColor: "#f7f7f7",
  maxWidth: "800px",
  marginBottom: "20px",
};
const containerStyles = {
  display: "flex",
  justifyContent: "center", // Center align horizontally
  gap: "2rem",
  flexDirection: "row",
};

const VerticalTabs2 = () => {
  const [activeTab1, setActiveTab1] = useState("Provincial"); // Set the default tab
  const [activeTab2, setActiveTab2] = useState("Superior General"); // Set the default tab

  const handleTabSelect1 = (selectedTab) => {
    setActiveTab1(selectedTab);
  };

  const handleTabSelect2 = (selectedTab) => {
    setActiveTab2(selectedTab);
  };

  useEffect(() => {
    // Set the default tab for both boxes when the component mounts
    setActiveTab1("Provincial");
    setActiveTab2("Superior General");
  }, []);

  return (
    <div style={containerStyles}>
      <div style={boxStyles1}>
        <Tab.Container activeKey={activeTab1} onSelect={handleTabSelect1}>
          <div className="section-heading">
            <h2 className="entry-title">Provincial Council</h2>
          </div>
          <div className="entry-content">
            <div className="d-flex">
              <div style={{ flex: 1 }}>
                <Nav variant="pills" className="flex-column">
                  {Object.keys(tabContent1).map((key) => (
                    <Nav.Item key={key}>
                      <Nav.Link
                        eventKey={key}
                        className={`nav-link mb-3 p-3 shadow ${
                          activeTab1 === key ? "active" : ""
                        }`}
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "16px",
                          fontWeight: "bold",
                          transition: "color 0.3s ease",
                        }}>
                        {key}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
              <div className="tab-image" style={{ marginLeft: "3rem" }}>
                <img
                  src={tabImages1[activeTab1]}
                  alt={`${activeTab1}`}
                  style={imageStyles}
                />
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}>
                  <span style={{ fontSize: "19px", color: "black" }}>
                    {tabContent1[activeTab1]}
                  </span>
                  <br />
                  <span style={{ fontSize: "15px", color: "red" }}>
                    {activeTab1}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <Tab.Content>
            {Object.keys(tabContent1).map((key) => (
              <Tab.Pane
                eventKey={key}
                key={key}
                className="tab-pane fade"
                id={key}>
                {tabContent1[key]}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>

      <div style={boxStyles2}>
        <Tab.Container activeKey={activeTab2} onSelect={handleTabSelect2}>
          <div className="section-heading">
            <h2 className="entry-title">General Administration</h2>
          </div>
          <div className="entry-content">
            <div className="d-flex">
              <div style={{ flex: 1 }}>
                <Nav variant="pills" className="flex-column">
                  {Object.keys(tabContent2).map((key) => (
                    <Nav.Item key={key}>
                      <Nav.Link
                        eventKey={key}
                        className={`nav-link mb-3 p-3 shadow ${
                          activeTab2 === key ? "active" : ""
                        }`}
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "16px",
                          fontWeight: "bold",
                          transition: "color 0.3s ease",
                        }}>
                        {key}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
              <div className="tab-image" style={{ marginLeft: "3rem" }}>
                <img
                  src={tabImages2[activeTab2]}
                  alt={`${activeTab2}`}
                  style={imageStyles}
                />
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}>
                  <span style={{ fontSize: "19px", color: "black" }}>
                    {tabContent2[activeTab2]}
                  </span>
                  <br />
                  <span style={{ fontSize: "15px", color: "red" }}>
                    {activeTab2}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <Tab.Content>
            {Object.keys(tabContent2).map((key) => (
              <Tab.Pane
                eventKey={key}
                key={key}
                className="tab-pane fade"
                id={key}>
                {tabContent2[key]}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default VerticalTabs2;
