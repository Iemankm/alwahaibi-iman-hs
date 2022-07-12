"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    Blog: {
        type: String,
        required: true
    }
});
exports.default = (0, mongoose_1.model)('blog', blogSchema);
