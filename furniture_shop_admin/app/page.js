'use client'
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
//src={session?.user?.image}
export default function Home() {
  //const { data: session } = useSession();
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2 className="flex justify-center">
        Hello, {/*<b>{session?.user?.name}</b>*/}
      </h2>

      <div className="flex bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
        <img className="w-6 h-6"  alt="avatar" /> 
        <span className="px-2">
          {/* {session?.user?.name} */}
        </span>
      </div>
    </div>
    
  </Layout>
}