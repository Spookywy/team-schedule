import Head from "next/head";
import { Inter } from "@next/font/google";
import { useSession } from "next-auth/react";
import Welcome from "../components/welcome";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();

  return (
    <>
      <Head>
        <title>Team Schedule</title>
        <meta
          name="description"
          content="Team Schedule is a small staff scheduling app."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session.status === "authenticated" && <Header />}
      <main>{session.status === "unauthenticated" && <Welcome />}</main>
    </>
  );
}
