import { useRouter } from 'next/router'

const CreatorPage = () => {
  const router = useRouter()
  const { cid } = router.query

  return <p>You are on the page of creator {cid}</p>
}

export default CreatorPage
