"use client";

import Link from "next/link";

const pledges = [
  {
    tag: "미래산업",
    title: "포천의 미래먹거리,\n바로 실행하겠습니다.",
    icon: "fas fa-rocket",
    color: "#1e3a5f",
    items: [
      "드론산업 기회발전특구 추진 기반 확보",
      "군사규제지역 산업전환 대응 전략 마련",
      "첨단산업 유치를 위한 제도·기반 정비",
    ],
  },
  {
    tag: "책임행정",
    title: "포천의 살림,\n다시 세우겠습니다.",
    icon: "fas fa-balance-scale",
    color: "#1e293b",
    items: [
      "공모사업 사전타당성 검증 체계 구축",
      "주요 지역현안 사업 이력관리 및 사후평가 도입",
      "불용예산, 민생에 재투입하는 재정선순환 시스템 구축",
    ],
  },
  {
    tag: "생활안전",
    title: "마을 안길부터 가로수까지,\n세심하게 살피겠습니다.",
    icon: "fas fa-shield-alt",
    color: "#14532d",
    items: [
      "비법정도로 전수조사 및 관리 기준 마련",
      "생활밀착형 도로 안전관리 체계 구축 (보행자 중심 안전거리 조성)",
      "셉테드기법 활용한 CCTV설치 확대",
    ],
  },
  {
    tag: "지역경제",
    title: "침체된 포천경제에\n활력을 불어넣겠습니다.",
    icon: "fas fa-chart-line",
    color: "#7c2d12",
    items: [
      "관급공사 지역업체 참여 확대 기준 마련",
      "공공사업 조달 구조 개선",
      "지역 내 소상공인 판로 지원 확대 및 홍보교육지원 강화",
    ],
  },
  {
    tag: "관광·도시",
    title: "멈춰있는 도시,\n다시 뛰게 하겠습니다.",
    icon: "fas fa-map-marked-alt",
    color: "#312e81",
    items: [
      "관광 자원 브랜딩 및 콘텐츠 고도화",
      "체류형·테마형 관광벨트 구축",
      "디지털 기술을 접목한 스마트 관광 안내 체계 고도화",
    ],
  },
  {
    tag: "생활복지",
    title: "아이 키우기 좋고,\n가정이 행복한 포천 만들기",
    icon: "fas fa-heart",
    color: "#831843",
    items: [
      "공공산후조리원 이용료 감면 정책 확대 방안 마련",
      "24시 아이돌봄 센터 구축 지원 조례 마련",
      "어르신 바우처 택시, 돌봄 지원 확대 방안 마련",
    ],
  },
];

export default function AeK02() {
  return (
    <>
      <style jsx global>{`
        .pledge-hero {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          padding: 40px 20px 30px;
          text-align: center;
          color: white;
        }

        .pledge-hero-badge {
          display: inline-block;
          background: var(--primary-color);
          color: white;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 20px;
          margin-bottom: 14px;
          letter-spacing: 0.05em;
        }

        .pledge-hero h1 {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.4;
          margin-bottom: 1 0px;
        }

        .pledge-hero p {
          font-size: 1rem;
          opacity: 0.8;
          line-height: 1.6;
        }

        .pledge-list {
          padding: 20px 16px 50px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pledge-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }

        .pledge-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          color: white;
        }

        .pledge-card-icon {
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .pledge-card-header-text {
          flex: 1;
        }

        .pledge-card-tag {
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.25);
          padding: 2px 10px;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 6px;
          letter-spacing: 0.05em;
        }

        .pledge-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.4;
          white-space: pre-line;
        }

        .pledge-card-body {
          padding: 16px 20px 20px;
        }

        .pledge-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.88rem;
          color: #374151;
          line-height: 1.55;
        }

        .pledge-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .pledge-item-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 7px;
          flex-shrink: 0;
        }
      `}</style>

      <header>
        <nav>
          <Link href="/aek" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/aek/01" aria-label="안애경 소개">
            <i className="fas fa-user icon"></i>
            <span>안애경</span>
          </Link>
          <Link href="/aek/02" className="active" aria-label="공약 보기">
            <i className="fas fa-flag icon"></i>
            <span>공약</span>
          </Link>
          <Link href="/aek/03" aria-label="영상 보기">
            <i className="fas fa-play-circle icon"></i>
            <span>영상</span>
          </Link>
          <Link href="/aek/04" aria-label="조례성과 보기">
            <i className="fas fa-scroll icon"></i>
            <span>조례성과</span>
          </Link>
        </nav>
      </header>

      <main>
        <div className="pledge-hero">
          <span className="pledge-hero-badge">6대 핵심 공약</span>
          <h1>
            포천을 위한
            <br />
            안애경의 약속
          </h1>
          <p>시민의 삶을 바꾸는 실천 공약</p>
        </div>

        <div className="pledge-list">
          {pledges.map((pledge) => (
            <div className="pledge-card" key={pledge.tag}>
              <div
                className="pledge-card-header"
                style={{ background: pledge.color }}
              >
                <div className="pledge-card-icon">
                  <i className={pledge.icon}></i>
                </div>
                <div className="pledge-card-header-text">
                  <span className="pledge-card-tag">{pledge.tag}</span>
                  <div className="pledge-card-title">{pledge.title}</div>
                </div>
              </div>
              <div className="pledge-card-body">
                {pledge.items.map((item, i) => (
                  <div className="pledge-item" key={i}>
                    <span
                      className="pledge-item-dot"
                      style={{ background: pledge.color }}
                    ></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="navGuide" className="nav-guide">
          <div className="nav-guide-content">
            <i className="fas fa-hand-point-down"></i>
            <p>아래를 눌러 다른 페이지도 확인하세요!</p>
            <i className="fas fa-hand-point-down"></i>
          </div>
        </div>
      </main>
    </>
  );
}
