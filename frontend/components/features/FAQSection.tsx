"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react"

const FAQs = [
    {
        question: "Who can join the GFG Student Chapter?",
        answer: "Any student from ITER, regardless of their branch or year, with a passion for coding and technology can join. We welcome beginners and experts alike."
    },
    {
        question: "What events do you organize?",
        answer: "We organize a wide range of events including coding contests like 'CodeCombat', technical workshops on Web Dev, AI/ML, hackathons, and guest lectures from industry experts."
    },
    {
        question: "How can I become a core team member?",
        answer: "We open recruitment drives annually. Keep an eye on our social media channels for announcements. Selection is based on skills, dedication, and passion."
    },
    {
        question: "Is there a membership fee?",
        answer: "No, joining the community is completely free. We believe in open knowledge sharing and accessible education for everyone."
    },
    {
        question: "Do you provide certificates?",
        answer: "Yes, active participation in our workshops and winning contests will earn you certificates and sometimes cool swags!"
    }
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="relative py-10 md:py-16 lg:py-24 bg-[#020202] overflow-hidden" id="faq">
            {/* High-End Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute -left-40 top-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute -right-40 top-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container mx-auto relative z-10 px-4 md:px-6 w-full max-w-4xl">
                
                {/* Redesigned Header */}
                <div className="flex flex-col items-center text-center mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-muted-foreground text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase mb-6"
                    >
                        <HelpCircle className="w-3 h-3 text-primary" />
                        System: Knowledge_Base
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk tracking-tighter text-white mb-6">
                        Frequent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Queries</span>
                    </h2>
                    
                    <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto leading-relaxed opacity-80">
                        Everything you need to know about the chapter, technical operations, and community protocols.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {FAQs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 border ${
                                openIndex === idx 
                                    ? 'border-primary/30 bg-primary/[0.02]' 
                                    : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-space-grotesk font-bold text-base md:text-lg transition-colors ${
                                    openIndex === idx ? 'text-white' : 'text-white/70 group-hover:text-white'
                                }`}>
                                    {faq.question}
                                </span>
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-500 ${
                                    openIndex === idx 
                                        ? 'border-primary bg-primary text-black' 
                                        : 'border-white/10 text-white/30 group-hover:border-white/30 group-hover:text-white'
                                }`}>
                                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-8 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-white/5 pt-6 bg-gradient-to-b from-white/[0.02] to-transparent">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Final Interactive Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/10" />
                        <Sparkles className="w-4 h-4 text-primary opacity-50" />
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/10" />
                    </div>
                    <p className="text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em]">
                        Advanced Information Retrieval Protocol: Active
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
