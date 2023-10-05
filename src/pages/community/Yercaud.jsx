import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";
function Yercaud() {
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
                        <a href="/yercaud">Yercaud</a>
                    </h3>
                    <div className="brudcrums">
                        <a href="/">Home</a>&nbsp;»&nbsp;{" "}
                        <span className="pagename">Yercaud</span>
                    </div>
                </div>
            </div>

            <div className="container subpage">
                <h3 className="heading">Yercaud</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <p>
                            Mother AnnMarie, the then Superior General, mother Christiane, Provincial Superior and Fr.Harou, M.E.P. visited Yercaud, on July 6, 1964. Their house hunting , lead them decide then to purchase nine acres of land with a few cottages from Mrs. Gilbi, and English lady. The house was located near the Church and bus-stand, and ideal location for the convent, which is still occupied by the sisters. On the July 13, 1964, three sisters, Sr.Carola, Sr.Philomena and Sr.Mageline moved in, Sr.Philomena was in charge of thehouse. July 16, 1964, Feast of Our Lady of Mount Carmel, the new foundation the Diocese of Salem ws blessed at Yercaud under the name of Rocca Borromeo. Yercaud is one of the important tourist centers in Salem District, a hill station in the Servarayon range of Hills in Eastern Ghats. It is at an altitude of 4970 feet above sea level. The highest peak of Yercaud is Servarayan Temple.Yercaud got its name from the Tamil words, ‘yeri’- lake and ‘kaadu’- forest. The British discovered it in the early 19th century. There are accounts of coffee plantations being introduced by a British officer in the area in the second decade of the 19th century. Though the first house on the hill was built in 1840, the first metalled roads were laid only in the early 20th century. The cool climate attracted Christian missionaries. The Sisters of St.Joseph of Cluny established the Sacred eart Convent for girls and Montfort School for boys was started by the Montfort Brothers. Yercaud is known for coffee plantations and orange groves. The lofty hill of extraordinary scenic- beauty is endowed with a salubrious climate. It became a full fledged taluk with effect from October 15, 1997. Yercaud a little heaven on earth; "it is impossible to give in words" writes F.J.Richards, I.C.S., in the Madras District Gazetteers a succinct account of the natural beauties of the Shevaroys. Rev. Dr. Miller, a great lover of the Shevaroys, drew up a list of eighty different rambles, most of them within a radius of 6 miles of his bungalow at Eachankadu, presently housing the novitiate of Montfort Brothers of St. Gabriel. The majority of the local population consists of daily wage earners in the coffee estates. 30% of the houses were built during the British Raj.
                        </p>
                        <br /><br />
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
                            The British legacy is there to be seen and felt in a number of places. A number of hotels built on international standards are well ensconced among trees. To enjoy every bit of nature in this hill, the British paved roads and built dwelling units. If the early architects of this hill station were to see the roads today, they would be shocked! The roads are full of ditches and cracks, ill maintained and uncared for. The only hope is that Yercaud gets its fair share of the Central Government's increased budget for tourism. Yercaud is yet another example of how the British appreciated the natural resources of India more than the Indians. The English used Yercaud as a summer retreat resort and their imprints are all over the place.The Sisters of St. Charles found a suitable place at Yercaud for a ‘Holiday Home’ in 1964. The pioneers of this mission were Sr. Carola, Sr. Philomina and Sr. Magdalene. Keeping alive the charism of the founder and choosing an apostolate according to the need of the local people was always the priority and objective of any community and Rocca Borromeo couldn’t be an exemption. Though originally it was meant to be a holiday home for sisters, in 1966 a kindergarten was started. Later it was made into a residential School and presently upgraded into a Primary School. Mid-May brings thousands of people to Shevaroy Hills of Yercaud to the festival which has Flower show, Dog show and Boat Race. The ‘Summer Carnival’ lasts for seven days. Yercaud is developed into a major trekking spot. The virgin forests of Yercaud Hills are the habitat of several endemic species of flowers and fauna.Preserving and nurturing the environmental beauty of Rocca Borromeo is noteworthy. Sr. Peter who lived at Yercaud Community from 1968 to 2009 knew the sprouting and fading of every plant and the birth and death of every animal in the campus. She enjoyed tending plants and looking after the farm. Every one of them was christened by her and addressed so lovingly. <b>‘Save water and save the world.’</b> The scarcity of water experienced at certain parts of the hills and the other parts of India was a warning for the community. A huge tank was built for rainwater harvesting close to the convent building. In 1995 a bore well was dug and in 2006 a plot of land was purchased where good source of water is available.
                        </p>
                        <br /><br />
                        <p>
                            The old Convent building needed a renovation and a proper kitchen. Rev. Fr. Ignatius, the Provincial Superior of Montfort Fathers, laid the foundation stone for the kitchen block. This work was completed and the new kitchen block was blessed on March 22, 1995. The presence of Sr. Ignatius, the Provincial Superior and her councilors added color to the day. By now the school that was upgraded to Std. V needed a computer laboratory. The foundation stone for this building was laid on May 20, 1998 and was completed within a year.In March 1991 the school had the rare privilege of welcoming the then M.P of the Congress party, Mr. Oscar Fernandez. He presided over the School Annual Day function and his wife Mrs. Blossom Fernandez distributed the prizes. St. Charles residential school attracted more and more students because of its good standard and discipline. Additional classes were a necessity. The foundation stone for a new school building was laid by Rev. Fr. Irudaya Selvam the Parish Priest on August 22, 2002 on the Feast of Queenship of our Mother Mary. Rev. Sr. Saroj the Provincial Superior was present on this occasion. The school building was completed and blessed on June 14, 2003. Rocca Borromeo community had the joy and privilege of celebrating the Golden Jubilee of the Religious profession of Sr. Renee and Sr. Peter in1995 and of Sr. Assunta in 2009, Silver Jubilee of Sr. Michael and Sr. Annie Joseph and a rare occasion of celebrating the Diamond Jubilee of Sr. Peter in 2005. A mountain top is conducive for silence, prayer and reflection. The community at Yercaud was the host to the capitulars of Provincial Chapter of 1999 presided by Sr. Ignatius and in June 2005 presided by Sr. Saroj. We gratefully remember Mother Benedicta who was invited to be the moderator of the sessions at the Provincial Chapter of 1999. The quiet surroundings and the pleasant weather on the hills of Yercaud have attracted many God-Seekers and provided an apt atmosphere for contemplation and solitude. Sisters are welcomed with joy and warmth for retreats and seminars. The first Charism retreat of the Congregation was held at Yercaud community animated by Sr.Sheila Corda, Sr. Ignatius and Sr. Josita. Sisters, who come to this place, refresh themselves physically and spiritually and return to their apostolic centers quite renewed and recouped in body, spirit and mind. Starting a home for the less privileged of the society is one of the future plans of the community, to care, to love and restore the dignity to the children of God through a holistic education.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Yercaud;
