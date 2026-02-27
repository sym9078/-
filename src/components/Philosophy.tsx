import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Quote className="w-12 h-12 text-zinc-700 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How I Work</h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-10 rounded-3xl"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-200">
              "단순 반복 작업은 <span className="text-emerald-400 font-medium">파이썬과 자동화 스크립트</span>에 맡기고, 
              <br className="hidden md:block" />
              마케터로서 <span className="text-indigo-400 font-medium">'Why'와 'How'</span>에 집중합니다."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-10 rounded-3xl"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-200">
              "원하는 결과물이 나올 때까지 집요하게 
              <br className="hidden md:block" />
              <span className="text-pink-400 font-medium">AI 프롬프트를 수정하고 깎아내는 집념</span>이 있습니다."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
