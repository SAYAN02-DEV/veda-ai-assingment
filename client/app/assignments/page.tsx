"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import AssignmentPage from '../components/AssignmentPage'

export default function AssignmentsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [triggerCreate, setTriggerCreate] = useState(false)

  useEffect(() => {
    const create = searchParams.get('create')
    if (create === '1') setTriggerCreate(true)
  }, [searchParams])

  const handleCreateTriggered = () => {
    setTriggerCreate(false)
    router.replace('/assignments')
  }

  return (
    <AssignmentPage triggerCreate={triggerCreate} onCreateTriggered={handleCreateTriggered} />
  )
}
