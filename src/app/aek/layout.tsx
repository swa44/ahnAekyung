import type { Metadata } from "next";
import NavGuideScript from "./components/NavGuideScript";
import "./aek-styles.css";

export const metadata: Metadata = {
  title: "안애경 의원",
  description: "시민과 함께하는 안애경의 의정활동",
  openGraph: {
    url: "https://ahnAekyung.com", // GitHub 레포 기반의 임시 URL (나중에 도메인 연결 시 수정 필요)
    type: "website",
    title: "안애경 의원",
    description: "시민과 함께하는 안애경의 의정활동",
    images: [
      "/aek/assets/homemain.jpg", // 임시로 메인 이미지 사용
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안애경 의원",
    description: "시민과 함께하는 안애경의 의정활동",
    images: ["/aek/assets/homemain.jpg"],
  },
  icons: {
    icon: [
      { url: "/aek/assets/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/aek/assets/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/aek/assets/96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/aek/assets/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/aek/assets/196x196.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [
      { url: "/aek/assets/57x57.png", sizes: "57x57" },
      { url: "/aek/assets/60x60.png", sizes: "60x60" },
      { url: "/aek/assets/72x72.png", sizes: "72x72" },
      { url: "/aek/assets/76x76.png", sizes: "76x76" },
      { url: "/aek/assets/114x114.png", sizes: "114x114" },
      { url: "/aek/assets/120x120.png", sizes: "120x120" },
      { url: "/aek/assets/144x144.png", sizes: "144x144" },
      { url: "/aek/assets/152x152.png", sizes: "152x152" },
    ],
  },
  manifest: "/aek/manifest.json",
};

export default function AeKLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="aek-container">
        {children}
        <NavGuideScript />
      </div>
    </>
  );
}
