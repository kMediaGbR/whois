export class Server {
  public server: string;
  public port: number;
  public query: string;

  constructor(server: string, port = 43, query = '%{domain}\r\n') {
    this.server = server;
    this.port = port;
    this.query = query;
  }

  static fromJson({ server, port, query }: any): Server {
    return new Server(server, port, query);
  }
}
