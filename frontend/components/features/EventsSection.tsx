"use client"

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion"
import { useRef } from "react"
import { cn, getPublicUrl } from "@/lib/utils"
import { Calendar, Users, ArrowRight, Clock, MapPin, Sparkles } from "lucide-react"

// Types
export interface Event {
    id: string
    title: string
    description: string
    date: string
    time: string
    location: string
    category: "Workshop" | "Hackathon" | "Seminar" | "Competition" | "Networking" | "Tech Talk" | "Career"
    type: "upcoming" | "past"
    theme: "emerald" | "blue" | "purple"
    image: string
    tags: string[]
    registration?: {
        status: "Open" | "Closed" | "Waitlist"
        capacity: number
        registered: number
        deadline: string
        link: string
    }
}

// Theme configuration maps
const THEMES = {
    emerald: {
        text: "text-emerald-400",
        bgHover: "hover:bg-emerald-500/10",
        borderHover: "hover:border-emerald-500/30",
        btn: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        rgb: "52, 211, 153"
    },
    blue: {
        text: "text-blue-400",
        bgHover: "hover:bg-blue-500/10",
        borderHover: "hover:border-blue-500/30",
        btn: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30",
        rgb: "96, 165, 250"
    },
    purple: {
        text: "text-purple-400",
        bgHover: "hover:bg-purple-500/10",
        borderHover: "hover:border-purple-500/30",
        btn: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/30",
        rgb: "192, 132, 252"
    }
}

// Mock Event Data
const EVENTS: Event[] = [
    {
        id: "ev1",
        title: "Zer0ne",
        description: "Zer0ne is the flagship creativity-driven event of GFG Chapter ITER, focused on product thinking, design, and innovation. Participants will dive deep into problem-solving, crafting unique solutions that blend technical feasibility with exceptional user experience. The event concludes with a high-stakes pitching round where teams present their vision to a panel of experts. Whether you're a designer, a developer, or a visionary, Zer0ne is the ultimate platform to showcase your ability to build products that matter.",
        date: "2026-04-03",
        time: "10:00 AM onwards",
        location: "Lab 1, Auditorium",
        category: "Competition",
        type: "upcoming",
        theme: "emerald",
        image: "/events/zerone.png",
        tags: ["Design", "Product", "Pitching"],
        registration: {
            status: "Open",
            capacity: 120,
            registered: 0,
            deadline: "2026-04-02",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfD9PRA9bLdxP-27C_gFCUIGQ7ZwfkQHqdjHYcAZM946joSTw/viewform?usp=header"
        }
    },
    {
        id: "ev2",
        title: "Rachitva",
        description: "Rachitva is an impromptu design and communication skills competition tailored for those who can think on their feet. In this fast-paced event, participants are challenged to create compelling designs and deliver professional pitches within tight time constraints. It tests not just your creative output, but your ability to articulate your ideas effectively to an audience. Rachitva celebrates the art of spontaneous creation and communication, pushing you to refine your impromptu skills in a competitive environment.",
        date: "2026-04-04",
        time: "10:00 AM onwards",
        location: "Seminar Hall, Block 1",
        category: "Competition",
        type: "upcoming",
        theme: "purple",
        image: "/events/rachitva.png",
        tags: ["Communication", "Impromptu", "Design"],
        registration: {
            status: "Open",
            capacity: 120,
            registered: 0,
            deadline: "2026-04-03",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScJ6a3PQDz_O5ujcNi5h6AM3tGGndkJdaaUVIr-lQ3TnZMx-g/viewform"
        }
    }
]

// High-End Compact Card
function UpcomingEventCard({ event, index }: { event: Event, index: number }) {
    const theme = THEMES[event.theme]
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    const eventDate = new Date(event.date)
    const day = eventDate.getDate()
    const month = eventDate.toLocaleDateString('en-US', { month: 'short' })

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative flex flex-col rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-2",
                theme.borderHover
            )}
        >
            {/* Image Section with Integrated Date */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={getPublicUrl(event.image)}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                
                {/* Floating Date Badge */}
                <div className="absolute top-4 left-4 flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white z-20">
                    <span className="text-lg font-bold leading-none">{day}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">{month}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                    <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 bg-black/40",
                        theme.text
                    )}>
                        {event.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-6 flex flex-col flex-1">
                {/* Radial Mouse Glow */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                400px circle at ${mouseX}px ${mouseY}px,
                                rgba(${theme.rgb}, 0.05),
                                transparent 80%
                            )
                        `,
                    }}
                />

                <div className="flex items-center gap-3 text-[10px] font-mono text-white/40 uppercase tracking-widest mb-3">
                    <Clock className="w-3 h-3" />
                    <span>{event.time}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-space-grotesk text-white mb-3 group-hover:text-glow transition-all">
                    {event.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                </p>

                {/* Meta Info Row */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-1.5 text-xs text-white/60">
                        <MapPin className="w-3.5 h-3.5 opacity-50" />
                        <span>{event.location.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/60">
                        <Users className="w-3.5 h-3.5 opacity-50" />
                        <span>{event.registration?.registered}/{event.registration?.capacity}</span>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Status</span>
                        <span className={cn("text-xs font-bold flex items-center gap-1.5", theme.text)}>
                            <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
                            {event.registration?.status.toUpperCase()}
                        </span>
                    </div>

                    <a href={event.registration?.link} target="_blank" rel="noopener noreferrer" className="relative group/btn">
                        <button className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all border",
                            theme.btn
                        )}>
                            Secure Spot
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export function EventsSection() {
    return (
        <section id="events" className="py-10 md:py-16 lg:py-24 bg-[#020202] relative overflow-hidden">
            {/* High-End Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-emerald-500/5 blur-[150px] rounded-full mix-blend-screen -z-10" />
            <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-purple-500/5 blur-[150px] rounded-full mix-blend-screen -z-10" />
            
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
                {/* Redesigned Section Header */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-muted-foreground text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase mb-8"
                    >
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        Protocol: Next_Phase
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-space-grotesk tracking-tighter text-white mb-8">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Event Road</span>
                    </h2>

                    <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto leading-relaxed opacity-80">
                        Strategic operations and technical summits engineered to bridge the gap between academia and production.
                    </p>
                </div>

                {/* High Density Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {EVENTS.map((event, index) => (
                        <UpcomingEventCard
                            key={event.id}
                            event={event}
                            index={index}
                        />
                    ))}

                    {/* Placeholder for More Events? */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-white/5 p-8 text-center group cursor-pointer hover:border-emerald-500/20 transition-all min-h-[400px]"
                    >
                        <div className="w-16 h-16 rounded-full bg-white/[0.02] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <h3 className="text-white/40 font-bold font-space-grotesk text-lg">Coming More Experiences</h3>
                        <p className="text-white/20 text-sm mt-2">The architecture is expanding...</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
