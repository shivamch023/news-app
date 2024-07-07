
import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Link from "next/link";


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex" >
      <div className="relative shadow-md p-4 bg-white w-[800px] h-[500px]  gap-2  mx-auto my-12 rounded-lg shadow-lg flex">
        <span className="absolute top-0 right-2 m-4 text-3xl cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <Image src={assets.shivam_image} width={350} className=" h-[470px]  rounded-xl" alt="Modal Image"  />
        <div className="flex-1 w-[400px] h-[470px] rounded-xl border py-4 px-4">
          <h1 className="text-xl font-bold mb-2">Er. Shivam chauhan</h1>
          <h2 className="text-gray-700 mb-4">I'm Software Engineer</h2>
          <p >I have completed my B.Tech in Computer Science Engineering and work as a <b>software engineer</b> and <b>web developer</b>. </p>
          <p>I'm developing a news app called <b>"Bharat World News"</b> which will showcase all kinds of news, including politics, technology, economy, entertainment, sports, and more. We provide real-time news through this web app.</p>
          <div className="flex gap-4 py-4">
           <Link href={"https://www.linkedin.com/in/shivam-chauhan-81665b279/"} target="__blank">
           <Image src={assets.linkin} width={40} height={40} alt="linkedin"/></Link>
           <Link href={"https://youtube.com/@desidiaries024?si=xGrcdBngalBJd-Ih"} target="__blank">
           <Image src={assets.yt} width={40} height={40}  alt="yt"/></Link>
           <Link href={"https://github.com/shivamch023"} target="__blank">
           <Image src={assets.git} width={40} height={40}  alt="github"/></Link>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
