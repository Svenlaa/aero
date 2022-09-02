import { useRouter } from 'next/router'

const VideoPage = () => {
  const router = useRouter()
  const { vid } = router.query

  return <p>You are on the page of video {vid}</p>
}

export default VideoPage
