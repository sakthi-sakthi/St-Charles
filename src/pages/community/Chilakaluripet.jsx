import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function Chilakaluripet() {
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
                        <a href="/chilakaluripet">Chilakaluripet</a>
                    </h3>
                    <div className="brudcrums">
                        <a href="/">Home</a>&nbsp;»&nbsp;{" "}
                        <span className="pagename">Chilakaluripet</span>
                    </div>
                </div>
            </div>

            <div className="container subpage">
                <h3 className="heading">Chilakaluripet</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <p>
                            This is the story of the eighth foundation and of the first house in the state of Andhra Pradesh, at Chilakaluripet, in Guntur District. In response to the request of the then Bishop Ignatius Mummadi, the sisters of St.Charles prompted by the Spirit accepted the Invitation. Knowing fully well, the charism of the Congregation, the Bishop wanted the Sisters to wrok among the poor and down trodden. The first request of the Bisho of Mother Christiane dates back to 1964. As there was no dearth of such requests and invitations at athat time, this request was wait listed. In 1966 there was a reminder from the Bishop of the previous request. At this juncture the decision was taken. The pioneers, Sr.Paula and Sr. Assuntha landed in Chilakaluripet with Mother Christiane, on June 28, 1967. Fr.K.Innayya, the parish priest was there to welcome them the convent was started in a rented house. After they had settled down in the new place among new people, one of the rooms of the house was used as a dispensary but the sisters could not be in peace until a shed was put up for the Nursery school. Sr.Assuntha was in charge of the nursery school, to begin with there was fourteen students. In 1968, the construction of the dispensary was started, it was built by Fr.Deliege a Belgian priest. Sr.Vincent was the superior of the house from June 1968 to August 1968, in a brief period of three months, she transferred on grounds of ill-health. Immediately sr. Paula was appointed as the superior , she continued in office till 1973. The nursery school which had its beginning in the shed was shifted to the auditorium of the ‘Ladies club’. The Bishop proposed the starting of an English school, so that the sisters could be self-sufficient and financially stable, in order to be able to start and manage a telugu Medium school. Meanwhile several Government aided Primary and Upper-primary schools were started in the locality. So the starting of a Telugu Medium school was dropped, the Nursery school gradually progressed into an English Medium School. In 1970, the Bishop bought ten acres of land on the Peddanadipadu road, eitht acres for the sisters and two acres for the Parish church.
                        </p>

                        <div className="bs-objective">

                            <ul>
                                <li>
                                    <b> On June 28, 1982</b>  the silver bells chimed in joyful melody to celebrate the presence of the sisters of St. Charles Borromeo for 25 years in Andhra Pradesh.
                                </li>
                                <li>
                                    <b> Sr.Assunta</b>  celebrated the 25 years of her religious profession on January 28, 1985 with music and colours, which she deserved so well.
                                </li>
                                <li>
                                    <b> On February 7, 1988 </b> St.Charles English medium School celebrated the completion of its 25 successful years inaugurating the auditorium in memory of this event.
                                </li>
                            </ul>
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
                        <br /><br />
                        <p>
                            The construction of the convent building was started in 1971 and completed in 1973. Just then Fr.Deliege in his generosity built the out-patients department, it served a double purpose. The sisters lived on the first floor and the sick were welcomed on the ground floor. The patients were treated lovingly, good nursing care was given to one and all. The constructin of the school building was started in 1974 and was completed on February 22, 1976. The building was inaugurated by His Lordship, Bishop Ignatius Mummadi. It could accommodate students from Nursery to class X. Sr. Assuntha was transferred in May 1977 and Sr. Imelda took charge of the community. The foundation of the Hostel building was laid on October 1, 1977 and was completed on August 15, 1977. The school at this stage had 386 students on roll and there were 116 boarders boys and girls. From the year of its foundation i.e., 1967 till 1982, the community had to pass through floods and fire to establish a dispensary, an English medium High School and a boarding home for boys and girls. During these years and then till 1987 the apostolic activities were given a sturdy footing, especially the school was gradually upgraded. In February of 1988 an auditorium was blessed by Rt. Rev. Dr. Gali Bali DD, Bishop of Guntur.
                        </p>
                        <br /><br />
                        <p>
                            The Minister for Youth Welfare and Cultural activities, Mr. Pushparaju, inaugurated the building and presided over the inaugural function. With the increasing strength in the High School, a need for extension of the school building was felt and the construction of a new block along the compound wall that separates the parish land and the convent was planned and the work was completed in 1996. This block was then utilized for a private co-ed Junior College which officially commenced on July 14, 1997 with 15 students and has grown with nearly 220 students on roll. The massive boarding block that was raised in 1977-78 needed renovation as it appeared to be sinking on one side and deep cracks were seen on the walls. The renovation work with an added toilet block for boarders was completed in February 2005. A computer laboratory with 25 systems has been provided to the students of both the High School and junior college, this has enhanced approach from traditional to technological. The students from the town came to school mostly by bicycles and cycle rickshaws. In 1988 a private van on contract was arranged for their conveyance. Other infrastructure such as cycle shed and dining hall were added. Today four school buses are run to ply around 20 kms for transporting the students. Though the ministry of Education is given priority, the pastoral and social activities are also given due importance.
                        </p>
                        <br /><br />
                        <p>
                            The Sisters extend catechetical service to children and women’s employment programmes and pastoral care. Sunday Catechism classes are coordinated by the sisters both in the Parish and in its sub-stations. Evening classes for the children of the colony and the ‘Day Care’ programme for the poor old people in the locality have also been included to extend our compassionate service for the marginalised. The SCB Associates that was inaugurated on October 7, 2008, has now steadily grown strong with members who are actively participating in evangelical service in the parish and imbibing the Spirit of the congregation through regular meetings. Chilakaluripet, the first community in Andhra has had a few occasions when the jubilee bells chimed to call on people to rejoice and render thanks to God for His faithful care of this mission.
                        </p>
                        <br /><br />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Chilakaluripet;
