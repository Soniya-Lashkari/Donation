import React from "react";
import "../App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import image2 from "../img/Place Your Image Here (Double Click to Edit).png";
import image4 from "../img/Rectangle 3.png";
import image55 from "../img/Rectangle 4.png";
import img from "../img/Rectangle 5.svg";
import image3 from "../img/IMG_20230822_121604.jpg";
import imagee from "../img/IMG_20230822_121814.jpg";
import imagee2 from "../img/IMG_20230822_122029.jpg";
import image5 from "../img/image-removebg-preview 1.png";
import three1 from "../img/Photo (1).png";
import three2 from "../img/Photo (2).png";
import three3 from "../img/Photo (3).png";
import three4 from "../img/Photo.png";
import three6 from "../img/IMG20230705122931 1.png";
import three5 from "../img/IMG20230712184424 2.png";

const Homepage = () => {
  return (
    <div>
      <div className="Container1">
        <div className="left">
          <img src={image2} />

          <div className="leftinner">
            <h1>Do Something Great To Help Others</h1>
            <p>
              Babu ki rasoi is a digital platform for collecting donations to be
              distributed to people in need.
            </p>
            <div className="inner2">
              <button className="btn1">Download Now</button>
              <p> Discover</p>
            </div>

            <div className="inner3">
              <button className="btn3">
                <h4>200+</h4>
                <p>We daily feed</p>
              </button>
              <img src={img} />
              <button className="btn3">
                <h4>6K</h4>
                <p>Fed /Till 31st July 2023</p>
              </button>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="rightfirstimg">
            <img src={image4} />
          </div>

          <div className="rightsecondimg">
            <img src={image55} />
          </div>
        </div>
      </div>

      <div className="Container2">
        <div className="leftside">
          <img src={image3} />
        </div>
        <div className="rightside">
          <h4>Babu ki Rasoi </h4>
          <p>
            At Anant Aman SWS, we believe in spreading joy and making a positive
            impact in our community. One of the ways we do this is by
            distributing food to underprivileged people who are in need. We are
            proud to announce that we have already fed over 6000 individuals,
            and we are just getting started!
          </p>
          <h4>Why this campaign?</h4>
          <p>
            The hunger index of Madhya Pradesh is in the bottom 9 of all the
            states in India. By embracing a thoughtful approach like Babu ki
            Rasoi, we can pave the way for a brighter tomorrow, where no one
            goes to bed hungry.
          </p>
        </div>
      </div>

      <div className="container3">
        <div className="right3con">
          <h5> How can you help?</h5>
          <p>
            You can support us by donating some amount or helping us in
            collaboration with hotels. Your generous donations play a vital role
            in enabling us to continue our work. Every contribution, no matter
            how big or small, helps us make a tangible difference in the lives
            of those who need it most.
            <br />
            The collaboration with hotels not only helps us reduce our
            operational costs but also provides an opportunity for hotels to
            showcase their commitment to corporate social responsibility.
          </p>
        </div>
        <div className="left3con">
          <button className="btn6">
            <h4>190 million</h4>
            <p> people in India go to bed hungry every night. </p>
          </button>
          <br />
          <button className="btn2">
            <h4>40%</h4>
            <p> Our country's food production is wasted every year </p>
          </button>
        </div>
      </div>

      <div className="container4">
        <div className="container4-left">
          <h5>Join Us in Making a Difference</h5>
          <ul>
            <li>
              You can support us by donating some amount or helping us in
              collaboration with hotels. Your generous donations play a vital
              role in enabling us to continue our work. Every contribution helps
              us make a tangible difference in the lives of those who need it
              the most.
            </li>
            <br />
            <li>
              The collaboration with hotels not only helps us reduce our
              operational costs but also provides an opportunity for hotels to
              showcase their commitment to corporate social responsibility.
            </li>
          </ul>
          <div className="leftimage">
            <img src={three6} />
            <img src={three5} />
          </div>
        </div>

        <div className="container4-right">
          <div className="upper">
            <img src={three4} />
            <img src={three1} />
          </div>
          <br />
          <div className="lower">
            <img src={three2} />
            <img src={three3} />
          </div>
        </div>
      </div>

      <div className="back">
        <div className=" leftback">
          <img src={image5} />
        </div>

        <div className="centerback">
          <h3>
            "Lend a Helping Hand: Transforming Lives Through Your Generous
            Donations for the
            <br />
            Underprivileged"
          </h3>
          <button className="btn10">Donate Now</button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
