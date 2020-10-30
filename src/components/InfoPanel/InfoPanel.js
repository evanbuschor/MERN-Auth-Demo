import React, { useState } from "react";
import "./InfoPanel.scss";

function InfoPanel() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			onClick={() => {
				setIsOpen((prev) => !prev);
			}}
			className={`info-panel ${isOpen ? "info-panel--open" : ""}`}>
			<div className="left">
				<span className="info-panel__data">Signed in: true</span>
				<span className="info-panel__data">Signed in: true</span>
				<span className="info-panel__data">Signed in: true</span>
			</div>
			<div className="right">
				<div className="info-panel__arrow">{isOpen ? ">" : "<"}</div>
			</div>
		</div>
	);
}

export default InfoPanel;
