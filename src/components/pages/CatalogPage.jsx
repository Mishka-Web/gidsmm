import BlockServices from "../UI/BlockServices/BlockServices";
import { Helmet } from "react-helmet";

export default function CatalogPage() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Каталог услуг</title>
				<meta name="description" content="Раскрутите Телеграм канал. Накрутка живых подписчиков, просмотров, реакции и других активностей в одном месте." />
			</Helmet>
			
			{/* Блок - Вступление */}
			<div className="block block-intro">
				<div className="container flex items-center z-10">
					<div className="grid grid-cols-2 items-center">
						<div className="flex flex-col items-start">
							<hgroup>
								<h1 className="main-title w-[80%] anime anime-to-right">
									Накрутка подписчиков Телеграм дешево
								</h1>
								<h2 className="subtitle w-[70%] mt-6 anime anime-to-left">
									Раскрутите Телеграм канал. Накрутка живых
									подписчиков, просмотров, реакции и других
									активностей в одном месте.
								</h2>
							</hgroup>
							<div className="block-intro__btns flex items-center gap-6 mt-14 anime anime-default">
								<a
									className="btn btn-default gap-5"
									href="https://t.me/Gidsmmnews"
								>
									<img
										className="w-[2.2rem]"
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/telegram.svg"
										}
										alt=""
										width={22}
									/>
									<span>Telegram</span>
								</a>
							</div>
						</div>
						<div className="flex flex-col block-intro__img-phone justify-center items-center">
							<img
								className="icon icon-telegram block-intro__main-icon object-contain pointer-events-none select-none anime anime-to-top"
								src={
									process.env.PUBLIC_URL +
									"/assets/images/icons/telegram.svg"
								}
								alt=""
								width={360}
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

			{/* Блок - Услуги продвижения */}
			<div id="blockAmenities" className="block block-amenities">
				<div className="container">
					<BlockServices />
				</div>
			</div>
		</>
	);
}
