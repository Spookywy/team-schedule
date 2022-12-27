import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const session = useSession();

  return (
    <>
      <Head>
        <title>Team Schedule</title>
        <meta name="description" content="Team Schedule is a small staff scheduling app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Team Schedule</h1>
        {session.status === "authenticated" && (
          <>
            <img className="rounded-full w-8 mr-4" src={session.data.user?.image!}/>
            <p>{session.data.user?.name}</p>
            <Link href="/api/auth/signout">Signout</Link>
          </>
        )}
        {session.status === "unauthenticated" && (
          <Link href="/api/auth/signin">Signin</Link>
        )}
      </main>
    </>
  )
}
