import { Whois } from './whois.entity';
import { WhoisParser } from './whois.parser';
import { WhoisService } from './whois.service';
import { DefaultStrategy } from '../strategy/default.strategy';

export class WhoisHandler {
  async parse(domain: string): Promise<Whois> {
    const whoisService = new WhoisService();
    const zone = domain.slice(domain.indexOf('.') + 1);
    const response = await whoisService.request(domain);

    let parser;

    switch (zone) {
      // Example
      // case 'de':
      //   parser = new WhoisParser(domain, new DenicStrategy());
      //   break;
      default:
        parser = new WhoisParser(new DefaultStrategy());
    }

    return parser.parse(domain, response);
  }
}
