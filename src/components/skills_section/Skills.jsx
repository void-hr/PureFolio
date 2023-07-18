const Skills = () => {
	const skills = [
		{
			title: "Languages",
			languages: ["JavaScript", "Python", "Java"],
		},
		{ title: "Databases", languages: ["MySql", "", "Mongo DB"] },
		{
			title: "Tools",
			languages: ["VSCode", "Linux", "Git"],
		},
		{
			title: "Other",
			languages: ["HTML", "CSS"],
		},
		{
			title: "Frameworks",
			languages: ["React", "Express.js", "Node.js", "Tailwind CSS"],
		},
	];

	return (
		<>
			<div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
				{/* top */}
				<div className=" mb-10">
					<div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
						<div className="">
							<span className="text-teal-500">#</span>skills
						</div>
						<div className="line w-1/3 h-px bg-teal-300">{/* [#C778DD] */}</div>
					</div>
				</div>
				{/* bottom */}
				<div className=" flex flex-wrap gap-10 justify-between items-center text-white">
					{/* left */}
					<div className="mx-auto">
						<img
							className="mx-auto w-[15rem] h-[15rem] "
							src={require("./imgs/shapes.png")}
							alt=""
						/>
					</div>
					{/* right & mapping */}
					<div className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4 text-teal-300">
						{skills.map(({ title, languages }) => {
							return (
								<>
									<div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-teal-300">
										<div className=" p-2">
											<h2 className=" font-semibold text-white">{title}</h2>
										</div>
										{/* [#ABB2BF] */}
										<div className=" flex gap-2 border-t border-teal-300 flex-wrap p-2 text-teal-300">
											{languages.map((e,i) => {
												return <span key={i+1}>{e}</span>;
											})}
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
