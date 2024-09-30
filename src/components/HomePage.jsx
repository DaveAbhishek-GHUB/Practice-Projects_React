/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";

//images
import Product_01 from "../../public/Products/Product_01/img_03.webp";
import Product_02 from "../../public/Products/Product_02/img_01.webp";
import Product_03 from "../../public/Products/Product_03/img_01.webp";
import bransilia_collection from "../../public/Products/Product_01/img_02.webp";
import Fashino_Residence from "../../public/Images/Recidence.jpg";

//css
import "../../public/css/myFont.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="main-container w-full h-[85vh] relative">
        <div className="video-wrapper w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/3770017/3770017-hd_1920_1080_25fps.mp4"
            autoPlay
            loop
            muted
          ></video>
          <button className="absolute bg-white text-gray-700 bottom-[15%] left-[5%] p-5 border-none rounded-2xl">
            Explore our collections
          </button>
        </div>

        <div className="Explore-ourNews w-[100vw] h-[100vh] mt-3">
          <div className="heading-wrapper w-full h-[10vh] flex flex-col">
            <span className="font-serif text-gray-600 uppercase m-auto">
              explore our
            </span>
            <h1 className="font-sans text-[3.5vw] uppercase m-auto">news</h1>
          </div>
          <div className="products-wrpper w-full h-[85vh] flex justify-evenly items-center">
            <div className="first_product w-[30%] h-[80%] text-center">
              <img
                className="rounded-md mb-2"
                src={Product_01}
                alt="Product_01"
              />
              <span className="uppercase text-[1.3vw] font-sans">
                brasilia sofa
              </span>
            </div>
            <div className="second_product w-[30%] h-[80%] text-center">
              <img
                className="rounded-md mb-2"
                src={Product_02}
                alt="Product_02"
              />
              <span className="uppercase text-[1.3vw] font-sans">
                brasilia lounge chair
              </span>
            </div>
            <div className="third_product w-[30%] h-[80%] text-center">
              <img
                className="rounded-md mb-2"
                src={Product_03}
                alt="Product_03"
              />
              <span className="uppercase text-[1.3vw] font-sans">
                brasilia lounge table
              </span>
            </div>
          </div>
        </div>
        <div className="view-all-btn w-full flex justify-center py-3 mt-10">
          <button className="uppercase bg-[#C2AA8B] text-white px-10 py-2 rounded-lg">
            view all
          </button>
        </div>
        <div className="brasilia-collection w-[90%] h-screen flex">
          <div className="image w-[50%] h-full p-[5vw]">
            <img src={bransilia_collection} alt="" />
          </div>
          <div className="brasilia-collection-info w-[50%] h-full p-[5vw] flex flex-col justify-center items-center gap-3">
            <h1 className="font- text-[3vw] uppercase myFonts">
              Brasilia Collection
            </h1>
            <p className="myFonts text-center">
              The Brasilia Collection comprises two lounge chairs, an ottoman, a
              sofa and a lounge table, each informed by mid-20th century Danish
              design aesthetics and Brazilian Modernism. Imagined for Audo House
              and put into wider production, Norwegian designers Anderssen and
              Voll looked to create a more exotic variation of modernism than
              their own familiar Scandinavian roots.
            </p>
          </div>
        </div>

        <div className="brasilia-collection w-[90%] h-screen flex">
          <div className="Duomo-collection-info w-[50%] h-full p-[5vw] flex flex-col justify-center items-center gap-3">
            <h1 className="font- text-[3vw] uppercase myFonts">Duomo Rug</h1>
            <p className="myFonts text-center">
              With its luxe cut loop pile, soft and comfortable under foot, the
              Duomo Rug fuses classical inspiration with contemporary design,
              paying tribute to architecture.
            </p>
          </div>
          <div className="image w-[50%] h-full p-[5vw]">
            <img src={bransilia_collection} alt="" />
          </div>
        </div>

        <div className="Fashino_Residence w-full h-[100vh] relative mt-10">
          <div className="image w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={Fashino_Residence}
              alt=""
            />
          </div>
          <div className="Residence-info p-5 absolute font-serif top-[10vw] w-[80%] left-[13vw] flex flex-col items-center">
            <h1 className="text-white text-[5vw]">Fashino Residence</h1>
            <span className="text-white text-center">
              The fashino residence is your home away from home.
            </span>
            <span className="text-white text-center">
              hare, we welcome you to unwind withall the comforts of home,
              surrounded by curated artworks, warm furnishings by fashino
              copenhagen and thoughful amenities.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
