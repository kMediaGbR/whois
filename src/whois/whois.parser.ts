import { Whois } from './whois.entity';
import { WhoisStrategy } from './whois.strategy.interface';

export class WhoisParser {
  constructor(private strategy: WhoisStrategy) {}

  parse(domain: string, whois: string) {
    const whoisParsed: string[] =
      whois
        .replace(/\t+/g, ' ')
        .split(/\r?\n/)
        .map((s) => s.trim().replace(/\s\s+/g, ' '));

    return new Whois(
      domain,
      this.strategy.isPremium(domain, whoisParsed),
      this.strategy.isRegistered(domain, whoisParsed),
      this.strategy.isReserved(domain, whoisParsed),
      whoisParsed,
    );
  }
}
