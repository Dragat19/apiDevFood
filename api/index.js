"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Hola mundo Nodejs + TS');
});
// app.listen(port, ( ) => {
//     console.log(`server is listening on ${port}`);
// });
exports.default = app;
//# sourceMappingURL=index.js.map