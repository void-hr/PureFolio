import { useEffect, useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    // const [ colorChange, setColorChange] = useState(false);

    // useEffect(()=> {
    //   window.addEventListener("scroll", () => {
    //     window.scrollY > 60 ? setColorChange(true) : setColorChange(false);
    //   })
    // })
  return (
    <>
    {/*  ${ colorChange ? "bg--900" : "bg-none" } */}
      <div className= {` fixed top-0 left-0 right-0 `} >
        <div className=" px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
          <div className="left flex gap-2 items-center font-bold text-white text-base">
           
           
            <div className="text-4xl flex align-center "> <span className=" ">[</span> <span className="flex items-center text-2xl">Void </span> ] </div>
          </div>
          <div className="right flex items-center">
            <div className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle ? `right-[-100%] top-0 bottom-0` : `right-0 top-0 bottom-0`}  md:static `}>
              <a  href="#about" className="" >
                <li className="text-[#ABB2BF]  text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-teal-500 font-medium">#</span>home
                </li>
              </a>
              <a href="#project" >
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-teal-500 font-medium">#</span>work
                </li>
              </a>
              <a href="#aboutme">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-teal-500 font-medium">#</span>about-me
                </li>
              </a>
              <a href="#contacts">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-teal-500 font-medium">#</span>contacts
                </li>
              </a>
              <div onClick={()=>setToggle(false)} className="close absolute block md:hidden right-3 top-3">
                <img src={require("./imgs/close.png")} alt="" />
              </div>
            </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={()=>setToggle(true)} className="">
                <div className="open block md:hidden w-8">
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-white"></div>
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-white"></div>
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-white"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
