import Head from 'next/head'
import { FormEvent, useState } from 'react'
import { trpc } from '../../utils/trpc'

const NewCreator = () => {
  const mutation = trpc.useMutation(['creator.create'])

  const [id, setId] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [name, setName] = useState('')

  const onButton = async (e: FormEvent) => {
    e.preventDefault()
    if (!id || !avatarUrl || !name) return

    const m = mutation.mutate({ id, avatarUrl, name })
    console.log(m)
  }

  return (
    <>
      <Head>
        <title>Add a creator to the database!</title>
      </Head>
      id:{' '}
      <input type="text" value={id} onChange={(i) => setId(i.target.value)} />
      <br />
      avatarUrl:{' '}
      <input
        type="text"
        value={avatarUrl}
        onChange={(i) => setAvatarUrl(i.target.value)}
      />
      <br />
      name:{' '}
      <input
        type="text"
        value={name}
        onChange={(i) => setName(i.target.value)}
      />
      <br />
      <button onClick={onButton}>Submit</button>
    </>
  )
}
export default NewCreator
