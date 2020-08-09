import { WhoisService } from './service/whois.service';

export { WhoisService } from './service/whois.service';

export async function whois(domain: string): Promise<string> {
  return await new WhoisService().request(domain);
}
