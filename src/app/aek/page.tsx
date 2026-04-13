import Link from "next/link";
import Image from "next/image";

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
        <div className="hero-section">
          {/* 메인 이미지를 여기에 넣으세요 */}
          <div
            className="main-image-container"
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "0px",

              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/home_1.jpg"
              alt="안애경 의원 메인 이미지"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                marginBottom: "10px",
              }}
            />

            <img
              src="/home_2.jpg"
              alt="안애경 의원 메인 이미지"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                marginBottom: "10px",
              }}
            />

            <img
              src="/home_3.jpg"
              alt="안애경 의원 메인 이미지"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />

            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: "block", cursor: "pointer" }}
            >
              <img
                src="/home_4.jpg"
                alt="안애경 의원 메인 이미지"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  marginBottom: "50px",
                }}
              />
            </a>
          </div>
          {/*
          <div className="news-section" style={{ marginBottom: "-30px" }}>
            <h2 className="news-title">언론기사</h2>
            <div className="news-grid">
               기사 링크가 추가될 영역입니다.
              <div
                className="news-card"
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <p>의정 활동 소식을 곧 전해드리겠습니다.</p>
              </div>
            </div>
          </div>*/}
        </div>

        {/* SNS & 연락처 섹션  */}
        {/*
        <div className="sns-footer-section" style={{ marginBottom: "60px" }}>
          <div className="sns-footer-content">
            <div className="footer-info">
              <p className="footer-text">안애경 의원</p>
              <p className="footer-text">주소: 내용을 입력하세요.</p>
              <p className="footer-text">Tel: 내용을 입력하세요.</p>
            </div>

            <div className="footer-sns-icons">
              <a
                href="#"
                className="sns-icon-small facebook-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="sns-icon-small instagram-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="sns-icon-small youtube-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>*/}

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
