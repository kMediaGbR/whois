import { WhoisService } from './service/whois.service';
declare function whois(domain: string): Promise<string>;
export { WhoisService, whois, };
