import { motion } from 'motion/react';

export default function Profile() {
  const workflow = [
    {
      step: "01",
      title: "Ideation",
      desc: "LLM을 활용한 시장 조사 및 카피라이팅 초안 도출"
    },
    {
      step: "02",
      title: "Creation",
      desc: "AI 영상/이미지 툴을 활용한 스토리보드 및 소재 제작"
    },
    {
      step: "03",
      title: "Optimization",
      desc: "퍼포먼스 매체 세팅 및 데이터 분석을 통한 효율 개선"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-8">
              Profile
            </h2>
            <p className="text-3xl md:text-4xl font-bold leading-tight text-white mb-8">
              "콘텐츠로 사람을 모으고,<br />
              퍼포먼스로 숫자를 만듭니다."
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              단순히 툴을 사용하는 것을 넘어, 마케팅의 본질인 '설득'과 '성과'에 집중합니다.
              AI는 속도를, 데이터는 방향을 제시하는 도구일 뿐입니다.
              그 도구를 가장 잘 다루는 마케터가 되겠습니다.
            </p>
          </motion.div>

          <div className="space-y-12">
            {workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-zinc-900 pt-8"
              >
                <span className="font-mono text-zinc-600 text-sm mb-2 block">/{item.step}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
