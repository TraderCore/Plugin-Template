import type { BaseConfig, PluginStatus } from "@trader-core/types";

export class Plugin {
	private config: BaseConfig;
	private status: PluginStatus = "inactive";

	constructor(config: BaseConfig) {
		this.config = config;
	}

	activate(): void {
		this.status = "active";
		console.log(`Plugin ${this.config.name} activated`);
	}

	deactivate(): void {
		this.status = "inactive";
		console.log(`Plugin ${this.config.name} deactivated`);
	}

	getStatus(): PluginStatus {
		return this.status;
	}
}
