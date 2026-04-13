import type { Metadata } from "next";
import NavGuideScript from "./components/NavGuideScript";
import "./aek-styles.css";

export const metadata: Metadata = {
  title: "안애경 의원",
  description: "시민 곁에 안애경",
  openGraph: {
    url: "xn--289ak97bcc.com", // GitHub 레포 기반의 임시 URL (나중에 도메인 연결 시 수정 필요)
    type: "website",
    title: "안애경",
    description: "시민 곁에 안애경",
    images: [
      "https://postfiles.pstatic.net/MjAyNjA0MTNfNSAg/MDAxNzc2MDU5NTMzNjA0.xi_FDoT1poQAayO_ILeL-xO-IuwOxT7OAnlQCyseuSgg.tbbfCa5J23ZXBVMKlqUfE43dm-d9BxGHd0SSsKikxn0g.JPEG/meta.jpg?type=w966", // 임시로 메인 이미지 사용
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안애경 의원",
    description: "시민 곁에 안애경",
    images: [
      "https://postfiles.pstatic.net/MjAyNjA0MTNfNSAg/MDAxNzc2MDU5NTMzNjA0.xi_FDoT1poQAayO_ILeL-xO-IuwOxT7OAnlQCyseuSgg.tbbfCa5J23ZXBVMKlqUfE43dm-d9BxGHd0SSsKikxn0g.JPEG/meta.jpg?type=w966",
    ],
  },
  icons: {
    icon: [
      { url: "/aek/assets/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/aek/assets/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/aek/assets/96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/aek/assets/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/aek/assets/196x196.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [{ url: "/aek/assets/logo_180.png", sizes: "180x180" }],
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
