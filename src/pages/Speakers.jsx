import React from "react";
import Member from "../components/Member";
import { FaXTwitter } from "react-icons/fa6";

import abdallalit from "/assets/images/mentors3/abdal lalit.jpeg";
import abhinavrai from "/assets/images/mentors3/abhinav rai.jpeg";
import abhinav from "/assets/images/mentors3/Abhinav.jpeg";
import ayonroy from "/assets/images/mentors3/ayon roy.jpeg";
import chhavi from "/assets/images/mentors3/chhavi.jpeg";
import chinmay from "/assets/images/mentors3/chinmay.jpeg";
import devendra from "/assets/images/mentors3/devendra.jpeg";
import gurkirat from "/assets/images/mentors3/gurkirat.jpeg";
import jaskaran from "/assets/images/mentors3/jaskaran.jpeg";
import manav from "/assets/images/mentors3/manav.jpeg";
import himani from "/assets/images/mentors3/himani.jpeg";
import pankaj from "/assets/images/mentors3/pankaj.jpeg";
import pranav from "/assets/images/mentors3/pranav.jpeg";
import maninder from "/assets/images/mentors3/Maninder.jpeg";
import raajessh from "/assets/images/mentors3/raajessh.jpg";
import rishabh from "/assets/images/mentors3/rishabh.jpeg";
import rishika from "/assets/images/mentors3/Rishika.jpeg";
import rohan from "/assets/images/mentors3/rohan.jpeg";
import shambhavi from "/assets/images/mentors3/shambhavi.jpeg";
import shivam from "/assets/images/mentors3/shivam.jpeg";
// import srishti from "/assets/images/mentors3/srishti.jpeg"; //from linkedin
import srishti from "/assets/images/mentors3/srishti.jpg";
import aryan from "/assets/images/mentors3/aryan.jpeg";
import shyamal from "/assets/images/mentors3/shyamal.jpeg";
import sounak from "/assets/images/mentors3/sounak.jpeg";
import sunchit from "/assets/images/mentors3/sunchit.jpeg";
import abhimanyu from "/assets/images/mentors3/abhimanyu.jpeg";
import chanpreet from "/assets/images/mentors3/chanpreet.jpeg";
import piyush from "/assets/images/mentors3/piyush.jpeg";
import praveen from "/assets/images/mentors3/praveen.jpeg";
import pawan from "/assets/images/mentors3/pawan.jpg";
import nitesh from "/assets/images/mentors3/nitesh.jpg";
import anchal from "/assets/images/mentors3/anchal.jpeg";
import sri from "/assets/images/mentors3/sri.jpeg";
import hargovind from "/assets/images/mentors3/hargovind.jpeg";





