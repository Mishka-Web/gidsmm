import TabsQuestions from "../UI/TabsQuestions/TabsQuestions";
import { Helmet } from "react-helmet";

export default function HelpPage() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Помощь</title>
				<meta name="description" content="Популярные вопросы" />
			</Helmet>

			{/* Блок - Вступление */}
			<div className="block block-intro">
				<div className="container flex items-center z-10">
					<div className="grid grid-cols-2 items-center">
						<div className="flex flex-col items-start">
							<hgroup>
								<h1 className="main-title w-[85%] anime anime-to-right">
									Популярные вопросы
								</h1>
								<h2 className="subtitle w-[85%] mt-6 anime anime-to-left">
									Если не нашли ответ на свой вопрос
								</h2>
							</hgroup>
							<div className="block-intro__btns flex items-center gap-6 mt-14 anime anime-default">
								<a className="btn btn-ghost" href="mailto:">
									<span>Свяжитесь с нами</span>
								</a>
							</div>
						</div>
						<div className="flex flex-col block-intro__img-phone justify-center items-center">
							<img
								className="w-[50%] min-w-[28rem] object-contain pointer-events-none select-none anime anime-to-top"
								src={
									process.env.PUBLIC_URL +
									"/assets/images/intro-phone.webp"
								}
								alt=""
								width={280}
							/>
						</div>
					</div>
				</div>
				<img
					className="w-[100%] h-[100%] fixed bottom-0 right-0 opacity-[15%] z-0 object-cover bg-no-repeat anime anime-bg-fixed"
					src={process.env.PUBLIC_URL + "/assets/images/bg-intro.jpg"}
					alt=""
				/>
			</div>

			{/* Блок - Вопросы */}
			<div className="block block-accordion">
				<div className="container">
					<TabsQuestions />
				</div>
			</div>
		</>
	);
}
