import { z } from 'zod'
import { createRouter } from './context'

export const videoRouter = createRouter().mutation('create', {
  input: z.object({
    id: z.string(),
    source: z.string(),
    title: z.string(),
    videoUrl: z.string(),
    thumnailUrl: z.string(),
    createdAt: z.string(),

    creatorId: z.string()
  }),
  resolve: async ({ input, ctx: { prisma } }) => {
    const video = await prisma.video.create({
      data: {
        id: input.id,
        source: input.source,
        title: input.title,
        videoUrl: input.videoUrl,
        thumbnailUrl: input.thumnailUrl,
        createdAt: new Date(input.createdAt),
        creatorId: input.creatorId
      }
    })
    return video
  }
})
