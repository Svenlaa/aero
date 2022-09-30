import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { trpc } from '../../../utils/trpc'

const NewVideo = () => {
  const { cid } = useRouter().query

  const mutation = trpc.useMutation(['video.create'])

  const [createdAt, setCreatedAt] = useState('')
  const [id, setId] = useState('')
  const [source, setSource] = useState('')
  const [thumnailUrl, setThumnailUrl] = useState('')
  const [title, setTitle] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  const onButton = async (e: FormEvent) => {
    e.preventDefault()
    if (!createdAt || !id || !source || !thumnailUrl || !title || !videoUrl)
      return

    const m = mutation.mutate({
      creatorId: cid as string,
      createdAt,
      id,
      source,
      thumnailUrl,
      title,
      videoUrl
    })
  }

  const onAutofill = () => {
    if (!id) return
    if (!thumnailUrl) setThumnailUrl(id + '.jpg')
    else if (!thumnailUrl.includes('.')) setThumnailUrl(thumnailUrl + '.jpg')

    if (!videoUrl) setVideoUrl(id + '.mp4')
    else if (!videoUrl.includes('.')) setVideoUrl(videoUrl + '.mp4')
  }

  return (
    <div className="flex h-screen flex-col gap-2 bg-slate-300">
      <Head>
        <title>Add a new video to the database!</title>
      </Head>
      <div>
        <input
          placeholder="id"
          type="text"
          value={id}
          onChange={(i) => setId(i.target.value)}
          className="w-5/6"
        />
        <button className="w-1/6 text-center" onClick={onAutofill}>
          Autofill
        </button>
      </div>
      <input
        type="date"
        value={createdAt}
        onChange={(i) => setCreatedAt(i.target.value)}
      />
      <input
        placeholder="source"
        type="text"
        value={source}
        onChange={(i) => setSource(i.target.value)}
      />
      <input
        placeholder="title"
        type="text"
        value={title}
        onChange={(i) => setTitle(i.target.value)}
      />
      <input
        placeholder="thumb"
        type="text"
        value={thumnailUrl}
        onChange={(i) => setThumnailUrl(i.target.value)}
      />
      <input
        placeholder="vid"
        type="text"
        value={videoUrl}
        onChange={(i) => setVideoUrl(i.target.value)}
      />
      <button onClick={onButton}>Add!</button>
    </div>
  )
}

export default NewVideo
