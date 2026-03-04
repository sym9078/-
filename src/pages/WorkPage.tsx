import { motion } from 'motion/react';
import { Briefcase, MapPin } from 'lucide-react';

const workHistory = [
  {
    id: 1,
    company: 'KDT AI 활용 마케팅 & 데이터 분석 과정',
    role: 'AI-Native 마케팅 워크플로우 구축 및 데이터 기반 전략 수립',
    period: '2025.09 - 2026.04',
    location: 'Seoul, South Korea',
    description: '"AI로 효율을 더하고, 데이터로 확신을 더하는 마케팅 실무 역량"',
    achievements: [
      'AI 기반 크리에이티브 생산성 극대화: LLM & Prompt Engineering을 통한 기획 시간 50% 단축 및 AI Video/Image 툴 활용 고품질 광고 소재 제작',
      '데이터 수집 및 전처리(Data Engineering): Python(Pandas/Numpy)을 활용한 대용량 데이터 정제 및 SQL 기반 유저 세그먼트별 전환율 분석',
      '통합 마케팅 전략 기획 (IMC): 전통적 마케팅 프레임워크부터 최신 그로스 해킹 기법을 활용한 온/오프라인 통합 캠페인 설계',
      'GA4 & 퍼포먼스 모니터링: 마케팅 퍼널 분석을 통한 이탈 지점 파악 및 개선안 도출 실무 프로세스 체득'
    ]
  },
  {
    id: 2,
    company: '홍익대학교 산학협력단',
    role: 'Budget & Resource Manager (연구지원팀)',
    period: '2023.09 - 2025.09',
    location: 'Seoul, South Korea',
    description: '"정확한 예산 집행 및 리소스 관리 역량 확보"',
    achievements: [
      '대규모 예산 관리 및 정산: 연구비 예산 집행 계획 수립 및 회계법인 규정에 맞춘 정확한 정산 관리로 자금 운용 투명성 확보',
      'ERP 시스템 활용 및 데이터 관리: ERP를 통한 결재 프로세스 관리 및 조달청 입찰 업무 수행으로 데이터 무결성 유지 및 행정 효율화'
    ]
  },
  {
    id: 3,
    company: '주식회사 써니기획',
    role: 'Digital & Performance Marketer',
    period: '2022.05 - 2023.07',
    location: 'Seoul, South Korea',
    description: '"데이터 기반의 풀퍼널(Full-funnel) 마케팅 전략 수립 및 ROAS 최적화"',
    achievements: [
      '다채널 광고 캠페인 운영 및 최적화: Google Ads, Meta, Kakao, Dable 등 주요 매체 믹스 전략 수립 및 신규 제품 런칭 캠페인 주도',
      '데이터 기반 인사이트 도출: 캠페인 성과 데이터(CTR, CVR, ROAS) 분석을 통한 저효율 소재 OFF 및 고효율 타겟 집중 예산 최적화',
      '구매 전환율(CVR) 개선: 이탈률 데이터 기반 랜딩페이지 UI/UX 개선 및 타겟 맞춤형 A/B 테스트를 통한 전환율 상승 견인',
      '제휴 마케팅 및 성과 보고: 카드사 협력 광고 기획/집행 및 데이터 시각화 도구를 활용한 정량적 성과 보고서 작성'
    ]
  },
  {
    id: 4,
    company: '에스앤지(S&G)',
    role: 'Content Marketer',
    period: '2021.05 - 2022.01',
    location: 'Seoul, South Korea',
    description: '"SEO 및 콘텐츠 마케팅을 통한 오가닉 트래픽 증대 및 고객 경험 관리"',
    achievements: [
      '콘텐츠 SEO 및 채널 최적화: 네이버 블로그 및 SNS 채널(인스타, 페이스북, 유튜브) 검색 키워드 상위 노출 전략 실행으로 브랜드 인지도 제고',
      '고객 여정(Customer Journey) 분석: Google Analytics를 활용한 유입 경로 및 고객 행동 데이터 분석, 구매 전환율 개선 콘텐츠 기획',
      '검색 광고(SA) 운영 지원: 네이버 GFA 및 검색 광고 입찰 관리와 키워드 효율 분석을 통한 메인 마케터 서포트 및 ROAS 개선 기여'
    ]
  }
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">WORK EXPERIENCE</h1>
        <p className="text-zinc-400 text-lg max-w-2xl mb-16">
          A timeline of my professional journey, focusing on data-driven marketing and AI integration.
        </p>

        <div className="space-y-12">
          {workHistory.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Mobile only) */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                {/* Left Column: Meta Data */}
                <div className="md:col-span-1 md:text-right relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-37px] md:left-auto md:-right-6 top-2 w-3 h-3 rounded-full bg-zinc-300 border-4 border-zinc-950 z-10" />
                  {/* Timeline Line (Desktop) */}
                  <div className="hidden md:block absolute -right-[18px] top-0 bottom-[-3rem] w-px bg-zinc-800" />
                  
                  <h3 className="text-xl font-bold text-white mb-2">{job.period}</h3>
                  <div className="flex items-center md:justify-end gap-2 text-zinc-500 text-sm mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center md:justify-end gap-2 text-zinc-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="md:col-span-3 pb-8 md:pb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{job.role}</h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-300">
                          <span className="text-zinc-600 mt-1">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
