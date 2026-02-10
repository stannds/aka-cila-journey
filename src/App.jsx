import { Link } from "react-router-dom";
import Footer from "./Footer";
import Zero from "./assets/puzzle/0.png";
import One from "./assets/puzzle/1.png";
import Two from "./assets/puzzle/2.png";
import Three from "./assets/puzzle/3.png";
import Four from "./assets/puzzle/4.png";
import Five from "./assets/puzzle/5.png";
// import Continued from "./assets/continued.png";

// import Tulip from "./assets/hidden.png";

export default function App() {
	const sections = [
		{ href: "/", src: Zero, alt: "title" },
		{ href: "/one", src: One, alt: "one" },
		{ href: "/two", src: Two, alt: "two" },
		{ href: "/three", src: Three, alt: "three" },
		{ href: "/four", src: Four, alt: "four" },
		{ href: "/five", src: Five, alt: "Five" },
	];

	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="relative w-full max-w-160 px-4">
				<div className="grid grid-cols-2 w-full overflow-hidden rounded-2xl shadow-lg">
					{sections.map((item, index) => (
						<Link to={item.href} key={index}>
							<img
								src={item.src}
								alt={item.alt}
								className="object-cover w-full h-full transition-transform hover:scale-[1.02]"
							/>
						</Link>
					))}
				</div>
				{/* <div className="flex justify-center items-center py-4">
					<img
						src={Continued}
						alt={`Back to Home`}
						className="w-full max-w-[15rem] object-cover drop-shadow-xl"
					/>
				</div> */}
				{/* <div className="absolute flex justify-center items-center top-8 left-50 rotate-45">
					<Link to={"/my-tulip"}>
						<img
							src={Tulip}
							alt={`Tulip`}
							className="w-full max-w-18 object-cover drop-shadow-xl"
						/>
					</Link>
				</div> */}
			</div>

			<Footer />
		</div>
	);
}
