import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import TabsQuestions from "../UI/TabsQuestions/TabsQuestions";
import BlockServices from "../UI/BlockServices/BlockServices";
import Anime from "../../utils/MotionAnime";
import { Helmet } from "react-helmet";

export default function HomePage() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Главная</title>
				<meta name="description" content="НАКРУТКА ИНСТАГРАМ*, ТИК ТОК, ТЕЛЕГРАМ, ВКОНТАКТЕ, ЮТУБ." />
			</Helmet>

			{/* Блок - Вступление */}
			<div className="block block-intro">
				<div className="container flex items-center z-10">
					<div className="grid grid-cols-2 items-center">
						<div className="flex flex-col items-start">
							<hgroup>
								<h1 className="main-title w-[80%] anime anime-to-right">
									НАКРУТКА ИНСТАГРАМ*, ТИК ТОК, ТЕЛЕГРАМ,
									ВКОНТАКТЕ, ЮТУБ.
								</h1>
								<h2 className="subtitle w-[70%] mt-6 anime anime-to-left">
									Мгновенная накрутка лайков, подписчиков,
									просмотров, комментариев.
								</h2>
							</hgroup>
							<div className="block-intro__btns flex items-center gap-6 mt-14 anime anime-default">
								<Link className="btn btn-default" to="/catalog">
									<span>Каталог услуг</span>
								</Link>
								<Link
									className="btn btn-ghost"
									to="/#blockQuickOrder"
								>
									<span>Быстрый заказ</span>
								</Link>
							</div>
						</div>
						<div className="block-intro__img-phone flex flex-col justify-center items-center">
							<img
								className="w-[50%] min-w-[28rem] object-contain pointer-events-none select-none anime anime-to-bottom"
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

			{/* Блок - Сервисы */}
			<div className="block block-services">
				<div className="container">
					<div className="flex items-center gap-10">
						<div className="block-services__img-phone basis-[32%]">
							<Anime
								options={{
									initial: "hidden",
									className: "flex justify-center",
									variants: {
										visible: {
											opacity: 1,
											transition: {
												delay: 0.25,
												duration: 1,
											},
										},
										hidden: {
											opacity: 0,
										},
										exit: {
											opacity: 0
										},
									},
								}}
							>
								<img
									className="w-[90%] object-contain pointer-events-none select-none"
									src={
										process.env.PUBLIC_URL +
										"/assets/images/phone1.png"
									}
									alt=""
									width={400}
								/>
							</Anime>
						</div>
						<div className="flex flex-col gap-14 basis-[68%]">
							<Anime
								options={{
									initial: "hidden",
									variants: {
										visible: {
											opacity: 1,
											transition: {
												delay: 0.1,
												duration: 1,
											},
										},
										hidden: {
											opacity: 0,
										},
										exit: {
											opacity: 0
										},
									},
								}}
							>
								<div className="flex items-start gap-12">
									<img
										className="mt-4"
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/usersglav.png"
										}
										alt=""
										width={64}
									/>
									<div className="flex flex-col items-start">
										<h2 className="title mb-4">
											Накрутка подписчиков
										</h2>
										<div className="content">
											<p>
												Подписчики оказывают основное
												влияние на рейтинг и качество
												аккаунта. От количества
												фолловеров зависит ранжируемость
												профиля в поиске для других
												пользователей и вызывает доверие
												человека, зашедшего на Вашу
												страничку. Чем выше показатель
												фолловеров, тем больше шансов
												что случайный гость проявит
												интерес и подпишется!
											</p>
										</div>
									</div>
								</div>
							</Anime>
							<Anime
								options={{
									initial: "hidden",
									exit: {
										opacity: 0
									},
									variants: {
										visible: {
											opacity: 1,
											transition: {
												delay: 0.1,
												duration: 1,
											},
										},
										hidden: {
											opacity: 0,
										},
									},
								}}
							>
								<div className="flex items-start gap-12">
									<img
										className="mt-4"
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/likeglav.png"
										}
										alt=""
										width={64}
									/>
									<div className="flex flex-col items-start">
										<h2 className="title mb-4">
											Накрутка лайков
										</h2>
										<div className="content">
											<p>
												Для попадания публикации в топ
												по #хештегам, или простым
												запросам, ей нужно определенное
												количество лайков. Накрутка
												лайков позволит публикациям
												долгое время находиться топе
												поиска и гарантирует попадание в
												рекомендации пользователей
												Instagram. Большое количество
												лайков выделяет Вашу публикацию
												среди других и привлекает много
												внимания, а при использовании
												качественного контента
												повышается вероятность
												дополнительных подписок от
												заинтересованных людей.
											</p>
										</div>
									</div>
								</div>
							</Anime>
						</div>
					</div>
				</div>
			</div>

			{/* Блок - Статистика */}
			<div className="block block-statistics">
				<div className="container">
					<div className="grid grid-cols-3 items-center min-h-[24rem] gap-10 text-white">
						<div className="text-center">
							<span className="icon icon-users">
								<svg
									viewBox="0 0 256 256"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M97.2 117.2c.9-1 1.5-2.3 1.4-3.6l-.1-3.9v-.1c0-2.3-.4-14.1-1.6-21.7-.9-5.3-4.3-9.9-9.2-12.3-4.4-2.2-11.1-4.8-16.5-6.7.8-1.3 1.5-2.6 2.1-4 3.1-1.5 5.6-4.1 6.9-7.1 1.2-2.2 1.8-4.7 1.8-7.2 0-1.6-.3-3.3-.8-4.8-.3-1.3-.9-2.6-1.7-3.7.6-6.9-1.4-13.9-5.7-19.4-5.4-6.9-13.6-10.9-22.8-11.1h-2.1c-9 .2-17.2 4.3-22.6 11.1C22.2 28 20.2 35 20.8 42c-.8 1.1-1.3 2.4-1.7 3.7-.5 1.5-.8 3.2-.8 4.8 0 2.5.6 5 1.6 6.9 1.4 3.3 3.9 5.9 7 7.4.6 1.4 1.3 2.8 2.1 4-5.6 2-12.2 4.6-16.5 6.7-4.8 2.4-8.3 7-9.2 12.3-1.3 7.7-1.6 19.5-1.7 21.8l-.1 3.9c0 1.4.5 2.7 1.4 3.6.9 1 2.2 1.5 3.6 1.5h86.9c1.6.1 2.9-.4 3.8-1.4zm-85.3-8.6c.1-3.5.5-13 1.5-19 .4-2.2 1.8-4 3.7-5 5.8-2.9 17-6.9 21.6-8.5 2-.7 3.4-2.6 3.4-4.8v-.9c0-1.5-.6-2.8-1.7-3.8-2.1-1.8-3.6-4.3-4.4-7.1-.5-1.7-1.8-3-3.5-3.5-1.4-.4-2.6-1.4-3.4-3.1-.4-.8-.6-1.7-.6-2.6 0-.6.1-1.1.3-1.7.1-.2.1-.3.1-.5.1-.4.3-.8.6-1 1.3-1.2 1.9-2.9 1.6-4.7-.9-4.9.3-10 3.4-13.9 3.5-4.5 8.9-7.1 14.7-7.3H51c6 .1 11.4 2.8 14.9 7.3 3 3.9 4.3 9 3.4 13.9-.3 1.7.3 3.5 1.6 4.7.3.3.5.6.6 1 0 .2.1.4.2.6.2.5.3 1.1.3 1.6 0 .9-.2 1.8-.8 2.9-.6 1.4-1.8 2.4-3.2 2.8-1.7.5-3 1.8-3.5 3.5-.8 2.8-2.3 5.2-4.5 7.1-1.1 1-1.7 2.3-1.7 3.8v.9c0 2.1 1.4 4.1 3.4 4.8 3.5 1.2 15.5 5.4 21.6 8.5 1.9 1 3.3 2.8 3.7 5 .9 5 1.3 13.1 1.5 19H11.9zM254.3 109.7s0-.1 0 0c-.1-2.4-.4-14.2-1.7-21.8-.9-5.3-4.3-9.9-9.2-12.3-4.4-2.2-11.1-4.8-16.5-6.7.8-1.3 1.5-2.6 2.1-4 3.1-1.5 5.6-4.1 6.9-7.1 1.2-2.2 1.8-4.7 1.8-7.2 0-1.6-.3-3.3-.8-4.8-.3-1.3-.9-2.6-1.7-3.7.6-6.9-1.4-13.9-5.7-19.4-5.4-6.9-13.6-10.9-22.8-11.1h-2.1c-9 .2-17.2 4.3-22.6 11.1-4.3 5.5-6.3 12.5-5.7 19.5-.8 1.1-1.3 2.3-1.7 3.7-.5 1.5-.8 3.2-.8 4.8 0 2.5.6 5 1.6 6.9 1.4 3.3 3.9 5.9 7 7.4.6 1.4 1.3 2.8 2.1 4-5.6 2-12.2 4.6-16.5 6.7-4.8 2.4-8.3 7-9.2 12.3-1.3 7.7-1.6 19.5-1.7 21.8l-.1 3.9c0 1.4.5 2.7 1.4 3.6.9 1 2.2 1.5 3.6 1.5h86.9c1.4 0 2.6-.5 3.6-1.5.9-1 1.5-2.3 1.4-3.6l.4-4zm-86.8-1.1c.1-3.5.5-12.9 1.5-19 .4-2.2 1.8-4 3.7-5 5.8-2.9 17-6.9 21.6-8.5 2-.7 3.4-2.6 3.4-4.8v-.9c0-1.5-.6-2.8-1.7-3.8-2.1-1.8-3.7-4.3-4.4-7.1-.5-1.7-1.8-3-3.5-3.5-1.4-.4-2.6-1.4-3.4-3.1-.4-.8-.6-1.7-.6-2.6 0-.6.1-1.1.3-1.7.1-.2.1-.3.2-.5.1-.4.3-.7.6-1 1.3-1.2 1.9-2.9 1.6-4.7-.9-4.9.3-10 3.4-13.9 3.5-4.5 8.9-7.1 14.7-7.3h1.8c6 .1 11.4 2.8 14.9 7.3 3 3.9 4.3 9 3.4 13.9-.3 1.7.3 3.5 1.6 4.7.3.3.5.6.6 1 0 .2.1.4.2.6.2.5.3 1.1.3 1.6 0 .9-.2 1.8-.8 2.9-.6 1.4-1.8 2.4-3.2 2.8-1.7.5-3 1.8-3.5 3.5-.8 2.8-2.3 5.2-4.5 7.1-1.1 1-1.7 2.3-1.7 3.8v.9c0 2.1 1.4 4.1 3.4 4.8 3.5 1.2 15.5 5.4 21.6 8.5 1.9 1 3.3 2.8 3.7 5 .9 5 1.3 13.1 1.5 19h-76.7zM174.8 213.8c-.9-5.3-4.4-9.9-9.2-12.3-4.3-2.1-10.9-4.7-16.5-6.7.8-1.3 1.5-2.6 2.1-4 3.1-1.6 5.6-4.1 6.9-7.1 1.2-2.2 1.8-4.7 1.8-7.2 0-1.7-.3-3.3-.8-4.9-.3-1.3-.9-2.5-1.7-3.6.6-6.9-1.4-13.9-5.7-19.5-5.4-6.9-13.6-10.9-22.8-11.1h-2.1c-9 .2-17.2 4.3-22.6 11.1-4.3 5.5-6.3 12.5-5.7 19.5-.8 1.1-1.3 2.3-1.7 3.7-.5 1.6-.8 3.2-.8 4.8 0 2.5.6 5 1.6 6.9 1.4 3.3 3.9 5.9 7 7.4.6 1.4 1.3 2.8 2.1 4-5.6 2-12.2 4.6-16.5 6.7-4.8 2.4-8.2 7-9.2 12.3-1.3 7.7-1.6 19.4-1.7 21.8l-.1 3.9c0 1.4.5 2.7 1.4 3.6.9 1 2.2 1.5 3.6 1.5h86.9c1.4 0 2.6-.5 3.6-1.5.9-1 1.5-2.3 1.4-3.6l-.1-4c.4-2.2.1-14-1.2-21.7zm-85.1 20.8c.1-3.5.5-13 1.5-19 .4-2.2 1.8-4 3.7-5 5.8-2.9 17-6.9 21.6-8.5 2-.7 3.4-2.6 3.4-4.8v-.9c0-1.5-.6-2.8-1.7-3.8-2.1-1.8-3.7-4.3-4.4-7.1-.5-1.7-1.8-3-3.5-3.5-1.4-.4-2.6-1.4-3.4-3.1-.4-.8-.6-1.7-.6-2.6 0-.6.1-1.1.3-1.7.1-.2.1-.3.1-.5.1-.4.3-.8.6-1 1.3-1.2 1.9-2.9 1.6-4.7-.9-4.9.3-10 3.4-13.9 3.5-4.5 8.9-7.1 14.7-7.3h1.8c6 .1 11.4 2.8 14.9 7.3 3.1 3.9 4.3 9 3.4 13.9-.3 1.7.3 3.5 1.6 4.7.3.3.5.6.6 1 0 .2.1.4.2.6.2.5.3 1.1.3 1.6 0 .9-.2 1.8-.8 2.9-.6 1.4-1.8 2.4-3.2 2.8-1.7.5-3 1.8-3.5 3.5-.8 2.8-2.3 5.2-4.5 7.1-1.1 1-1.7 2.3-1.7 3.8v.9c0 2.1 1.4 4.1 3.4 4.8 4.5 1.6 15.8 5.6 21.6 8.5 2 1 3.3 2.8 3.7 5 .9 5 1.3 13.1 1.5 19H89.7zM214.6 131.6c-2.7-.3-5.2 1.7-5.5 4.5-2.1 21-12.1 40.1-28.1 53.7-2.1 1.8-2.4 5-.6 7.1 1 1.2 2.4 1.8 3.8 1.8 1.2 0 2.3-.4 3.3-1.2 18.1-15.4 29.3-36.8 31.6-60.4.2-2.8-1.8-5.3-4.5-5.5zM47 136.1c-.3-2.8-2.8-4.8-5.5-4.5-2.8.3-4.8 2.7-4.5 5.5 2.3 23.6 13.6 45.1 31.6 60.4.9.8 2.1 1.2 3.3 1.2 1.4 0 2.8-.6 3.8-1.8 1.8-2.1 1.5-5.3-.6-7.1-16-13.6-26-32.7-28.1-53.7zM99.6 51.4c.6 0 1.1-.1 1.7-.3 17-6 36.4-6 53.4 0 2.6.9 5.5-.4 6.4-3.1.9-2.6-.4-5.5-3.1-6.4-19.2-6.8-41-6.8-60.1 0-2.6.9-4 3.8-3.1 6.4.8 2.1 2.8 3.4 4.8 3.4z"></path>
								</svg>
							</span>
							<div className="flex flex-col mt-2">
								<CountUp
									end={870502}
									duration={3}
									redraw={true}
								>
									{({ countUpRef, start }) => (
										<VisibilitySensor
											onChange={start}
											delayedCall
										>
											<h3
												className="title mb-1"
												ref={countUpRef}
											>
												870.502
											</h3>
										</VisibilitySensor>
									)}
								</CountUp>
								<p className="uppercase font-medium">
									пользователей
								</p>
							</div>
						</div>
						<div className="text-center">
							<span className="icon icon-tasks-time">
								<svg
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g>
										<path d="M256.108 3.652c-139.166 0-252 112.834-252 252 0 139.167 112.834 252 252 252s252-112.833 252-252c0-139.166-112.834-252-252-252zm0 483c-127.374 0-231-103.626-231-231 0-127.373 103.626-231 231-231s231 103.627 231 231c0 127.375-103.625 231-231 231z"></path>
										<path d="M256.108 276.652h-126v21h147V88.514h-21z"></path>
									</g>
								</svg>
							</span>
							<div className="flex flex-col mt-2">
								<CountUp end={6_979} duration={3} redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor
											onChange={start}
											delayedCall
										>
											<h3
												className="title mb-1"
												ref={countUpRef}
											>
												6.979
											</h3>
										</VisibilitySensor>
									)}
								</CountUp>
								<p className="uppercase font-medium">
									заданий в работе
								</p>
							</div>
						</div>
						<div className="text-center">
							<span className="icon icon-success-tasks">
								<svg
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M256 6.998c-137.533 0-249 111.467-249 249 0 137.534 111.467 249 249 249s249-111.467 249-249c0-137.534-111.467-249-249-249zm0 478.08c-126.309 0-229.08-102.771-229.08-229.081 0-126.31 102.771-229.08 229.08-229.08 126.31 0 229.08 102.771 229.08 229.08 0 126.31-102.77 229.081-229.08 229.081z"></path>
									<path d="M384.235 158.192 216.919 325.518l-89.057-89.037-14.142 14.143 103.199 103.179L398.28 172.334z"></path>
								</svg>
							</span>
							<div className="flex flex-col mt-2">
								<CountUp
									end={5_082_105}
									duration={3}
									redraw={true}
								>
									{({ countUpRef, start }) => (
										<VisibilitySensor
											onChange={start}
											delayedCall
										>
											<h3
												className="title mb-1"
												ref={countUpRef}
											>
												5,082,105
											</h3>
										</VisibilitySensor>
									)}
								</CountUp>
								<p className="uppercase font-medium">
									выполнено заданий
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Блок - Заслуги */}
			<div className="block block-achievements">
				<div className="container">
					<div className="flex flex-col">
						<div className="flex flex-col gap-4 text-center">
							<h3 className="title">Работаем на совесть</h3>
							<p className="content">
								Выполнили боле 100 000 заказов.
							</p>
						</div>
						<div className="grid grid-cols-3 items-center gap-4 mt-20">
							<div className="flex flex-col">
								<div className="flex flex-col gap-4 mt-auto">
									<h3 className="subtitle">Надежность</h3>
									<p>
										Тысячи довольных клиентов уже пользуются
										нашими услугами и остаются довольны.
									</p>
								</div>
								<div className="flex flex-col gap-4 mt-40">
									<h3 className="subtitle">
										100% выполнение заказов
									</h3>
									<p>
										Если Ваш заказ не был выполнен — мы
										вернем Вам денежные средства в полном
										объеме.
									</p>
								</div>
							</div>
							<div>
								<img
									className="w-[100%] object-contain"
									src={
										process.env.PUBLIC_URL +
										"/assets/images/people-is-work.png"
									}
									alt=""
									width={495}
								/>
							</div>
							<div className="flex flex-col">
								<div className="flex flex-col gap-4 mt-auto text-right">
									<h3 className="subtitle">Низкие цены</h3>
									<p>
										У нас самые низкие цены на рынке и
										отличное качество аудитории.
									</p>
								</div>
								<div className="flex flex-col gap-4 mt-40 text-right">
									<h3 className="subtitle">Помощь</h3>
									<p>
										Поможем в любое время в тикетах или в
										онлайн чате.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Блок - Функции сервиса */}
			<div className="block block-funcs-services">
				<div className="container">
					<h2 className="title text-center">Функции сервиса</h2>
					<div className="flex gap-8 mt-28 content">
						<div className="funcs-services-card">
							<div className="funcs-services-card__heading">
								<span className="icon funcs-services-card__icon">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/ico_like.svg"
										}
										alt=""
										width={24}
									/>
								</span>
								<h4 className="subtitle funcs-services-card__title">
									Мне нравится
								</h4>
							</div>
							<div className="funcs-services-card__content">
								<p>Лайки, классы и реакции</p>
							</div>
						</div>
						<div className="funcs-services-card">
							<div className="funcs-services-card__heading">
								<span className="icon funcs-services-card__icon">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/ico_user.svg"
										}
										alt=""
										width={24}
									/>
								</span>
								<h4 className="subtitle funcs-services-card__title">
									Подписчики
								</h4>
							</div>
							<div className="funcs-services-card__content">
								<p>Лучшие на рынке офферного типа</p>
							</div>
						</div>
						<div className="funcs-services-card">
							<div className="funcs-services-card__heading">
								<span className="icon funcs-services-card__icon">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/ico_message.svg"
										}
										alt=""
										width={24}
									/>
								</span>
								<h4 className="subtitle funcs-services-card__title">
									Комментарии
								</h4>
							</div>
							<div className="funcs-services-card__content">
								<p>На посты, фото или видео</p>
							</div>
						</div>
						<div className="funcs-services-card">
							<div className="funcs-services-card__heading">
								<span className="icon funcs-services-card__icon">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/ico_eye.svg"
										}
										alt=""
										width={24}
									/>
								</span>
								<h4 className="subtitle funcs-services-card__title">
									Просмотры
								</h4>
							</div>
							<div className="funcs-services-card__content">
								<p>На посты, фото или видео</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Блок - Услуги продвижения */}
			<div id="blockQuickOrder" className="block block-amenities">
				<div className="container">
					<BlockServices />
				</div>
			</div>

			{/* Блок - Популярные услуги */}
			<div className="block block-popular-services">
				<div className="container">
					<h2 className="title text-center">Популярные услуги</h2>
					<div className="grid grid-cols-4 gap-y-10 gap-x-14 mt-24">
						<article className="block-popular-services__card">
							<div className="block-popular-services__card-content">
								<div className="flex items-center gap-6">
									<img
										className="icon icon-telegram"
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/telegram.svg"
										}
										alt=""
										width={34}
									/>
									<h3 className="subtitle">Telegram</h3>
								</div>
								<div className="content mt-10">
									<h4 className="font-bold">
										1000 подписчиков за 500₽
									</h4>
									<div className="block-popular-services__card-text mt-4">
										<p>
											Заполненные профили мгновенный
											запуск заказа, без списаний
										</p>
									</div>
								</div>
							</div>
							<Link className="btn btn-default" to="/">
								<span>Оформить заказ</span>
							</Link>
						</article>
						<article className="block-popular-services__card">
							<div className="block-popular-services__card-content">
								<div className="flex items-center gap-6">
									<img
										className="icon icon-vk"
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/vk.svg"
										}
										alt=""
										width={34}
									/>
									<h3 className="subtitle">Вконтакте</h3>
								</div>
								<div className="content mt-10">
									<h4 className="font-bold">
										500 подписчиков за 250₽
									</h4>
									<div className="block-popular-services__card-text mt-4">
										<p>
											Добавление подписчиков с большой
											скоростью и лимитами.
										</p>
									</div>
								</div>
							</div>
							<Link className="btn btn-default" to="/">
								<span>Оформить заказ</span>
							</Link>
						</article>
						<article className="block-popular-services__card">
							<div className="block-popular-services__card-content">
								<div className="flex items-center gap-6">
									<img
										className="icon icon-instagram"
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/instagram.svg"
										}
										alt=""
										width={34}
									/>
									<h3 className="subtitle">Instagram</h3>
								</div>
								<div className="content mt-10">
									<h4 className="font-bold">
										1000 подписчиков за 250₽
									</h4>
									<div className="block-popular-services__card-text mt-4">
										<p>
											Подписчики с реальными публикациями,
											аватарками и именами.
										</p>
									</div>
								</div>
							</div>
							<Link className="btn btn-default" to="/">
								<span>Оформить заказ</span>
							</Link>
						</article>
						<article className="block-popular-services__card">
							<div className="block-popular-services__card-content">
								<div className="flex items-center gap-6">
									<img
										className="icon icon-tiktok"
										src={
											process.env.PUBLIC_URL +
											"/assets/images/icons/tiktok.svg"
										}
										alt=""
										width={34}
									/>
									<h3 className="subtitle">Tik-tok</h3>
								</div>
								<div className="content mt-10">
									<h4 className="font-bold">
										500 подписчиков за 210₽
									</h4>
									<div className="block-popular-services__card-text mt-4">
										<p>
											Подписчики с минимальным шансом от
											списания. До 50К в сутки.
										</p>
									</div>
								</div>
							</div>
							<Link className="btn btn-default" to="/">
								<span>Оформить заказ</span>
							</Link>
						</article>
					</div>
				</div>
			</div>

			{/* Блок - Популярные вопросы */}
			<div className="block block-questions">
				<div className="container">
					<hgroup>
						<h2 className="main-title text-center">
							Популярные вопросы
						</h2>
						<h3 className="subtitle text-center mt-12">
							Не нашли ответ?{" "}
							<a href="mailto:Gidsmm.manager@gmail.com" className="link">
								Напишите нам
							</a>
						</h3>
					</hgroup>
					<div className="mt-28">
						<TabsQuestions />
					</div>
				</div>
			</div>
		</>
	);
}
