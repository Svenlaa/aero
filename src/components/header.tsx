import { faCircleChevronLeft, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ({ text = 'Aero', title = 'Aero' }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="mb-4 flex flex-row justify-between bg-slate-400">
        <button title="back" onClick={() => router.back()}>
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="p-1 align-middle text-2xl  leading-loose"
          />
        </button>
        <h1 className=" bg-slate-400 text-center text-2xl">{text}</h1>
        <Link href="/">
          <a>
            <FontAwesomeIcon
              icon={faHome}
              className="p-1 align-middle text-2xl  leading-loose"
            />
          </a>
        </Link>
      </header>
    </>
  )
}

export default Header
