import ProjectCard from "../projectcard/ProjectCard";
import first from "./imgs/Rectangle2.png";
import second from "./imgs/Rectangle 22.png";
import third from "./imgs/Rectangle 22 (1).png";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["HTML", "JavaScript", "React", "Tailwind CSS"],
      title: "ChertNodes",
      disc: "Best way to manage your invoices paperless. Invoice web app with framer motion built using React and Tailwind CSS. ",
      link: "https://invoizen.vercel.app/",
    },
    {
      img: second,
      langs: ["HTML", "JavaScript", "React", "Tailwind CSS"],
      title: "TrendyTrimz",
      disc: "Trendy Fashion ecommerce site with sleek and clean frontend built in React and Tailwind CSS",
      link: "https://trendytrimz.vercel.app/",
    },
    {
      img: third,
      langs: ["HTML", "CSS", "JavaScript"],
      title: "Excel Clone",
      disc: `Built Excel Clone using vanilla JS, with clean and minimal UI. Collabaration with  Aakarsh Paliwal, Github Username: Akarsh711 `,
      link: "https://myexcel.vercel.app/",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10" id="project">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-teal-500">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-teal-500"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="https://github.com/void-hr">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc, link }) => {
            return (
              <>
                <ProjectCard
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                  link = {link}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
