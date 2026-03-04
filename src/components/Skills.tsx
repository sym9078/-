import { motion } from 'motion/react';

export default function Skills() {
  const skills = [
    {
      category: "AI & Automation",
      items: ["Prompt Engineering", "AI Video (Kling/Flow)", "AI Image (Midjourney)", "Python Automation"]
    },
    {
      category: "Performance & Data",
      items: ["Data Analysis (Pandas)", "SQL", "GA4 & Meta Ads", "A/B Testing"]
    },
    {
      category: "Content & Planning",
      items: ["Trend Catching", "Brand Storytelling", "Copywriting", "Creative Directing"]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            CAPABILITIES
          </h2>
          <div className="h-px w-full bg-zinc-900" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-900 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xl md:text-2xl text-zinc-300 font-light hover:text-white transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
