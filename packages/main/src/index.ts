import { Injectable, type OnModuleInit } from "@nestjs/common";
import { type Plugin, PluginType } from "@tradercore/framework";
import packageJson from "../package.json";

@Injectable()
class Processor implements OnModuleInit {
	async onModuleInit() {
		console.log("Processor initialized");
	}
}

export default {
	name: "plugin-template",
	version: packageJson.version,
	entrypoints: [
		{
			type: PluginType.Processor,
			description: "A plugin for processing data",
			module: Processor,
		},
	],
} satisfies Plugin;
