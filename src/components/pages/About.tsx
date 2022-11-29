import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {collection, onSnapshot} from "firebase/firestore";
import db from "src/firebase";
import { useTranslation } from "react-i18next";

import {Video} from "src/components/UI/atoms";
import "./About.css";
import {LogoV} from "../UI/atoms/icons";

export const About = () => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState("");
	const [t, i18n] = useTranslation("global");
	let {section} = useParams();
	const contact = useRef(null);

	function sendMessage(e: any) {
		e.preventDefault();
		let mensajeF = `Que tal mi nombre es:${name}, ${message} mi contacto es: ${mail}`;
		let link = `https://wa.me/${phone}/?text=${mensajeF}`;
		window.open(link, "_blank");
	}

	function scrollTo(elementRef: any) {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		if (section === "contact") {
			scrollTo(contact);
		}
		onSnapshot(collection(db, "sienar-data"), (snapshot) => {
			snapshot.docs.map((doc) => {
				setPhone(doc.data().phone);
			});
		});
	}, []);

	return (
		<div className="about">
			<div className="logo-container">
				<Video type="solutions" />
				<div className="logo-absolute">
					<LogoV />
				</div>
			</div>
			<div className="about-content">
				<h2 style={{marginLeft: "-1rem"}}>{t("about.title")}</h2>
				<p >
					{t("about.first-paragraph")}
				</p>
				<p>
					{t("about.second-paragraph")}
				</p>
			</div>

			<h2 style={{marginLeft: "6.1rem"}}>{t("contact.drop-a-line")}</h2>
			<div className="contact-form" ref={contact}>
				<div className="col-left">
					<form  style={{padding: "6.1rem",marginTop: "-6rem"}}onSubmit={(e) => sendMessage(e)}>
						<label>
							{t("contact.name")}
							<br />
							<input
								type="text"
								value={name}
								onChange={(t) => setName(t.target.value)}
							/>
						</label>

						<label>
							{t("contact.email")}
							<br />
							<input
								type="text"
								value={mail}
								onChange={(t) => setMail(t.target.value)}
							/>
						</label>

						<label>
							{t("contact.message")}
							<br />
							<textarea
								value={message}
								onChange={(t) => setMessage(t.target.value)}
							/>
						</label>
						<input type="submit" value="Send" />
					</form>
				</div>

				<div className="col-right">
					<h5>{t("contact.contact")}</h5>
					<p>{t("contact.inquiries")}</p>
					<p className="mail mb">hello@sienar.com</p>
					<p>{t("contact.other-request")}</p>
					<p className="mail">communications@sienar.com</p>
				</div>
			</div>
		</div>
	);
};
