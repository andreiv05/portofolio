import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Image src="/logo-white.svg" alt="Vercel Logo" width={600} height={600} />
    </div>
  )
}
