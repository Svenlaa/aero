import Avatar from '../components/avatar'
import { trpc } from '../utils/trpc'

const CreatorsPage = () => {
  const query = trpc.useQuery(['creator.getAll'])
  if (query.isLoading || !query.isSuccess) return <p>Waiting...</p>
  const creators = query.data
  return (
    <>
      <main>
        <h1 className="mb-4 bg-slate-400 text-center text-2xl">Aero</h1>
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
