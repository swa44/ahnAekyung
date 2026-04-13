"use client";

import Link from "next/link";

export default function AeK01() {
  return (
    <>
      <style jsx global>{`
        .profile-section {
          position: relative;
          text-align: center;
          background: linear-gradient(135deg, #1e293b, #334155);
          color: white;
          margin-bottom: 20px;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dot {
          color: #334155 !important;
          font-weight: bold;
          margin-right: 5px;
        }

        .career-section {
          background: white;
          border-radius: 15px;
          padding: 25px 20px;
          margin: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 100;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #334155 !important;
        }

        .section-header i {
          font-size: 1.5rem;
          color: #334155 !important;
        }

        .section-header h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2b2b2b;
          margin: 0;
        }

        .career-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .career-item {
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.95rem;
          color: #2b2b2b;
          line-height: 1.6;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .career-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .career-badge.current {
          background: #334155 !important;
          color: white;
        }

        .career-badge.former {
          background: #cbd5e1; /* Slate 300 - 더 차분한 그레이 */
          color: #475569;
        }

        .awards-section {
          background: white;
          border-radius: 15px;
          padding: 25px 20px;
          margin: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
      `}</style>

      <header>
        <nav>
          <Link href="/aek" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/aek/01" className="active" aria-label="안애경 소개">
            <i className="fas fa-user icon"></i>
            <span>안애경</span>
          </Link>
          <Link href="/aek/02" aria-label="공약 보기">
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
        {/* 프로필 섹션 */}
        <div className="profile-section">
          <img
            src="/01_1.jpg"
            alt="안애경 의원 1p 이미지"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              marginBottom: "-50px",
            }}
          />
        </div>

        {/* 학력/경력 섹션 */}
        <div className="career-section" style={{ marginBottom: "50px" }}>
          <div className="section-header">
            <i className="fas fa-graduation-cap"></i>
            <h2>학력</h2>
          </div>
          <ul className="career-list" style={{ marginBottom: "30px" }}>
            <li className="career-item">
              <span className="dot">·</span>
              <span>대진대 경영대학원 경영학석사(재무관리) 졸업</span>
            </li>
          </ul>

          <div className="section-header">
            <i className="fas fa-briefcase"></i>
            <h2>경력</h2>
          </div>
          <ul className="career-list">
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>(주)귀뚜라미보일러포천·철원 대표이사</span>
            </li>
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>일동고등학교 운영위원회 지역위원</span>
            </li>
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>대진대학교 최고경영자 총동문회 부회장</span>
            </li>
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>포천문화원 자문위원</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>경복대학교 경영학과 외래교수</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>경기도 여성발전위원회 위원</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>포천시 민주평화통일 자문위원</span>
            </li>
            <li className="career-item">
              <span className="career-badge former">전</span>
              <span>송우고등학교 운영위원장</span>
            </li>
          </ul>
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
