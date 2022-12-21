"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app_json_1 = __importDefault(require("../../app.json"));
const public_1 = __importDefault(require("./v1/public"));
const Api = ({ config, realm }) => {
    const app = express_1.default.Router();
    app.use(cors_1.default());
    app.get("/", (_, res) => {
        res.send(app_json_1.default);
    });
    app.use("/:key", public_1.default({ config, realm }));
    return app;
};
exports.Api = Api;
