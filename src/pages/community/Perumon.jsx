import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function Perumon() {
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
                        <a href="/perumon">Perumon</a>
                    </h3>
                    <div className="brudcrums">
                        <a href="/">Home</a>&nbsp;»&nbsp;{" "}
                        <span className="pagename">Perumon</span>
                    </div>
                </div>
            </div>

            <div className="container subpage">
                <h3 className="heading">Perumon</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <div>
                            <div className="bs-exercis mt-5">
                                <p style={{ marginTop: "20px" }}>
                                    <b>A flower is open to all that surrounds it: nature, light, the rays of the sun, the wind, water, etc. It exerts a spontaneous influence on all that is around it. It radiates joy and beauty. These exactly are the main characteristics of Coral Cluster which symbolically represents the house at Perumon with its beautiful and serene atmosphere of the Ashtamudi Kayal (lake)</b>
                                </p>
                            </div>
                            <div class="bs-call">
                                <p>
                                    The Sisters of St. Charles stepped into Kollam with the felt need of a ‘students’ home’ for the candidates. The Bishop of Kollam Rt. Rev. Dr. Joseph Fernandez welcomed us warmly and temporally gave the Sisters the Parochial house at Kureepally, which was an offshoot of Kadakkal community. This was also an occasion to enter into the parish where the love of Jesus could be made known better. Sisters Monica and Mary Joseph were the pioneers. As the number of candidates increased, it necessitated a search for a better and suitable place. At this juncture the fragrance of ‘Coral Cluster’ attracted our attention and true to its nature, we found its beauty and perfume in a place called Perumon Mundakkal, on the bank of the lovely lake Ashtamudi. It was the inspiration of Fr. James Puthenpura to bring us here. Rt.Rev.Dr.Joseph Fernandez, Bishop of Kollam gladly welcomed us to this beautiful location where we could spread the fragrance of this special rose. On August 30, 1997 we left Kureepally and pitched our tent in the garden of Coral Cluster. Initially they were put up in the presbytery which was vacant. Sr.Thankam was appointed Superior and Sr.Lally K. and Sr. Mary Joseph were the community members.
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

                    <div className='col-12'>
                        <p>
                            <b>Church History</b>
                            <br />
                            Perumon Mundakkal is the sub-station of Chemmakkad parish which is 400 years old. It belongs to the Diocese of Kollam. As it is very far from Chemmakkad and with the increase in the number of the parishioners, a need for a Church here was felt. Thus in February 26, 1937 the construction of the present church commenced. A thatched roof shed was made as a chapel to fulfil the need immediately. But in 1954 it was burnt down. The parishioners got together and by their hard work, they started the construction of the new church which was completed in 1974.
                            <br /><br />
                            <b>Mission</b><br />
                            At present this parish consists of 500 pious families that are actively involved in the development of the parish. The people are materially poor, lacking educational facilities and engaged in fishing. So the mission was to reach out to these marginalized fisherfolks and empowers them to improve their status in society. The first mission activity of the Sisters began in the Parish by visiting the families. Sr. Thangam, a trained nurse began to dispense medicine to the sick and assuaged the mental worries and the heart aches of the people by listening to and praying with them. Another need of the area discovered and expressed by the people themselves was education of their children. This request was made known to our Superior General Rev. Mother Andrea D’Souza who took to heart their request and granted the permission to start a school. The foundation stone was laid for the school by Mother Joseph, one of our first Indian Sisters and was blessed by the Bishop Rt. Rev. Dr. Joseph Fernandez. The construction work began on February 5, 1998. June 3, 1998 was an important milestone in the mission of Perumon. The Primary School for the fisher folks was started. The main purpose was to provide Christian education to the local people and to help them to live with dignity. We could build one or two class rooms each year as the number of students started increasing. Today the school has reached up to Std. X with astrength of 590. Free tuition centre and Catechism classes for the children and youth are other extended services.
                            <br /><br />
                            <b>Expansion</b><br />
                            Today the school has a new face with new blocks attached with facilities for library, laboratories, computer rooms etc. The CBSE has accorded No Objection Certificate and affiliation to the school. The school produces centum results in the board examinations. The construction work of the convent was started on January 9, 1999.The foundation stone was laid by the Bishop. On January 12, 2000 the Sisters shifted from the presbytery to the present building which was incomplete. On May 14, 2002, the completed building was blessed by the newly appointed Bishop of Kollam, Rt. Rev. Dr. Stanley Romans. The compound wall also has been constructed around the convent land after settling a number of disputes raised by the local people. Our hard work has resulted in tangible growth of the people and the mission. Some have been employed in reputed government and private institutions. The dignity of people and hope for a better future are realized. The Sisters animate the basic Christian Community groups, Catechism classes, take care of the sacristy, Vincent de Paul movement, visit the houses, prepare the children for the First Holy Communion and Thirubalasakhiyam. <b>S.C.B Associates,</b> comprising of 12 members started in the year 2009 is growing steadily and becoming vibrant. The Sisters of Perumon LABOUR in FAITH towards PROGRESS in the coastal land.
                            <br /><br />
                           
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Perumon;
