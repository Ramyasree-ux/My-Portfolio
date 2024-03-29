import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><br></br> Welcome to my skills section, where I demonstrate my proficiency in various technologies and tools essential for crafting exceptional digital experiences. With a passion for continuous learning and a dedication to staying abreast of industry trends, I bring a diverse skill set to the table. From front-end development with HTML, CSS, and JavaScript to back-end prowess in languages like Python and Node.js, I thrive in the dynamic world of web development. Whether it's designing intuitive user interfaces, optimizing website performance, or solving complex technical challenges, I am committed to delivering high-quality solutions that exceed expectations.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>R Language</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Framework: React</h5>
                            </div>
                            
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Soft Skills: Communication, Creativity, Teamwork, Time Management, Continous Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Tools: Visual Studio Code, MYSQL Workbench, Tableau, Google sheets, GitHub </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}