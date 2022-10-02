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

export const Home = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState("0");
	const [date, setDate] = useState("");
	const [days, setDays] = useState(0);
	const storedTheme = localStorage.getItem("theme");
	const [BGColor, setBGColor] = useState("");

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
									+<span>{projects}</span> Completed Projects
								</h5>
							</div>
							<div className="info-box">
								<h5 className="home-info">
									+<span>{days}</span>  Days on Operation
								</h5>
							</div>
						</div>
					</div>
					<h2 className="center">software development For The Enterprise</h2>
					<div className="intro">
						<p className="">
							With experience in machine learning and software development, we
							use and develop technology to increase the competitiveness of your
							business by focusing on user experience and innovation.
						</p>
					</div>
					<div className="services">
						<Service
							type="left"
							service="WEB DEVELOPMENT"
							photo={"web" + BGColor}
						/>
						<Service
							type="right"
							service="MOBILE APPS"
							photo={"mobile" + BGColor}
						/>
						<Service
							type="left"
							service="CLOUD SERVICES "
							photo={"cloud" + BGColor}
						/>
						<Service
							type="right"
							service="MACHINE LEARNING "
							photo={"machine" + BGColor}
						/>
						<Service
							type="left"
							service="ROBOTIC VISION"
							photo={"robotic" + BGColor}
						/>
						<Service
							type="right"
							service="BLOCKCHAIN"
							photo={"blockchain" + BGColor}
						/>
					</div>
					<div className="process">
						<h2>OUR PROCESS</h2>
						<div className="process-elements">
							<div className="process-element">
								<h5>
									<span>1º</span>Analyse
								</h5>
								<Analyse />
							</div>

							<div className="process-element down">
								<h5>
									<span>2º</span>Strategy
								</h5>
								<Strategy />
							</div>

							<div className="process-element ">
								<h5>
									<span>3º</span>Implement
								</h5>
								<Implement />
							</div>

							<div className="process-element down">
								<h5>
									<span>4º</span>Development
								</h5>
								<Development />
							</div>

							<div className="process-element">
								<h5>
									<span>5º</span>Follow Up
								</h5>
								<Follow />
							</div>
						</div>
					</div>

					<div style={{padding: "0 4rem", marginBottom:"5rem"}}>
						<h2>WE ACCEPT CRYPTO</h2>
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
