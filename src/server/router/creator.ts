import { z } from 'zod'
import { createRouter } from './context'

export const creatorRouter = createRouter()
  .query('byId', {
    input: z.object({
      id: z.string(),
      includeVideos: z.boolean().default(false)
    }),
    resolve: async ({ input, ctx: { prisma } }) => {
      const creator = await prisma.creator.findUnique({
        where: { id: input.id },
        include: { videos: { orderBy: { createdAt: 'desc' } } }
      })
      return creator ? creator : null
    }
  })
  .query('getAll', {
    resolve: async ({ ctx: { prisma } }) => {
      const creators = await prisma.creator.findMany()
      return creators
    }
  })
  .mutation('create', {
    input: z.object({
      id: z.string(),
      avatarUrl: z.string(),
      name: z.string()
    }),
    resolve: async ({ input, ctx: { prisma } }) => {
      const creator = await prisma.creator.create({ data: input })
      return creator
    }
  })
