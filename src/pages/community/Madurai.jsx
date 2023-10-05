import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";

function Madurai() {
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
                        <a href="/madurai">Madurai</a>
                    </h3>
                    <div className="brudcrums">
                        <a href="/">Home</a>&nbsp;»&nbsp;{" "}
                        <span className="pagename">Madurai</span>
                    </div>
                </div>
            </div>

            <div className="container subpage">
                <h3 className="heading">Madurai</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <div>
                            <p>

                                A great hope was growing at this time, the sisters were moving in different directions in the country to establish new foundations. The late sixties seemed to burst forth with new vigour. The invitation for the new venture was initiated by Rev.Fr.A.J. Francis C.ss.R., who inspired the Bishop of Madrai to enlist the services of the sisters of St.Charles for the diocese. Mother Christiane who was the Provincial Superior responded promptly. Sr. Benigna and Sr. Andrew were sent to prepare the way, they went to Madurai in the second week of January 1969. After their visit, Mother Christiane assured the Bishop that she would send two sisters initially for the starting of the Nursery school. The fore-runners of the mission were Sr.Mathilda, Sr.Lizzy and Sr. P. Gertrude. They were welcomed by Fr.A.J.Francis, C.ss.R., to the rented quarters. The sisters started visiting the locality and recruited 15 pupils for the Nursery class. The mission was officially launched on June 16, 1969, the pioneers were Sr. Benigna and Sr.Myriam. It is a day to be remembered and cherished. The climate was not congenial for Sr.Benigna’s frail health, so she had to take leave of the place. Sr. Benigna was replaced by Sr.Vincent, who also got ill. The animators were changed in quick succession. Sr.Ann Mary was appointed superior, she took charge on June 25, 1970. St.Charles English Medium school was strated on June 19, 1969, the classes were conducted in rented buildings at Tirunagar. It started with 24 pupils on roll and by 1971, the strength wa 105 students, from Nursery to class IV. Archbishop Justin Diraviam was a strong support and generously gifted the existing property at Thanakkankulam. The Archbishop purchased 5 acres and 39 cnets and the sisters of St.Charles purchased 6acres and 44 cents. The total area is equivalent to 13 acres and 20cents. Thanakkankulam is located 13 kilometres from Madurai town. In the beginning, the sisters were staying in a small rented house without proper facilities it was much later that they moved t a bigger house, where they could have a chapel. Archbishop Justin Diraviam installed the Blessed Sacrament on November 4, 1970, it was a day of rejoicing to have the presence of the Eucharistic Lord in the convent.
                            </p>

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
                        <br />
                        <p>
                            The mercy home known as Sneha Illam, a home fo he destitute opened its doors to the aged on June 4, 1974. The first three inmates were, Ragavan (85yrs) Arokia samy(75) and Royappa(66). Sr.Cecilia Anthont was in charge of the home, it was inaugurated at the rented house in Tirunagar. The inmates received loving care and medical assistance. The foundation stone for Sneha Illam was laid by His Grace on August 14, 1976, it took two and a half years to complete the building. It was blessed and inaugurated on May 1, 1979 by the Archbishop of Madurai, Dr.Justin P.Diraviam. The home accommodated forty elderly, both men and women, irrespective of creed or caste. The home could see the light of day because of the generous contribution from Caritas India and Helpage International. The St.Charles Health Centre was blessed and inaugurated by His Grace, the Most Rev.Dr. P. Justin Diraviam on August 14, 1976 at Thanankankulam, Thiruvalluvar Nagar. On the same day was the blessing of the foundation stones for the convent and the Mercy Home. The Health Centre is a ten-bed hospital and caters to the health of the Burma refugees and Sri Lankan refugees who live in the vicinity and also to the rural poor. Sr. Tresa Arackal took charge of the health centre. The long awaited ambulance arrived on June 4, 1979. The ambulance was a great asset, the sisters could reach out to the sick in the villages. The Mother Child Health had nearly three hundred bebeficiaries. Delivery cases are conducted, most of the poor mothers are given information and guidance on natural family planning, breast-feeding and immunisation. On November 16, 1976, Fr.Divianadan, assistant parish priest, blessed the site of the convent building. Since 1969 the sisters were `residing in rented houses at Tirunagar. In 1979 they moved to the new campus at Thiruvalluvar Nagar. The convent was blessed on May 1, 1979, by the Archbishop of Madurai, the house also accommodated the boarding students. The digging of the ground for the foundation of St.Charles Nursery School started on November 4, 1976. The foundation stone was laid on January 17, 1977.
                        </p>
                        <br />
                        <p>
                            In the meanwhile there was a proposal to upgrade the nursery school to a Matriculation school. The school bus was purchased on November 20, 1978. On December 27, 1978 the application was sent for the opening of the Matriculation school, to the Inspector of Matriculation schools, Madras. The day scholars arrived at the new campus at Thiruvalluvar Nagar riding the school bus for the first time on June 11, 1979. Since a negative reply was given by the inspector of Matriculation schools, the students who were already admitted earlier to class VII had to be re-admitted in other schools. On January 8, 1980, the new school building was blessed by Rev.Fr.Manfred Hauck S.A.C. and the school function was presided over by Rev.Mother Henriette, Superior General of the Congregation. In September 1981, discernment regarding the upgrading of the school was made. Finally the decision taken was to keep the English medium school up to class V and to open a Tamil medium primary school for the children of Burma and Sri Lanka refugees residing in the locality. There was a hope that if the proposal was acceptable then the Tamil medium school could be up-fraded to High school and absorb the English medium students into its English section like LFC school, Ranipet. In June 1981, Std I Tamil medium was already introduced with Sr.Amrtham and Mrs. Dorothy Bushanam as the first teachers. The small seed sown in compassion for the marginalized has become a sturdy branch with a primary school, high school, and higher secondary school, (Tamil Medium) recognized and aided by the stare Government. The St.Charles English Medium school started with thirty children in a hired building. It has also been recognized on June 21, 200. It remains as a private un-aided school and has students hailing from Tirunagar and the estates of Cumbum and Cuddalore and other distant places. The Redemptorists fathers who had drawn the sisters of St.Charles to Madurai left for better pastures.
                        </p>
                        <br />
                        <p>
                            On March 6, 1977, the Pallotine fathers visited Tirunagar to make enquiries about the place and the people. From January 28, 1978, the Pallotines fathers pitched a tent in Tirunagar. December 10, 1978 was a red-letter day in the history of Tirunagar, the creation of a new parish by Archbishop Justin Diraviam. A concelebrated Mass marked the official inauguration of the Prish, the Pallotine fathers were entrustd with the pastoral work. Palloti Illam, the minor seminary of athe Pallotines, was blessed on November 8, 1979 at Thanakankulam by the Archbishop. The Archbishop also blessed and consecrated athe new parish church dedicated to St.Vincent Palloti, on March 19, 1981, a great blessing for the Catholic population and the sisters form the three convents, Amala convent, Cheshire home (sisters of St. Joseph of Tarbes) and St.Charles convent. The inevitable changes that growth incurs and the modifications that become essential to adapt to the changes which have occurred after 1982 are recorded with fulfilling joy. The Mercy Home for the Aged ‘Sneha Illam’ that sheltered 20 old men and 20 women in the early years is now a home for 35 aged destitute women. The two remnants of the men folk reside in the watchman’s house by the side of the gate. The reasons are very obvious. Securing resident male nurses for a destitute home was not easy. More of the old abandoned widows were approaching us for help than the widowers. Unstinted service rendered by Sr. Aloysius Pinto for the management of this home is recorded with gratitude. St. Charles Health Centre which was the first sturdy structure that rose up in the campus has had an ebbing experience after the untimely death of Sr. Nirmala Mariya M.S. in the tragic accident that snatched her and Sr. Flora on June19, 2002.
                        </p>
                        <br />
                        <p>
                            The episode of the effort to upgrade St. Charles Matriculation School that was not successful in the seventies was brought up again for a re-try in 2004-2005 and it was successfully upgraded into a High School. The first batch of Std. X students appeared for the S.S.L.C. exams in 2008-2009. In 2009-10 it was upgraded into Higher Secondary School. The students enrolled during this year will appear for the Higher Secondary Board Examination in March 2011. The unflinching effort of Sr. Sukitha is appreciated in this venture. St. Charles Girls’ High School which sprang from Tamil Medium Primary school started in 1981. In 1998-99 it received the recognition to start the I year of the Higher Secondary Course. The first batch of State Board Higher Secondary students appeared for the Government Examinations in March 2000. Stepping ahead to Higher Education is no more an impossible dream for the girls in Thanakkankulam village. And pursuing their school courses in English Medium and matriculation board is affordable even for the lower middle class because of the sisters of St. Charles Borromeo. A long contemplated plan of the Eastern Province came true with the grand inaugural ceremony of the new building for St. Charles College of Education (B.Ed.,) for Women, on February 22, 2007. The foundation stone was blessed by Rev. Fr. John Peter, SAC and the construction was started on March 30, 2006. It took nearly a year for the work to be completed. The College building was blessed by Rt. Rev. Dr. Peter Fernando, Archbishop of Madurai, after Sr. Jaya, the Provincial Superior, cut the ribbon. The financial contribution from the communities pooled during the two consecutive fiscal years from 2005 to 2007 helped us meet a large part of the expenses. The united effort proved to be the strength of this mission. The unfailing support and the unstinted courage and guidance given by Sr. Jaya are recorded here with an appreciation for the educational field to higher rung with an amazing boldness. The tedious process of getting the recognition order from National Council for Teacher Education (NCTE) Bangalore, and securing No Objection Certificate from Tamil Nadu Government to obtain the former, were mind boggling and energy draining. No hurdles deterred Sr. Amali and community from reaching the target.
                        </p>
                        <br />
                        <p>
                            It was achieved by prayerful aspirations. NCTE accorded the recognition order for the year 2006-2007 in February 2007. The affiliation order granted by Madurai Kamaraj University in the same month brought the process to a successful completion. Candidates were enrolled for the course and on February 12, 2007 orientation was conducted for the newly inducted staff and students. “Enlightened to Empower” is the motto of the college. Every student teacher is enlightened to become an agent to empower the less fortunate of her motherland. This is the philosophy that forms the basis for all the educational and co-curricular programmes of the college. The student teachers from far away villages needed accommodation within the campus. The Health Centre which then was almost non-functional became the residence for the 22 candidates. When the enrollment of the 2007-08 batch of students overlapped the first batch, the number of residents increased to 55. Therefore, ‘Vianney Illam’, the guest house, was also occupied by the student teachers till 2008. A dormitory above the refectory of the boarders and a large room above the teachers’ room adjacent to the kitchen were put up on contract with Mr. John Isaac. The ‘Miriam Hostel’ thus came in useful for the accommodation of 30-35 members from 2008. A separate hostel with rooms to facilitate a comfortable stay and provide a conducive atmosphere for more students is yet to be realized. The increasing number of students in the schools made it necessary to have added toilet blocks which have been provided. Additional classrooms were needed for High School and Higher Secondary schools, therefore a single storied laboratory block attached to St. Charles Girls’ High School, a hall above the Matriculation main block and a single storied block along the campus wall on the Eastern side in the Matriculation school campus have been constructed during these 28 years since 1982.
                        </p>
                        <br />
                        <p>
                            Pastoral care is given to the Catholic community in collaboration with the parish headed by the Pallotine Priests. Representation in the Parish council, teaching Catechism on Sundays, Co-ordinating the B.C.C. activities of different zones, decorating the altar on special days, joining the Parish choir on Sundays and on all the feast days and extending timely assistance and services needed have been the practice of the sisters of this community from the time of the foundation of this Parish. Involvement in the life and culture of the people of this locality has initiated the Sisters to implement a number of Social activities. There are 35 self help groups, each comprising 10 to 15 members. 20 of them solely comprised by senior citizens and others for young women, obviously from the marginalized section of the society. The Embroidery and Tailoring Classes which for many years had empowered many a young woman to be resourceful had to be closed down in the year 2009 since the classes could not be held any more in the Health Centre. The plan to renew this training programme is in incubation. Everything narrated above goes to say that God is in our land and His hand is at work in enabling us to extend His kingdom.
                        </p>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}
export default Madurai;
