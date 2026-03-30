import prisma from '@/lib/db';
import { createTRPCRouter, protectedProcedure } from '../init';
import { inngest } from '@/inngest/client';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export const appRouter = createTRPCRouter({
  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai"
    });
    return { succcess: true, message: "Job queued" };
  }),
  getWorkflows: protectedProcedure
    .query(async ({ ctx }) => {
      return prisma.workflow.findMany();
    }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "hello@gmail.com"
      }
    })
    return { succcess: true, message: "Job queued" };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;