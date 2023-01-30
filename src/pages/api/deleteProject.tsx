import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'

export default async function createProject(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    const { id }: any = req.body
    const apiKey = req.headers.apikey || ''
    console.log(id);
    

    const apiKeyMatch = apiKey === process.env.APIKEY

    //if post request
    if (req.method === 'POST') {
        //if api key matches
        if (apiKeyMatch) {
            await prisma.projects.delete({
                where: {
                    id
                }
            } as any)
            res.status(200).json(
                {
                    message: 'Project deleted successfully'
                }
            )
        } else {
            res.status(401).json({ error: 'Unauthorized' })
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}

