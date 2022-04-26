export interface WhoisStrategy {
  isPremium(domain: string, whois: string[]): boolean;
  isRegistered(domain: string, whois: string[]): boolean;
  isReserved(domain: string, whois: string[]): boolean;
}
