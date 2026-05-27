"use client"

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import DashboardShell from './DashboardShell'

const routeConfig = [
  {
    prefix: '/home',
    activeTab: 'Home',
    topBarTitle: 'Home',
    topBarIcon: '/icons/home_assingment_navbar.svg',
    allowCreate: false,
  },
  {
    prefix: '/groups',
    activeTab: 'My Groups',
    topBarTitle: 'My Groups',
    topBarIcon: '/icons/Vector.svg',
    allowCreate: false,
  },
  {
    prefix: '/assignments',
    activeTab: 'Assignments',
    topBarTitle: 'Assignments',
    topBarIcon: '/icons/icon_line/file-text.svg',
    allowCreate: true,
  },
  {
    prefix: '/library',
    activeTab: 'My Library',
    topBarTitle: 'My Library',
    topBarIcon: '/icons/my_ibrary.svg',
    allowCreate: false,
  },
  {
    prefix: '/settings',
    activeTab: 'Settings',
    topBarTitle: 'Settings',
    topBarIcon: '/icons/icon_line/Setting.svg',
    allowCreate: false,
  },
  {
    prefix: '/toolkit',
    activeTab: "AI Teacher's Toolkit",
    topBarTitle: "AI Teacher's Toolkit",
    topBarIcon: '/icons/Book.svg',
    allowCreate: false,
  },
]

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const shellConfig = useMemo(() => {
    if (!pathname) return null
    if (pathname.startsWith('/login') || pathname.startsWith('/register')) return null
    return routeConfig.find(route => pathname.startsWith(route.prefix)) ?? null
  }, [pathname])

  if (!shellConfig) return <>{children}</>

  return (
    <DashboardShell
      activeTab={shellConfig.activeTab}
      topBarTitle={shellConfig.topBarTitle}
      topBarIcon={shellConfig.topBarIcon}
      allowCreate={shellConfig.allowCreate}
    >
      {children}
    </DashboardShell>
  )
}
