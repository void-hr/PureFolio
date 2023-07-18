const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10" id="aboutme">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-teal-500">#</span>about-me
                  {/* [#C778DD] */}
                </div>
                <div className="line w-1/3 h-px bg-teal-400"></div>
              </div>
            </div>
            {/* disc */}
            {/* [#ABB2BF] */}
            <p className="text-teal-300 "> 
              Hello, i’m Void!
              <br />
              <br />
              I’m a self-taught front-end developer based in India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            {/* button */}
            <div className="mt-7">
              <a href="/" className=" duration-150 hover:bg-teal-900 border border-teal-400 px-4 py-2 text-white ">
              
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto">
            <img className="mx-auto w-[30rem] h-[30rem]" src={require("./imgs/man.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
