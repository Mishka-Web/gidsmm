import { Link, NavLink } from "react-router-dom";
import { INavLink } from "../models";

const links: INavLink[] = [
	{
		id: 0,
		text: "Каталог услуг",
		target: "catalog",
		inMenu: (
			<ul>
				<li>
					<Link
						className="flex gap-4"
						to={"/catalog#blockAmenities"}
					>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/telegram.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Телеграм</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/youtube.svg"
							}
							alt=""
							className="icon"
						/>
						<span>YouTube</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/vk.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Вконтакте</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/instagram.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Instagram</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/tiktok.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Tik-tok</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/ok.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Ok</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/twitch.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Twitch</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/twitter.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Твиттер</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/discord.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Дискорд</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/rutube.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Рутуб</span>
					</Link>
				</li>
				<li>
					<Link className="flex gap-4" to={"/catalog#blockAmenities"}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icons/likee.svg"
							}
							alt=""
							className="icon"
						/>
						<span>Likee</span>
					</Link>
				</li>
			</ul>
		),
	},
	{
		id: 1,
		text: "Отзывы",
		target: "reviews",
		inMenu: null,
	},
	{
		id: 2,
		text: "Помощь",
		target: "help",
		inMenu: null,
	},
	{
		id: 3,
		text: "Контакты",
		target: "contacts",
		inMenu: null,
	},
];

export default function Navigation() {
	return (
		<nav className="anime anime-default">
			<ul className="flex items-center gap-[3rem]">
				{links.map((link) => (
					<li key={link.id}>
						<NavLink
							to={"/" + link.target}
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							{link.text}
						</NavLink>
						{link.inMenu}
					</li>
				))}
			</ul>
		</nav>
	);
}
