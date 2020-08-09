export declare class Server {
    server: string;
    port: number;
    query: string;
    constructor(server: string, port?: number, query?: string);
    static fromJson({ server, port, query }: Server): Server;
}
