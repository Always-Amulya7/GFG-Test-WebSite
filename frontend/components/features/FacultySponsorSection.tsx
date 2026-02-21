"use client";

import { motion } from "framer-motion";
import { GraduationCap, User, BookOpen } from "lucide-react";

interface FacultyMember {
  name: string;
  designation: string;
  about: string;
  id: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Faculty Sponser 2",
    designation: "Faculty Coordinator | SOADU",
    about:
      "A distinguished academician with deep expertise in computer science and technology. Guides and mentors the chapter towards technical excellence and professional growth, fostering innovation among students.",
    id: "ADVISOR-001",
  },
  {
    name: "Faculty Sponsor 2",
    designation: "Faculty Coordinator | SOADU",
    about:
      "An experienced educator passionate about bridging the gap between academia and industry. Provides strategic direction and support to ensure the chapter delivers impactful learning experiences.",
    id: "ADVISOR-002",
  },
];

const FacultySponsorSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 text-yellow-400 text-sm font-mono tracking-widest mb-5">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            MENTORSHIP & GUIDANCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide">
            Faculty <span className="text-yellow-400">Sponsors</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            The guiding force behind our chapter's vision and academic excellence.
          </p>
        </motion.div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl border border-yellow-500/20 bg-card/40 overflow-hidden"
              style={{
                boxShadow: "0 0 40px -10px rgba(234, 179, 8, 0.1)",
              }}
            >
              {/* Card Header Bar */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-yellow-500/20 bg-yellow-500/5">
                <span className="text-yellow-400 text-xs font-mono font-bold tracking-widest">
                  FACULTY SPONSOR
                </span>
                <span className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  {member.id}
                </span>
              </div>

              <div className="p-8 flex flex-col items-center text-center">
                {/* Avatar Circle */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-muted/30 border-2 border-yellow-500/30 flex items-center justify-center"
                    style={{
                      borderStyle: "dashed",
                    }}
                  >
                    <GraduationCap className="w-14 h-14 text-yellow-400" />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {member.name}
                </h3>

                {/* Designation Badge */}
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 text-yellow-400 text-xs font-mono tracking-wide mb-5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {member.designation}
                </span>

                {/* About */}
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
                  {member.about}
                </p>

                {/* Role Tags */}
                <div className="flex gap-3 w-full">
                  <div className="flex-1 rounded-xl border border-border/60 bg-muted/20 py-4 flex flex-col items-center gap-2">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-mono tracking-wider">MENTOR</span>
                  </div>
                  <div className="flex-1 rounded-xl border border-border/60 bg-muted/20 py-4 flex flex-col items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-mono tracking-wider">ADVISOR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center mt-12 gap-4"
        >
          <div className="h-[1px] w-16 bg-border" />
          <span className="text-muted-foreground/50 text-xs font-mono tracking-[0.3em]">
            GUIDANCE_ACTIVE
          </span>
          <div className="h-[1px] w-16 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySponsorSection;

