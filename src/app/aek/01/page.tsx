"use client";

import Link from "next/link";

export default function AeK01() {
  return (
    <>
      <style jsx global>{`
        .profile-section {
          position: relative;
          text-align: center;
          background: linear-gradient(135deg, var(--primary-color), #c71a0e);
          color: white;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
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
          border-bottom: 2px solid var(--primary-color);
        }

        .section-header i {
          font-size: 1.5rem;
          color: var(--primary-color);
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
          border-bottom: 1px solid #f0f0f0;
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
          background: var(--primary-color);
          color: white;
        }

        .career-badge.former {
          background: #999;
          color: white;
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
          <Link href="/aek/02" aria-label="의정보고 보기">
            <i className="fas fa-clipboard-list icon"></i>
            <span>의정보고</span>
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
          <p>프로필 사진 영역</p>
        </div>

        {/* 약력 섹션 */}
        <div className="career-section">
          <div className="section-header">
            <i className="fas fa-user-tie"></i>
            <h2>약력</h2>
          </div>
          <ul className="career-list">
            <li className="career-item">
              <span className="career-badge current">현</span>
              <span>약력을 입력하세요.</span>
            </li>
          </ul>
        </div>

        {/* 수상내역 섹션 */}
        <div className="awards-section" style={{ marginBottom: "70px" }}>
          <div className="section-header">
            <i className="fas fa-trophy"></i>
            <h2>수상내역</h2>
          </div>
          <p style={{ textAlign: "center", color: "#666", padding: "40px 0" }}>
            수상 내역을 준비 중입니다.
          </p>
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
