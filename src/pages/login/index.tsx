const LoginPage = () => {
	return (
		<div className="flex flex-col h-screen">
			<header className="flex justify-center items-center h-[83px] border-solid border-b-2 border-l-0 border-r-0 border-t-0 border-[#dfe1e3] ">
				<img src="/ui/logo.png" />
			</header>
			<main className="flex-grow">
				<h3 className="flex justify-center items-center text-[#7ab800] text-lg mt-[45px] mb-[70px]">იუსტიციის სახლის სერვისების მართვის ერთიანი სისტემა</h3>
				{/* ფორმა აქ */}
			</main>
			<footer className="flex justify-center items-center h-[42px] text-[#616365] bg-[#e8eaec] text-[13px]">© მონაცემთა გაცვლის სააგენტო 2016</footer>
		</div>
	);
};

export default LoginPage;
