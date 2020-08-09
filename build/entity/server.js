"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var Server = /** @class */ (function () {
    function Server(server, port, query) {
        if (port === void 0) { port = 43; }
        if (query === void 0) { query = '%{domain}\r\n'; }
        this.server = server;
        this.port = port;
        this.query = query;
    }
    Server.fromJson = function (_a) {
        var server = _a.server, port = _a.port, query = _a.query;
        return new Server(server, port, query);
    };
    return Server;
}());
exports.Server = Server;
