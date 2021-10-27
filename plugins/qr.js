/* Copyright (C) 2020 KgAmda.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Amdibell - KgAmda
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

// Sentances
const QR_DESC = "It Converts Text To Qr Code"
const NEED_TEXT = "*Must Enter Some Words*"

Amdi.addCommand({pattern: 'qr ?(.*)', fromMe: false, desc: QR_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(NEED_TEXT);

    var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: "Copyright © 2021 | 👸💖QUEEN AMDIBELL💖👸"})

}));
