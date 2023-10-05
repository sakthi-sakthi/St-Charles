import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function Perambur() {
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
                        <a href="/perambur">Perambur</a>
                    </h3>
                    <div className="brudcrums">
                        <a href="/">Home</a>&nbsp;»&nbsp;{" "}
                        <span className="pagename">Perambur</span>
                    </div>
                </div>
            </div>

            <div className="container subpage">
                <h3 className="heading">Perambur</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <div>
                            <div className="bs-exercis mt-5">
                                <p style={{ marginTop: "20px" }}>
                                    <b>‘Bienvenu’ a beautiful Rose which is both radiant and sweetly scented attracts people; ‘bienvenu’ a French word means ‘welcome’ in English. So is the community at Charles Villa, Perambur. This house was converted into a house for student sisters in 1998, after the transition of Provincial House to Vinayagapuram. But it still continues to be a welcome abode to all the sisters from North, East and West who visit Chennai for various purposes. Like the ’Bienvenue rose’ Charles Villa community evokes sunny feelings of joy and extends welcome to all.</b>
                                </p>
                            </div>
                            <div class="bs-call">
                                <p>
                                    Come and visit my garden, my pleasant garden, bountifully flowers All my blossoming friends bless me with their heavenly grace.” (Alighthouse .com) Chennai known as Madras from mid 18th century is the capital of Tamil Nadu. It is the fourth largest city in India; and Perambur is a suburb of Chennai –North. Though the nomenclature source of Perambur is not apparently known, it is said that this was a place where bamboo trees grew a few hundred years ago around the Huzur Gardens area which currently houses the Simpson Pvt. Ltd. In Tamil ‘Perambu’ means bamboo and ‘ooru’ means village or place. It is located 4 K.M away from Chennai Central station. It is also one of the earliest British settlements in Chennai, mainly because of the Railway establishments during the 1850’s. Perambur was also noted for the largest presence of Anglo-Indians in Chennai and arguably in South India, mainly British settlements in and around Perambur during the construction and running of ICF (Integral Coach Factory). Perambur incidentally is one of the major Railway hubs in Chennai not only because of ICF but also due to a number of express/ Superfast trains that stop. Perambur is the fifth largest station in Chennai in terms of volume of passengers. Perambur railway Station has its record of the visit of Mahatma Gandhi in 1933.
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
                            <b>The Archdiocese</b>
                            <br />
                            The Archdiocese of Madras is in Mylapore which is the heart of this capital city. On September 14, 1952, Most Rev. Dr. Louis Mathias SDB was nominated as the first Archbishop of Madras Mylapore. His Grace was solemnly installed in the Santhome Basilica which was officially made as the Cathedral of the Archdiocese and St. Mary’s Church was made co-Cathedral. His successors were Most Rev. Dr. Arulappa, Most Rev.Dr.Casmir Gnanadickam SJ, Most Rev. Aruldoss James, and Most Rev.Dr.A.M Chinnappa S.D.B.and Rt.Rev. Dr.Lawrence Pius, the Auxiliary Bishop.
                            <br /><br />
                            <b>Our Lady of Lourdes Shrine</b><br />
                            Our Lady of Lourdes Shrine, Perambur is one of the most important Shrines of the Archdiocese with its majestic appearance and high pinnacles. It is a replica of the Basilica at Lourdes in France. The Shrine attracts pilgrims from all corners of the state and today is elevated as a Shrine of the Archdiocese. The Salesian Fathers take care of this parish. There are four Religious Congregations of women in this parish engaged in different apostolate. We, the sisters of St.Charles Borromeo, too contribute our mite. The sisters are actively involved in the parish activities, Sunday school, house visiting, visiting the sick and other pastoral work. Through their involvement with the families around them, they also find job placement for the poor and needy. Superiors General, visitors and delegates from overseas mission were welcomed at each arrival for General Chapter and holidays. The community had the privilege of witnessing several august celebrations like final commitment and Silver Jubilees. January 29, 1992 was a Red-letter day for the Eastern Province. Sr. Ignatius Thomas was installed as the provincial of the Province. Her councilors were Srs.Saroj, Assunta, Rina and Jaya.
                            <br /><br />
                            <b>Apostolic Activities</b><br />
                            The evening tuition center started in 1991 by Sr. Matilda Maliekkal with 13 children has grown in strength and quality. Today as a well established tuition centre in Perambur, it caters to nearly 200 poor children from STD III- XII going to different schools in and around Perambur. Well qualified teachers are appointed to give good coaching in all the subjects and supervise their studies. The sisters take care of the students’ all-round development and growth. The study centre at Thikkakulam is also supervised by a sister from this community. The tailoring class which began in the year 1992 with 6 students has gradually and steadily grown. At present 30 women in two batches are given training by a qualified teacher. In the year 2003, a play school was started by Sr. Sagayam M. About 30 kids are admitted to St. Charles Play School every year. The sisters take care of them with the help of the teachers.The school functions from 9.00 a.m to 12.00 noon from Mondays to Fridays. The children enjoy being in the school and the parents are pleased by the care given by the Sisters. The Charism of reaching out to the poor in Compassion is made vivid by the very life of the Sisters. They work for the poor, irrespective of caste and creed. The personal contact of the sisters with the parents of the evening class students has made a great difference in their relationships and is the source of encouragement to the students. The children are served snacks every day. Frequent family visits provide opportunities to get to know the struggles and joys of the people in the neighborhood and Parish. Small acts of kindness, ordinary deeds of love, lending a listening ear to the lonely and the troubled, being available to the people who come to the house are all vehicles of compassion which keep the sisters in solidarity with the people around. Therefore we can say that this transit house has become a Social Service Center by its nature of service and all the activities carried on here.

                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Perambur;
