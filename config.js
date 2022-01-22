/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.0.1 Public Stable',
    SESSION: process.env.AMDI_SESSION === undefined ? '' : process.env.AMDI_SESSION,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.ibb.co/HTZDMQX/LOGO.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    MENU: process.env.MENU === undefined ? 'panel' : process.env.MENU,
    RULES: process.env.RULES === undefined ? 'default' : process.env.RULES,
    PANEL_EMOJI: process.env.PANEL_EMOJI === undefined ? '⚖/🕯' : process.env.PANEL_EMOJI,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/HTZDMQX/LOGO.jpg' : process.env.ALIVE_LOGO,
    WELCOME_LOGO: process.env.WELCOME_LOGO === undefined ? 'https://i.ibb.co/d54sGdd/f2097d7ddc39.jpg' : process.env.WELCOME_LOGO,
    BYE_LOGO: process.env.BYE_LOGO === undefined ? 'https://i.ibb.co/3vSHqHb/e5693cca4e3d.jpg' : process.env.BYE_LOGO,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    CHAT_BOT: process.env.CHAT_BOT === undefined ? 'true' : process.env.CHAT_BOT,
    CAP: process.env.CAP === undefined ? 'ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ 𝖰𝗎𝖾𝖾𝗇 𝖠𝗆𝖽𝗂𝖻𝖾𝗅𝗅 ₂₀₂₁' : process.env.CAP,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    OWN: process.env.OWN === undefined ? '94757405652,0' : process.env.OWN,
    OWN2: process.env.OWN2 === undefined ? '94719077818,0' : process.env.OWN2,
    OWN3: process.env.OWN3 === undefined ? '94757672873,0' : process.env.OWN3,
    OWN4: process.env.OWN4 === undefined ? '94774976567,0' : process.env.OWN4,
    OWN5: process.env.OWN5 === undefined ? '94766426385,0' : process.env.OWN5,
    OWN6: process.env.OWN6 === undefined ? '94711870791,0' : process.env.OWN6,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG"
};

