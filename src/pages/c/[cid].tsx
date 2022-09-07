import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'
import Creator from '../../components/creator'

const CreatorPage = () => {
  const router = useRouter()
  const { cid } = router.query

  const creatorQuery = trpc.useQuery(['creator.byId', cid as string])

  if (!creatorQuery.isSuccess || !creatorQuery.data) return <p>Loading...</p>

  const { data: creator } = creatorQuery

  return (
    <>
      <h1 className="mb-4 bg-slate-400 text-center text-2xl">Aero</h1>
      <main className="container mx-auto">
        <Creator avatarUrl={creator.avatarUrl} name={creator.name} />
      </main>
    </>
  )
}

export default CreatorPage
