"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: "mysql",
        connection: {
            host: env("DATABASE_HOST", "127.0.0.1"),
            port: env.int("DATABASE_PORT", 3306),
            database: env("DATABASE_NAME", "node-strapi"),
            user: env("DATABASE_USERNAME", "root"),
            password: env("DATABASE_PASSWORD", "my-secret-pw"),
            ssl: env.bool("DATABASE_SSL", false),
        },
        useNullAsDefault: true,
    },
});
