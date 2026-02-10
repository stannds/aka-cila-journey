import FooterImg from "./assets/footer.png";
import "./index.css";

const Footer = () => {
	return (
		<footer className="w-full">
			<img
				src={FooterImg}
				alt={`Copyright`}
				className="w-full h-auto object-contain max-w-[200px] mx-auto drop-shadow-xl"
			/>
		</footer>
	);
};

export default Footer;
