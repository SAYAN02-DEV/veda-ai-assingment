"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { api } from './lib/api'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const token = api.getAuthToken()
    if (token) {
      router.replace('/home')
    } else {
      router.replace('/login')
    }
  }, [router])

  return null
}