import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/Constants/users";

export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any, req: any) {
          if (!credentials || !credentials?.username || !credentials?.password) {
            return null;
          }
  
          const user: any = users.find(
            (item: any) =>
              item?.username?.toLowerCase() ===
              credentials?.username?.toLowerCase()
          );
  
          if (user?.password === credentials?.password) {
            return user;
          } else {
            return null;
          }
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET
  };