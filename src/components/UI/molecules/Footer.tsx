import React from "react";
import {Logo, Instagram, Linkedin} from "src/components/UI/atoms/icons";
import "./Footer.css";

export const Footer = () => {
	return (
		<footer>
			<div className="main-content">
				<div className="izq">
					<Logo />
					<h1 style={{marginLeft: "1.3rem"}}>SIENAR</h1>
				</div>
				<div className="der">
					<a
						href="https://instagram.com/sienar.dev?igshid=YmMyMTA2M2Y="
						target="_blank"
					>
						<Instagram />
					</a>
					<a href="https://www.linkedin.com/company/sienar/" target="_blank">
						<Linkedin />
					</a>
				</div>
			</div>
			<div className="privacy-content">
				<a href="https://sienar.dev/aviso-privacidad">Terminos y condiciones</a>
			</div>
		</footer>
	);
};
