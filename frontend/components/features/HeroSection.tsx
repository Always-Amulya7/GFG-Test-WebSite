"use client"

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion"
import { Terminal, Zap, Code2, ArrowRight, Cpu, Activity, Network, Box, Sparkles, Shield, Orbit } from "lucide-react"
import { useEffect, useState, useRef, useMemo } from "react"
import Image from "next/image"
import gfgLogo from "@/public/gfg-official-logo.png"

// --- High-End Particle System ---
function FloatingParticles() {
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * -20,
        }))
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary/40 blur-[1px]"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    )
}

function FeatureNode({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 p-2.5 rounded-lg bg-black/50 border border-white/5 group-hover:border-primary/30 transition-colors shadow-inner">
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="relative z-10 flex flex-col gap-1">
                <span className="text-sm font-semibold text-white/90 font-mono tracking-tight">{title}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{desc}</span>
            </div>
        </motion.div>
    )
}

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()
    
    // Parallax & Fade effects
    const yContent = useTransform(scrollY, [0, 600], [0, 150])
    const opacityContent = useTransform(scrollY, [0, 400], [1, 0])
    const scaleContent = useTransform(scrollY, [0, 400], [1, 0.95])

    // Precision Mouse Spotlight
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[70vh] lg:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#020202] selection:bg-primary/30 py-12 md:py-20 lg:py-32 border-b border-white/5"
        >
            {/* 1. Immersive Background Layer */}
            <div className="absolute inset-0 z-0">
                <FloatingParticles />
                
                {/* Advanced Grid Architecture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
                
                {/* Dynamic Spotlight */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-10 transition duration-300"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${mouseX}px ${mouseY}px,
                                rgba(16, 185, 129, 0.08),
                                transparent 80%
                            )
                        `,
                    }}
                />

                {/* Decorative Beams */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-[1px]" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-[1px]" />
            </div>

            <motion.div 
                style={{ y: yContent, opacity: opacityContent, scale: scaleContent }}
                className="container mx-auto relative z-20 px-4 sm:px-6 md:px-8 w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
            >
                {/* LEFT COLUMN: Modern Typography & CTAs */}
                <div className="flex-1 flex flex-col items-start w-full text-left">
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-10 shadow-lg"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono text-white/70 uppercase tracking-[0.25em] font-semibold">
                            Production Environment: Secure
                        </span>
                    </motion.div>

                    <h1 className="font-space-grotesk font-bold tracking-tight text-white flex flex-col mb-10 w-full leading-[0.95]">
                        <motion.span 
                            initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[2.75rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] text-white/90"
                        >
                            Build
                        </motion.span>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-x-6 gap-y-2 text-[2.75rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem]"
                        >
                            <span className="text-white/20 font-mono tracking-tight text-[4rem] sm:text-[6rem]">/</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-emerald-200 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                Beyond
                            </span>
                        </motion.div>
                        <motion.span 
                            initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[2.75rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] ml-auto lg:ml-0"
                        >
                            Limits.
                        </motion.span>
                    </h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium border-l-2 border-primary/40 pl-6 bg-gradient-to-r from-white/5 to-transparent py-4 rounded-r-2xl"
                    >
                        Empowering the next generation of engineers through <span className="text-white">innovation</span>, <span className="text-white">design</span>, and <span className="text-white">industry-scale</span> execution.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-5 w-full sm:w-auto"
                    >
                        <button
                            onClick={() => {
                                const joinBtn = document.querySelector('[data-join-trigger]') as HTMLElement;
                                joinBtn?.click();
                            }}
                            className="group flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-white/90 transition-all w-full sm:w-auto overflow-hidden relative shadow-[0_10px_40px_rgba(255,255,255,0.1)] active:scale-95"
                        >
                            <Zap className="w-4 h-4 fill-current" />
                            <span>JOIN THE REVOLUTION</span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                        </button>

                        <button
                            onClick={() => {
                                const eventsSection = document.querySelector('#events');
                                eventsSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group flex items-center justify-center gap-3 px-10 py-4 bg-transparent text-white border border-white/10 hover:border-primary/50 hover:bg-primary/5 font-bold text-sm rounded-xl transition-all w-full sm:w-auto backdrop-blur-sm active:scale-95"
                        >
                            <Terminal className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span>WORKSPACE INFO</span>
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Redesigned Interface Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[45%] relative flex flex-col z-20"
                >
                    <div className="relative group p-[1px] rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-white/5 shadow-2xl">
                        <div className="relative w-full rounded-[1.95rem] bg-[#050505]/90 backdrop-blur-3xl overflow-hidden">
                            
                            {/* Panel Interaction Bar */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50 border border-white/5" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/50 border border-white/5" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/50 border border-white/5" />
                                </div>
                                <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                                    <Orbit className="w-3 h-3 text-primary animate-spin-slow" />
                                    CORE_STATION.v2
                                </div>
                            </div>

                            {/* Panel Content Dashboard */}
                            <div className="relative p-5 md:p-8 flex flex-col gap-6 md:gap-10">
                                
                                {/* Header Core */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="relative w-20 h-20 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden group/logo shadow-inner">
                                            <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover/logo:bg-primary/40 transition-colors" />
                                            <Image src={gfgLogo} alt="GFG Logo" width={45} height={45} className="relative z-10 transition-transform group-hover/logo:scale-110" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-white font-mono text-base font-bold tracking-tight">STATION ITER</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                <p className="text-white/40 text-xs font-mono uppercase tracking-tighter">Status: Initialized</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <Activity className="w-5 h-5 text-primary mb-2 opacity-50" />
                                        <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Live Telemetry</p>
                                    </div>
                                </div>

                                {/* Node Modules */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <FeatureNode 
                                        icon={Code2} 
                                        title="Synapse Core" 
                                        desc="Architecting decentralized logic for modern scales." 
                                        delay={0.5} 
                                    />
                                    <FeatureNode 
                                        icon={Shield} 
                                        title="Protocol Mesh" 
                                        desc="500+ secure node links across the ecosystem." 
                                        delay={0.6} 
                                    />
                                </div>

                                {/* Integrated IDE Window */}
                                <div className="mt-2 rounded-xl border border-white/10 bg-black/80 p-5 font-mono text-[11px] overflow-hidden shadow-inner group/ide relative">
                                    <div className="absolute top-0 right-0 p-3 opacity-20 group-hover/ide:opacity-50 transition-opacity">
                                        <Sparkles className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="space-y-1.5 leading-relaxed">
                                        <div className="flex gap-4"><span className="text-white/20 select-none">01</span><span className="text-blue-400">async function</span> <span className="text-emerald-400">initialize()</span> {"{"}</div>
                                        <div className="flex gap-4"><span className="text-white/20 select-none">02</span><span className="pl-4 text-white/70">await <span className="text-blue-400">this</span>.deploy(<span className="text-amber-300">&apos;SUCCESS&apos;</span>)</span></div>
                                        <div className="flex gap-4"><span className="text-white/20 select-none">03</span><span className="pl-4 text-purple-400">return</span> <span className="text-white/90">results;</span></div>
                                        <div className="flex gap-4"><span className="text-white/20 select-none">04</span>{"}"}</div>
                                    </div>
                                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-[9px] text-white/30 uppercase font-bold tracking-widest italic">Optimization Active</span>
                                        </div>
                                        <span className="text-[9px] font-bold text-white/20 uppercase">#88-AX9-Z</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Abstract Element */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl -z-10 rounded-full"
                    />
                </motion.div>
            </motion.div>

            {/* Decorative Connection Line */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-20 w-px bg-gradient-to-b from-primary/30 to-transparent flex flex-col items-center">
                <motion.div 
                    animate={{ y: [0, 40, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                />
            </div>
        </section>
    )
}
