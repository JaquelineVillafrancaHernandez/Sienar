import React, {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import {Video, Service} from "src/components/UI/atoms";
import {
	Mobile,
	Web,
	Machine,
	Cloud,
	Robotic,
	Blockchain,
	LogoV,
} from "src/components/UI/atoms/icons";
import "./Solutions.css";
import { useTranslation } from "react-i18next";

export const Solutions = () => {
	let {service} = useParams();
	const web = useRef(null);
	const mobile = useRef(null);
	const cloud = useRef(null);
	const machine = useRef(null);
	const robotic = useRef(null);
	const blockchain = useRef(null);
	const [t, i18n] = useTranslation("global");

	function scrollTo(elementRef: any) {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		if (service === "web") {
			scrollTo(web);
		} else if (service === "mobile") {
			scrollTo(mobile);
		} else if (service === "cloud") {
			scrollTo(cloud);
		} else if (service === "machine") {
			scrollTo(machine);
		} else if (service === "robotic") {
			scrollTo(robotic);
		} else if (service === "blockchain") {
			scrollTo(blockchain);
		}
	}, []);

	return (
		<div>
			<div className="logo-container">
				<Video type="solutions" />
				<div className="logo-absolute">
					<LogoV />
				</div>
			</div >
			<h2 className="center" style={{padding: "0 2rem"}}>{t("home.title")}</h2>
			<div className="text">
				<p className="">
				{t("solutions.first-paragraph")}
				</p>

				<div className="row" >
					<div className="col-img">
						<Web />
					</div>
					<div className="col-content">
						<h3>{t("home.web-development")}</h3>
						<p>
						{t("solutions.web-description")}
		
						</p>
					</div>
				</div>

				<div className="row" ref={mobile}>
					<div className="col-content">
						<h3>{t("home.mobile-apps")}</h3>
						<p>
							{t("solutions.mobile-description")}
						</p>
					</div>
					<div className="col-img">
						<Mobile />
					</div>
				</div>

				<div className="row" ref={machine}>
					<div className="col-img">
						<Machine />
					</div>
					<div className="col-content">
						<h3>{t("home.machine-learning")}</h3>
						<p>
							{t("solutions.mc-description")}
						</p>
					</div>
				</div>

				<div className="row" ref={cloud}>
					<div className="col-content">
						<h3>{t("home.cloud-services")}</h3>
						<p>
							{t("solutions.cloud-services")}
						</p>
					</div>
					<div className="col-img">
						<Cloud />
					</div>
				</div>

				<div className="row" ref={robotic}>
					<div className="col-img">
						<Robotic />
					</div>
					<div className="col-content">
						<h3>{t("home.robotic-vision")}</h3>
						<p>
							{t("solutions.robotic-description")}
						</p>
					</div>
				</div>

				<div className="row" ref={blockchain}>
					<div className="col-content">
						<h3>{t("home.blockchain")}</h3>
						<p>
							{t("solutions.blockchain-description")}
						</p>
					</div>
					<div className="col-img">
						<Blockchain />
					</div>
				</div>
			</div>
		</div>
	);
};
