import { CustomSeo } from '@/components/CustomSeo'
import type { CustomSeoProps } from '@/components/CustomSeo'

import { Footer } from '@/UI/common'

import { twclsx } from '@/libs/twclsx'

import type { NextPage } from 'next'

export type LayoutPageProps = {
  className?: string
  children: React.ReactNode
} & CustomSeoProps

export const LayoutPage: NextPage<LayoutPageProps> = ({ children, ...props }) => {
  return (
    <>
      <CustomSeo {...props} />
      <main className={twclsx('mt-36 scroll-mt-36')}>{children}</main>
      <Footer />
    </>
  )
}
