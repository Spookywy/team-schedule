import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const session = useSession();

    return (
        <header className="flex justify-end gap-5 bg-black text-white p-5">
            <img className="rounded-full w-8" src={session.data!.user?.image!} alt="Profile picture"/>
            <p className="p-1">{session.data!.user?.name}</p>
            <Link href="/api/auth/signout" className="hover:bg-white hover:text-black rounded p-1">
                <span className="mr-2">Signout</span>
                <FontAwesomeIcon icon={faRightFromBracket}/>
            </Link>
        </header>
    )
}