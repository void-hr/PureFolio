const Footer = () => {
	return (
		<>
			{/* line */}
			<div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
			{/* footer */}
			<div className="px-5 max-w-[1560px] mx-auto">
				{/* top */}
				<div className="flex justify-between gap-y-10 flex-wrap">
					{/* left */}
					<div className="mx-auto md:mx-0">
						<div className=" flex items-center gap-8 mb-3 ">
							{/* logo */}
							<div className="text-4xl flex gap-2 align-center text-white font-bold"> <span className=" ">[</span> <span className="flex items-center text-2xl">Void </span> ] </div>
						
							{/* email */}
							<a href="mailto:gsharmaji93@gmail.com" className="text-[#ABB2BF]">Write to me here (Email) </a>
						</div>
						{/* disc */}
						<div className="text-[#ffffff]">
							<p>Web developer and front-end developer based in India</p>
						</div>
					</div>
					{/* right */}
					<div className=" mx-auto md:mx-0">
						{/* title */}
						<h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
						{/* media */}
						<div className="flex items-center gap-2">
							
							<a href="mailto:gsharmaji93@gmail.com">
								<img src={require("./imgs/Email.png")} alt="" />
							</a>
							<a href="https://github.com/void-hr">
								<img src={require("./imgs/Github.png")} alt="" />
							</a>
						</div>
					</div>
				</div>
				{/* bottom */}
				<div className="text-center text-[#ABB2BF] pb-8 mt-12">
					© Copyright 2023. Made by Void
				</div>
			</div>
		</>
	);
};

export default Footer;
