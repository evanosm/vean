'use client'

import '../styles/globals.css'

import { Navbar } from './Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import PageWrapper from './PageWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='bg-dark'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='page bg-light'>
        <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
      </body>
    </html>
  )
}
