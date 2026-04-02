import { timelineData } from "@/data/timeline-content"
import EvolutionEventClient from "./client"

export function generateStaticParams() {
    return timelineData.map((section) => ({
        id: section.id,
    }))
}

export default async function EvolutionEventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return <EvolutionEventClient id={id} />
}
