"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whois = void 0;
var whois_service_1 = require("./service/whois.service");
var whois_service_2 = require("./service/whois.service");
Object.defineProperty(exports, "WhoisService", { enumerable: true, get: function () { return whois_service_2.WhoisService; } });
exports.whois = function (domain) { return new whois_service_1.WhoisService().request(domain); };
