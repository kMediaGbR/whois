#!/usr/bin/env node

import { Command } from 'commander';
import { WhoisService } from '../service/whois.service';

const program = new Command();
const whoisService = new WhoisService;

program
  .version('0.0.1')
  .description('The whois utility looks up records in the databases maintained by several Network Information Centers (NICs)')
  .arguments('<domain>')
  .action(whoisRequest)
  .parse(process.argv);

async function whoisRequest(domain: string): Promise<void> {
  try {
    console.log(await whoisService.request(domain));
    process.exit();
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
