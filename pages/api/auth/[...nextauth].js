import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const mysql = require('mysql2/promise');
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

                const connection =  await mysql.createConnection({
                    host: process.env.PLANETSCALE_DB_HOST,
                    database: process.env.PLANETSCALE_DB,
                    user: '2bg2s67icw5d',
                    password: 'pscale_pw_qvt9AJiMWteTNEB6KheNy76Rx_XuD8CNEHrqDmwc5Fk',
                    ssl: {"rejectUnauthorized":true}
                });

                const [rows, fields] = await connection.query('SELECT * FROM users WHERE username = ?', [credentials.username]);
                
                if(rows){
                    const user = rows[0];
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
})
