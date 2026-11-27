import { ImageResponse } from "next/og";

export const alt = "OKAP CITY RP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#0b0d12", color: "white", flexDirection: "column", justifyContent: "center", padding: 90, borderBottom: "18px solid #e52d38" }}>
      <div style={{ color: "#e52d38", fontSize: 24, letterSpacing: 8 }}>YOUR CITY. YOUR STORY.</div>
      <div style={{ fontSize: 112, fontWeight: 900, letterSpacing: -6 }}>OKAP CITY RP</div>
      <div style={{ fontSize: 28, color: "#aaa" }}>A WORLD OF POSSIBILITIES.</div>
    </div>, size,
  );
}
