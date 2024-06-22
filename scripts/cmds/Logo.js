module.exports.config = {
	name: "logo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Prince Sanel",
	description: "Logo Maker",
	commandCategory: "Picture",
	usages: "[logostyle] [Text]",
	cooldowns: 1,
	
	}; // Credits fot the api:Sensui
			
module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const req = args[1];
	if (!args[0]) return api.sendMessage("[!] Need a logo style to proceed.", event.threadID, event.messageID);
	if (args[0] == "metal") {
	axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-3d-liquid-metal-text-effect-1112.html&text=${encodeURI(req)}`).then(res => {
		let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "naruto") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "cloud") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "blackpink") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-blackpink-logo-style-online-1001.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "artpaper") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-art-paper-cut-text-effect-online-1022.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "glass1") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/blue-glass-text-effect-908.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "glass2") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/orange-glass-text-effect-911.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "greenhorror") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-green-horror-style-text-effect-online-1036.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "greenneon") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/green-neon-text-effect-874.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "lightneon") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/neon-light-text-effect-online-882.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "matrix") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/matrix-style-text-effect-online-884.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "neon") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/neon-text-effect-online-879.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "futureneon") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "help") return api.sendMessage(`»» Available Logo\n»» ${global.config.PREFIX}logo metal {text}\n»» ${global.config.PREFIX}logo naruto {text}\n»» ${global.config.PREFIX}logo cloud {text}\n»» ${global.config.PREFIX}logo blackpink {text}\n»» ${global.config.PREFIX}logo artpaper {text}\n»» ${global.config.PREFIX}logo glass1 {text}\n»» ${global.config.PREFIX}logo glass2 {text}\n»» ${global.config.PREFIX}logo greenhorror {text}\n»» ${global.config.PREFIX}logo lightneon {text}\n»» ${global.config.PREFIX}logo matrix {text}\n»» ${global.config.PREFIX}logo neon {text}\n»» ${global.config.PREFIX}logo futureneon {text}\n\nCmd Created By Prince Sanel\nApi Credits: Sensui.`, event.threadID, event.messageID);
}
