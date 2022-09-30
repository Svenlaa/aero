import Image from 'next/image'
import Link from 'next/link'

const Thumbnail = ({
  video
}: {
  video: {
    id: string
    title: string
    thumbnailUrl: string
  }
}) => {
  return (
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
        <span className="block rounded-b-md bg-slate-400 py-2 px-4">
          {video.title}
        </span>
      </a>
    </Link>
  )
}

export default Thumbnail
