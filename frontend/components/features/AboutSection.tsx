"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Cpu, Rocket, Palette, Megaphone, Briefcase, Star, LucideIcon } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Technical Excellence",
    description: "Mastering cutting-edge technologies from AI/ML to full-stack development. Our tech team pushes boundaries and builds production-grade solutions. We foster an environment of continuous learning and hands-on implementation.",
    color: "16, 185, 129", // Emerald/Green
  },
  {
    icon: Rocket,
    title: "Rapid Innovation",
    description: "From ideation to deployment in record time. Hackathons, prototyping sprints, and innovation challenges that turn concepts into reality.",
    color: "59, 130, 246", // Blue
  },
  {
    icon: Palette,
    title: "Design Mastery",
    description: "Creating award-winning UI/UX designs and brand identities that set new industry standards and deliver exceptional user experiences.",
    color: "168, 85, 247", // Purple
  },
  {
    icon: Megaphone,
    title: "Community Outreach",
    description: "Building a vibrant ecosystem of 500+ innovators. connecting us with industry leaders.",
    color: "236, 72, 153", // Pink
  },
  {
    icon: Briefcase,
    title: "Industry Ready",
    description: "Bridging campus and corporate with industry-grade projects and mentorship.",
    color: "20, 184, 166", // Teal
  },
  {
    icon: Star,
    title: "Our Impact & Success",
    description: "Measuring our success through the achievements of our members — from internships at top tech tier companies to winning international level hackathons.",
    color: "234, 179, 8", // Yellow
  },
];

// Interactive Bento Card with Mouse Glow
function BentoCard({
  item,
  index,
}: {
  item: typeof highlights[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spanClass =
    index === 0
      ? "col-span-1 md:col-span-2 md:row-span-2"
      : index === 5
      ? "col-span-1 md:col-span-4"
      : "col-span-1 md:col-span-1";

  const IconDisplay = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden flex flex-col justify-between p-6 md:p-8 transition-all hover:bg-white/[0.04] ${spanClass}`}
    >
      {/* Background radial highlight that tracks mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(${item.color}, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Top Gradient Border Reveal */}
      <div 
        className="absolute inset-x-0 top-0 h-[2px] w-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${item.color}, 1), transparent)`
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header Icon container */}
        <div 
          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex flex-shrink-0 items-center justify-center mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{
            backgroundColor: `rgba(${item.color}, 0.1)`,
            border: `1px solid rgba(${item.color}, 0.2)`
          }}
        >
          <IconDisplay className="w-6 h-6 md:w-7 md:h-7" style={{ color: `rgb(${item.color})` }} />
        </div>

        <div className="mt-auto flex flex-col gap-2 md:gap-3">
          <h3 className={`font-semibold tracking-tight text-white ${index === 0 || index === 5 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
            {item.title}
          </h3>
          <p className={`text-muted-foreground leading-relaxed ${index === 0 || index === 5 ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
             {item.description}
          </p>
        </div>
      </div>

      {/* Decorative large faded icon in background */}
      <IconDisplay 
        className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 z-0 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none"
        style={{ color: `rgba(${item.color}, 0.03)` }} 
      />
    </motion.div>
  );
}

const AboutSection = () => {
  return (
    <section className="relative py-10 md:py-16 lg:py-24 px-4 md:px-8 overflow-hidden bg-background">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-muted-foreground text-xs md:text-sm font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Core Architecture
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk tracking-tight">
            Elevating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Potential</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed text-balance">
            We are a <span className="text-primary font-medium">high-performance compiler</span> for your career. 
            A collective of developers, designers, and innovators bridging the academic gap with production-grade engineering.
          </p>
        </motion.div>

        {/* Polished Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(220px,auto)] md:auto-rows-[minmax(240px,auto)]">
          {highlights.map((item, index) => (
            <BentoCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
