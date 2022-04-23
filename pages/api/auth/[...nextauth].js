import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { open } from "sqlite";

const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                username: {label: "Usuario", type: "text", required: true},
                password: {label: "Contraseña", type: "password", required: true}
            },
            async authorize(credentials, req){

                const db = await open({
                    filename: './db/franks.db',
                    mode: sqlite3.OPEN_READONLY,
                    driver: sqlite3.Database
                });

                const user = await db.get('SELECT * FROM users WHERE username = ?', credentials.username);

                if(user){
                    const match = await bcrypt.compare(credentials.password, user.password);
                    if(match)
                        return {id: user.id, name: user.name, surname: user.surname}
                }

                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }){
            if(user)
                token.user = user;
            return token;
        },
        async session({ session, token }){
            session.user = token.user;
            return session;
        },
    },
    secret: "frankssecret"
})
