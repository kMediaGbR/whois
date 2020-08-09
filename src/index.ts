import { WhoisService } from './service/whois.service';

export { WhoisService } from './service/whois.service';
export const whois = (domain: string) => new WhoisService().request(domain);
