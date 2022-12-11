import { Video } from '@prisma/client'
import { createSSGHelpers } from '@trpc/react/ssg'
import { GetStaticProps } from 'next'
import Header from '../components/header'
import Thumbnail from '../components/thumbnail'
import { appRouter } from '../server/router'
import { createContextInner } from '../server/router/context'
import { trpc } from '../utils/trpc'

const Home = () => {
  const videosQuery = trpc.useQuery(['video.getAll', 96])
  if (!videosQuery.isSuccess) return <p>Waiting...</p>
  const videos = videosQuery.data
  const featuredVideoId = Math.floor(videosQuery.data.length * Math.random())
  return (
    <>
      <Header title="Videos | Aero" />
      <main>
        <div className="mx-2 grid grid-cols-1 gap-4 px-2 pb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Thumbnail
            video={videos[featuredVideoId]!}
            key={videos[featuredVideoId]!.id}
            featured
          />
          {videos.map((video, i) =>
            i === featuredVideoId ? null : (
              <Thumbnail video={video} key={video.id} />
            )
          )}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const ssg = await createSSGHelpers({
    router: appRouter,
    ctx: await createContextInner({})
  })

  await ssg.fetchQuery('video.getAll', 96)

  return {
    props: {
      trpcState: ssg.dehydrate()
    }
  }
}

export default Home
