import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-mono font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
            AI & Data Driven Marketer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white"
        >
          가설은 <span className="text-indigo-400">AI</span>로 빠르게 그리고,<br />
          검증은 <span className="text-emerald-400">데이터</span>로 날카롭게 합니다.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto"
        >
          AI와 데이터를 무기로, 크리에이티브와 퍼포먼스의 경계를 허무는 마케터
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 max-w-2xl mx-auto text-zinc-500 leading-relaxed"
        >
          <p>
            매력적인 콘텐츠(에뛰드 브랜드 필름 등)를 기획하는 감각과, 
            타겟을 정확히 찌르는 퍼포먼스 마케팅(메가박스 MSG 등), 
            그리고 이 모든 과정을 AI로 자동화/효율화하는 실행력을 갖추고 있습니다.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
