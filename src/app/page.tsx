import { redirect } from "next/navigation";

export default function Home() {
  // 루트 (/) 접속 시 자동으로 안애경 페이지 (/aek)로 리다이렉트
  redirect("/aek");
}
