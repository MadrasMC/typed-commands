import { Command } from "./Command";

const cmd: Command = (...params: any) => params.join(" ");

export default cmd;
