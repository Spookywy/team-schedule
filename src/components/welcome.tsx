import Image from 'next/image'
import Link from 'next/link'

export default function Welcome() {
    return (
        <div className="grid grid-cols-2 h-screen">
          <div className="bg-black shadow-black shadow-2xl relative">
              <Image src="/images/team-schedule-icon.png" alt="Team Schedule icon" className="object-scale-down" fill sizes="50vw"/>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-5xl text-center font-bold">Team Schedule</h1>
              <p className="mt-10 mb-5 font-semibold text-lg">Simple and versatile. Effortlessly plan and coordinate your team.</p>
              <Link href="/api/auth/signin" className="text-blue-800 font-bold">Signin</Link>
              <div className="flex flex-row mt-5">
                <p className="mr-3">Don&apos;t have an account?</p>
                <Link href="/api/auth/signin" className="text-blue-800 font-bold">Signup</Link>
              </div>
            </div>
          </div>
        </div>
    )
}