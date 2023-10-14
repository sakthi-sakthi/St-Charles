import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
import { Link } from 'react-router-dom';
function Jolarpet() {
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
                        <a href="/jolarpet">Jolarpet</a>
                    </h3>
                    <div className="brudcrums">
                        <Link to={"/"}>Home &nbsp;»&nbsp;{" "}</Link>
                        <span className="pagename">Jolarpet</span>
                    </div>
                </div>
            </div>

            <div className="container subpage">
                <h3 className="heading">Jolarpet</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <div>
                            <div className="bs-exercis mt-5">
                                <p style={{ marginTop: "20px" }}>
                                    <b>In 1964, Fr.Mathew Menezes, </b>the parish priest, of Joloarpet requested Mother Christiane, the Provincial Superior to take up the new mission. The Provincial Superior to take up the new mission. The mission was realised with the arrival of the new parish priest Rev.Fr. Francis Guezou, S.D.B. He was seized with the desire to make Jesus known and to create new Christian community. He requested Mother Christiane to enlist the sisters’ support in the development of the tribal people at Yelagiri Hills, about 20 kilometres from Jolarpet. Mother Christiane accepted the proposal. The house at Jolarpet would serve as a base from where the sisters would reach out to the surrounding villages as well as to those of Yelagiri Hills. With this in mind a house named ‘Hill View’ at the foot of Yelagiri Hills belonging to Mr.A.B. Melder, was bought by Fr.Guezou for the convent. The three pioneers were Sr.Angela, Sr.Helena and Sr.Ursula who arrived in Jolarpet on October 7, 1964. They immediately started extending their services to the people in the villages. Jolarpet has its own historical and geographical significance. It is a co-incidence that being close to Jolarpet junction, this community has the privilege and magnanimity to go the station to meet the sisters travelling to different directions and offer them some refreshments! It was also a junction to have Charismatic prayer services, gatherings of Mother and Child health programes camps by doctors for medical checkup of babies and women.
                                </p>
                            </div>
                            <div class="bs-call">
                                <p>
                                    <b> When Sr.Paula</b> was the Superior of the house from <b>1981-1985</b> she had a busy schedule in the dispensary being a trained nurse. Apart from dispensing medicines, she also organized MCH – Mother and Child Health – programs and mobile dispensary in Jolarpet and sub-stations in Veppempet and Pudur. In 1985 when Sr. Anne Mary was Superior, an additional land measuring one acre and ten cents adjacent to the convent was bought, it had a good well and coconut trees which are a boon to the community even to this day. The constant support and guidance received from Rev. Fr. Guezou S.D.B. and Mr.Duhayon right from the inception of this house is worth recording and praise worthy. In March 1986 the foundation stone was laid for the boarding house meant for the poor children which was sponsored by Fr.Guezou S.D.B. Sr. Renee, the Provincial Superior, had a dream to make the poor children of the sub-stations stay with us so that they coulc have an easy access to the school and receive better care from us. Sr. Ignatius, who was the Superior and Directress of junior sisters of the province, had no other choice than to request the Provincial Superior to bring Sr.Catherine from Yelagiri Hills for the supervision of the new building.
                                </p>
                            </div>
                            <div className="bs-call">
                                <p>
                                    Thanks to her master mind which worked well in raising up that lovely home. <b>May 28, 1987</b> was a ‘Red letter day’ for Jolarpet as it witnessed the opening of the free boarding house for the poor children of Jolarpet, Pudur, Veppempet and other neighbouring villages. It was blessed by Rev. Fr. Guezou SDB. We gratefully remembered our “Papa” (Mr. Duhayon) Needle work and embroidery classes also started in full swing. Sr. Saroj, the next Superior, in all ‘Confidence’ continued the good work started by her predecssors. Sr. Francisca who succeeded her made use of her aesthetic taste to beautify the chapel, which creates an ambience for everyone to enter into a state of stillness and inner peace. October 7, 1989 marks an important milestone in the history of Jolarpet convent – SILVER JUBILEE of the foundation of the convent. It was a fitting occasion to count joyfully the fruitful years of Jolarpet community, keeping faithfully the charism of the Congregation with great enthusiasm and ‘Confidence’. Responding to the needs of the time, Sisters engaged themselves in various apostolates, such as social work, dispensary and nursery school, tailoring section and so on - all centres of love, sacrifice and dedication to the poor, the sick and the destitute. 
                                </p>
                            </div>
                            <div className="bs-objective">
                                <p>
                                    It was also an appropriate moment to recall with gratitude and raise our hearts to Almighty God for what has been accomplished through the selfless sacrifices of all those who spent themselves for the cause of this house, specially Mother Christiane, Mother Benedicta and Mother Renee. More than once Jolarpet was the venue for Final Profession ceremony, meetings of various types including the yearly get-together of our convent girls and their families. Coming to Jolarpet has always been a joyful occasion when one revives her ‘Confidence’ and belongingness. On October 22, 1991 Sr. Joanna passed away in Vijaya hospital, Chennai after having suffered from many complications. She was an active member of the community, her jokes and wise sayings were thrilling. Her absence created a big vacuum in the community. She is buried in Tirupattur cemetry.
                                </p>
                            </div>
                            <br/>
                            <b><h4>Management and Students of St.Charles Community College</h4></b>
                            <div className="bs-objective">
                                <p>
                                    After having spent 23 long years in Belgium, Sr. Jacinta Raju returned to India and joined the community on January 18, 2005. Sr. Mary Queen, the then Superior and Sr. Lovina walked on the unbeaten path to realize a dream they had for this community. They attended a seminar on ‘Community College’ conducted by Fr. Alphonse Xavier S.J. This inspiration has paved the way for the new venture at Jolarpet. Permission was obtained from Mother Benedicta, Superior General and her Council to take up this new initiative. On June 13, 2005, the Community College was blessed by Rt. Rev. Dr. Freddy D’Souza, the Bishop of Jhansi, the brother of Sr. Renée. The function was attended by 15 Priests, parents of the students, and Sisters from neighbouring communities. Sr. Jacinta was appointed Principal and Sr. Mary Queen as the Directress of this college. At the very outset an orientation was given to the students and parents. Tamil Nadu Open University granted recognition for the college which has four courses. Many girls from poor economic background profit by this one year course. Every year the annual day is celebrated on a grand scale which demonstrates the hidden talents of the students.
                                </p>
                            </div>
                            <div className="bs-exercis mt-5">
                                <p style={{ marginTop: "20px" }}>
                                    The student-strength of the college has been decreasing year by year due to various reasons, but efforts are being made to strengthen it. The play school which had started in 1998 was a great help for the students of the Community College. In 2008 it was closed down due to decrease in the number of students in the college. September 17, 2007 marks the close of the chapter of a unique and dynamic person – Sister Renee D’Souza. As every one admits, she carried on in life with such zeal and enthusiasm that we used to wonder how a person who has undergone surgeries one after the other and with her limited diet, could achieve so much for the Congregation. Her last days were spent in St. John’s Hospital, Bangalore. Her funeral Mass was at the Parish Church of Jolarpet officiated by her brother Bishop Frederick D’Souza of Jhansi Diocese. She has left an indelible mark of her hard work and vision in the Eastern Province of St. Charles. Responding to the signs of the times Jolarpet community felt the need of a new mission – starting a ‘Home for the Aged’ and destitute. So far 5 women and one man are admitted .With ‘CONFIDENCE’ in Him who has entrusted them with His Mission, they move ahead believing that, “To will what the Divine wills is the supreme Wisdom”.
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
export default Jolarpet;
