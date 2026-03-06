import Link from "next/link";

export default function AeKHome() {
  return (
    <>
      <header>
        <nav>
          <Link href="/aek" className="active" aria-label="홈">
            <i className="fas fa-home icon"></i>
            <span>홈</span>
          </Link>
          <Link href="/aek/01" aria-label="안애경 소개">
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
        <div className="hero-section">
          {/* 이미지는 나중에 aek/assets/homemain.jpg 를 안애경 의원님 사진으로 교체하세요 */}
          <img
            src="/aek/assets/homemain.jpg"
            alt="안애경 의원"
            width="100%"
            loading="eager"
          />
          <div className="news-section" style={{ marginBottom: "-30px" }}>
            <h2 className="news-title">안애경 언론기사</h2>
            <div className="news-grid">
              {/* 여기에 안애경 의원님의 기사 링크를 추가하세요 */}
              <div className="news-card">
                <div className="news-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="news-content">
                  <h3>의정 활동 준비 중입니다.</h3>
                  <span className="news-source">공지사항</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SNS & 연락처 섹션 */}
        <div className="sns-footer-section" style={{ marginBottom: "60px" }}>
          <div className="sns-footer-content">
            <div className="footer-info">
              <p className="footer-text">안애경 의원</p>
              <p className="footer-text">의회 주소를 입력하세요.</p>
              <p className="footer-text">Tel. 연락처를 입력하세요.</p>
            </div>

            <div className="footer-sns-icons">
              {/* 안애경 의원님의 SNS 링크로 교체하세요 */}
              <a
                href="#"
                className="sns-icon-small facebook-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="페이스북"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="sns-icon-small instagram-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="인스타그램"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="sns-icon-small youtube-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="유튜브"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div id="navGuide" className="nav-guide">
          <div className="nav-guide-content">
            <i className="fas fa-hand-point-down"></i>
            <p>아래를 눌러 다른 페이지도 구경하세요!</p>
            <i className="fas fa-hand-point-down"></i>
          </div>
        </div>
      </main>
    </>
  );
}
