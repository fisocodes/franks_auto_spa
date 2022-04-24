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

                const connection =  await mysql.createConnection('mysql://2hng6dhbb0kp:pscale_pw_wAiFDAFw14tgYX24zwcg_BReR_KPB4HL062gxvxNJT8@1e8t81ma1fvm.eu-west-2.psdb.cloud/franksdb?ssl={"rejectUnauthorized":true}');

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
