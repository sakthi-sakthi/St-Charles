import Header from '../../components/header'
import Footer from '../../components/footer'
import { useEffect, useState } from "react";
import ApiUrl from "../../Api/Api";

function Ranipet() {
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
                        <a href="/ranipet">Ranipet</a>
                    </h3>
                    <div className="brudcrums">
                        <a href="/">Home</a>&nbsp;»&nbsp;{" "}
                        <span className="pagename">Ranipet</span>
                    </div>
                </div>
            </div>

            <div className="container subpage">
                <h3 className="heading">Ranipet</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <div>
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <img src="images/subpage/2.jpg" alt="" style={{ width: "25rem", height: "14rem", }} />
                                <img src="images/subpage/1.1.jpg" alt="" style={{ width: "25rem", height: "14rem", }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <img src="images/subpage/1.2.jpg" alt="" style={{ width: "25rem", height: "14rem", }} />
                                <img src="images/subpage/1.3.jpg" alt="" style={{ width: "25rem", height: "14rem", }} />
                            </div>
                            <br />
                            <p>

                                The Mother of the Missions Rev.Mother Josephine Allard’s dream and prayer when miraculously became a reality; the one who cherished the joy with ‘bright smile’ must have been St.Therese of Lisieux, whose intercession was intensely and constantly pleaded. The radiating bright smile ‘Little Flower’ might have brightened not only the small village ‘Ranipet’ but also the land of India at large as she dropped the first rose of the S.C.B mission in Ranipet. ‘Bright Smile’ of the people of Ranipet was the first sight for the four missionaries who landed in Ranipet in 1929. Extreme happiness of the people at the arrival of the missionaries was given other expressions – music, dance and procession but it was the smiling faces all around that brought unimaginable strength to the missionaries. The formal installation of the community by His Grace, was on December 31, 1929. Holy Mass was celebrated for the first time in the chapel of Little Flower Convent.A new Sanctuary is established and a Shrine is erected. The previous day’s gathering stayed on for the Mass which was held at 7.00 a.m, which was followed by a public reception. Great was the surprise of the sisters when the boisterous crowd offered them garlands and bouquets of every native hue and fragrance. After the ceremony, the Blessed Sacrament was installed and the sanctuary lamp was lit by Fr.Ladislaus, this lamp continues to illumine many, drawing them closer to Jesus.
                            </p>
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <img src="images/subpage/7.jpg" alt="" style={{ width: "51rem", height: "25rem", }} />
                            </div>
                            <p>
                                Ranipet Parish, Church of Our Lady of Health, was built in 1855 but there was no resident priest, it was entrusted to the priest who looked after the smell chapel dedicated to Mater Dolorosa at Arkonam.In 1930, after the foundation of Little Flower Convent in Ranipet,a resident priest was appointed, Fr.Ladislaus, a Polish Salesisan, who had arrived recently in India took charge of the Mission.

                                Christian Education
                                The school was inaugurated on January 15, 1930, it was housed in the convent. In the beginning there were 30 children, a few days later 50 more were admitted, of whom 12 were Non-Christians. It was a consoling and encouraging start even though the atmosphere in the convent was congested. The opening of the school was presided over by Msgr. Mederlet, he blessed the pupils and distributed sweets to them. The convent was situated in an ecumenical setting: the famous Protestant school on the left, a big Protestant hospital behind and a big Board High school in front.
                            </p>
                            <img src="images/subpage/5.jpg" alt="" style={{ width: "51rem", height: "25rem", }} />
                            <p>
                                The school had on the staff, three of the four pioneers of the Congregation, Rev.Mother Marie Gerard ws the first Headmistress and Correspondent of this new school. The first teachers to tend the little ones were Miss.Agnes Leela and Miss. Padmavathi. Selvi Padmavathi was a pious Protestant lady living in Arcot. Mother Marie Gerard met her and invited her to the convent, after much hesitation she came to Ranipet. She was later christened as Mary. She was one of the first five Indians who dedicated their lives to the Lord Jesus, in the congregation of the sisters of St.Charles Borromeo.Even to this day L.F.C Ranipet stands as a beacon of Christ’s Light to thousands of students who set their land mark far and wide.
                                <br /><br />
                            </p>
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <img src="images/subpage/6.jpg" alt="" style={{ width: "51rem", height: "25rem", }} />
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
                        <b>Health Care</b>
                        <br />
                        On January 31, 1930 a month after their landing at Ranipet the sisters saw the need of opening a dispensary to care for t he sick of the villages around Ranipet. From their limited resources they bought some essential apparatus and medicines. The dispensary was blessed on April1, 1930 by Msgr.Despatures. Msgr. Mederlet addressed the gathering on the occasion. Also present was Msgr. Mathias, Provincial Superior of the Salesians. The Doctor was a great boon to the sisters, je was a staunch catholic, he served devotedly not only in the dispensary but also in the school. After the opening of the dispensary, the sisters started visiting the sick in their homes too.Mother Marguerite Marie was given charge of the Medical Apostolate.
                        <br /><br />
                        <b>Pastoral Care</b><br />
                        The impact of the presence of the sisters in this corner of India ws tremendous. In a short span of four months, they exercised a great influence on the inhabitants of the villages. The people were like sheep without a shepherd, they found in the sisters inspiration and true guidance for their lives. In the manner of their reaching out to the needy and poor they pointed out to the One who is the Way, the Truth and the Life. On June 4, Mother Marie Gerard had the joy of seeing an old man of Thingal village receiving Baptism, her first step in direct evangelization.
                        <br /><br />
                        <b>Social Welfare-Care of The Abandoned Children</b><br />
                        July 1, 1930 was a very memorable day, the opening of the orphanage with 20 girls ranignfrom the age of 5-14 years. It began with 4 girls from Kilacheri. The inmates in the orphanage increased in numbers so that in the year 1940, there were 450 neither the lack of accommodation nor the meager finance could surpass Mother Marie Gerard’s concern and love for the poor children, she had an indomitable trust in Divine Providence.
                        <br /><br />
                        <b>A FEW MILE STONES</b><br />
                        Diamond Jubilee of the convent
                        November 24, 1989 was a red letter day in the history of the Congregation and Little Flower Convent in particular as it was the Diamond Jubilee of the Convent. The solemn Eucharist was celebrated by the Bishop of Vellore Rt. Rev. Dr. Michael Augustine D.D. and con-celebrated by 24 priests from all over. Sixty lamps brought in by Sisters in procession represented the 60 years of toil and prayers witnessed by LFC. The presence of the then Superior General, Mother Andrea; Provincial Superior, Mother Renee and Sisters from both the Provinces were an additional cause of pride and joy for the inmates of LFC.
                        <br /><br />

                        <b>Golden Jubilee of Higher Secondary School</b><br />
                        The same day every one turned their attention towards the school. This was yet another occasion of joyous celebration in gratitude for all the marvels the Lord had done in 50 long years. Many who have passed through the portals of LFC were present to express their gratitude to their Alma Mater. A jubilee souvenir was released on the same day. It was sponsored by Samba Publications, Chennai.
                        <br /><br />
                        <b> Diamond Jubilee of Elementary School</b><br />
                        The radiance of ‘Bright Smile’ continued to spread in and around Ranipet and once again an occasion provided itself to recognize its fruits and flowers. Bravo to those who toiled hard for 60 long years without counting the cost. January 10, 1997 marked the death centenary of Little Therese, the Patroness of Missions and of the Convent. The Bishop of Vellore, Rt.Rev.Dr. Chinnappa SDB D.D., graced the occasion by a solemn concelebrated mass followed by a function. To mark this joyful event a Tamil hymn book entitled “Sirumalar Kuilosai” was released by the Bishop. The school at LFC began growing in leaps and bounds and it necessitated the shifting of the English medium to Ammoor. LFC English medium school was inaugurated on May 25, 2001. The same name was kept to have more connectivity and thus the fragrance of ‘Bright Smile’ rose had a grafting which started blooming from the initial stage itself.
                        <br /><br />
                        <b>Platinum Jubilee of the Congregation in India</b><br />
                        Jubilee bells started chiming in the campus of LFC on the November 24, 2004. The theme of the mass, “Give Thanks to the Lord and Tell of His Wonderful Deeds”, was highlighted by the main celebrant Rt.Rev.Dr. Chinnappa.S.D.B. D.D.The concelebrants were the Bishop of Salem Rt.Rev.Dr.Singarayar and 50 Priests. Mother Benedicta, the Superior General and Sisters from far and wide, students, teachers, formers, friends and benefactors adorned the LFC campus for the Mass and the function that followed. The delicious dinner marked the climax of the day. God blessed Abraham saying, “I will make you a great nation. I will bless you and make your name great and you shall be a blessing”. (Gen.2:2) In the same way the Lord blessed the Sisters of St.Charles from its conception and in particular ever since we landed in Indian soil. The tiny seeds of Little Flower Convent burst forth into bloom, producing flowers, fruits and trees. As the years rolled by education took its priority and paved the way for the youth to help them have faith and trust in God and thus prepare themselves to reach their goals through promising careers.Many developments have taken place in the infrastructure of the Convent and School. Computer Education has been a credit to the school. The well equipped laboratories and library are a source of better learning for the thousands of students who fill the class rooms of Little Flower Convent School. Almost every year the school is awarded the prize for being first in the District in Std.X and XII examinations. Even in extracurricular activities our school has always record performances. The development of Little Flower Convent stands as a testimony to the goodness of God and the efforts of the Sisters for the development of the poor.
                        <br /><br />
                        <b>Other Apostolic Activities</b><br />
                        The apostolic activities include coaching classes for the poor children studying in Government Schools. They are also helped financially. The neighbouring families welcome the Sisters to share their joys and sorrows, hopes and fears; they do have great confidence in the Sisters. They also visit slums and homes of the refugees and motivate them to be courageous and make progress in life. S.C.B. Associates functions very actively under the leadership of Sr.Josephine Doss. Sisters assist in the parish activities. They join the parish choir, prepare the liturgical services for feast days and on special occasions, teach catechism on Sundays and render their services to the sub-stations namely, Anaicut, Avarakarai, Kondakuppam. The ‘Bright Smile’ of the Sisters has far reaching effect as it is seen in the lives of those whom they encounter. Life continues in full swing with various activities, mainly the apostolate of education which carries the message, “Those who instruct many will shine like stars lighting up the sky”.(Dan.12:3)<b> “Life must blossom like a flower offering itself to the divine”</b>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}
export default Ranipet;
