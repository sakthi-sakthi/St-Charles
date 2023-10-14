import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import ApiUrl from "../Api/Api";
import { Link } from "react-router-dom";

function NewsLetter() {
  const [pdfLinks, setPdfLinks] = useState([]);

  useEffect(() => {
    axios
      .get(`${ApiUrl}/get/Newsletter`)
      .then((response) => {
        const sortedPdfLinks = response.data.data.sort((a, b) => b.id - a.id);
        setPdfLinks(sortedPdfLinks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/newsletter">Newsletter / Circular</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Newsletter / Circular</span>
          </div>
        </div>
      </div>
      <div className="container">
        <br />
        <div className="row">
          {pdfLinks.length > 0 ? (
            pdfLinks.map((pdf, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <div
                  className="card"
                  style={{
                    border: "1px solid #e4d7c6",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fffcf6",
                  }}>
                  <div className="card-body">
                    <i
                      className="fa fa-file-pdf-o"
                      style={{
                        fontSize: "35px",
                        color: "red",
                        marginBottom: "10px",
                      }}></i>
                    <h5 className="card-title">
                      <a href={pdf?.file_url} rel="noopener noreferrer">
                        {pdf.title}
                      </a>
                    </h5>
                    <p className="card-text">
                      <b> {pdf.date}</b>
                    </p>
                    <a
                      href={pdf.file_url}
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      target="_blank">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p
                className="text-center font-weight-bold"
                style={{ fontSize: "16px" }}>
                No Newsletter Available
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NewsLetter;
