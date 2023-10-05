import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [slider, setslider] = useState([]);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const fetchslide = () => {
    fetch(`${ApiUrl}/get/slidebar`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setslider(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchslide();
  }, []);
  const navigate = useNavigate();
  function onSubmitcontactform(data, e) {
    setLoaderVisible(true);
    axios
      .post(`${ApiUrl}/store/contact`, data)
      .then((Response) => {
        setLoaderVisible(false);
        if (Response.status === 200) {
          Swal.fire(
            "Thank you for contacting us. We will get in touch with you shortly.",
            "",
            "success"
          );
          e.target.reset();
          navigate("/contact-us");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message,
        });
      });
  }
  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/contact-us">Contact Us</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Contact Us</h3>
        <div className="row">
          <div className="col-lg-9">
            <div>
              <h5>Location:</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.346704331074!2d80.19785467428956!3d13.140517211153979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526490ea28d1db%3A0xb566a6a8834544cf!2sThe%20Sisters%20of%20St.%20Charles%20Borromeo%20%E2%80%93%20Eastern%20Province!5e0!3m2!1sen!2sin!4v1696483173673!5m2!1sen!2sin"
                height={550}
                style={{ border: 0, width: " 100%" }}
                allowFullScreen
                title="st charles"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="col-lg-3 sidebar">
            {slider.map((item) => (
              <div className="slidedata" key={item.id}>
                <img src={item.image} alt="" />
                <strong>{item.title} </strong>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                <br /> <br />
              </div>
            ))}
          </div>
        </div>
        <h5>Contact Us:</h5>
        <div className="row">
          <div className="ecep bs-callout col-lg-6">
            <img src="images/subpage/alumni-3-1.jpg" alt="" />
            <ul>
              <li>
                <i class="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;&nbsp;Adrien
                Villa, # 28 Surappatu Main Road,
              </li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vinayagapuram,</li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kolathur P.O Chennai 600 099
              </li>
              <li>
                <i class="fa fa-phone"></i>&nbsp;&nbsp;+91 98659 10951
              </li>
              <li>
                <i className="fa fa-envelope"></i>&nbsp;&nbsp;
                scbprovincialatechennai@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-lg-6 bs-callout">
            <form
              className="php-email-form"
              onSubmit={handleSubmit(onSubmitcontactform)}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    {...register("name", { required: true })}
                    aria-invalid={errors?.name ? "true" : "false"}
                  />
                  {errors?.name?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel">Name is required</label>
                    </div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                    aria-invalid={errors?.email ? "true" : "false"}
                  />
                  {errors?.email?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel">Email is required</label>
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  id="mobile"
                  {...register("mobile", { required: true })}
                  aria-invalid={errors?.mobile ? "true" : "false"}
                />
                {errors?.mobile?.type === "required" && (
                  <div className="text-danger text_error">
                    <label className="errlabel">Mobile is required</label>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  defaultValue={""}
                  {...register("message", { required: true })}
                  aria-invalid={errors?.message ? "true" : "false"}
                />
                {errors?.message?.type === "required" && (
                  <div className="text-danger text_error">
                    <label className="errlabel">Message is required</label>
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="submit" className="buttonjs">
                  Send Message
                </button>

                <span
                  id="loader"
                  style={{ display: loaderVisible ? "inline-block" : "none" }}>
                  <img
                    src="images/subpage/gif/ajaxload.gif"
                    width="32px"
                    height="32px"
                    alt="Loader"
                  />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
