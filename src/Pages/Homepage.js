import React from "react";
import arrow from "../assets/arrow.png";
import ellipse from "../assets/Ellipse 422.png";
import ellipse2 from "../assets/ellipse1.png";
import ellipse_sm from "../assets/ellip-sm.png";
import ellipse_sm1 from "../assets/ellipse-sm2.png";
import ellipse_sm2 from "../assets/ellipse-sm3.png";
import ellipse_sm3 from "../assets/ellipse-sm4.png";
import rectbig from "../assets/rect1.png";
import rectsm from "../assets/rect-sm.png";
import rectsm2 from "../assets/rect-sm2.png";
import rect3 from "../assets/rect3.png";
import star from "../assets/star.png";
import Slider from "../Components/Slider";
import Faq from "../Components/Faq";
import bg5 from "../assets/bg-5.png";
import app from "../assets/appstore.png";
import still from "../assets/still.png";
import still1 from "../assets/still1.png";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide3.jpg";
import slide3 from "../assets/slide2.jpg";
import slide4 from "../assets/slide8.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";

const Homepage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const team = [
    { src: slide1 },
    { src: slide2 },
    { src: slide3 },
    { src: slide4 },
    { src: slide5 },
    { src: slide6 },
  ];

  const handleScroll = (event) => {
    setCurrentImage(event.target.scrollLeft);
  };
  return (
    <div>
      <div className="bg-white-A70 w-full overflow-x-hidden overflow-y-hidden">
        <div className="relative w-full h-[100vh] overflow-x-hidden overflow-y-hidden  bg-slate-50 ">
          <div className=" ">
            {/* /left part */}
            <div className="flex flex-col mx-auto absolute h-[35rem] left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 lg:left-[1px] lg:translate-x-[15%] pt-16 gap-4">
              <div className=" hidden lg:block w-[14rem] h-[3rem] border rounded-md py-[0.25rem] px-[1rem] gap-2.5 bg-amber-50">
                <div className="w-[12rem] h-[2.3rem] font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
                  Welcome to SnackBae
                </div>
              </div>
              <div className="w-[23rem] mx-auto lg:mx-0 md:w-[40rem] md:h-[14rem]  flex flex-col lg:text-left z-40">
                <div className="w-[362px] md:w-[41rem]  font-roboto font-semibold text-[28px] md:text-[48px] md:leading-[60px] lg:text-left text-center  text-slate-950 lg:-tracking-[2%]">
                  Discover, Review, Earn Coupons, and Connect with our vibrant
                  food community.
                </div>
                <div className=" w-[362px] h-[75px] text-center lg:text-left md:w-[35rem] lg:h-[4rem] font-opensans font-normal text-[12px] lg:text-base leading-6 -tracking-[2%] text-slate-950 mt-5 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing e Lorem
                  ipsum dolordolor sit ametamet, consecteturconsectetur
                  adipiscing erem ipsum dolor sit a...
                </div>
                <div className=" flex flex-row mx-auto lg:mx-0 w-[22rem] h-[3.5rem] space-x-6  items-center mb-3">
                  <button className=" flex py-3 px-3 w-[10rem] relative  h-[2.8rem] border rounded-lg space-x-2 items-start justify-start bg-[#EAB308]">
                    <img
                      className="absolute w-[1.2rem] h-[1.2rem]"
                      src={arrow}
                      alt="Logo"
                      loading="lazy"
                    ></img>
                    <p className="font-Roboto font-medium w-[9rem] h-[0.75rem] text-white text-base leading-4 ">
                      Download App
                    </p>
                  </button>
                  <button className="w-[158px] h-[42px] border rounded-lg gap-1 text-slate-950">
                    <p className="font-Roboto font-medium text-base leading-5 items-center -tracking-tight justify-center">
                      More Details
                    </p>
                  </button>
                </div>
                <div className="flex flex-row mx-auto lg:mx-0 font-opensans w-[379px] md:w-[21rem] gap-3 items-center justify-center ">
                  <div className="flex relative w-[112px] md:w-[10rem]">
                    <div className="flex my-auto w-[79%]">
                      <div className="flex my-auto w-[74%]">
                        <img
                          src={ellipse_sm}
                          className="rounded-[50%] my-auto  w-[40px] h-[40px] md:w-14 md:h-14 border-2 border-[#ffffff]"
                        ></img>
                        <img
                          src={ellipse_sm1}
                          className="  w-[40px] h-[40px] md:w-14 md:h-14 ml-[-25%] my-auto rounded-[50%] z-[1] border-2 border-[#ffffff]"
                        ></img>
                      </div>
                      <img
                        src={ellipse_sm2}
                        className="  w-[40px] h-[40px] md:w-14 md:h-14 ml-[-23%] my-auto rounded-[50%] z-[1]  border-2 border-[#ffffff]"
                      ></img>
                    </div>
                    <img
                      src={ellipse_sm3}
                      className=" w-[40px] h-[40px] md:w-14 md:h-14 ml-[-18%] rounded-[50%] my-auto z-[1] border-2 border-[#ffffff]"
                    ></img>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[135px] md:w-auto">
                    <p className="text-left text-[22px] md:text[2rem] lg:text-[3rem] text-black-900 w-auto font-bold font-opensans">
                      1000+
                    </p>
                    <div className="flex items-start justify-start w-full">
                      <p className="text-left text-[12px]  md:text-base text-black-900 md:w-auto font-normal md:font-bold font-opensans">
                        Downloads on Appstore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right part */}
            <div className="absolute hidden lg:block -bottom-4 -right-2">
              <img
                src={ellipse}
                className="w-[53vw] h-[88vh]"
                loading="lazy"
              ></img>
              {/* width={756} height={696}  */}
            </div>
            <div className="absolute hidden lg:block -bottom-4 right-0">
              <img
                src={ellipse2}
                className="w-[50vw] h-[84vh]"
                height={626}
                width={716}
                loading="lazy"
              ></img>
              {/* height={626} width={716} */}
            </div>
          </div>
        </div>
        {/* // ------------------------------------------------FIRST PART ENDED----------------------------------------------------------------
      // ------------------------------------------------SECOND PART STARTED----------------------------------------------------------------- */}
        <div className="w-[100vw] flex-col lg:flex-row items-center justify-center py-12">
          <button className="lg:hidden w-[100px] mx-auto mb-7 flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
            <p className=" font-roboto  font-semibold text-base leading-10">
              Discover
            </p>
          </button>
          <div class="w-[85vw] bg-white flex justify-center items-center relative mx-auto">
            <div class="flex flex-col-reverse lg:flex-row justify-between w-11/12 mx-auto">
              {/* .---left part---- */}
              <div className="w-[90%] lg:w-[40%] my-auto">
                <button className="hidden w-[100px] lg:flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
                  <p className=" font-roboto  font-semibold text-base leading-10">
                    Discover
                  </p>
                </button>
                <div className="w-[90vw] md:w-[80vw] lg:w-[33vw] flex flex-col gap-2 lg:gap-5 mt-7 lg:mt-0 justify-center items-center pr-6 lg:pr-0">
                  <div className="w-full text-center lg:text-left font-semibold text-xl lg:text-[42px] lg:leading-[56px] ">
                    Find,Book, and Save on Delicious Eats
                  </div>

                  <p className="w-full text-center lg:text-left font-opensans font-normal text-sm lg:leading-6 mb-3">
                    Review, pay, book, and invite friends to earn coupons with
                    every interaction on Snackbae. Discover new restaurants,
                    reserve a table, and enjoy exclusive discounts and offers.
                  </p>
                </div>
                <button className="py-1 px-1 w-[10rem] h-[2.8rem] border rounded-lg bg-[#EAB308] hidden lg:flex justify-center items-center">
                  <p className="font-Roboto font-medium w-[9rem] text-white text-base leading-4">
                    Get Started
                  </p>
                </button>
                <div className="w-full mx-auto flex justify-center lg:hidden">
                  <button className="py-1 px-1 w-[10rem] h-[2.8rem] border rounded-lg bg-[#EAB308] mx-auto">
                    <p className="font-Roboto font-medium w-[9rem]  text-white text-base leading-4">
                      Get Started
                    </p>
                  </button>
                </div>
              </div>
              {/* ---right part----- */}
              <div className="relative w-[80%] md:w-[50%] lg:w-[40%] h-[300px] lg:h-[600px] mx-auto">
                <img
                  src={rectbig}
                  className="w-full h-full"
                ></img>
                <img
                  className="absolute rounded-[50%] md:top-1 md:-left-36 lg:top-6 lg:-left-44 lg:w-80 md:w-60 w-44 top-1 -left-24"
                  src={rectsm}
                  alt="loading"
                  loading="lazy"
                ></img>

                <div className="absolute w-[240px] md:w-[290px] lg:w-[330px] bg-white bottom-[35%] md:bottom-[32%] lg:bottom-[29%] drop-shadow-2xl items-center justify-start p-[0.5rem] -right-32 md:-right-40 rounded-[15px]">
                  <div className="flex flex-row gap-1 lg:gap-2 items-center justify-start my-0.5 w-full">
                    <img
                      className="h-[60px] md:h-auto object-cover rounded-[12px] lg:w-[26%] w-[20%]"
                      src={rectsm2}
                      alt="loading"
                      loading="lazy"
                    ></img>
                    <div className="flex flex-col lg:gap-[5px] items-start justify-start w-[71%]">
                      <div className="flex flex-row font-roboto items-center justify-between w-full">
                        <p className="text-left text-xs lg:text-base text-black tracking-[-0.16px] font-medium font-roboto">
                          Carls's Cafe
                        </p>
                        <p className="text-left text-xs lg:text-base text-black tracking-[-0.16px] font-medium font-roboto">
                          Flat 40% off
                        </p>
                      </div>
                      <p className="text-left leading-[22px] text-blue_gray-500  text-xs lg:text-sm tracking-[-0.28px] w-[91%] sm:w-full font-normal font-opensans">
                        Review, pay, book, and invite friends to earn coupons.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute  w-[240px] md:w-[290px] lg:w-[330px] bg-gray-100 bottom-[4%] lg:bottom-[8%] -right-20 md:-right-28 flex flex-col items-center drop-shadow-2xl justify-start p-[5px] lg:p-[11px]  rounded-[13px]">
                  <div className="flex flex-row gap-1 lg:gap-2 items-center justify-start w-full">
                    <img
                      className="h-[60px] md:h-auto object-cover rounded-[10px] lg:w-[26%] w-[20%]"
                      src={rectsm2}
                      alt="loading"
                      loading="lazy"
                    ></img>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[71%]">
                      <div className="flex flex-row font-roboto items-center justify-between w-full">
                        <p className="text-left text-xs lg:text-base text-black tracking-[-0.16px] font-medium font-roboto">
                          Carls's Cafe
                        </p>
                        <p className="text-left text-xs lg:text-base text-black tracking-[-0.16px] font-medium font-roboto">
                          Flat 40% off
                        </p>
                      </div>
                      <p className="text-left leading-[22px] text-blue_gray-500 text-xs lg:text-sm tracking-[-0.28px] sm:w-full font-normal font-opensans">
                        Review, pay, book, and invite friends to earn coupons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------SECOND PART ENDED--------------------------------------------------
        ------------------------------------------THIRD PART STARTED------------------------------------------------------------- */}
        <div className="w-[100vw] flex-col lg:flex-row items-center justify-center mx-auto py-12">
          <button className="lg:hidden w-[100px] mx-auto mb-7 flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
            <p className=" font-roboto  font-semibold text-base leading-10">
              Coupons
            </p>
          </button>
          <div class="w-[85vw] bg-white flex relative mx-auto">
            <div class="flex flex-col lg:flex-row justify-between items-center w-11/12 mx-auto">
              {/* ---left part-----*/}
              <div className="relative w-[80%] md:w-[50%] lg:w-[40%]  h-[300px] lg:h-[600px]">
                <img
                  src={rect3}
                  className="w-full h-full"
                ></img>
                {/* <div className="absolute w-[240px] md:w-[290px] lg:w-[330px] bg-white top-[15%] md:top-[20%] lg:top-[25%] drop-shadow-2xl items-center justify-start p-[0.5rem] -right-32 md:-right-40 rounded-[15px]"> */}
                <div className="absolute w-[200px] bg-white top-[13%] -left-[15%] lg:top-[16%] lg:-left-[10%] items-center drop-shadow-2xl justify-start p-[7px] rounded-[43px]">
                  <div className="flex flex-row gap-[4px] items-center justify-start w-[98%] md:w-full">
                    <img
                      className="rounded-[50%] w-[26%]"
                      src={rectsm2}
                      alt="loading"
                      loading="lazy"
                    ></img>
                    <div className="flex flex-col gap-[1px] items-start justify-start w-[71%]">
                      <p className="text-left text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Amanda Cooper
                      </p>
                      <img
                        className=""
                        src={star}
                        alt="loading"
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>

              {/* ----right part----- */}
              <div className="w-[90%] lg:w-[40%] my-auto ">
                <button className="w-[110px] rounded-3xl py-1 px-6  bg-amber-50 text-amber-500 hidden lg:flex justify-center items-center">
                  <p className="  font-roboto  font-semibold text-base leading-10">
                    Coupons
                  </p>
                </button>
                <div className="w-[90vw] md:w-[80vw] lg:w-[33vw] flex flex-col gap-2 lg:gap-5 mt-7 lg:mt-0 pr-9 lg:pr-0">
                  <div className="w-full text-center lg:text-left font-semibold text-xl lg:text-[42px] lg:leading-[56px] ">
                    Review, Pay, Book, and Invite Friends - Earn Coupons with
                    Every Interaction!
                  </div>

                  <p className="w-full text-center lg:text-left font-opensans font-normal text-sm lg:leading-6 mb-3">
                    Review, pay, book, and invite friends to earn coupons with
                    every interaction on Snackbae. Discover new restaurants,
                    reserve a table, and enjoy exclusive discounts and offers.
                  </p>
                </div>
                <button className="  py-1 px-1 w-[10rem] lg:flex items-center justify-center h-[2.8rem] border rounded-lg bg-[#EAB308] hidden">
                  <p className="font-Roboto font-medium w-[9rem] text-white text-base leading-4 ">
                    Explore Coupons
                  </p>
                </button>
                <div className="w-full mx-auto flex justify-center items-center lg:hidden">
                  <button className="  py-1 px-1 w-[10rem] h-[2.8rem] border rounded-lg bg-[#EAB308] mx-auto">
                    <p className="font-Roboto font-medium w-[9rem] text-white text-base leading-4 ">
                      Explore Coupons
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------THIRD PART ENDED------------------------------------------------- */}
        {/*-------------------------------------- FOURTH PART STARTED------------------------------------------------ */}
        <div className="mt-60 lg:block hidden">
          <Slider />
        </div>

        <div className="my-12 p-3 block lg:hidden w-[90vw] mx-auto border border-gray-400 rounded-md">
          <div>
            <button className="lg:hidden w-[100px] mx-auto mb-7 flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
              <p className=" font-roboto  font-semibold text-base leading-10">
                Coupons
              </p>
            </button>
          </div>
          <div className="overflow-x-auto whitespace-nowrap scroll-wheel">
            <div className="flex" style={{ width: team.length * 275 }}>
              {team.map((image, index) => (
                <div key={index} className="relative w-[17rem] h-[17rem] m-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-[17rem] h-[15.75rem] mr-3"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mx-auto flex flex-col gap-1">
            <div className="text-center font-bold text-xl">Personalised Discovery</div>
            <div className="text-md text-center">
            Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
              commodo proin faucibus.Lorem ipsum dolor sit amet consectetur.
              Tincidunt scelerisque commodo proin faucibus.
            </div>
          </div>
        </div>

        {/* ------------------------------------FOURTH PART ENDED--------------------------------------------------------- */}

        {/* ---------------------------FIFTH PART STARTED----------------- */}
        <div className="relative  w-full h-[400px] md:w-[100vw] md:h-[100vh] mb-8 overflow-hidden">
          <img src={bg5} className="w-full h-full absolute z-10"></img>
          <div className="bg-[#000000] w-full h-full absolute z-20 opacity-50"></div>
          <div className=" absolute top-[25%] w-[100%] h-[281px] flex flex-col gap-6 justify-center items-center  z-30">
            <button className="w-[130px] h-[50px]  md:w-[130px]  rounded-3xl py-1 px-6  bg-amber-50 text-amber-500 ">
              <p className="w-[7 mx-auto font-roboto  font-semibold text-base leading-10">
                App Links
              </p>
            </button>

            <div className=" w-[360px] h-[64px] md:w-[600px] md:h-[112px] font-roboto font-semibold text-[20px] md:text-[42px] text-center items-center leading-[32px] md:leading-[56px] text-white">
              Download th app Lorem ipsum dolor sit amet dolor sit
            </div>
            <p className="sm:h-[25px] w-[360px] md:w-[515px] font-normaltext-[12px] md:text[14px] leading-[25px] font-sans text-center items-center text-white opacity-70">
              Download for android and iOS lorem ipsum dolor sit amet
            </p>

            <img className="w-[340px] h-[47px] z-[100]" src={app}></img>
          </div>
        </div>
        {/* ----------------------------FIFTH PART ENDED-------------------- */}
        {/* ------------------------SIXTH PART STARTED----------------------- */}
        <div>
          <Faq />
        </div>
        {/* ------------------------SIXTH PART ENDED--------------------------------- */}
        {/* ----------------------------------SEVENTH PART STARTED--------------------- */}
        <div className=" h-[104px] w-full relative mt-10 lg:h-[185px] flex items-center place-content-center">
          <img
            src={still}
            className="absolute w-full h-full object-cover"
          ></img>
          <div className="bg-[#000000] w-full h-full absolute z-20 opacity-50"></div>
          <div className="absolute flex justify-between   items-center  w-11/12 z-30">
            <div className="   md:text-[1.6rem]  text-white  text-center ">
              Still have Questions ?
            </div>
            <button className="w-[35vw] lg:w-[130px] h-[33px] bg-[#EAB308]  rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter ">
              Contact Us
            </button>
          </div>
        </div>
        {/* ---------------------footer---------------- */}
        <div>
          <Footer />
        </div>

      </div>
    </div>
  );
};
export default Homepage;