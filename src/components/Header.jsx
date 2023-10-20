import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Header() {
	// хук заглушка
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		setIsAuth(false);
	}, [isAuth]);

	return (
		<header className="header fixed w-[100%] top-0 left-0 z-50 max-lg:py-6">
			<div className="container">
				<div className="flex flex-col gap-5">
					<div className="flex">
						<Link
							className="header-wrap-logo absolute left-[6%] top-[50%] translate-y-[-50%] z-30 inline-flex anime anime-default max-lg:static max-lg:translate-y-0"
							to="/"
						>
							<img
								className="logo header-logo"
								draggable="false"
								src={
									process.env.PUBLIC_URL +
									"/assets/images/logo.png"
								}
								width={166}
								alt=""
							/>
						</Link>
						<div className="header-inner flex items-center justify-end relative h-[7.5rem] max-lg:h-auto w-[100%]">
							<div className="header-nav absolute t-[50%] left-[50%] translate-x-[-50%] max-lg:hidden">
								<Navigation />
							</div>
							<div className="user-panel flex items-center anime anime-default">
								{isAuth ? (
									<div className="flex items-center gap-[3rem]">
										<Link
											className="user-panel__item"
											to={"/dashboard"}
										>
											<span>0</span>
											<div className="user-panel__circle">
												<span>₽</span>
											</div>
										</Link>
										<Link
											className="user-panel__item"
											to="/dashboard"
										>
											<span>Мой аккаунт</span>
											<div className="user-panel__circle">
												<span className="icon icon-user">
													<svg
														viewBox="0 0 32 32"
														xmlns="http://www.w3.org/2000/svg"
													>
														<title />
														<g id="about">
															<path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
															<path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
														</g>
													</svg>
												</span>
											</div>
										</Link>
									</div>
								) : (
									<div className="flex items-center gap-4">
										<Link
											className="btn bg-transparent shadow-none hover:shadow-lg rounded-none"
											to={"/login/auth"}
										>
											Войти
										</Link>
										<Link
											to={"/login/reg"}
											className="btn btn-default"
										>
											<span>Создать аккаунт</span>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="lg:hidden">
						<div className="header-nav">
							<Navigation />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
