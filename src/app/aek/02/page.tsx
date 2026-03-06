import Link from "next/link";

export default function AeK02() {
  return (
    <>
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
          <Link href="/aek/02" className="active" aria-label="의정보고 보기">
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
        <div className="hero-section">
          {/* 의정보고 메인 이미지 */}
          <div
            style={{
              height: "200px",
              background: "#f8f8f8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            의정보고 이미지를 준비 중입니다.
          </div>
        </div>

        <div className="report-fullwidth-container">
          <div
            className="report-fullwidth-header"
            style={{ padding: "40px 20px" }}
          >
            <p
              className="report-subtitle typing-text"
              style={{
                fontWeight: 800,
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              안녕하세요, 안애경 의원입니다.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#666",
              padding: "100px 20px",
            }}
          >
            <p>의정 활동 내용을 정리 중입니다.</p>
          </div>
        </div>

        <div id="navGuide" className="nav-guide" style={{ marginTop: "60px" }}>
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
