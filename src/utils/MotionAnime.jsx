import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Anime({ children, options }) {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	}, [control, inView]);

	return (
		<motion.div ref={ref} animate={control} {...options}>
			{children}
		</motion.div>
	);
}
