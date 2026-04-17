import Link from "next/link"

const Navigation = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/home">Home</Link>
            </li>
            
            <li>
                <Link href="/cottages">Cottages</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            
            <li>
                <Link href="/account">Account</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Navigation