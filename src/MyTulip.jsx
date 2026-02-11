import { useCallback, useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { TYPE } from "./utils/constant";
import { forced, section1 } from "./utils/messages";

import Aka from "./assets/ava-aka.jpg";

export default function MyTulip() {
	const correctPassword = "0108";
	const [inputPassword, setInputPassword] = useState("");
	const [isWrong, setIsWrong] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const now = new Date();
	const time =
		now.getHours().toString().padStart(2, "0") +
		":" +
		now.getMinutes().toString().padStart(2, "0");
	const button = [
		{ label: "1", action: "1" },
		{ label: "2", action: "2" },
		{ label: "3", action: "3" },
		{ label: "4", action: "4" },
		{ label: "5", action: "5" },
		{ label: "6", action: "6" },
		{ label: "7", action: "7" },
		{ label: "8", action: "8" },
		{ label: "9", action: "9" },
		{ label: "none", action: "none" },
		{ label: "0", action: "0" },
		{ label: "none", action: "none" },
	];
	const [script, setScript] = useState(section1);
	const [messages, setMessages] = useState([]);
	const [index, setIndex] = useState(0);
	const [running, setRunning] = useState(false);
	const [inputMessage, setInputMessage] = useState(null);
	const endRef = useRef(null);

	useEffect(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, inputMessage]);

	const onClick = (action) => {
		if (action == "del") {
			setInputPassword((inputPassword) => inputPassword.slice(0, -1));
		} else {
			setInputPassword((inputPassword) => inputPassword.concat(action));
		}
	};

	useEffect(() => {
		if (inputPassword.length === correctPassword.length) {
			if (inputPassword === correctPassword) {
				setIsCorrect(true);
				setIsWrong(false);
				setRunning(true);
			} else {
				setIsWrong(true);
				setTimeout(() => {
					setInputPassword("");
				}, 1500);
			}
		} else {
			setIsWrong(false);
		}
	}, [inputPassword]);

	const sendMessage = useCallback(
		(op) => {
			setMessages((prev) => [...prev, op]);
			if (inputMessage.type === TYPE.OPTIONS) {
				setScript((prev) => [...prev, ...op.script]);
			}
			setInputMessage(null);
		},
		[inputMessage],
	);

	useEffect(() => {
		if (!running) return;
		if (index >= script.length) return;

		const id = setTimeout(() => {
			const nextMessage = script[index];

			if (nextMessage.type === TYPE.OPTIONS) {
				setInputMessage(nextMessage);
			} else {
				setMessages((prev) => [...prev, nextMessage]);
				setInputMessage(null);
			}
			setIndex((prev) => prev + 1);
		}, 2000);

		return () => clearTimeout(id);
	}, [index, running, script]);

	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="relative border-8 w-full max-w-[280px] h-[550px] rounded-4xl flex flex-col overflow-hidden">
				{/* notch */}
				<div className="absolute bg-black w-30 h-7 rounded-b-xl self-center z-10" />

				{/* top status bar */}
				<div
					className={`${!isCorrect ? "bg-zinc-600/50" : "bg-white"} px-4 py-1 flex justify-between items-center shrink-0`}
				>
					<span className="text-xs">{time}</span>
					<span className="text-xs">100%</span>
				</div>

				{!isCorrect ? (
					<div className="bg-zinc-600/50 flex flex-1 flex-col p-4 shrink-0 justify-center gap-4">
						{/* instruction */}
						<div className="flex mb-2 items-center justify-center">
							<span className="text-white text-sm text-center">
								Enter passcode
							</span>
						</div>

						{/* passcode */}
						<div className="grid grid-cols-4 justify-items-center mb-4">
							{Array(4)
								.fill(null)
								.map((_, i) => (
									<div
										className={`${inputPassword.length >= i + 1 ? "bg-white" : "bg-neutral-300"} border border-gray-300/75 w-3.5 h-3.5 rounded-full`}
										key={i}
									/>
								))}
						</div>

						{/* incorrect */}
						<div className="flex mb-2 items-center justify-center">
							<span
								className={`${isWrong ? "text-red-500" : "text-transparent"} text-sm text-center`}
							>
								Incorrect passcode
							</span>
						</div>

						{/* keypad */}
						<div className="grid grid-cols-3 gap-4 rounded-xl justify-items-center">
							{button.map((items) => {
								if (items.label === "none") return <div />;
								return (
									<button
										onClick={() => onClick(items.action)}
										className="bg-neutral-300 flex w-14 h-14 rounded-full items-center justify-center"
									>
										<span className="text-white text-2xl text-center font-bold">
											{items.label}
										</span>
									</button>
								);
							})}
						</div>
					</div>
				) : (
					<div className="flex flex-col flex-1 min-h-0">
						{/* chat header */}
						<div className="border-b border-b-gray-400/20 px-4 flex shrink-0 items-center">
							<div className="w-10">
								<MdArrowBackIos />
							</div>
							<div className="flex-1 flex justify-center">
								<span className="text-center">Akaa ♡</span>
							</div>
							<div className="flex justify-self-end justify-center items-center aspect-square w-10">
								<img
									src={Aka}
									alt={`Tulip`}
									className="w-7 h-7 object-cover rounded-full"
								/>
							</div>
						</div>

						{/* message area */}
						<div className="flex-1 min-h-0 overflow-y-auto flex flex-col px-4 pt-4 gap-1">
							{messages.map((m, i) => {
								console.log(m);
								return (
									<ChatBubble
										key={`${i}_${m.text}`}
										message={m}
										isMe={m.isMe}
										onImageLoad={() =>
											endRef.current?.scrollIntoView({
												behavior: "smooth",
											})
										}
									/>
								);
							})}
							<div ref={endRef} />
						</div>

						{/* input area */}
						<div className="bg-white p-4 shrink-0 mb-2">
							{!!inputMessage &&
							inputMessage?.type === TYPE.OPTIONS ? (
								<Options
									inputMessage={inputMessage}
									onClick={sendMessage}
								/>
							) : (
								<TextInput
									inputMessage={inputMessage}
									onClick={sendMessage}
								/>
							)}
						</div>
					</div>
				)}
				{/* home bar */}
				<div className="absolute bottom-2 self-center">
					<div className="bg-black w-20 h-1 rounded-full" />
				</div>
			</div>
		</div>
	);
}

