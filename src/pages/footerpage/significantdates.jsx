import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function SignificantDates() {
  const [slider, setslider] = useState([]);
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

  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/significant-dates">Significant Dates</a>
          </h3>
          <div className="brudcrums">
            <a href="/">Home</a>&nbsp;»&nbsp;{" "}
            <span className="pagename">Significant Dates</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Significant Dates</h3>
        <table
          className="table table-bordered"
          border={0}
          cellSpacing={2}
          cellPadding={2}>
          <tbody>
            <tr>
              <td className="table_header" width="49%" height={25}>
                Events
              </td>
              <td className="table_header" width="26%">
                Place
              </td>
              <td className="table_header" width="25%">
                Date
              </td>
            </tr>
            <tr>
              <td className="table_text">
                Installation of Mother Renee as Provincial
              </td>
              <td className="table_text">Ranipet</td>
              <td className="table_text">08.01.1983</td>
            </tr>
            <tr>
              <td className="table_text">
                Establishment of the Provincialate in Charles Villa
              </td>
              <td className="table_text">Perambur</td>
              <td className="table_text">26.01.1984</td>
            </tr>
            <tr>
              <td className="table_text">
                Installation of the Blessed Sacrament in Charles Villa
              </td>
              <td className="table_text">Perambur</td>
              <td className="table_text">11.02.1984</td>
            </tr>
            <tr>
              <td className="table_text">
                Installation of Sr. Ignatius as Provincial in Charles Villa
              </td>
              <td className="table_text">Perambur</td>
              <td className="table_text">29.01.1992</td>
            </tr>
            <tr>
              <td className="table_text">Adrien Villa House Blessing</td>
              <td className="table_text">Vinayagapuram</td>
              <td className="table_text">29.01.1998</td>
            </tr>
            <tr>
              <td className="table_text">
                Blessing of Catherine Warquain Home - Adrien Villa
              </td>
              <td className="table_text">Vinayagapuram</td>
              <td className="table_text">10.12.2001</td>
            </tr>
            <tr>
              <td className="table_text">
                Installation of Sr. Saroj as Provincial
              </td>
              <td className="table_text">Vinayagapuram</td>
              <td className="table_text">10.03.2000</td>
            </tr>
            <tr>
              <td className="table_text">
                Platinum Jubilee of the Congregation - LFC
              </td>
              <td className="table_text">Ranipet</td>
              <td className="table_text">24.11.2004</td>
            </tr>
            <tr>
              <td className="table_text">
                Installation of Sr. Jaya as Provincial Adrien Villa
              </td>
              <td className="table_text">Vinayagapuram</td>
              <td className="table_text">24.02.2006</td>
            </tr>
            <tr>
              <td className="table_text">
                Installation of POWER HEALEE Trust office -Adrien Villa
              </td>
              <td className="table_text">Vinayagapuram</td>
              <td className="table_text">2007</td>
            </tr>
            <tr>
              <td className="table_text">B. Ed. College inauguration</td>
              <td className="table_text">Madurai</td>
              <td className="table_text">24.02.2007</td>
            </tr>
            <tr>
              <td className="table_text">
                Silver Jubilee of Eastern Province Adrien Villa
              </td>
              <td className="table_text">Vinayagapuram</td>
              <td className="table_text">14.01.2008</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
export default SignificantDates;
