import Button from "./TabsQuestionsBtn";
import { useState } from "react";

export default function TabsQuestions() {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => setToggleState(index);

	const getActiveClass = (index, className) =>
		toggleState === index ? className : "";

	return (
		<>
			<div className="block-questions__box-tabs box-tabs rounded-[2.8rem] border overflow-hidden mx-auto w-[75%]">
				<div className="grid grid-cols-2">
					<div className="box-tabs__item">
						<div className="box-tabs__item-btn box-tabs__item-btn--bg">
							Вопросы
						</div>
						<ul className="list-inside font-medium">
							<li
								className={getActiveClass(0, "active")}
								onClick={() => toggleTab(0)}
							>
								<button type="button">
									Почему заказ отменён?
								</button>
							</li>
							<li
								className={getActiveClass(1, "active")}
								onClick={() => toggleTab(1)}
							>
								<button type="button">Я забыл пароль</button>
							</li>
							<li
								className={getActiveClass(2, "active")}
								onClick={() => toggleTab(2)}
							>
								<button type="button">
									Вы накручиваете подписчиков из конкретного
									города/области?
								</button>
							</li>
							<li
								className={getActiveClass(3, "active")}
								onClick={() => toggleTab(3)}
							>
								<button type="button">
									Как зарегистрироваться?
								</button>
							</li>
							<li
								className={getActiveClass(4, "active")}
								onClick={() => toggleTab(4)}
							>
								<button type="button">
									Как создать заказ?
								</button>
							</li>
							<li
								className={getActiveClass(5, "active")}
								onClick={() => toggleTab(5)}
							>
								<button type="button">
									Как работает сервис и как выполняются
									<br />
									заказы?
								</button>
							</li>
							<li
								className={getActiveClass(6, "active")}
								onClick={() => toggleTab(6)}
							>
								<button type="button">
									Где я могу отслеживать процесс выполнения
									своего заказа?
								</button>
							</li>
							<li
								className={getActiveClass(7, "active")}
								onClick={() => toggleTab(7)}
							>
								<button type="button">
									У вас есть партнёрская программа или
									купоны/промокоды/скидки?
								</button>
							</li>
						</ul>
					</div>
					<div className="box-tabs__item">
						<div
							className={`box-tabs__item-content hidden ${getActiveClass(
								0,
								"active"
							)}`}
						>
							<div className="box-tabs__item-btn">Ответы</div>
							<div className="box-tabs__content px-[5rem] py-[4rem]">
								<div className="subtitle">
									Как работает сервис и как выполняются
									заказы?
								</div>
								<div className="content mt-10">
									Есть несколько возможных причин, по которым
									заказ может быть отменен, включая
									неправильно указанную ссылку, ошибку в
									выборе платформы, а также закрытый
									профиль/сообщество. Мы рекомендуем Вам
									убедиться, что Вы ввели корректные данные и
									что ваш профиль/сообщество доступны для
									просмотра. Пожалуйста, переоформите свой
									заказ, убедившись, что Вы соблюдаете все
									условия, указанные в разделе "Дополнительная
									информация" в описании тарифа. При отмене
									заказа средства возвращаются на баланс Вашей
									учётной записи. Если Вы заказали накрутку на
									профиль Вконтакте и он был отменён,
									пожалуйста, проверьте настройки приватности
									на странице
									https://vk.com/settings?act=privacy
									(странице, относящейся к указываемой записи)
									и убедитесь, что параметр "Кому в интернете
									видна моя страница" установлен на значение
									"Всем". Если Вы столкнетесь с той же ошибкой
									при правильном оформлении заказа,
									пожалуйста, свяжитесь с нашей службой
									технической поддержки, чтобы мы могли помочь
									Вам решить проблему.
								</div>
							</div>
						</div>
						<div
							className={`box-tabs__item-content hidden ${getActiveClass(
								1,
								"active"
							)}`}
						>
							<div className="box-tabs__item-btn">Ответы</div>
							<div className="box-tabs__content px-[5rem] py-[4rem]">
								<div className="subtitle">Я забыл пароль</div>
								<div className="content mt-10">
									Данные для авторизации отправляются на
									электронную почту, которую Вы указали при
									регистрации или создании заказа. Рекомендуем
									проверить папку "Спам" в случае, если письмо
									не пришло в основной почтовый ящик. Если у
									Вас все еще возникают проблемы с
									авторизацией, пожалуйста, свяжитесь с нашей
									службой поддержки для получения
									дополнительной информации.
								</div>
							</div>
						</div>
						<div
							className={`box-tabs__item-content hidden ${getActiveClass(
								2,
								"active"
							)}`}
						>
							<div className="box-tabs__item-btn">Ответы</div>
							<div className="box-tabs__content px-[5rem] py-[4rem]">
								<div className="subtitle">
									Вы накручиваете подписчиков из конкретного
									города/области?
								</div>
								<div className="content mt-10">
									Нет, мы предоставляем услуги по накрутке
									подписчиков из Российской Федерации, стран
									СНГ и других стран мира, в зависимости от
									выбранного Вами тарифа. Информация о
									геолокации накручиваемых учётных записей
									указана в описании тарифа.
								</div>
							</div>
						</div>
						<div
							className={`box-tabs__item-content hidden ${getActiveClass(
								3,
								"active"
							)}`}
						>
							<div className="box-tabs__item-btn">Ответы</div>
							<div className="box-tabs__content px-[5rem] py-[4rem]">
								<div className="subtitle">
									Как зарегистрироваться?
								</div>
								<div className="content mt-10">
									Для регистрации на нашем сайте, необходимо
									нажать на кнопку "Зарегистрироваться" и
									указать действующий электронный адрес. После
									этого, необходимо поставить галочку,
									соглашаясь с условиями использования
									сервиса, и нажать кнопку
									"Зарегистрироваться". Система автоматически
									предоставит Вам временный пароль. Важно
									сохранить его в надежном месте, так как Вы
									сможете войти в свою учетную запись только с
									помощью временного пароля. После входа в
									систему, рекомендуем изменить временный
									пароль на новый, более надежный.
								</div>
							</div>
						</div>
						<div
							className={`box-tabs__item-content hidden ${getActiveClass(
								4,
								"active"
							)}`}
						>
							<div className="box-tabs__item-btn">Ответы</div>
							<div className="box-tabs__content px-[5rem] py-[4rem]">
								<div className="subtitle">
									Как создать заказ?
								</div>
								<div className="content mt-10">
									Создать заказ Вы можете на главной странице
									сайта, оформив "Быстрый заказ", в разделе
									"Услуги", а так же в Вашем личном кабинете.
									Выберите нужную Вам площадку, услугу и
									тариф, ознакомьтесь с условиями и описанием
									тарифа. Укажите необходимое количество и
									корректную ссылку. Вы также можете
									использовать скидочный купон, который будет
									опубликован на нашем telegram канале
									https://t.me/crowdstoreru. Нажмите кнопку
									"Создать заказ", чтобы подтвердить создание
									заказа.
								</div>
							</div>
						</div>
						<div
							className={`box-tabs__item-content hidden ${getActiveClass(
								5,
								"active"
							)}`}
						>
							<div className="box-tabs__item-btn">Ответы</div>
							<div className="box-tabs__content px-[5rem] py-[4rem]">
								<div className="subtitle">
									Как работает сервис и как выполняются
									<br />
									заказы?
								</div>
								<div className="content mt-10">
									Наш сервис предоставляет подписчиков,
									которые привлекаются как из CPA-сетей, так и
									через рекламу в социальных сетях. Мы
									работаем только с высококачественными
									источниками трафика, гарантируя качество
									наших услуг. Подписчики из CPA-сетей
									добавляются в группу или подписываются на
									страницу за денежное вознаграждение. Вы
									можете заказать подписчиков на нашей главной
									странице, выбрав нужную площадку, услугу и
									тариф. После этого мы начнем выполнение
									заказа в соответствии с выбранными
									параметрами.
								</div>
							</div>
						</div>
						<div
							className={`box-tabs__item-content hidden ${getActiveClass(
								6,
								"active"
							)}`}
						>
							<div className="box-tabs__item-btn">Ответы</div>
							<div className="box-tabs__content px-[5rem] py-[4rem]">
								<div className="subtitle">
									Где я могу отслеживать процесс выполнения
									своего заказа?
								</div>
								<div className="content mt-10">
									Для отслеживания выполнения своего заказа,
									пожалуйста, зайдите в раздел "Мои заказы" в
									Вашем личном кабинете. Там вы сможете
									следить за процессом работы над Вашим
									заказом и получать информацию о его статусе.
								</div>
							</div>
						</div>
						<div
							className={`box-tabs__item-content hidden ${getActiveClass(
								7,
								"active"
							)}`}
						>
							<div className="box-tabs__item-btn">Ответы</div>
							<div className="box-tabs__content px-[5rem] py-[4rem]">
								<div className="subtitle">
									У вас есть партнёрская программа или
									купоны/промокоды/скидки?
								</div>
								<div className="content mt-10">
									У нас есть накопительная скидка, которая
									зависит от общей суммы пополнения баланса на
									учетной записи. Всего существует 10 уровней
									скидки, начиная от 1% при общем пополнении
									баланса на 500 рублей и заканчивая 10% при
									общем пополнении баланса на 150000 рублей.
									Данная скидка действует постоянно на всю
									учётную запись. Также мы предлагаем
									партнерскую программу, которая позволяет
									получать до 5% от суммы пополнения счета
									пользователя, зарегистрировавшегося по вашей
									реферальной ссылке. В личном кабинете нашего
									сайта вы можете найти ссылку на партнерскую
									программу, которую можно отправить друзьям,
									родственникам и знакомым. Мы также
									предлагаем скидочные купоны, которые можно
									получить в нашем Telegram-канале
									https://t.me/crowdstoreru.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
