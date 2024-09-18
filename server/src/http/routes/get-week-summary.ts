import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import * as getWeekSummary from '../../functions/get-week-summary-goals'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/summary', async () => {
    const { summary } = await getWeekSummary.getWeekSummary()

    return { summary }
  })
}