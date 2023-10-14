import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

function Statistics() {
  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/statistics">Statistics</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
            <span className="pagename">Statistics</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Statistics</h3>
        <div className="row">
          <div className="">
            <div>
              <div className="mt-5">
                <h5>Educational Institutions</h5>
                <table
                  className="table table-bordered"
                  border={0}
                  cellSpacing={2}
                  cellPadding={2}>
                  <tbody>
                    <tr>
                      <td className="table_header" width="6%" height={25}>
                        Year
                      </td>
                      <td className="table_header" width="12%">
                        Primary Schools
                      </td>
                      <td className="table_header" width="11%">
                        High Schools
                      </td>
                      <td className="table_header" width="16%">
                        Higher Secondary School
                      </td>
                      <td className="table_header" width="13%">
                        Colleges
                      </td>
                      <td className="table_header" width="17%">
                        Vocational Training Institutions
                      </td>
                      <td className="table_header" width="14%">
                        Child labour School
                      </td>
                      <td className="table_header" width="11%">
                        Total
                      </td>
                    </tr>
                    <tr>
                      <td className="table_text">1982</td>
                      <td className="table_text">8</td>
                      <td className="table_text">5</td>
                      <td className="table_text">3</td>
                      <td className="table_text">&nbsp;</td>
                      <td className="table_text">5</td>
                      <td className="table_text">&nbsp;</td>
                      <td className="table_text">21</td>
                    </tr>
                    <tr>
                      <td className="table_text">2010</td>
                      <td className="table_text">13</td>
                      <td className="table_text">9</td>
                      <td className="table_text">7</td>
                      <td className="table_text">1</td>
                      <td className="table_text">3</td>
                      <td className="table_text">1</td>
                      <td className="table_text">34</td>
                    </tr>
                  </tbody>
                </table>
                <table
                  className="table table-bordered"
                  border={0}
                  cellSpacing={2}
                  cellPadding={2}>
                  <tbody>
                    <tr>
                      <td className="table_header" width="6%" height={25}>
                        Year
                      </td>
                      <td className="table_header" width="12%">
                        Boarding Homes
                      </td>
                      <td className="table_header" width="11%">
                        Dispensary
                      </td>
                      <td className="table_header" width="16%">
                        Social Devt.
                      </td>
                      <td className="table_header" width="13%">
                        Centre for AIDS Patients
                      </td>
                      <td className="table_header" width="10%">
                        Home For Aged
                      </td>
                      <td className="table_header" width="21%">
                        Hansen Patients’ Rehabilitation centre
                      </td>
                      <td className="table_header" width="11%">
                        Hospital
                      </td>
                      <td className="table_header" width="11%">
                        S.C.B.Associates
                      </td>
                    </tr>
                    <tr>
                      <td className="table_text">1982</td>
                      <td className="table_text">7</td>
                      <td className="table_text">5</td>
                      <td className="table_text">3</td>
                      <td className="table_text">-</td>
                      <td className="table_text">1</td>
                      <td className="table_text">1</td>
                      <td className="table_text">1</td>
                      <td className="table_text">-</td>
                    </tr>
                    <tr>
                      <td className="table_text">2010</td>
                      <td className="table_text">10</td>
                      <td className="table_text">5</td>
                      <td className="table_text">4</td>
                      <td className="table_text">1</td>
                      <td className="table_text">3</td>
                      <td className="table_text">1</td>
                      <td className="table_text">2</td>
                      <td className="table_text">7</td>
                    </tr>
                  </tbody>
                </table>
                <h5>Statistics of the Members</h5>
                <table
                  class="table table-bordered"
                  border="0"
                  cellspacing="2"
                  cellpadding="2">
                  <tbody>
                    <tr>
                      <td class="table_header" width="6%" height="25">
                        Year
                      </td>
                      <td class="table_header" width="12%">
                        Postulants
                      </td>
                      <td class="table_header" width="11%">
                        Novices
                      </td>
                      <td class="table_header" width="16%">
                        Temp:Prof
                      </td>
                      <td class="table_header" width="13%">
                        Per.prof
                      </td>
                      <td class="table_header" width="10%">
                        Departed
                      </td>
                    </tr>
                    <tr>
                      <td class="table_text">1982</td>
                      <td class="table_text">&nbsp;</td>
                      <td class="table_text">&nbsp;</td>
                      <td class="table_text">16</td>
                      <td class="table_text">44</td>
                      <td class="table_text">&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="table_text">2010</td>
                      <td class="table_text">4</td>
                      <td class="table_text">14</td>
                      <td class="table_text">43</td>
                      <td class="table_text">106</td>
                      <td class="table_text">22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Statistics;
