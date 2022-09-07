// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { creatorRouter } from './creator'
import { videoRouter } from './video'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('creator.', creatorRouter)
  .merge('video.', videoRouter)

// export type definition of API
export type AppRouter = typeof appRouter
