import NextAuth, {getServerSession} from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"
import GoogleProvider from "next-auth/providers/google";

const adminEmails = ['20521003@gm.uit.edu.vn'];

export const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  adapter: MongoDBAdapter(clientPromise),//goi toi file mongodb, neu da co connection thi dung khong thi tao moi
  callbacks: {
    session: ({session,token,user}) => {
      if (adminEmails.includes(session?.user?.email)) {
        return session;
      } else {
        return false;
      }
    },
  },
})

export {authOptions as GET, authOptions as POST};

export async function isAdminRequest(req,res) {
  const session = await getServerSession(req,res,authOptions);
  if (!adminEmails.includes(session?.user?.email)) {
    res.status(401);
    res.end();
    throw 'not an admin';
  }
}
