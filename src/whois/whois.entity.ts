export class Whois {
  constructor(
    public domainName: string,
    public premium: boolean,
    public registered: boolean,
    public reserved: boolean,
    public raw: string[],
  ) {}
}
