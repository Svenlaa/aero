import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'
import Creator from '../../components/creator'
import Thumbnail from '../../components/thumbnail'
import Header from '../../components/header'

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
      <Header title={creator.name + ' | Aero'} />
      <main className="container mx-auto">
        <Creator
          id={creator.id}
          avatarUrl={creator.avatarUrl}
          name={creator.name}
        />
        <div className="mx-2 grid grid-cols-1 gap-4 px-2 pb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {creator.videos.map((video) => (
            <Thumbnail video={video} key={video.id} />
          ))}
        </div>
      </main>
    </>
  )
}

export default CreatorPage
