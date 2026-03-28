import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloworld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        await step.sleep("wait-a-moment", "5s");

        await step.run("create-workflwo", () => {
            return prisma.workflow.create({
                data: {
                    name: "work-flow-inngest"
                },
            });
        })
    },
); 