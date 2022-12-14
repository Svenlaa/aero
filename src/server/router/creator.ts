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
        include: {
          videos: {
            select: { id: true, thumbnailUrl: true, title: true },
            orderBy: { createdAt: 'desc' }
          }
        }
      })
      return creator ? creator : null
    }
  })
  .query('getAll', {
    resolve: async ({ ctx: { prisma } }) => {
      const creators = await prisma.creator.findMany({
        orderBy: { name: 'asc' }
      })
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
