import Image from 'next/image'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { laterLink } from '../pages/later'

const Creator = ({ name, avatarUrl }: { name: string; avatarUrl: string }) => {
  return (
    <div className="m-4 flex h-32 flex-row rounded-lg bg-slate-200 p-4">
      <div className="absolute inline h-24 w-24">
        <Image
          className="rounded-md"
          layout="fill"
          src={`${process.env.NEXT_PUBLIC_FILE_URL}/${avatarUrl}`}
        />
      </div>
      <h2 className="flex-grow pl-28 align-middle text-2xl font-bold leading-[6rem]">
        {name}
      </h2>
      <Link href={laterLink}>
        <a className="duration-150 hover:text-green-800">
          <FontAwesomeIcon className="h-24 w-24" icon={faPlusSquare} />
        </a>
      </Link>
    </div>
  )
}

export default Creator
