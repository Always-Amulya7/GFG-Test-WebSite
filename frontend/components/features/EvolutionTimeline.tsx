"use client"

import { useState, useMemo, useCallback } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Award, Coffee, Users, Image as ImageIcon, LayoutGrid, Calendar, Clock, MapPin, UserCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { timelineData, type MediaItem, type TimelineSection, type Subsection, type Speaker } from "@/data/timeline-content"

export function EvolutionTimeline() {
    const sections = useMemo(() => timelineData, [])

    const iconMap: Record<string, any> = {
        "foundation": Award,
        "chai-links": Coffee,
        "founders": Users
    }

    const colorClasses = {
        primary: {
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/30",
            text: "text-emerald-400",
            glow: "shadow-[0_0_40px_rgba(16,185,129,0.5)]",
            gradient: "from-emerald-500/20 to-transparent",
            hoverBg: "hover:bg-emerald-500/20"
        },
        secondary: {
            bg: "bg-emerald-400/10",
            border: "border-emerald-400/30",
            text: "text-emerald-300",
            glow: "shadow-[0_0_40px_rgba(52,211,153,0.5)]",
            gradient: "from-emerald-400/20 to-transparent",
            hoverBg: "hover:bg-emerald-400/20"
        },
        accent: {
            bg: "bg-green-400/10",
            border: "border-green-400/30",
            text: "text-green-300",
            glow: "shadow-[0_0_40px_rgba(74,222,128,0.5)]",
            gradient: "from-green-400/20 to-transparent",
            hoverBg: "hover:bg-green-400/20"
        }
    }

    return (
        <section className="relative py-8 md:py-12 bg-background flex items-center overflow-hidden" id="evolution">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.05),transparent_70%)]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(hsl(var(--primary)/0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-5xl mx-auto w-full relative z-10 px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.span
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-block px-6 py-2 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-md mb-6 text-xs font-mono text-primary font-bold tracking-[0.3em] uppercase"
                    >
                        OUR JOURNEY
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
                        <span className="text-primary">#</span> Evolution{" "}
                        <span className="text-[#00FF80] drop-shadow-[0_0_10px_rgba(0,255,128,0.5)]">
                            Timeline
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                        Explore our chapter&apos;s milestones through an immersive interactive timeline
                    </p>
                </motion.div>

                {/* Inline Accordion Timeline */}
                <div className="flex flex-col gap-8 relative w-full">
                    {/* Continuous Timeline Line (desktop only, optional visual flair) */}
                    <div className="hidden md:block absolute left-[42px] top-12 bottom-0 w-px bg-white/10" />

                    {sections.map((section, index) => {
                        const colors = colorClasses[section.color as keyof typeof colorClasses]
                        const Icon = iconMap[section.id] || Award
                        const totalMedia = section.subsections
                            ? section.subsections.reduce((sum, sub) => sum + (sub.media?.length || 0), 0)
                            : section.media?.length || 0
                        return (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative flex gap-6 md:gap-10 w-full group"
                            >
                                {/* Interactive Icon Node */}
                                <div className="relative flex-shrink-0 z-10 hidden md:block">
                                    <div 
                                        className={cn(
                                            "w-[84px] h-[84px] rounded-full flex items-center justify-center transition-all duration-300 border-2 bg-background border-white/10 group-hover:border-primary/50 group-hover:bg-white/5"
                                        )}
                                    >
                                        <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 min-w-0 flex flex-col w-full">
                                    {/* Card Header (Clickable Link) */}
                                    <Link
                                        href={`/evolution/${section.id}`}
                                        className={cn(
                                            "text-left glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300 w-full overflow-hidden relative border border-white/5 hover:border-white/20 hover:-translate-y-1 block"
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-5",
                                            colors.gradient
                                        )} />
                                        
                                        <div className="relative flex justify-between items-start gap-4">
                                            <div>
                                                <div className="flex items-center gap-3 md:hidden mb-4">
                                                    <div className={cn("p-3 rounded-full", colors.bg, colors.text)}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-2 text-white">
                                                    {section.title}
                                                </h3>
                                                <p className={cn("font-mono text-sm uppercase tracking-wider mb-3", colors.text)}>
                                                    {section.subtitle}
                                                </p>
                                                {totalMedia > 0 && (
                                                    <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground/80 bg-background/50 px-3 py-1.5 rounded-full border border-white/5 mt-2 transition-colors group-hover:bg-white/10 group-hover:text-white">
                                                        <ImageIcon className="w-3.5 h-3.5" />
                                                        <span>{totalMedia} memories inside • Click to explore</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>


        </section>
    )
}

