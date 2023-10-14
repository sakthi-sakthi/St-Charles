import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import { Link } from 'react-router-dom';
function Kanapparu() {
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
                        <a href="/kanapparu">Kanapparu</a>
                    </h3>
                    <div className="brudcrums">
                        <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
                        <span className="pagename">Kanapparu</span>
                    </div>
                </div>
            </div>

            <div className="container subpage">
                <h3 className="heading">Kanapparu</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <div>
                            <div className="bs-exercis mt-5">
                                <p style={{ marginTop: "20px" }}>
                                    <b>Angel Face’ has ruffled large blooms of lavender blue edged with mauve. Has strong citrus fragrance.</b>
                                </p>
                            </div>
                            <div class="bs-call">
                                <p>
                                    ‘Two decades! Are they not too long for a community to perch and branch out? Thinks one, and that’s normal. It is not ours to decipher whether a thing is normal or not when it is God’s work. If the one who paved a path across the sea and brought sweet waters from the rock, is behind, to bring to fruition the human efforts, then interruption and interrogation are in vain. The history of the Congregation bears witness to this. It is only after a century and a half the second house in Belgium came into existence. The installation of the second community in Kanapparu – Andhra, which happened 20 years after the first community in Chilakaluripet that was established in 1967, does not surprise us. This time, it is like the cluster of roses as seen in the stalks of ‘Angel face’, that the mission bloomed with the children in the diocesan elementary school aided by the Government that was handed over to the sisters. Rt. Rev. Dr. Gali Bali DD, Bishop of Guntur had at last his desire fulfilled by planning a religious community in this village with the Catholic population. The reception of the sisters in the village was celebrated with joy. The well with sweet source of water was their first gift to the sisters. On June 6, 1987, Srs. Lovina, Amala Chinnarani and Elizabeth Marineni, began their life in the new mission busying themselves with the freshly assigned responsibilities.The village, Kanaparu lies 45 kms away from the district headquarters Guntur and about 120 kms from Chilakaluripet. Proceeding from Chilakaluripet by the road that leads to Narasaraopet one has to deviate after 10 kms, on to a kacha road on the right side. On either side of this country road lie fields belonging to the landlords of this village. 
                                </p>
                            </div>

                            <div class="bs-call">
                                <p>
                                    When monsoons bless the land in proportion to their need, the produce of the land brings cheer and delight, but often disappointment is their lot since off season rains, drought and floods are a common phenomenon in this district. Albeit the people own vast lands they live in poverty. In course of time the sisters discovered that there were other things which claimed their primary attention. Setting up a boarding home for the children from the hamlets around Kanapparu, to check the number of dropouts and a health centre to overcome the dangers caused to the patients due to delay in reaching the hospitals in the towns for lack of transport facilities became the concern of the sisters. The rented house in the middle of the village where the sisters lived was turned into a boarding house for girls on January 7, 1988. Today their number has increased to 100. A dispensary most welcomed by the people of Kanapparu and the villages around was constructed in the five acres of land owned by the Sisters in the outskirts of the village. Part of this dispensary building was occupied by the sisters till a convent building was built in the same campus and was blessed on May 16, 1991. The Elementary school where Sr. Elizabeth Marineni was a staff member was upgraded into Middle school in the year 1996. On retirement of the Headmaster of the school that year Sr. Elizabeth Marineni was promoted as the Headmistress. The old school building in the church campus was not sufficient for the growing strength of the school. On September 20, 1995 the new school building constructed in the convent premises was blessed. Thus all the apostolic activities started functioning in the convent campus that was a little distance away from the village. Upgrading further, the RC Middle School into High School was discussed. 
                                </p>
                            </div>

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
            </div>
            <Footer />
        </>
    );
}
export default Kanapparu;
