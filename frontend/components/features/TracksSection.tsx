"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Cpu, Palette, Megaphone, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TeamDetail {
    title: string
    description: string
    icon: any
    color: string
    variant: string
}

const tracks: TeamDetail[] = [
    {
        title: "Tech Team",
        description: "Building the future with code. innovative solutions in Web, App, AI, and Blockchain.",
        icon: Cpu,
        color: "text-emerald-400",
        variant: "primary"
    },
    {
        title: "Design Team",
        description: "Crafting visual experiences that captivate and inspire. UI/UX, Graphic Design, and Branding.",
        icon: Palette,
        color: "text-purple-400",
        variant: "secondary"
    },
    {
        title: "PR & Outreach",
        description: "Amplifying our voice and connecting with the community. Social Media, Events, and Partnerships.",
        icon: Megaphone,
        color: "text-pink-400",
        variant: "accent"
    },
    {
        title: "Operations",
        description: "The backbone of our events. Logistics, Management, and Execution excellence.",
        icon: Settings,
        color: "text-amber-400",
        variant: "secondary"
    }
]

function TrackCard({ track, index }: { track: TeamDetail, index: number }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    // Determine raw RGB for gradients based on Tailwind text color class
    const colorMap: Record<string, string> = {
        "text-emerald-400": "52, 211, 153",
        "text-purple-400": "192, 132, 252",
        "text-pink-400": "244, 114, 182",
        "text-amber-400": "251, 191, 36"
    }

    const rgbColor = colorMap[track.color] || "255, 255, 255"

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] backdrop-blur-xl overflow-hidden h-full flex flex-col p-6 md:p-8 transition-colors duration-500"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(${rgbColor}, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className={cn(
                    "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                    "bg-white/[0.05] border border-white/10 group-hover:bg-white/[0.08]"
                )}>
                    <track.icon className={cn("w-7 h-7 md:w-8 md:h-8", track.color)} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 font-space-grotesk text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/60 transition-colors duration-300">
                    {track.title}
                </h3>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-grow">
                    {track.description}
                </p>
            </div>

            <div 
                className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, rgba(${rgbColor}, 0.8), transparent)` }}
            />
        </motion.div>
    )
}

export function TracksSection() {
    return (
        <section id="features" className="py-10 md:py-16 lg:py-24 relative bg-background flex items-center overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] mix-blend-screen opacity-50 pointer-events-none" />
            
            <div className="container mx-auto relative z-10 px-4 md:px-8 w-full max-w-7xl">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-8 lg:items-center">
                    
                    {/* Sticky Sidebar Header for Desktop */}
                    <div className="lg:w-1/3 lg:sticky lg:top-24 self-start mb-6 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-muted-foreground text-xs md:text-sm font-mono tracking-widest uppercase mb-6">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                Departments
                            </div>
 
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-white mb-6">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-emerald-400">Pillars</span>
                            </h2>
 
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-md">
                                Discover the specialized divisions that power our student chapter.
                            </p>
                        </motion.div>
                    </div>
 
                    {/* 2-Column Grid Content for desktop */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tracks.map((track, i) => (
                            <TrackCard key={track.title} track={track} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
