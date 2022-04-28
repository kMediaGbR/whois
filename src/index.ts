import { Whois } from './whois/whois.entity';
import { WhoisHandler } from './whois/whois.handler';

async function whois(domain: string): Promise<Whois> {
  const whoisHandler = new WhoisHandler();
  return await whoisHandler.parse(domain);
}

export {
  Whois,
  WhoisHandler,
  whois,
};
