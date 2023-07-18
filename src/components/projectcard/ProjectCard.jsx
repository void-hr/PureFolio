const ProjectCard = ({ img, langs, title, disc, link }) => {
  return (
    <>
      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-teal-500 p-0">
        {/* img */}
        <div className="">
          <img className=" w-full" src={img} alt="" />
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-teal-500">
          {langs.map((e) => {
            return <span className=" text-teal-500">{e}</span>;
          })}
        </div>
        {/* disc */}
        <div className=" p-4">
          <h2 className="text-teal-500 text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-teal-500">{disc}</p>
          {/* btns */}
          <div className="my-5">
      
                  <a href= {link} className=" py-2 px-4 text-white border border-teal-500 hover:bg-teal-900 duration-150 " >
                 Live {"<"}~{">"}
               </a>
               
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
