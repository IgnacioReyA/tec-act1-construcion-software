import Link from 'next/link'

export default function Page2() {
    return (
      <div className="min-h-screen flex items-center justify-center">
      <Link href="/" className="text-blue-500 hover:underline">
        Go to Home
      </Link>
      </div>
    );
  }
  