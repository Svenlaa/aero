import { z } from 'zod'
import { createRouter } from './context'

export const videoRouter = createRouter()
  .query('getAll', {
    input: z.number(),
    resolve: async ({ input, ctx: { prisma } }) => {
      const videos = await prisma.video.findMany({
        orderBy: { createdAt: 'desc' },
        select: { id: true, thumbnailUrl: true, title: true },
        take: input
      })
      return videos ? videos : []
    }
  })
  .query('byId', {
    input: z.string(),
    resolve: async ({ input, ctx: { prisma } }) => {
      const video = await prisma.video.findUnique({ where: { id: input } })
      return video ? video : null
    }
  })
  .mutation('create', {
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
