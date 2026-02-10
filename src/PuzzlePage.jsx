import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import BackToHome from "./assets/backToHome.png";
import Continued from "./assets/continued.png";
import "./index.css";

import one1 from "./assets/one/1.png";
import one2 from "./assets/one/2.png";
import one3 from "./assets/one/3.png";
import one4 from "./assets/one/4.png";
import one5 from "./assets/one/5.png";
import one6 from "./assets/one/6.png";

import two1 from "./assets/two/1.png";
import two2 from "./assets/two/2.png";
import two3 from "./assets/two/3.png";
import two4 from "./assets/two/4.png";
import two5 from "./assets/two/5.png";
import two6 from "./assets/two/6.png";

import three1 from "./assets/three/1.png";
import three2 from "./assets/three/2.png";
import three3 from "./assets/three/3.png";
import three4 from "./assets/three/4.png";
import three5 from "./assets/three/5.png";
import three6 from "./assets/three/6.png";

import four1 from "./assets/four/1.png";
import four2 from "./assets/four/2.png";
import four3 from "./assets/four/3.png";
import four4 from "./assets/four/4.png";
import four5 from "./assets/four/5.png";
import four6 from "./assets/four/6.png";

import five1 from "./assets/five/1.png";
import five2 from "./assets/five/2.png";
import five3 from "./assets/five/3.png";
import five4 from "./assets/five/4.png";

const ImageList = ({ images }) => (
	<div className="flex justify-center items-start min-h-screen px-8 sm:px-10 py-10 overflow-y-auto">
		<div className="w-full max-w-[36rem]">
			<div className="grid gap-4 sm:gap-6">
				{images.map((src, i) => (
					<div
						key={i}
						className="backdrop-blur transition-transform hover:scale-[1.02]"
					>
						<img
							src={src}
							alt={`Gambar ${i + 1}`}
							className="w-full object-cover drop-shadow-xl"
						/>
					</div>
				))}
			</div>
		</div>
	</div>
);

export default function ProductPage() {
	const { slug } = useParams();

	const images = {
		one: [one1, one2, one3, one4, one5, one6],
		two: [two1, two2, two3, two4, two5, two6],
		three: [three1, three2, three3, three4, three5, three6],
		four: [four1, four2, four3, four4, four5, four6],
		five: [five1, five2, five3, five4],
	};

	const imgSrc = images[slug] || [];

	return (
		<div>
			{imgSrc.length > 0 ? (
				<div>
					<ImageList images={imgSrc} />
					<div className="flex justify-center items-center">
						<Link
							to={"/"}
							className="backdrop-blur transition-transform hover:scale-[1.02]"
						>
							<img
								src={BackToHome}
								alt={`Back to Home`}
								className="w-full max-w-[10rem] object-cover drop-shadow-xl"
							/>
						</Link>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center min-h-screen">
					<Link
						to={"/"}
						className="backdrop-blur transition-transform hover:scale-[1.02]"
					>
						<img
							src={Continued}
							alt={`To be continued`}
							className="w-full max-w-[30rem] object-cover drop-shadow-xl"
						/>
					</Link>
				</div>
			)}

			<Footer />
		</div>
	);
}
