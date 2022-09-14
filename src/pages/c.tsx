import Avatar from '../components/avatar'
import Header from '../components/header'
import { trpc } from '../utils/trpc'

const CreatorsPage = () => {
  const query = trpc.useQuery(['creator.getAll'])
  if (!query.isSuccess) return <p>Waiting...</p>
  const creators = query.data
  return (
    <>
      <main>
        <Header title="Channels | Aero" />
        <div className="mx-auto flex w-4/5 flex-wrap gap-4">
          {creators.map((creator) => (
            <Avatar creator={creator} key={creator.id} />
          ))}
        </div>
      </main>
    </>
  )
}

export default CreatorsPage
