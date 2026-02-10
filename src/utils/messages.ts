import Tulip from "../assets/tulips.jpeg";
import { TYPE } from "./constant";

const linkLayout =
	"https://drive.google.com/drive/folders/1TcZsKTdmFLvj27F-A5VYQlHcY3afkwMs";

export const forced = "(Ga ada pilihan lain pokoknya harus lanjut 😁)";

const section3A = [
	{
		text: "Makasih ya, cantik. Mas juga sayang adek selamanyaaaa!",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: `Sebagai pelengkap, mas ada [sesuatu](${linkLayout}) nih buat adek`,
		isMe: false,
		type: TYPE.BOT,
	},
];

const section3B = [
	{
		text: "Sayang... :(",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: `Kalo gitu mas coba bujuk pake [ini](${linkLayout}) deh, semoga berhasil yaa`,
		isMe: false,
		type: TYPE.BOT,
	},
];

const section2A = [
	{
		text: "Langsung aja mas jelasin ya",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Jadi mas pilih tulip soalnya itu simbol permintaan maaf yang tulus",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Mas minta maaf ya, sayang",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "",
		isMe: false,
		type: TYPE.IMG,
		img: Tulip,
	},
	{
		text: "Mas totally forgot about your birthday",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "So...",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Happy belated birthday, Cilanya mas, sayangnya mas. Semoga diumur adek yang sekarang bakal banyak kebaikan yang hadir di hidup adek dan dimudahkan segala urusannya ya",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Adek udah keren banget tahun lalu. Ada hal yang ga selesai di tahun lalu masih bisa dilanjutin tahun ini ya",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Mas bakal temenin adek meraih apapun yang adek inginkan. Kita tumbuh bersama ya, sayang?",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "And one more thing, I MISS YOU SOOOO MUCHHHH!!!",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Please give me a looooot hugs and kisses, promise?",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "❤️❤️❤️❤️❤️❤️",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Oh ya",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Mas udah dimaafin kan?",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "",
		isMe: false,
		type: TYPE.OPTIONS,
		options: [
			{
				text: "Udaaah mas, adek sayang mas selalu!",
				isMe: true,
				type: TYPE.BOT,
				script: section3A,
			},
			{
				text: "Belum, adek masih ngambek 😠",
				isMe: true,
				type: TYPE.BOT,
				script: section3B,
			},
		],
	},
];

const section2B = [
	{
		text: "Halah yang bener nih adek tau?",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Jadi perlu mas lanjutin engga nih mas jelasinnya?",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "",
		isMe: true,
		type: TYPE.OPTIONS,
		options: [
			{
				text: "Hehe bercanda mas, lanjut mas",
				type: TYPE.BOT,
				isMe: true,
				script: section2A,
			},
			{
				text: `${forced}`,
				type: TYPE.BOT,
				isMe: true,
				script: section2A,
			},
		],
	},
];

export const section1 = [
	{
		text: "Cie selamat adek berhasil nemu hidden item dan nebak passcodenya",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Sebelum lanjut, mas mau tanya",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "Adek tau ga kenapa mas milih tulip putih?",
		isMe: false,
		type: TYPE.BOT,
	},
	{
		text: "",
		isMe: false,
		type: TYPE.OPTIONS,
		options: [
			{
				text: "Engga tau mas, kenapa tuh milih tulip?",
				type: TYPE.BOT,
				isMe: true,
				script: section2A,
			},
			{
				text: "Tau dong, adek gitu loh",
				isMe: true,
				type: TYPE.BOT,
				script: section2B,
			},
		],
	},
];
