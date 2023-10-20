import { useState } from 'react';

export default function Button({ children }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<button className={`flex items-center gap-4 ${isActive ? "active" : ""}`} type="button" onClick={() => setIsActive(!isActive)}>
			{children}
		</button>
	);
}
