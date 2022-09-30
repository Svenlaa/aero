import Image from 'next/image'
import Link from 'next/link'

const Avatar = ({
  creator
}: {
  creator: { id: string; name: string; avatarUrl: string }
}) => {
  return (
    <Link href={`/c/${creator.id}`}>
      <a>
        <Image
          className="rounded-[25px]"
          src={`${process.env.NEXT_PUBLIC_FILE_URL}/${creator.avatarUrl}`}
          height={100}
          width={100}
          alt={creator.name}
        />
      </a>
    </Link>
  )
}

export default Avatar
