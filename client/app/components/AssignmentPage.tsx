"use client"

import AssignmentBox from './AssignmentBox'
import { EmptyState } from './EmptyState'

const assignments = [
  { name: 'Quiz on Electricity', assignedOn: '20-06-2025', dueDate: '21-06-2025' },
  { name: 'Quiz on Electricity', assignedOn: '20-06-2025', dueDate: '21-06-2025' },
  { name: 'Quiz on Electricity', assignedOn: '20-06-2025', dueDate: '21-06-2025' },
  { name: 'Quiz on Electricity', assignedOn: '20-06-2025', dueDate: '21-06-2025' },
  { name: 'Quiz on Electricity', assignedOn: '20-06-2025', dueDate: '21-06-2025' },
  { name: 'Quiz on Electricity', assignedOn: '20-06-2025', dueDate: '21-06-2025' },
  { name: 'Quiz on Electricity', assignedOn: '20-06-2025', dueDate: '21-06-2025' },
  { name: 'Quiz on Electricity', assignedOn: '20-06-2025', dueDate: '21-06-2025' },
]

export default function AssignmentPage() {
  if (assignments.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col gap-5 px-2 pb-6 pt-2 md:px-4">
      <section className="flex w-full flex-col gap-4">
        <div className="inline-flex w-full items-center gap-4 rounded-2xl bg-white/0 px-1">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#4BC26D] outline outline-[4px] outline-[#4BC26D]/40 shadow-[0px_32px_48px_rgba(0,0,0,0.20),_0px_16px_48px_rgba(0,0,0,0.12)]" />
            <div className="inline-flex flex-col items-start gap-0.5">
              <div className="flex flex-col justify-center text-[20px] font-bold leading-7 text-[#303030]">
                Assignments
              </div>
              <div className="flex flex-col justify-center text-[14px] font-normal leading-[19.6px] text-[#5d5d5d]/55">
                Manage and create assignments for your classes.
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex h-16 w-full items-center justify-between overflow-hidden rounded-[20px] bg-white px-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <img src="/icons/Filter.svg" alt="Filter" className="h-5 w-5" />
                <span className="text-[14px] font-bold leading-[19.6px] text-[#A9A9A9]">
                  Filter By
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[380px] items-center gap-3 max-md:w-full">
            <div className="flex h-11 w-full items-center gap-2 rounded-full border border-black/20 px-4">
              <img src="/icons/Lens.svg" alt="Search" className="h-5 w-5" />
              <input
                type="text"
                placeholder="Search Assignment"
                className="w-full bg-transparent text-[14px] font-bold leading-[19.6px] text-[#A9A9A9] placeholder:text-[#A9A9A9] focus:outline-none"
                disabled
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="grid w-full grid-cols-2 gap-6 max-[1280px]:grid-cols-1">
          {assignments.map((assignment, index) => (
            <AssignmentBox
              key={`${assignment.name}-${index}`}
              name={assignment.name}
              assignedOn={assignment.assignedOn}
              dueDate={assignment.dueDate}
            />
          ))}
        </div>
        <div className="pointer-events-none sticky bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#e5e5e5]/95 via-[#e5e5e5]/70 via-40% to-transparent backdrop-blur-lg" />
        <div className="sticky bottom-3 left-0 right-0 z-10 flex w-full justify-center">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#1f1f1f] px-5 py-2 text-[14px] font-semibold text-white shadow-[0px_18px_30px_rgba(0,0,0,0.18)]"
          >
            <span className="text-lg leading-none">+</span>
            Create Assignment
          </button>
        </div>
      </section>
    </div>
  )
}
