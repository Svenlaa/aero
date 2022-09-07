import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'
import Creator from '../../components/creator'
import Thumbnail from '../../components/thumbnail'

const CreatorPage = () => {
  const router = useRouter()
  const { cid } = router.query

  const creatorQuery = trpc.useQuery([
    'creator.byId',
    { id: cid as string, includeVideos: true }
  ])

  if (!creatorQuery.isSuccess || !creatorQuery.data) return <p>Loading...</p>

  const { data: creator } = creatorQuery

  return (
    <>
      <h1 className="mb-4 bg-slate-400 text-center text-2xl">Aero</h1>
      <main className="container mx-auto">
        <Creator
          id={creator.id}
          avatarUrl={creator.avatarUrl}
          name={creator.name}
        />
        <div className="mx-2 grid grid-cols-2 gap-4 px-2 pb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {creator.videos.map((video) => (
            <Thumbnail video={video} />
          ))}
        </div>
      </main>
    </>
  )
}

export default CreatorPage
