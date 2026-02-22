"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, Mail, BookOpen } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface FacultyMember {
  name: string;
  designation: string;
  role: string;
  quote: string;
  id: string;
  image: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Faculty Sponsor 2",
    designation: "Faculty Coordinator | SOADU",
    role: "Faculty Sponsor | GFG Student Chapter",
    quote:
      "Research is not reserved for a chosen few; it begins the moment a student learns to ask meaningful questions. As engineering undergraduates, you already stand at the edge of discovery. I encourage each of you to explore, experiment, and contribute because today's curiosity becomes tomorrow's innovation.",
    id: "ADVISOR-001",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Faculty Sponsor 2",
    designation: "Faculty Coordinator | SOADU",
    role: "Faculty Co-sponsor | GFG Student Chapter",
    quote:
      "Research does not begin in laboratories, it begins in curious minds. The moment you start questioning how and why things work, you step into the world of discovery. As engineering students, your ideas today can become tomorrow's breakthroughs.",
    id: "ADVISOR-002",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop&crop=face",
  },
];

const FloatingParticle = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-yellow-400/40"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);


const FacultySponsorSection = () => {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/[0.015] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 text-yellow-400 text-sm font-mono tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            MENTORSHIP & GUIDANCE
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-wide">
            Faculty <span className="text-yellow-400 relative">
              Sponsors
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-xl mx-auto">
            The guiding force behind our chapter's vision and academic excellence.
          </p>
        </motion.div>

        {/* Faculty Cards */}
        <div className="flex flex-col gap-20">
          {facultyMembers.map((member, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="group relative rounded-2xl border border-yellow-500/15 bg-card/40 backdrop-blur-md overflow-hidden hover:border-yellow-500/40 transition-all duration-700"
                style={{
                  boxShadow: "0 0 80px -20px rgba(234, 179, 8, 0.06)",
                }}
              >
                {/* Floating particles */}
                <FloatingParticle delay={0} x="10%" y="20%" />
                <FloatingParticle delay={0.5} x="85%" y="30%" />
                <FloatingParticle delay={1} x="50%" y="70%" />
                <FloatingParticle delay={1.5} x="25%" y="80%" />
                <FloatingParticle delay={2} x="75%" y="15%" />
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-500/[0.04] group-hover:via-yellow-400/[0.02] group-hover:to-yellow-500/[0.04] transition-all duration-700 pointer-events-none" />
                {/* Top accent line with animation */}
                <motion.div
                  className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-yellow-500/80 via-yellow-400/50 to-transparent"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                />
                {/* Side accent */}
                <div className={`absolute top-0 ${isReversed ? 'right-0' : 'left-0'} w-[3px] h-full bg-gradient-to-b from-yellow-400 via-yellow-500/40 to-transparent`} />

                <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch`}>
                  
                  {/* Avatar Area */}
                  <div className="relative w-full md:w-[300px] lg:w-[350px] shrink-0 flex items-center justify-center p-10">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-transparent" />

                    {/* Decorative rings */}
                    <motion.div
                      className="absolute w-60 h-68 lg:w-68 lg:h-76 rounded-xl border border-yellow-500/10"
                      animate={{ rotate: [6, 4, 6] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    
                    {/* Tilted frame behind */}
                    <div className="absolute w-48 h-56 lg:w-56 lg:h-64 rounded-xl border-2 border-yellow-500/25 rotate-3 bg-yellow-500/5 group-hover:rotate-6 transition-transform duration-700" />
                    
                    {/* Main avatar frame */}
                    <motion.div
                      className="relative w-48 h-56 lg:w-56 lg:h-64 rounded-xl border-2 border-yellow-500/40 bg-muted/40 flex items-center justify-center overflow-hidden -rotate-1 group-hover:rotate-0 transition-transform duration-500"
                      whileHover={{ scale: 1.03 }}
                      style={{
                         boxShadow: "0 8px 40px rgba(234, 179, 8, 0.2), 0 0 0 1px rgba(234, 179, 8, 0.1)",
                      }}
                    >
                      <Avatar className="w-full h-full rounded-none">
                        <AvatarImage src={member.image} alt={member.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                        <AvatarFallback className="rounded-none text-3xl font-bold bg-muted/60 text-yellow-400">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                    {/* Image overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
              
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Name with stagger */}
                    <motion.h3
                      initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                      className="text-2xl lg:text-3xl font-bold text-foreground mb-3 tracking-tight"
                    >
                      {member.name}
                    </motion.h3>

                    {/* Designation & Role badges */}
                    <motion.div
                      initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="flex flex-wrap gap-2 mb-2"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                        <BookOpen className="w-3 h-3" />
                        {member.designation}
                      </span>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.35 + index * 0.15 }}
                      className="text-muted-foreground text-sm mb-6 flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-yellow-500/50" />
                      {member.role}
                     </motion.p>

                    {/* Quote Box */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                      className="relative rounded-xl border border-yellow-500/15 bg-gradient-to-br from-yellow-500/[0.06] to-yellow-400/[0.02] p-6 group-hover:border-yellow-500/25 transition-colors duration-500"
                    >
                      {/* Quote accent line */}
                      <div className="absolute top-4 bottom-4 left-0 w-[3px] rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500/20" />
                      
                      <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-500/15 group-hover:text-yellow-500/30 transition-colors duration-500" />
                      
                      <p className="text-muted-foreground text-sm leading-relaxed italic pl-4 pr-8">
                        "{member.quote}"
                      </p>
                    
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center mt-20 gap-4"
        >
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-yellow-500/30" />
          <span className="text-muted-foreground/50 text-xs font-mono tracking-[0.3em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/40 animate-pulse" />
            GUIDANCE_ACTIVE
          </span>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-yellow-500/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySponsorSection;
