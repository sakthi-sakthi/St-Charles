import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import axios from "axios";
import ApiUrl from "../Api/Api";

function NewsLetter() {
    const [pdfLinks, setPdfLinks] = useState([]);

    useEffect(() => {
        axios
            .get(`${ApiUrl}/get/Newsletter`)
            .then((response) => {
                setPdfLinks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h2 className="entry-title">Newsletter / Circular</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {pdfLinks.data && pdfLinks.data.length > 0 ? (
                        pdfLinks.data.map((pdf, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card" style={{ border: "1px solid #e4d7c6", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", backgroundColor: "#fffcf6" }} >
                                    <div className="card-body">
                                        <i
                                            className="fa fa-file-pdf-o"
                                            style={{ fontSize: "35px", color: "red", marginBottom: "10px" }}
                                        ></i>
                                        <h5 className="card-title">
                                            <a href={pdf?.file_url} rel="noopener noreferrer">
                                                {pdf.title}
                                            </a>
                                        </h5>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                {pdf.file_id}
                                            </small>
                                        </p>
                                        <a
                                            href={pdf.file_url}
                                            rel="noopener noreferrer"
                                            className="btn btn-primary btn-sm"
                                            target="_blank"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p className="text-center font-weight-bold" style={{ fontSize: "16px" }}>
                                No Newsletter Available
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default NewsLetter;
