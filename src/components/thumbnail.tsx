import Image from 'next/image'
import Link from 'next/link'

const Thumbnail = ({
  video,
  featured
}: {
  video: {
    id: string
    title: string
    thumbnailUrl: string
  }
  featured?: true
}) => (
  <Link href={'/v/' + video.id}>
    <a className="px-2">
      <div className="relative aspect-video w-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_FILE_URL}/${video.thumbnailUrl}`}
          layout="fill"
          className="rounded-t-md"
          alt={`Video thumbnail for ${video.title}`}
        />
      </div>
      <span
        className={`block rounded-b-md py-2 px-4 ${
          featured ? 'bg-amber-400' : 'bg-slate-400'
        }`}
      >
        {video.title}
      </span>
    </a>
  </Link>
)

export default Thumbnail
