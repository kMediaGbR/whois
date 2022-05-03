import { Whois } from './whois/whois.entity';
import { WhoisHandler } from './whois/whois.handler';

async function whois(domain: string): Promise<Whois> {
  const whoisHandler = new WhoisHandler();
  try {
    return await whoisHandler.parse(domain);
  } catch (e) {
    throw e;
  }
}

export {
  Whois,
  WhoisHandler,
  whois,
};
