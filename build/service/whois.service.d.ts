export declare class WhoisService {
    private servers;
    constructor();
    request(domain: string): Promise<string>;
    private getServer;
}
