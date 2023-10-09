import Footer from "../components/footer";
import Header from "../components/header";

function Mhouse() {
  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/motherhouse">Mother House</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Mother House</span>
          </div>
        </div>
      </div>
      {/* Motherhouse content start */}
      <div className="container">
        <h3 className="heading">Mother House</h3>
        <p>
          “This religious House was founded in 1682 by Adrien Bresy, parish
          priest of wez. This vigilant pastor, wishing to procure for his
          parishioners the benefits of a Christian education, invited three
          pious girls from Lille to whom he added two young persons of his
          parish”.
        </p>
        <div className="row subpage">
          <div className="col-lg-6">
            <img src="images/subpage/mhouse1.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/motherhouse1.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/motherhouse3.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img src="images/subpage/mhouse2.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Mhouse;
