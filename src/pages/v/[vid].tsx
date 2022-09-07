import Link from 'next/link'
import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'

const VideoPage = () => {
  const router = useRouter()
  const { vid } = router.query

  const videoQuery = trpc.useQuery(['video.byId', vid as string])

  if (!videoQuery.isSuccess || !videoQuery.data) return <p>Loading...</p>

  const { data: video } = videoQuery

  return (
    <>
      <h1 className="mb-2 bg-slate-400 text-center text-2xl">Aero</h1>
      <main className="container mx-auto px-2">
        <div className="mx-auto px-2">
          <video
            className="relative aspect-video w-full rounded-lg"
            autoPlay
            controlsList="nodownload"
            controls
            poster={`${process.env.NEXT_PUBLIC_FILE_URL}/${video.thumbnailUrl}`}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_FILE_URL}/${video.videoUrl}`}
            />
          </video>
        </div>
        <div className="mx-auto flex flex-row p-4 py-2">
          <span className="block flex-grow rounded-l-md bg-slate-400 px-4 py-2">
            {video.title}
          </span>
          <Link href={video.source}>
            <a className="block rounded-r-md bg-red-300 px-4 py-2">Source</a>
          </Link>
        </div>
      </main>
    </>
  )
}

export default VideoPage
