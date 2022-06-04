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

                const connection =  await mysql.createConnection(process.env.DATABASE_URL);

                const [rows, fields] = await connection.query('SELECT * FROM users WHERE username = ?', [credentials.username]);
                
                if(rows){
                    const user = rows[0];
                    const match = await bcrypt.compare(credentials.password, user.password);

                    if(match)
                        return {
                            id: user.id,
                            firstname: user.firstname,
                            middlename: user.middlename,
                            lastname1: user.lastname1,
                            lastname2: user.lastname2
                        }
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
