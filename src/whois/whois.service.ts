import { createConnection } from 'net';
import serversAsJson from '../server/servers.json';
import { Server } from '../server/server';

export class WhoisService {
  private servers: Map<string, Server | null>;

  constructor() {
    this.servers = new Map(
      Object.entries(serversAsJson)
        .filter((entry) => Boolean(entry[1]))
        .map((entry) => [entry[0], Server.fromJson(entry[1])])
    );
  }

  async request(domain: string): Promise<string> {
    const { server, port, query } = this.getServer(domain);
    return new Promise((resolve, reject) => {
      let response = '';

      const client = createConnection(port, server, () => {
        client.write(query.replace('%{domain}', domain))
      });

      client.on('data', data => response += data);

      client.on('error', reject);
      client.on('timeout', () => reject(new Error('Connection timed out')));

      client.on('close', (hasError) => {
        if (hasError) {
          return reject(new Error(`No WHOIS data for ${domain}!`));
        }

        return resolve(response);
      });
    });
  }

  private getServer(domain: string): Server {
    let lookupDomain = domain;
    let server;

    while (true) {
      server = this.servers.get(lookupDomain);

      if (server) {
        break;
      }

      lookupDomain = lookupDomain.replace(/^.+?(\.|$)/, '');

      if (!lookupDomain.length) {
        throw new Error(`No WHOIS server found for ${domain}!`);
      }
    }
    return server;
  }
}
