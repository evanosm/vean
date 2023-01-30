import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'


type Data = {
    name: string
    desc: string
    year: string
    role: string
    isFreelance: boolean
    isFeatured: boolean
    image: string
    url: string
}

export default async function createProject(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    const { name, desc, year, role, isFreelance, isFeatured, image, url }: Data = req.body
    const apiKey = req.headers.apikey || ''

    const apiKeyMatch = apiKey === process.env.APIKEY

    //if post request
    if (req.method === 'POST') {
        //if api key matches
        if (apiKeyMatch) {
            const project = await prisma.projects.create({
                data: {
                    name,
                    desc,
                    year,
                    role,
                    isFreelance,
                    isFeatured,
                    image,
                    url
                }
            } as any)
            res.status(200).json(project)
        } else {
            res.status(401).json({ error: 'Unauthorized' })
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}

