import { getRequestContext } from "@cloudflare/next-on-pages";

export default class UserService {
    constructor() {
        this.createTable();
    }

    async createTable() {
        await getRequestContext().env.DB.prepare(`CREATE TABLE IF NOT EXISTS "users" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "uuid" VARCHAR(36),
            "sub" VARCHAR(255),
            "name"	VARCHAR(50),
            "email" VARCHAR(255),
            "created_at" TEXT
        )`)
            .raw();
    }

    async createUser(email: string, name: string, sub: string) {
        await getRequestContext().env.DB.prepare(`
            INSERT INTO 
                users (uuid, email, name, sub, created_at) 
            VALUES 
                (?, ?, ?, ?, datetime('now'))
        `)
            .bind(crypto.randomUUID(), email, name, sub)
            .raw();
    }

    async getUserById(id: string): Promise<any[]> {
        const { results } = await getRequestContext().env.DB.prepare(`
            SELECT 
                id, uuid, sub, name, email, created_at
            FROM 
                users 
            WHERE 
                id = ?
        `)
            .bind(id)
            .all();

        return results;
    }

    async getUserBySub(sub: string): Promise<any> {
        const { results } = await getRequestContext().env.DB.prepare(`
            SELECT 
                id, uuid, sub, name, email, created_at
            FROM 
                users 
            WHERE 
                sub = ?
        `)
            .bind(sub)
            .all();

        return results;
    }

    async deleteUserById(id: string): Promise<void> {
        await getRequestContext().env.DB.prepare(`
            DELETE FROM 
                users 
            WHERE 
                id = ?
        `)
            .bind(id)
            .raw();
    }

    async updateUserById(id: string, name: string): Promise<void> {
        await getRequestContext().env.DB.prepare(`
            UPDATE 
                users 
            SET 
                name = ? 
            WHERE 
                id = ?
        `)
            .bind(name, id)
            .raw();
    }
}

export const runtime = "edge";
