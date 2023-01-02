import Image from 'next/image'
import Link from 'next/link'
import teamScheduleIcon from '../../public/images/team-schedule-icon.png'

export default function Welcome() {
    return (
        <div className="md:grid md:grid-cols-2 h-screen">
          <div className="md:bg-black md:shadow-black md:shadow-2xl md:h-full md:flex md:justify-center md:items-center h-20">
              <Image src={teamScheduleIcon} alt="Team Schedule icon" className="md:w-1/2 w-20 mx-auto mt-3 bg-black rounded-md"/>
          </div>
          <div className="flex items-center justify-center p-10">
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