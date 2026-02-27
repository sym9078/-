import { motion } from 'motion/react';
import { Lightbulb, PenTool, BarChart3 } from 'lucide-react';

export default function Profile() {
  const steps = [
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "Ideation",
      desc: "LLM을 활용한 시장 조사 및 카피라이팅 초안 도출"
    },
    {
      icon: <PenTool className="w-6 h-6 text-pink-400" />,
      title: "Creation",
      desc: "AI 영상/이미지 툴을 활용한 스토리보드 및 소재 제작"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: "Action & Optimization",
      desc: "퍼포먼스 매체 세팅 및 파이썬/데이터 분석을 통한 A/B 테스트와 효율 개선"
    }
  ];

  return (
    <section id="profile" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Profile & Philosophy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 font-medium"
          >
            "콘텐츠로 사람을 모으고, 퍼포먼스로 숫자를 만듭니다."
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-mono">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