function Options({ inputMessage, onClick }) {
	return (
		<div className="flex flex-col gap-2">
			{inputMessage.options.map((op) => (
				<button
					disabled={op.text === forced}
					key={op.text}
					onClick={() => onClick(op)}
					className="bg-blue-50 border border-gray-300 rounded-lg py-1 px-2"
				>
					<span className="text-sm">{op.text}</span>
				</button>
			))}
		</div>
	);
}

function TextInput({ inputMessage, onClick }) {
	return (
		<div className="flex items-end gap-2">
			<div className="border border-gray-300 rounded-xl py-1 px-2 flex-1 justify-items-end">
				<span className="text-sm">
					{inputMessage ? inputMessage.text : "Masukan pesan di sini"}
				</span>
			</div>
			<button
				onClick={onClick}
				disabled={!inputMessage}
				className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center"
			>
				<IoIosSend color="white" size={20} />
			</button>
		</div>
	);
}

function ChatBubble({ message, isMe, onImageLoad }) {
	function parseTextWithLinks(text) {
		if (!text || typeof text !== "string") return text;

		const regex = /\[(.*?)\]\((.*?)\)/g;

		// kalau tidak ada pattern link → balikin text asli
		if (!regex.test(text)) return text;
		regex.lastIndex = 0;

		const parts = [];
		let lastIndex = 0;
		let match;

		function normalizeUrl(url) {
			if (!/^https?:\/\//i.test(url)) {
				return "https://" + url;
			}
			return url;
		}

		while ((match = regex.exec(text))) {
			const [full, label, rawUrl] = match;
			const url = normalizeUrl(rawUrl);

			// text sebelum link
			if (match.index > lastIndex) {
				parts.push(text.slice(lastIndex, match.index));
			}

			// link element
			parts.push(
				<a
					key={match.index}
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					{label}
				</a>,
			);

			lastIndex = regex.lastIndex;
		}

		// sisa text setelah link terakhir
		if (lastIndex < text.length) {
			parts.push(text.slice(lastIndex));
		}

		return parts;
	}

	return (
		<div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-2`}>
			{message.type === TYPE.IMG ? (
				<div className="aspect-[3/4] w-[90%] rounded-2xl overflow-hidden bubble-left">
					<img
						src={message.img}
						alt={`tulip for adek`}
						className="w-full h-full object-cover"
						onLoad={onImageLoad}
					/>
				</div>
			) : (
				<div
					className={`max-w-[90%] px-2.5 py-1 rounded-2xl bubble-animate ${
						isMe
							? "bg-blue-600 text-white rounded-br-sm bubble-right"
							: "bg-gray-200 text-gray-900 rounded-bl-sm bubble-left"
					}`}
				>
					<span className="text-sm">
						{parseTextWithLinks(message.text)}
					</span>
				</div>
			)}
		</div>
	);
}
