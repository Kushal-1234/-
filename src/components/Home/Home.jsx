import React from "react";
import "./Home.scss";
import defaultProfile from "../../assets/images/defaultProfile.png";
import PIImage from "../../assets/images/PI_Image.jpg";

const aboutPI = {
  name: "Dr. Letu Qingge",
  designation: "Assistant Professor",
  department: "Department of Computer Science",
  college: "North Carolina A&T State University",
  education: `Ph.D.
    Computer Science / Montana State University
    M.S.
    Management Science and Engineering / Beijing University of Chemical Technology
    B.S.
    Information and Computer Science / Inner Mongolia University
    `,
  description: `Dr. Letu Qingge, Ph.D, is an assistant professor in the Department of 
                Computer Science at North Carolina A&T State University, NC. He received his Ph.D 
                degree in Computer Science from Montana State University, MT, USA. His research 
                interests include algorithms, machine learning, deep learning, cloud computing, 
                combinatorial optimization, bioinformatics and computational biology, computer vision, 
                transportation network, and neural network control. His research has been funded by NSF and NIH.`,
  img: PIImage,
};

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-main__title">About PI</div>
      <div className="home-main__content">
        <div className="home-main__content__imageContainer">
          <img
            alt=""
            src={aboutPI?.img ? aboutPI?.img : defaultProfile}
            className="home-main__content__imageContainer__image"
          />
        </div>
        <div className="home-main__content__textContainer">
          <div className="home-main__content__textContainer__nameAndDesignationContainer">
            <span className="home-main__content__textContainer__nameAndDesignationContainer__name">
              {aboutPI.name}
            </span>
            <span className="home-main__content__textContainer__nameAndDesignationContainer__designation">
              {aboutPI.designation}
            </span>
          </div>
          <div className="home-main__content__textContainer__commonText">
            {aboutPI.college}
          </div>
          <div className="home-main__content__textContainer__commonText">
            {aboutPI.department}
          </div>
          <div
            className="home-main__content__textContainer__commonText"
            style={{ marginTop: "0.5rem" }}
          >
            <span style={{ fontWeight: "bold" }}>About: </span>
            {aboutPI.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
