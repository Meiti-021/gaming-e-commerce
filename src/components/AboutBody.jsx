import about1 from "../assets/images/abt-1.webp";
import about2 from "../assets/images/abt-2.webp";
import FlightIcon from "@mui/icons-material/Flight";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CallIcon from "@mui/icons-material/Call";

const aboutOptions = [
  {
    title: "Fast delivery",
    body: "The specific delivery time will vary depending on the shipping address and the selected delivery option. Customers can track their order online to see the estimated delivery date.",
    icon: <FlightIcon style={{ color: "#fff" }} />,
  },
  {
    title: "Many offers",
    body: "CMS also offers a variety of training and technical assistance to help providers and state agencies meet their responsibilities under Medicare, Medicaid, and SCHIP. These services include:",
    icon: <LocalOfferIcon style={{ color: "#fff" }} />,
  },
  {
    title: "24/7 support",
    body: "CMS Service support is available 24 hours a day, 7 days a week. You can reach them by phone, email, or chat. Here are the contact information for CMS Service support:",
    icon: <CallIcon style={{ color: "#fff" }} />,
  },
];
const AboutBody = () => {
  return (
    <div className="w-full h-auto p-5 bg-black font-first-font">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
        <h2 className="text-white text-3xl sm:text-4xl text-center  font-semibold">
          A Passionate Front-End Web Developer from Tabriz, Iran
        </h2>
        <div className=" md:grid md:grid-cols-2 gap-10">
          <p className="text-sm text-gray-400 w-full">
            Greetings! I am thrilled to introduce myself as a front-end web
            developer hailing from the enchanting city of Tabriz, nestled in the
            heart of Iran. With a deep passion for technology, gaming, and web
            development, I have embarked on an exciting journey in creating
            cutting-edge gaming accessories.
          </p>
          <p className="text-sm text-gray-400 w-full mt-2 md:mt-0">
            Since my early years, I have been captivated by the world of gaming.
            The immersive experiences, the adrenaline rush, and the power of
            virtual realms have always fascinated me. This passion, combined
            with my knack for coding and design, led me to explore the realm of
            web development.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4 justify-center w-full">
            <h2 className="text-white text-3xl  font-semibold">
              Make it inviting and engaging
            </h2>
            <p className="text-base text-gray-400 w-full text-justify">
              With determination and perseverance, I honed my skills in
              front-end development, embracing the latest trends and
              technologies in the ever-evolving digital landscape. From HTML and
              CSS to JavaScript frameworks, I have immersed myself in the world
              of coding, striving to create seamless and user-friendly
              interfaces that enhance the gaming experience. Driven by an
              entrepreneurial spirit, I embarked on a quest to contribute to the
              gaming industry in my own unique way. Drawing inspiration from my
              own gaming adventures, I set out to design and develop innovative
              gaming accessories that would elevate the gameplay for fellow
              enthusiasts around the globe. Combining my technical expertise
              with a deep understanding of user experience, I have crafted
              gaming accessories that seamlessly integrate into the gaming
              ecosystem, enhancing comfort, precision, and overall performance.
              Through meticulous attention to detail, I have focused on creating
              ergonomic designs, intuitive interfaces, and high-quality
              materials, ensuring that every gamer can unleash their full
              potential.
            </p>
          </div>
          <figure className="w-full h-full mt-5 md:mt-0">
            <img src={about1} alt="" className="w-full h-full object-contain" />
          </figure>
        </div>
        <div className="md:grid md:grid-cols-2 gap-10 flex-row-reverse ">
          <figure className="w-full h-full mb-5 md:mb-0">
            <img src={about2} alt="" className="w-full h-full object-contain" />
          </figure>
          <div className="flex flex-col gap-4 justify-center w-full">
            <h2 className="text-white text-3xl  font-semibold">
              Keep it short and sweet
            </h2>

            <p className="text-base text-gray-400 w-full text-justify">
              As a front-end web developer, I understand the importance of
              bridging the gap between technology and user experience.
              Therefore, in addition to developing exceptional gaming
              accessories, I have dedicated my efforts to building immersive and
              responsive websites that showcase my creations. Through sleek
              designs and seamless functionality, I aim to captivate visitors
              and provide a comprehensive platform to explore and purchase these
              innovative gaming accessories. Being from Tabriz, a city steeped
              in history and culture, has instilled in me a strong sense of
              craftsmanship and pride in my work. I strive for excellence in
              every project, constantly seeking to improve and push the
              boundaries of what is possible. I am immensely grateful for the
              opportunities that web development has provided me, enabling me to
              combine my passions and create meaningful experiences for fellow
              gamers. As I continue on this thrilling journey, my goal is to
              make a lasting impact in the gaming industry by crafting
              exceptional gaming accessories that empower players to unlock
              their true potential.
            </p>
          </div>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl  -mb-6 mt-6 text-center  font-semibold">
          About our services
        </h2>
        <p className="text-sm text-gray-400 mx-auto text-center w-full md:w-3/4">
          The style of an &#34;About Us&#34; page can vary depending on the
          company and its target audience. However, there are some general tips
          that can help you create a well-written and engaging &#34;About
          Us&#34; page.
        </p>
        <div className=" grid  grid-cols-1  md:grid-cols-3 mt-6 gap-10">
          {aboutOptions.map((item) => {
            return (
              <div
                className="p-4 w-full  flex flex-col gap-3 bg-gradient-to-r from-blue to-second-color"
                key={item.title + "about-options"}
              >
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-semibold text-white">
                    {item.title}
                  </div>
                  <div>{item.icon}</div>
                </div>
                <p className="text-gray-100 text-sm">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
