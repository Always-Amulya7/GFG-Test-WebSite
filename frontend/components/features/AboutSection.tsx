"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket, Palette, Megaphone, Briefcase, Star } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Technical Excellence",
    description: "Mastering cutting-edge technologies from AI/ML to full-stack development. Our tech team pushes boundaries and builds production-grade solutions.",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/40",
    topGlow: "from-blue-500/50 via-blue-500/10 to-transparent",
    bottomGlow: "bg-blue-500/20",
    bgIcon: "text-blue-400/[0.12]",
  },
  {
    icon: Rocket,
    title: "Rapid Innovation",
    description: "From ideation to deployment in record time. Hackathons, prototyping sprints, and innovation challenges that turn concepts into reality.",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    topGlow: "from-cyan-500/50 via-cyan-500/10 to-transparent",
    bottomGlow: "bg-cyan-500/20",
    bgIcon: "text-cyan-400/[0.12]",
  },
  {
    icon: Palette,
    title: "Design Mastery",
    description: "Creating award-winning UI/UX designs and brand identities that set new industry standards and deliver exceptional user experiences.",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/40",
    topGlow: "from-purple-500/50 via-purple-500/10 to-transparent",
    bottomGlow: "bg-purple-500/20",
    bgIcon: "text-purple-400/[0.12]",
  },
  {
    icon: Megaphone,
    title: "Community & Outreach",
    description: "Building a vibrant ecosystem of 500+ innovators. Our outreach team amplifies our voice and connects us with industry leaders worldwide.",
    iconColor: "text-pink-400",
    borderColor: "border-pink-500/40",
    topGlow: "from-pink-500/50 via-pink-500/10 to-transparent",
    bottomGlow: "bg-pink-500/20",
    bgIcon: "text-pink-400/[0.12]",
  },
  {
    icon: Briefcase,
    title: "Industry Ready",
    description: "Bridging the gap between campus and corporate with industry-grade projects, mentorship programs, and career-focused workshops.",
    iconColor: "text-teal-400",
    borderColor: "border-teal-500/40",
    topGlow: "from-teal-500/50 via-teal-500/10 to-transparent",
    bottomGlow: "bg-teal-500/20",
    bgIcon: "text-teal-400/[0.12]",
  },
  {
    icon: Star,
    title: "Our Impact",
    description: "Measuring our success through the achievements of our members — from internships at top companies to winning international hackathons.",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/40",
    topGlow: "from-yellow-500/50 via-yellow-500/10 to-transparent",
    bottomGlow: "bg-yellow-500/20",
    bgIcon: "text-yellow-400/[0.12]",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-visible">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center text-center">

             {/* Pill Badge */}
            <div className="mb-4 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/60 text-white tracking-widest text-sm font-semibold backdrop-blur-sm">
                   <span className="w-2 h-2 bg-white rounded-full"></span>WHO WE ARE
            </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 font-mono">
                # About The <span className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]">Chapter</span>
         </h2>
         <span className="block mx-auto mt-2 w-32 h-1 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]"></span>
         </div>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed mb-4">
            We are not just a club; we are a{" "}
            <span className="text-green-500 font-semibold">high-performance compiler</span>{" "}
            for your career. A community of passionate developers, designers, and innovators
            dedicated to bridging the gap between academic curriculum and industry demands.
          </p>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            We organize hackathons, coding contests, and technical workshops to ensure you
            ship code that matters. From AI-driven solutions to full-stack applications, we
            turn concepts into reality.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 auto-rows-[minmax(220px,auto)]">
          {highlights.map((item, index) => {
            // Bento spans: 0,5 = wide (4col), 1,2,3,4 = standard (3col/2col)
            const spanClass =
              index === 0
                ? "lg:col-span-4"
                : index === 1
                ? "lg:col-span-2"
                : index === 2
                ? "lg:col-span-3"
                : index === 3
                ? "lg:col-span-3"
                : index === 4
                ? "lg:col-span-2"
                : "lg:col-span-4";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-xl bg-card/60 backdrop-blur-sm p-6 overflow-hidden
                  transition-all duration-300 min-h-[220px] ${spanClass}
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40`}
              >
                {/* Animated border-gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-xl border-2 border-transparent
                    bg-clip-border opacity-60 group-hover:opacity-100 transition-opacity duration-500
                    pointer-events-none`}
                  style={{
                    background: `linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, ${item.iconColor.replace('text-', '').replace('-400', '')}80, transparent 60%) border-box`,
                  }}
                />
                {/* Simpler CSS border gradient */}
                <div className={`absolute inset-0 rounded-xl border ${item.borderColor} group-hover:border-opacity-100 transition-all duration-300 pointer-events-none`} />
                {/* Top border bright glow line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.topGlow} group-hover:h-[3px] transition-all duration-300`} />

                {/* Background glow blobs */}
                <div className={`absolute -bottom-10 -right-10 w-48 h-48 ${item.bottomGlow} blur-[60px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute -top-10 -left-10 w-32 h-32 ${item.bottomGlow} blur-[50px] rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />

                {/* Large faded background icon */}
                <div className="absolute -bottom-4 -right-4 pointer-events-none">
                  <item.icon className={`w-36 h-36 ${item.bgIcon}`} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className={`w-11 h-11 rounded-lg bg-background/70 border ${item.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
