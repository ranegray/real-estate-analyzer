import { Inter } from 'next/font/google'
import NewProperty from './newproperty'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NewProperty />
    </main>
  )
}
