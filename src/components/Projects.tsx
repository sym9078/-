import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: "Project A: 에뛰드(Etude) 브랜드 필름 및 뷰티 마케팅 기획",
      tag: "Content x AI",
      role: "콘텐츠 마케터",
      action: "뷰티 타겟의 트렌드를 분석하고, AI 툴(영상/이미지)을 적극 활용하여 브랜드 필름 스토리보드와 시각 자료를 빠르게 프로토타이핑.",
      highlight: "고품질 AI 프롬프트 작성 능력과 브랜드 톤앤매너를 맞추는 크리에이티브 디렉팅 역량 강조.",
      color: "text-pink-400 border-pink-400/20 bg-pink-400/5"
    },
    {
      title: "Project B: 메가박스 서브컬처 특화관 'MSG' 런칭 및 공간 마케팅",
      tag: "Performance x Data",
      role: "퍼포먼스 마케터 & 기획자",
      action: "애니메이션 팬덤의 니즈를 분석하여 타겟 맞춤형 공간 'MSG' 기획. 서브컬처 문화 공간을 위한 입지 선정 데이터 분석 수행.",
      highlight: "온/오프라인을 연결하는 데이터 기반의 의사결정과, 뾰족한 타겟팅을 통한 퍼포먼스 극대화 전략.",
      color: "text-purple-400 border-purple-400/20 bg-purple-400/5"
    },
    {
      title: "Project C: 스팀(Steam) 게임 플랫폼 데이터 분석 및 마케팅 전략",
      tag: "Data x Automation",
      role: "데이터 분석가",
      action: "글로벌 게임 플랫폼 스팀의 데이터를 분석하고, 파이썬 웹 스크래핑을 통해 유의미한 인사이트 도출.",
      highlight: "로우 데이터(Raw data)를 다루고 정제하는 파이썬(Pandas) 활용 능력과, 이를 마케팅 액션으로 연결하는 논리력.",
      color: "text-blue-400 border-blue-400/20 bg-blue-400/5"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Key Projects
        </motion.h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-mono rounded-full border mb-4 ${project.color}`}>
                    {project.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-[120px_1fr] gap-6 text-zinc-400">
                <div className="font-mono text-sm text-zinc-500 uppercase tracking-wider pt-1">Role</div>
                <div className="text-zinc-300 font-medium">{project.role}</div>

                <div className="font-mono text-sm text-zinc-500 uppercase tracking-wider pt-1">Action</div>
                <div className="leading-relaxed">{project.action}</div>

                <div className="font-mono text-sm text-zinc-500 uppercase tracking-wider pt-1">Highlight</div>
                <div className="leading-relaxed text-zinc-300">{project.highlight}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
