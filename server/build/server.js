"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// we can get json payload from the request
const cors_1 = __importDefault(require("cors"));
// enable console error with duble localhost 3000 and 1337 (cors policy)
const app = express_1.default();
if (process.env.NODE_ENV !== "production") {
    app.use(cors_1.default());
}
// only in dev mode we need this because when we deploy to AWS we will have only one server
app.use(body_parser_1.default.json());
// enable us to use body from requests from the client site
app.get("/", (req, res) => {
    res.send("ok");
});
app.post("/api/register", (req, res) => {
    console.log(req.body);
    res.json({ status: "ok" });
});
app.listen(1337);
