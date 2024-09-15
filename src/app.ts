import { Client, GatewayIntentBits } from "discord.js"
import config from "config"

const discordToken = config.get<string>("discordToken")

console.log(discordToken)

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.login(discordToken)

client.on('ready', (c) => {
    console.log(`Logged in as ${client?.user?.tag}`)
})
