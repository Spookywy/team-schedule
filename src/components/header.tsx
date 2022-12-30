import { useSession } from 'next-auth/react'
import Link from 'next/link';

export default function Header() {
    const session = useSession();

    return (
        <>
            <img className="rounded-full w-8 mr-4" src={session.data!.user?.image!} alt="Profile picture"/>
            <p>{session.data!.user?.name}</p>
            <Link href="/api/auth/signout">Signout</Link>
        </>
    )
}