import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Speakers = () => {
  return (
    <div id="speaker" className="relative items-center justify-center bg-gray-900/30 backdrop-blur-lg w-full z-20 py-10 scroll-smooth">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="flex flex-row justify-center w-full">
          <h1 className="grad-text font-bold text-5xl mb-10 text-center">Mentors & Judges</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Member
            image={sunchit}
            name="Sunchit Dudeja"
            social={
              <a
                href="https://www.linkedin.com/in/sunchitdudeja/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          {/* <Member
            image={aryan}
            name="Aryan Singh"
            social={
              <a
                href="https://www.linkedin.com/in/singh1aryan/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor & Judge"
          /> */}
          <Member
            image={praveen}
            name="Praveen Thakur"
            social={
              <a
                href="https://www.linkedin.com/in/thakurpraveen/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
                {/* <FaXTwitter /> */}

              </a>
            }
            role="CTO & Co-Founder @ Nordek"
          />
          <Member
            image={abdallalit}
            name="Abdal Lalit"
            social={
              <a
                href="https://www.linkedin.com/in/abdal-lalit/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={abhinavrai}
            name="Abhinav Rai"
            social={
              <a
                href="https://www.linkedin.com/in/abhinav-rai-6a7119154/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={abhinav}
            name="Abhinav Sharma"
            social={
              <a
                href="https://www.linkedin.com/in/abhinavsharma0/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={ayonroy}
            name="Ayon Roy"
            social={
              <a
                href="https://www.linkedin.com/in/ayon-roy/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={chhavi}
            name="Chhavi Garg"
            social={
              <a
                href="https://www.linkedin.com/in/chhaviGG/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={chinmay}
            name="Chinmay Pant"
            social={
              <a
                href="https://www.linkedin.com/in/chinmaypant/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={gurkirat}
            name="Gurkirat Singh"
            social={
              <a
                href="https://www.linkedin.com/in/gurkirat-singh-87901a169/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={jaskaran}
            name="Jaskaran Singh"
            social={
              <a
                href="https://www.linkedin.com/in/jaskaran-singh-9b3937169/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={manav}
            name="Manav Gupta"
            social={
              <a
                href="https://www.linkedin.com/in/--manav-gupta--/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={himani}
            name="Himani Popli"
            social={
              <a
                href="https://www.linkedin.com/in/himani-popli-2391b4146/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={pankaj}
            name="Pankaj Prajapati"
            social={
              <a
                href="https://www.linkedin.com/in/pankaj-prajapati-668982163/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={pranav}
            name="Pranav Malik"
            social={
              <a
                href="https://www.linkedin.com/in/candidatepstx-95adfsdk23/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={rishabh}
            name="Rishabh Sharma"
            social={
              <a
                href="https://www.linkedin.com/in/therishabhsh/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={rishika}
            name="Rishika Gupta"
            social={
              <a
                href="https://www.linkedin.com/in/rishikagupta-rg/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={rohan}
            name="Rohan Kumar"
            social={
              <a
                href="https://www.linkedin.com/in/rohan-kumar-a65a87175/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={shivam}
            name="Shivam Goyal"
            social={
              <a
                href="https://www.linkedin.com/in/shivamgoyall/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={srishti}
            name="Srishti Gupta"
            social={
              <a
                href="https://www.linkedin.com/in/srishti23/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          
          
          <Member
            image={anchal}
            name="Anchal Sharma"
            social={
              <a
                href="https://www.linkedin.com/in/anchal-sharma-57a08714a/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Mentor, Judge"
          />
          <Member
            image={shyamal}
            name="Shyamal Tripathi"
            // social={
            //   <a
            //     href="#"
            //     className="text-2xl text-gray-400 pb-1"
            //     target={"_blank"}
            //   >
            //     <FaLinkedin />
            //   </a>
            // }
            role="Hackquest"
          />
          
          <Member
            image={maninder}
            name="Maninder Singh"
            social={
              <a
                href="https://www.linkedin.com/in/manindersinghh/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={abhimanyu}
            name="Abhimanyu Shekhawat"
            social={
              <a
                href="https://www.linkedin.com/in/abhimanyu-shekhawat-886896168/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={devendra}
            name="Devendra Parihar"
            social={
              <a
                href="https://www.linkedin.com/in/devendra-parihar/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={sounak}
            name="Sounak Ghosh"
            social={
              <a
                href="https://www.linkedin.com/in/sounak-ghosh/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={chanpreet}
            name="Chanpreet Singh"
            social={
              <a
                href="https://www.linkedin.com/in/chanpreet-singh-chugh-8004ab141/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={piyush}
            name="Piyush Sharma "
            social={
              <a
                href="https://www.linkedin.com/in/piyush-sharma-a5801813b/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={pawan}
            name="Pawan choudhary"
            role="National cyber crime investigator (CTF Mentor)"
          />
          <Member
            image={nitesh}
            name="Nitesh aka linuxroid"
            role="Cyber security expert (CTF Mentor)"
          />
          <Member
            image={sri}
            name="Srividhya S Subramanian"
            social={
              <a
                href="https://www.linkedin.com/in/sri-vidhya-s/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          <Member
            image={hargovind}
            name="Hargovind Bansal"
            social={
              <a
                href="https://www.linkedin.com/in/hargovind-bansal-3783ba41/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          />
          {/* <Member
            image={sounak}
            name="Saksham"
            social={
              <a
                href="https://www.linkedin.com/in/sounak-ghosh/"
                className="text-2xl text-gray-400 pb-1"
                target={"_blank"}
              >
                <FaLinkedin />
              </a>
            }
            // role="Nordek"
          /> */}
        </div>
      </section>
    </div>
  );
};

export default Speakers;
