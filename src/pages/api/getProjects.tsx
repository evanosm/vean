import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function getProjects(req: NextApiRequest, res: NextApiResponse<any>) {
    const projects = await prisma.projects.findMany(
        {
            orderBy: {
                isFeatured: 'desc',
            }
        }
    )
    res.status(200).json(projects)
}