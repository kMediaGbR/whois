#!/usr/bin/env node

// @ts-ignore
import packageJson from '../../package.json';
import { Command } from 'commander';
import { WhoisHandler } from '../whois/whois.handler';

const program = new Command();

program
  .version(packageJson.version)
  .description('The whois utility looks up records in the databases maintained by several Network Information Centers (NICs)')
  .arguments('<domain>')
  .action(whoisRequest)
  .parse(process.argv);

async function whoisRequest(domain: string): Promise<void> {
  try {
    const whoisHandler = new WhoisHandler();
    const whois = await whoisHandler.parse(domain);

    console.log(whois);
    process.exit();
  } catch (e: any) {
    console.error(e.message);
    process.exit(1);
  }
}
