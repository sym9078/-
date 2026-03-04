import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        if (data && data.projects) {
          setProjects(data.projects);
        }
      })
      .catch(err => console.error(err));
  }, []);

  if (projects.length === 0) {
    return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex items-end justify-between border-b border-zinc-900 pb-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            SELECTED <br /> WORKS
          </h2>
          <span className="hidden md:block text-zinc-500 font-mono text-sm">
            ( {projects.length} )
          </span>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-b border-zinc-900 py-12 md:py-16 transition-colors hover:bg-zinc-900/30"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                <div className="flex items-baseline gap-6 md:w-1/3">
                  <span className="font-mono text-zinc-600 text-sm">/{project.id}</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="md:w-1/3">
                  <span className="block text-zinc-500 text-sm uppercase tracking-wider mb-2">{project.subtitle}</span>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="md:w-1/6 text-right">
                  <span className="font-mono text-zinc-600 text-sm">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
