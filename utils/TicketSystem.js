const { Client, Collection, Guild } = require('discord.js')
const { token, prefix } = require('../config.json')

class TicketSystem extends Client {
    constructor() {
        super()

        //Create Collection data structures
        this.commands = new Collection()

        //Require modules
        this.fs = require('fs')
    }

    //Functions of the class
    commandHandler() {
        this.fs.readdirSync('./Commands').map((directory) => {
            this.fs.readdirSync(`./Commands/${directory}`).map((cmd) => {
                let CMD = require(`../Commands/${directory}/${cmd}`)
                console.log(`Command ${CMD.name} loaded!`)

                this.commands.set(CMD.name, CMD)
            })
        })
    }

    initBot() {
        this.commandHandler()

        //Ready event listener
        this.on('ready', () => {
            console.log(`Client connected as ${this.user.tag}`)
        })

        //Message event listener
        this.on('message', async (message) => {
            //If the message comes from another bot, or the prefix isnt correct, return
            if (message.author.bot || !message.content.startsWith(prefix)) {
                return;
            }

            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const lower = args.shift().toLowerCase()

            if (this.commands.has(lower)) {
                const commandFiles = this.commands.get(lower)

                commandFiles.run(this, message, args)
            }
        })

        this.login(token)
    }
}

//Export the TicketSystem Class
module.exports = TicketSystem, this