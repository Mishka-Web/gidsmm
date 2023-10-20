import { Helmet } from "react-helmet";

export default function ContactsPage() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Контакты</title>
				<meta name="description" content="Пишите нам на Email, в онлайн чат на сайте или в тикет-систему в личном кабинете." />
			</Helmet>

			{/* Блок - Вступление */}
			<div className="block block-intro">
				<div className="container flex items-center z-10">
					<div className="flex flex-col items-start anime anime-default">
						<hgroup className="w-[85%]">
							<h1 className="main-title">Контакты</h1>
							<h3 className="subtitle">
								Пишите нам на Email, в онлайн чат на сайте или в
								тикет-систему в личном кабинете.
							</h3>
						</hgroup>
						<div className="mt-20">
							<p className="content">
								Email:{" "}
								<a
									className="text-white font-semibold hover:text-white hover:underline"
									href="mailto:Gidsmm.manager@gmail.com"
								>
									Gidsmm.manager@gmail.com
								</a>
							</p>
							<hgroup className="mt-8">
								<h3 className="subtitle">
									Время работы: 11:00 - 21:00, без
									<br />
									выходных.
								</h3>
								<h3 className="content mt-8">
									<a
										className="text-white font-semibold hover:text-white hover:underline"
										href="https://t.me/Gidsmmnews"
									>
										Мы в Telegram
									</a>
								</h3>
								<h2 className="title leading-none">
									Нужна помощь?
								</h2>
							</hgroup>
						</div>
						<div className="block-intro__btns flex items-center gap-6 mt-16">
							<a className="btn btn-ghost" href="/">
								<span>Написать в Online-чат</span>
							</a>
						</div>
					</div>
				</div>
				<img
					className="w-[100%] h-[100%] fixed bottom-0 right-0 opacity-[15%] z-0 object-cover bg-no-repeat anime anime-bg-fixed"
					src={process.env.PUBLIC_URL + "/assets/images/bg-intro.jpg"}
					alt=""
				/>
			</div>
		</>
	);
}
