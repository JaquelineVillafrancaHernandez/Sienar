import React, {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import db from "src/firebase";

import {Video, Service} from "src/components/UI/atoms";
import {
	Analyse,
	Strategy,
	Implement,
	Development,
	Follow,
	LogoV,
} from "src/components/UI/atoms/icons";
import "./Home.css";
import { useTranslation } from "react-i18next";

export const Home = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState("0");
	const [date, setDate] = useState("");
	const [days, setDays] = useState(0);
	const storedTheme = localStorage.getItem("theme");
	const [BGColor, setBGColor] = useState("");
	const [t, i18n] = useTranslation("global");

	function calcDays(parametro: string) {
		const date_1 = new Date(parametro);
		let date_2 = new Date();
		let difference = date_2.getTime() - date_1.getTime();
		let totalF = Math.ceil(difference / (1000 * 3600 * 24));
		setDays(totalF);
	}

	useEffect(() => {
		onSnapshot(collection(db, "sienar-data"), (snapshot) => {
			snapshot.docs.map((doc) => {
				calcDays(doc.data().date);
				setProjects(doc.data().projects);
				setDate(doc.data().date);
			});
		});

		if (storedTheme === "light") {
			setBGColor("pink");
		} else if (storedTheme === "dark") {
			setBGColor("green");
		}
		setLoading(false);
	}, []);

	return (
		<div>
			{loading ? (
				<div></div>
			) : (
				<div>
					<div className="video-container">
						<Video type="home" />
						<div className="home-logo-absolute">
							<LogoV />
						</div>
						<div className="info-projects">
							<div className="info-box">
								<h5 className="home-info">
									+<span>{projects}</span> {t("home.projects")}
								</h5>
							</div>
							<div className="info-box">
								<h5 className="home-info">
									+<span>{days}</span> {t("home.operation-days")}
								</h5>
							</div>
						</div>
					</div>
					<h2 className="center">{t("home.title")}</h2>
					<div className="intro">
						<p className="">
						{t("home.first-paragraph")}
						</p>
					</div>
					<div className="services">
						<Service
							type="left"
							service={t("home.web-development")}
							photo={"web" + BGColor}
						/>
						<Service
							type="right"
							service={t("home.mobile-apps")}
							photo={"mobile" + BGColor}
						/>
						<Service
							type="left"
							service={t("home.cloud-services")}
							photo={"cloud" + BGColor}
						/>
						<Service  
							type="machine"
							service={t("home.machine-learning")}
							photo={"machine" + BGColor}
						/>
						<Service
							type="left"
							service={t("home.robotic-vision")}
							photo={"robotic" + BGColor}
						/>
						<Service
							type="right"
							service={t("home.blockchain")}
							photo={"blockchain" + BGColor}
						/>
					</div>
					<div className="process">
						<h2>{t("home.our-process")}</h2>
						<div className="process-elements">
							<div className="process-element">
								<h5>
									<span>1º</span>{t("home.analyse")}
								</h5>
								<Analyse />
							</div>

							<div className="process-element down">
								<h5>
									<span>2º</span>{t("home.strategy")}
								</h5>
								<Strategy />
							</div>

							<div className="process-element ">
								<h5>
									<span>3º</span>{t("home.implement")}
								</h5>
								<Implement />
							</div>

							<div className="process-element down">
								<h5>
									<span>4º</span>{t("home.development")}
								</h5>
								<Development />
							</div>

							<div className="process-element">
								<h5>
									<span>5º</span>{t("home.follow-up")}
								</h5>
								<Follow />
							</div>
						</div>
					</div>

					<div style={{padding: "0 2rem", marginBottom:"5rem"}}>
						<h2>{t("home.crypto")}</h2>
						<div className="cryptos-container">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/sienar2022.appspot.com/o/bitcoin.png?alt=media&token=d89e1753-67cd-4913-97f5-3b3aa74b5f36"
								alt=""
								className="crypto-img"
							/>
							<img
								src="https://firebasestorage.googleapis.com/v0/b/sienar2022.appspot.com/o/usd.png?alt=media&token=d89e1753-67cd-4913-97f5-3b3aa74b5f36"
								alt=""
								className="crypto-img"
							/>
							<img
								src="https://firebasestorage.googleapis.com/v0/b/sienar2022.appspot.com/o/binance.png?alt=media&token=d89e1753-67cd-4913-97f5-3b3aa74b5f36"
								alt=""
								className="crypto-img"
							/>
							<img
								src="https://firebasestorage.googleapis.com/v0/b/sienar2022.appspot.com/o/tether.png?alt=media&token=d89e1753-67cd-4913-97f5-3b3aa74b5f36"
								alt=""
								className="crypto-img"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
