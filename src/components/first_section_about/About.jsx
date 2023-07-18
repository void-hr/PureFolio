import "./about.css";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap" id="about">
        <div className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Void is a <span className="text-teal-500">web designer</span> and{" "}
            <span className="text-teal-500">front-end developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <a href= "mailto:gsharmaji93@gmail.com" className="text-white font-medium py-2 px-4 border duration-200 border-teal-500 hover:bg-teal-900">
            Contact me!!
          </a>
        </div>
        <div className="mx-auto">
          <div className="">
            <img className="w-[30rem] h-[30rem] " src={require("./imgs/man.png")} alt="" />
          </div>
          {/* <div className="border flex items-center gap-2 border-teal-500 p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-teal-500"></div>
            <div className="">
              Currently working on <span className="text-white">Portfolio</span>
            </div>
          </div> */}
        </div>
      </div>

    </>
  );
};

export default About;
