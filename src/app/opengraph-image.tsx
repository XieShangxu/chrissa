import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Chrissa's Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #8a2be2, #4169e1)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, opacity: 0.8, marginBottom: 20 }}>
          Welcome to
        </div>
        <div style={{ fontWeight: "bold" }}>Chrissa's Portfolio</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
