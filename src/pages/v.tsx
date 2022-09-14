import Header from '../components/header'
import Thumbnail from '../components/thumbnail'
import { trpc } from '../utils/trpc'

const Home = () => {
  const videosQuery = trpc.useQuery(['video.getAll', 24])
  if (!videosQuery.isSuccess) return <p>Waiting...</p>
  const videos = videosQuery.data
  return (
    <>
      <Header title="Videos | Aero" />
      <main>
        <div className="mx-2 grid grid-cols-1 gap-4 px-2 pb-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <Thumbnail video={video} key={video.id} />
          ))}
        </div>
      </main>
    </>
  )
}
export default Home
