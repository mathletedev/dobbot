import { Client, Message } from "eris";
import { Base } from "eris-sharder";

export = class Bot extends Base {
	public constructor(client: { bot: Client; clusterID: number }) {
		super(client);
	}

	public launch() {
		this.bot.on("messageCreate", this.messageHandler);

		this.bot.editStatus("online", {
			name: "Dobble",
			type: 0
		});
	}

	private messageHandler(message: Message) {
		if (!message.guildID || message.author.bot) return;

		if (message.content === "!dobble") {
			message.channel.createMessage("Pong!");
		}
	}
};
