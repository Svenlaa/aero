import { z } from 'zod'
import { createRouter } from './context'

export const creatorRouter = createRouter()
  .query('byId', {
    input: z.string(),
    resolve: async ({ input, ctx: { prisma } }) => {
      const creator = await prisma.creator.findUnique({ where: { id: input } })
      return creator ? creator : null
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
