"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Github, Linkedin, Twitter, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TeamMember {
    id: string
    name: string
    role: "President" | "Vice President" | "Tech" | "Design" | "Management" | "PR & Media" | "Member"
    position: string
    photo: string
    email: string
    social: {
        linkedin?: string
        github?: string
        twitter?: string
    }
}

const DUMMY_TEAM: TeamMember[] = [
    {
        id: "GFG-EXEC-001",
        name: "Subasis Mishra",
        role: "President",
        position: "Strategy & Vision",
        photo: "https://github.com/subasis3124.png",
        email: "subasis@gfg.com",
        social: { github: "https://github.com/subasis3124", linkedin: "https://linkedin.com/in/subasismishra" }
    },
    {
        id: "GFG-EXEC-002",
        name: "Vivek Ranjan Sahoo",
        role: "Vice President",
        position: "Operations & Tech",
        photo: "/images/team/vivek.JPG",
        email: "vivek@gfg.com",
        social: {
            github: "https://github.com/msVivekRanjan",
            linkedin: "https://www.linkedin.com/in/vivekranjansahoo7/",
            twitter: "https://x.com/MsVivekRanjan"
        }
    },
    {
        id: "GFG-ARCH-001",
        name: "Raj Sahasransu Biswal",
        role: "Tech",
        position: "Architecture",
        photo: "/images/team/Raj.jpg",
        email: "raj@gfg.com",
        social: {
            linkedin: "https://linkedin.com/in/raj-sahasransu-biswal",
            github: "https://github.com/sahasransuraj08"
        }
    },
    {
        id: "GFG-CREATIVE-001",
        name: "Runjhun Pradhan",
        role: "Design",
        position: "Creative Direction",
        photo: "/images/team/Runjhun.jpg",
        email: "runjhun@gfg.com",
        social: {
            linkedin: "https://linkedin.com/in/runjhun-pradhan",
            github: "https://github.com/RunjhunPradhan27"
        }
    },
    {
        id: "GFG-COMMS-001",
        name: "Ayush Ranjan Pradhan",
        role: "PR & Media",
        position: "Public Relations",
        photo: "https://github.com/InfernoX21.png",
        email: "ayush@gfg.com",
        social: {
            linkedin: "https://linkedin.com/in/ayush-ranjan-pradhan-008468309",
            github: "https://github.com/InfernoX21"
        }
    },
    {
        id: "GFG-OPS-001",
        name: "Mukesh Kumar Padhi",
        role: "Management",
        position: "Strategy",
        photo: "/images/team/Mukesh.jpg",
        email: "mukesh@gfg.com",
        social: {
            linkedin: "https://linkedin.com/in/mukesh-kumar-padhi07",
            github: "https://github.com/Mukeshkup"
        }
    }
]

// Determine role color styling
const ROLE_THEMES: Record<string, {
    text: string
    bg: string
    rgb: string
}> = {
    "President": { text: "text-amber-400", bg: "bg-amber-400/10", rgb: "251, 191, 36" },
    "Vice President": { text: "text-emerald-400", bg: "bg-emerald-400/10", rgb: "52, 211, 153" },
    "Tech": { text: "text-blue-400", bg: "bg-blue-400/10", rgb: "96, 165, 250" },
    "Management": { text: "text-indigo-400", bg: "bg-indigo-400/10", rgb: "129, 140, 248" },
    "Design": { text: "text-pink-400", bg: "bg-pink-400/10", rgb: "244, 114, 182" },
    "PR & Media": { text: "text-purple-400", bg: "bg-purple-400/10", rgb: "192, 132, 252" },
    "Member": { text: "text-slate-400", bg: "bg-slate-400/10", rgb: "148, 163, 184" }
}

function TeamCard({ member, index, isLeadership = false }: { member: TeamMember, index: number, isLeadership?: boolean }) {
    const theme = ROLE_THEMES[member.role] || ROLE_THEMES["Member"]
    
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative rounded-3xl overflow-hidden glass-card flex flex-col p-6 w-full cursor-default",
                isLeadership ? "min-h-[380px]" : "min-h-[340px]"
            )}
        >
            {/* Interactive Radial Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            rgba(${theme.rgb}, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex flex-col items-center h-full text-center">
                
                {/* Avatar Wrapper with dynamic glow */}
                <div className="relative mb-6 mt-4">
                    <div className={cn(
                        "absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                        theme.bg
                    )} />
                    <div className={cn(
                        "relative rounded-full border border-white/10 p-1.5 overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 bg-background/50 backdrop-blur-md",
                        isLeadership ? "w-36 h-36 md:w-44 md:h-44" : "w-28 h-28 md:w-32 md:h-32"
                    )}>
                        <img 
                            src={member.photo} 
                            alt={member.name} 
                            className="w-full h-full object-cover rounded-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                            onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random` }} 
                        />
                    </div>
                </div>

                <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-4 border border-white/5",
                    theme.bg,
                    theme.text
                )}>
                    {member.role}
                </div>

                <h3 className={cn(
                    "font-space-grotesk font-bold text-white tracking-tight mb-1 group-hover:text-glow transition-all",
                    isLeadership ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                )}>
                    {member.name}
                </h3>
                
                <p className="text-muted-foreground text-sm font-medium mb-6">
                    {member.position}
                </p>

                {/* Always push social links to bottom */}
                <div className="mt-auto flex items-center justify-center gap-3 w-full pt-4 border-t border-white/5">
                    {member.social.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-all duration-300">
                            <Github className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    )}
                    {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/50 hover:text-[#0A66C2] transition-all duration-300">
                            <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    )}
                    {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/50 hover:text-[#1DA1F2] transition-all duration-300">
                            <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export function TeamSection() {
    const president = DUMMY_TEAM.find(m => m.role === "President")
    const vicePresident = DUMMY_TEAM.find(m => m.role === "Vice President")
    const leads = DUMMY_TEAM.filter(m => !["President", "Vice President"].includes(m.role))

    return (
        <section id="team" className="py-10 md:py-16 lg:py-24 bg-background relative overflow-hidden flex items-center">
            {/* Ambient Backgrounds */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-emerald-500/5 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-10 md:mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-muted-foreground text-xs md:text-sm font-mono tracking-widest uppercase mb-6">
                            <Users className="w-4 h-4 text-emerald-400" />
                            Core Intelligence
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-space-grotesk tracking-tight text-white mb-6 md:mb-8">
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Architects</span>
                        </h2>
                        
                        <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
                            The collective of innovators, engineers, and creatives driving the engineering culture of tomorrow.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                    
                    {/* Leadership Tier (President & VP) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto w-full">
                        {president && (
                            <TeamCard member={president} index={0} isLeadership />
                        )}
                        {vicePresident && (
                            <TeamCard member={vicePresident} index={1} isLeadership />
                        )}
                    </div>

                    {/* Horizontal Divider */}
                    <div className="w-full flex items-center justify-center my-4 md:my-8 opacity-50">
                        <div className="w-1/3 h-px bg-gradient-to-r from-transparent to-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/30 mx-4" />
                        <div className="w-1/3 h-px bg-gradient-to-l from-transparent to-white/20" />
                    </div>

                    {/* Department Leads Tier */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
                        {leads.map((member, i) => (
                            <TeamCard key={member.id} member={member} index={i + 2} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
