"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, UserCheck } from "lucide-react"
import { timelineData } from "@/data/timeline-content"
import { cn } from "@/lib/utils"

export default function EvolutionEventClient({ id }: { id: string }) {
    const router = useRouter()
    const [imgError, setImgError] = useState(false)

    // Find the section data from timelineData
    const event = useMemo(() => {
        const found = timelineData.find((t) => t.id === id)
        if (!found) return null
        return found
    }, [id])

    if (!event) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0A0A0A]">
                <h1 className="text-2xl font-bold font-space-grotesk text-gray-900 dark:text-white mb-4">Event Not Found</h1>
                <Link href="/#evolution" className="text-[#005DAA] dark:text-[#38bdf8] hover:opacity-80 transition-opacity">
                    Return to Timeline
                </Link>
            </div>
        )
    }

    const details = event.subsections?.[0] || event as any
    const displayDate = event.date || details.date || 'TBD'
    const displayTime = event.time || details.time || 'TBD'
    const displayLocation = event.location || details.location || 'TBD'
    const displayParticipants = event.attendees || details.attendees || 'TBD'
    const displaySpeaker = event.speaker || details.speaker || null

    const firstMedia = event.media?.[0]?.url || details.media?.[0]?.url || null
    const fallbackImage = "/images/team/Mukesh.jpg"
    const heroImage = firstMedia || fallbackImage

    return (
        <main className="min-h-screen w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] font-sans pb-24 pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            {/* Mesh overlay background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"%3E%3Cg fill=\\\"%23000000\\\" fill-opacity=\\\"1\\\" fill-rule=\\\"evenodd\\\"%3E%3Ccircle cx=\\\"3\\\" cy=\\\"3\\\" r=\\\"1\\\"/%3E%3C/g%3E%3C/svg%3E')" }} />

            <div className="max-w-[1100px] mx-auto flex flex-col gap-6 lg:gap-8 relative z-10 w-full">
                
                {/* Back Link */}
                <button
                    onClick={() => router.push('/#evolution')}
                    className="group inline-flex items-center gap-2 text-[#005DAA] dark:text-[#38bdf8] hover:opacity-80 font-medium text-[15px] transition-all w-fit"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Events
                </button>

                {/* Hero Banner Container */}
                <div className="relative w-full aspect-[21/9] min-h-[300px] md:min-h-[420px] max-h-[500px] rounded-[24px] overflow-hidden shadow-lg border border-black/5 dark:border-white/10 bg-gray-900 group">
                    {/* Background Visual */}
                    {!imgError ? (
                        <img 
                            src={heroImage} 
                            alt={event.title} 
                            onError={() => setImgError(true)}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#005DAA]/80 to-purple-900/80 transition-transform duration-700 group-hover:scale-105" />
                    )}
                    
                    {/* Dark gradient overlay - stronger at bottom left */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent opacity-90" />

                    {/* Content within Banner */}
                    <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col gap-4 max-w-3xl pr-6 z-10">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2.5">
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#005DAA] text-white shadow-sm">
                                {event.subtitle || "Session"}
                            </span>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#F97316] text-white shadow-sm">
                                Offline
                            </span>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-sm">
                                Past
                            </span>
                        </div>
                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                            {event.title}
                        </h1>
                    </div>
                </div>

                {/* Layout Grid (Main Content & Sidebar) */}
                <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
                    
                    {/* Left Column (Information) */}
                    <div className="flex-1 w-full flex flex-col gap-8 min-w-0">
                        
                        {/* Detail Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <InfoCard icon={Calendar} label="Date" value={displayDate} />
                            <InfoCard icon={Clock} label="Time" value={displayTime} />
                            <InfoCard icon={MapPin} label="Location" value={displayLocation} />
                            <InfoCard icon={UserCheck} label="Status" value={`Concluded`} />
                        </div>

                        {/* About Card */}
                        <div className="bg-white dark:bg-[#111111] border border-gray-200/80 dark:border-white/10 rounded-[24px] p-8 md:p-10 shadow-sm shadow-black/5 hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                                About this Event
                            </h3>
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 text-[17px] leading-relaxed whitespace-pre-wrap">
                                    {(event as any).description || details.description || "The core ideas and the big opportunities. An engaging and accessible session that explores transformative concepts, team collaborations, and real-world applications within the GeeksforGeeks student chapter context."}
                                </p>
                            </div>
                        </div>

                        {/* Speaker Card */}
                        {displaySpeaker && (
                            <div className="bg-white dark:bg-[#111111] border border-gray-200/80 dark:border-white/10 rounded-[24px] p-8 md:p-10 shadow-sm shadow-black/5 hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
                                    Speaker
                                </h3>
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden border-[4px] border-gray-50 dark:border-gray-800 shadow-sm bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-3xl font-bold text-[#005DAA]">
                                        {displaySpeaker.image ? (
                                            <img src={displaySpeaker.image} alt={displaySpeaker.name} className="object-cover w-full h-full" />
                                        ) : (
                                            displaySpeaker.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)
                                        )}
                                    </div>
                                    <div className="flex flex-col space-y-2 flex-1 min-w-0">
                                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                                            {displaySpeaker.name}
                                        </h4>
                                        <p className="text-[#005DAA] dark:text-[#38bdf8] font-semibold text-base">
                                            {displaySpeaker.title}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mt-2 max-w-2xl break-words whitespace-pre-wrap">
                                            {displaySpeaker.bio || "Industry leading expert sharing actionable insights."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="w-full lg:w-[360px] shrink-0 sticky top-28">
                        {/* Primary Action Card */}
                        <div className="bg-[#005DAA] dark:bg-[#004e8f] rounded-[24px] p-8 shadow-xl shadow-blue-900/10 text-white border border-blue-400/20 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl" />
                            
                            <h3 className="text-2xl font-bold mb-4 tracking-tight relative z-10">
                                Event Concluded
                            </h3>
                            <p className="text-blue-100/90 text-[15px] leading-relaxed mb-8 relative z-10">
                                This event has wrapped up. Thank you for making it a success. Stay tuned for our future events and check out the timeline for more updates.
                            </p>
                            
                            <div className="h-px w-full bg-blue-400/30 mb-6 relative z-10" />
                            
                            <div className="relative z-10">
                                <p className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mb-2">
                                    Questions? Contact
                                </p>
                                <a href="mailto:gfgiter@gmail.com" className="text-white font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity">
                                    gfgiter@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

function InfoCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    if (value === "—") return null;
    return (
        <div className="bg-white dark:bg-[#111111] border border-gray-200/80 dark:border-white/10 rounded-[20px] p-6 flex flex-col justify-center gap-3 shadow-sm shadow-black/5 hover:border-gray-300 dark:hover:border-white/20 transition-colors w-full">
            <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-[#005DAA] dark:text-[#38bdf8] shrink-0">
                    <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-900 dark:text-gray-100 text-[15px]">{label}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-[16px] pl-[52px]">
                {value}
            </p>
        </div>
    )
}

