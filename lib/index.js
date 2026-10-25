import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#25D366")(`
████  █████ █   █     ████   ███  █████ █     █████ █   █  ████
█   █ █     █   █     █   █ █   █   █   █     █     █   █ █
█   █ ████  █   █     ████  █████   █   █     ████   ███   ███
█   █ █      █ █      █   █ █   █   █   █     █       █       █
████  █████   █       ████  █   █ █████ █████ █████   █   ████
`));
console.log(chalk.hex("#25D366")("Dev Baileys \u2014 a Baileys-based WhatsApp Web library\n"));
console.log(chalk.gray("Stay updated with the latest Dev Baileys news:"));
console.log(chalk.cyan("https://github.com/toxicdipanshuu248/dev-baileys\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map