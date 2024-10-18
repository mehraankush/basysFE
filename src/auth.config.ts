import { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

export const authConfig: NextAuthConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, account }) {
            // console.log("Account", token, account)
            if (account) {
                token.accessToken = account.access_token
            }
            return token;
        },
        async session({ session }) {
            // TODO token 
            // session.user.access_token as  = token.access_token as string;
            // session.user.refresh_token = token.refresh_token as string;

            // session.accessToken = token.accessToken as string;

            return session;
        }
    },
    debug: process.env.NODE_ENV === "development",
};