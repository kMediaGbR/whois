import { WhoisService } from './service/whois.service';

async function whois(domain: string): Promise<string> {
  return await new WhoisService().request(domain);
}

export {
  WhoisService,
  whois,
};

