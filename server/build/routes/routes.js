"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var getPosts_1 = require("../controllers/getPosts");
var router = express_1.default();
exports.router = router;
router.get('/api/posts', getPosts_1.getPosts);
