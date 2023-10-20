import { Helmet } from "react-helmet";

export default function AuthPage() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Авторизация</title>
				<meta name="description" content="" />
			</Helmet>

			<div className="block block-auth">
				<div className="container">
					<div className="flex flex-col">
						<form className="form anime anime-to-top" name="auth">
							<h1 className="title mb-10 text-center">
								Авторизация
							</h1>
							<div className="wrapper-fields">
								<div className="flex flex-col items-start gap-2">
									<label className="label" htmlFor="login">
										Почта
									</label>
									<input
										className="field"
										id="email"
										name="email"
										type="email"
									/>
								</div>
								<div className="flex flex-col items-start gap-2">
									<label className="label" htmlFor="password">
										Пароль
									</label>
									<input
										className="field"
										id="password"
										name="password"
										type="password"
									/>
								</div>
							</div>
							<button
								className="btn btn-default mt-8"
								type="submit"
							>
								<span>Войти</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
