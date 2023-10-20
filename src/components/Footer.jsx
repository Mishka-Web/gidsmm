export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<img
					src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
					alt=""
					className="logo footer-logo mb-6"
				/>
				<div className="grid grid-cols-3 gap-10">
					<div className="footer-block">
						<h3 className="mb-[3.4rem]">
							Сервис раскрутки Instagram,
							<br />
							Telegram и других площадок.
						</h3>
						<nav className="mb-[4.4rem]">
							<ul className="list-inside flex flex-col gap-3">
								<li>
									<a href="/">Политика конфиденциальности</a>
								</li>
								<li>
									<a href="/">Публичная оферта</a>
								</li>
								<li>
									<a href="/">Политика cookies</a>
								</li>
							</ul>
						</nav>
						<address className="footer-copyright">
							<span>© 2023 All rights reserved</span>
						</address>
					</div>
					<div className="footer-block">
						<nav className="mb-[4.4rem]">
							<ul className="list-inside flex flex-col gap-3">
								<li>
									<a href="/">Партнерская программа</a>
								</li>
								<li>
									<a href="/">Каталог услуг</a>
								</li>
								<li>
									<a href="/">Отзывы</a>
								</li>
								<li>
									<a href="/">Помощь</a>
								</li>
								<li>
									<a href="/">Контакты</a>
								</li>
							</ul>
						</nav>
						<div className="flex flex-col mt-auto">
							<span className="opacity-75 mb-4">
								Принимаем к оплате:
							</span>
							<div className="flex gap-3 flex-wrap">
								<span className="footer-block__card">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/payments/mastercard.webp"
										}
										alt=""
										className="icon"
										width={50}
									/>
								</span>
								<span className="footer-block__card">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/payments/visa.webp"
										}
										alt=""
										className="icon"
										width={50}
									/>
								</span>
								<span className="footer-block__card">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/payments/mir.webp"
										}
										alt=""
										className="icon"
										width={50}
									/>
								</span>
								<span className="footer-block__card">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/payments/qiwi.webp"
										}
										alt=""
										className="icon"
										width={50}
									/>
								</span>
								<span className="footer-block__card">
									<img
										src={
											process.env.PUBLIC_URL +
											"/assets/images/payments/yoomoney.webp"
										}
										alt=""
										className="icon"
										width={50}
									/>
								</span>
							</div>
						</div>
					</div>
					<div className="footer-block">
						<div className="mb-[4.4rem]">
							<div className="mb-4">Нужна помощь?</div>
							<a className="btn btn-ghost" href="/">
								Написать в поддержку
							</a>
						</div>
						<div className="mt-auto flex items-center gap-5">
							<img
								className="icon icon-telegram"
								src={
									process.env.PUBLIC_URL +
									"/assets/images/icons/telegram.svg"
								}
								width={34}
								alt=""
							/>
							<a
								className="text-white hover:text-white hover:underline"
								href="mailto:Gidsmm.manager@gmail.com"
							>
								Gidsmm.manager@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
