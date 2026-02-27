import { motion } from 'motion/react';
import { Cpu, Target, Palette } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Automation",
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      items: [
        { label: "Prompt Engineering", desc: "다양한 LLM을 활용한 마케팅 카피 기획 및 리서치." },
        { label: "AI Video", desc: "Kling, Flow, Grok 등을 활용한 브랜드 필름 및 숏폼 영상 소스 제작." },
        { label: "AI Image", desc: "Nano Banana, Midjourney 등을 활용한 광고 소재 및 고해상도 시각물 렌더링." },
        { label: "Automation", desc: "Python(Selenium, BeautifulSoup)을 활용한 크롤링, 오토 마우스 프로그램 제작 등 업무 자동화." }
      ]
    },
    {
      title: "Performance & Data",
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      items: [
        { label: "Data Analysis", desc: "Python (Pandas), SQL을 활용한 유저 행동 및 공간 입지 데이터 분석." },
        { label: "Ad Operations", desc: "GA4, Meta Ads, Search Ads 매체 운영 및 성과 최적화." }
      ]
    },
    {
      title: "Content & Planning",
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      items: [
        { label: "Trend Catching", desc: "트렌드 캐칭(K-pop, 서브컬처/애니메이션 팬덤 이해도 등) 및 브랜드 캠페인 기획." }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Core Skills
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-zinc-800 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-mono text-zinc-200 font-semibold text-lg border-l-2 border-zinc-700 pl-3">
                      {item.label}
                    </h4>
                    <p className="text-zinc-400 pl-3.5 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
