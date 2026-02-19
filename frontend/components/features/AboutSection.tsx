"use client"

import { motion } from "framer-motion"
import { Cpu, Globe, Zap, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

// Changed from default imports to named imports (added curly braces)
import { SectionShell } from "../layout/navigation"
import { GlassCard } from "../ui/cards"
import { GradientText } from "../ui/effects"

const features = [
    {
        title: "Technical Excellence",
        description: "Mastering complex algorithms and modern frameworks to build robust digital solutions.",
        icon: Cpu,
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-400"
    },
    {
        title: "Global Community",
        description: "Connecting passionate developers across borders to share knowledge and innovate together.",
        icon: Globe,
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-400"
    },
    {
        title: "Rapid Innovation",
        description: "Turning ideas into reality with agile development and cutting-edge technologies.",
        icon: Zap,
        color: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-400"
    },
    {
        title: "Clean Code",
        description: "Prioritizing maintainability and performance in every line of code we write.",
        icon: Code2,
        color: "from-emerald-500/20 to-teal-500/20",
        iconColor: "text-emerald-400"
    }
]

export function AboutSection() {
    return (
        <SectionShell id="about">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            About <GradientText>GFG Official</GradientText>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-[600px]">
                            We are a community of creators, thinkers, and builders dedicated to pushing the boundaries of what&apos;s possible in the digital realm.
                        </p>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            Founded with the vision of bridging the gap between theory and practice, GFG Official has grown into a vibrant ecosystem for developers at all stages of their journey.
                        </p>
                        <p>
                            Our mission is to empower individuals with the tools, knowledge, and community support they need to excel in the ever-evolving landscape of technology.
                        </p>
                    </div>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="p-6 h-full hover:border-primary/50 transition-colors group">
                                <div className={cn(
                                    "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
                                    feature.color
                                )}>
                                    <feature.icon className={cn("w-6 h-6", feature.iconColor)} />
                                </div>
                                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionShell>
    )
}