const Contact = () => {
	return (
		<>
			<div className="px-5 max-w-[1560px] mx-auto mt-20 py-10" id="contacts">
				{/* top */}
				<div className="">
					{/* header */}
					<div className=" mb-10">
						<div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
							<div className="">
								<span className="text-teal-500">#</span>contacts
							</div>
							<div className="line w-1/3 h-px bg-teal-300"></div>
						</div>
					</div>
				</div>
				{/* bottom */}
				<div className=" flex items-start flex-wrap gap-10 justify-between">
					{/* left */}
					<div className="left w-full md:w-1/2">
						<p className=" text-teal-500">
							I’m interested in freelance opportunities. However, if you have
							other open positions realted to my area of interest I would love
							to work for you. I am currently looking for frontend development
							roles preferably React JS.
						</p>
					</div>
					{/* right */}
					<div className=" mx-auto">
						{/* box */}
						<div className="border border-[#ABB2BF] p-4">
							<h2 className=" mb-4 text-teal-500 font-semibold">
								Message me here
							</h2>
							{/* get in touch */}
							<div className="">
								{/* links */}
							
								<div className="flex gap-1 items-center">
									<img src={require("./imgs/Email.png")} alt="" />
									<a href="mailto:gsharmaji93@gmail.com" className="text-white">Click here to mail!</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
