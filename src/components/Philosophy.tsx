import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-12">
              WORK <br /> PHILOSOPHY
            </h2>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Automation First</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                "단순 반복 작업은 파이썬과 자동화 스크립트에 맡기고, 
                마케터로서 'Why'와 'How'에 집중합니다."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Relentless Refinement</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                "원하는 결과물이 나올 때까지 집요하게 
                AI 프롬프트를 수정하고 깎아내는 집념이 있습니다."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
