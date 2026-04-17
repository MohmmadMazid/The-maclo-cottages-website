import Navigation from '@/components/Navigation'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Navigation />
      <h1>Welcome To The Maclo Cottages Hotel-Cottages in Woodland</h1>
      {/* <Link href={"/about"}>About</Link>
      <br/>
      <Link href={"/account"}>Account</Link> */}
    </div>
  )
}

export default page