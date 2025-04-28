'use client'

import { team } from '@/entities/team/model/team'
import { TeamMemberCard } from '@/entities/team/ui/TeamMemberCard'

export const TeamSection = () => (
    <section className="container mx-auto py-20">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-16 text-white">
        Наша команда
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map(member => (
            <TeamMemberCard key={member.id} member={member}/>
        ))}
      </div>
    </section>
)
