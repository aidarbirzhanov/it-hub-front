// entities/team/ui/TeamMemberCard.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Member } from '../model/types'

interface Props {
  member: Member
}

export const TeamMemberCard = ({ member }: Props) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        viewport={{ once: true }}
        className="bg-[#404040] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center border border-transparent hover:border-primary"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
        <Image
            src={member.photo}
            alt={member.name}
            fill
            className="rounded-full object-cover border-4 border-primary/50"
        />
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
      <p className="text-muted-foreground text-sm line-clamp-3">{member.description}</p>
    </motion.div>
)
