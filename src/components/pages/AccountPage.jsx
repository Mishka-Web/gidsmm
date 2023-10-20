import { Helmet } from "react-helmet";

export default function AccountPage() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content="" />
				<title>Профиль</title>
			</Helmet>

			<div className="block block-profile">
				<div className="container">
					<div className="flex gap-36">
						<aside className="block-profile__sidebar anime anime-default">
							<div className="flex items-center gap-x-10 gap-y-5">
								<span className="block-profile__circle-ruble">
									₽
								</span>
								<div className="flex flex-col leading-none">
									<div className="content">Ваш баланс</div>
									<div className="title block-profile__sidebar-title">
										0 <span>руб</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-4 mt-12">
								<button
									type="button"
									className="btn btn-default"
								>
									<span>Пополнение баланса</span>
								</button>
								<button
									type="button"
									className="btn btn-ghost gap-2"
								>
									<span>⚡️</span>
									<span>Создать заказ</span>
								</button>
							</div>
							<div className="block-profile__sidebar-nav mt-16">
								<ul>
									<li>
										<div className="flex gap-5 items-center justify-start">
											<img
												className="icon"
												src={
													process.env.PUBLIC_URL +
													"/assets/images/icons/cabinet-white.png"
												}
												alt=""
												width={20}
											/>
											Кабинет
										</div>
									</li>
									<li>
										<div className="flex gap-5 items-center justify-start">
											<img
												className="icon"
												src={
													process.env.PUBLIC_URL +
													"/assets/images/icons/services-white.png"
												}
												alt=""
												width={20}
											/>
											Создать заказ
										</div>
									</li>
									<li>
										<div className="flex gap-5 items-center justify-start">
											<img
												className="icon icon-balance"
												src={
													process.env.PUBLIC_URL +
													"/assets/images/icons/balance-white.png"
												}
												alt=""
												width={20}
											/>
											Баланс
										</div>
									</li>
									<li>
										<div className="flex gap-5 items-center justify-start">
											<img
												className="icon"
												src={
													process.env.PUBLIC_URL +
													"/assets/images/icons/settings-white.png"
												}
												alt=""
												width={20}
											/>
											Настройки
										</div>
									</li>
									<li>
										<div className="flex gap-5 items-center justify-start">
											<img
												className="icon"
												src={
													process.env.PUBLIC_URL +
													"/assets/images/icons/help-white.png"
												}
												alt=""
												width={20}
											/>
											Помощь
										</div>
									</li>
									<li>
										<div className="flex gap-5 items-center justify-start">
											<img
												className="icon icon-balance"
												src={
													process.env.PUBLIC_URL +
													"/assets/images/icons/balance-white.png"
												}
												alt=""
												width={20}
											/>
											Партнерская программа
										</div>
									</li>
									<li>
										<div className="flex gap-5 items-center justify-start">
											<img
												className="icon"
												src={
													process.env.PUBLIC_URL +
													"/assets/images/icons/go-out-white.png"
												}
												alt=""
												width={20}
											/>
											Выйти
										</div>
									</li>
								</ul>
							</div>
						</aside>
						<div className="block-profile__main anime anime-default">
							<div className="title">Ваши заказы</div>
							<div className="flex flex-col items-center my-auto">
								<img
									className="object-contain pointer-events-none select-none"
									src={
										process.env.PUBLIC_URL +
										"/assets/images/frame.webp"
									}
									alt=""
									width={420}
								/>
								<div className="flex flex-col items-center">
									<hgroup className="text-center">
										<div className="title">
											Заказов не найдено
										</div>
										<div className="subtitle">
											Сделайте свой первый шаг к
											популярности
										</div>
									</hgroup>
									<button
										type="button"
										className="btn btn-ghost gap-2 mt-12"
									>
										<span>⚡️</span>
										<span>Создать заказ</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img
				className="w-[100%] h-[100%] fixed bottom-0 right-0 z-0 object-cover bg-no-repeat anime anime-default"
				src={process.env.PUBLIC_URL + "/assets/images/bg-intro.jpg"}
				alt=""
			/>
		</>
	);
}
