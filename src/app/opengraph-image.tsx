import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          backgroundImage:
            "linear-gradient(135deg, #f7f1e8 0%, #ffffff 50%, #f4e4d1 100%)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(244, 211, 164, 0.3)",
            filter: "blur(80px)",
            top: "-100px",
            left: "-100px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(216, 182, 126, 0.25)",
            filter: "blur(80px)",
            bottom: "-50px",
            right: "-50px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
            padding: "60px 80px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#2a231d",
              margin: "0 0 20px 0",
              fontFamily: "Georgia, serif",
              letterSpacing: "-2px",
            }}
          >
            Lễ Tốt Nghiệp
          </h1>

          <div
            style={{
              fontSize: "28px",
              color: "#6b5a4a",
              margin: "20px 0",
              letterSpacing: "0.5px",
            }}
          >
            Trân trọng kính mời
          </div>

          <div
            style={{
              display: "flex",
              gap: "60px",
              margin: "40px 0 0 0",
              fontSize: "24px",
              color: "#5e544b",
              fontWeight: "500",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "18px", color: "#8a735d" }}>📅 Ngày</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#8f6a44", marginTop: "8px" }}>
                09.06.2026
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "18px", color: "#8a735d" }}>📍 Địa điểm</span>
              <span style={{ fontSize: "32px", fontWeight: "bold", color: "#8f6a44", marginTop: "8px" }}>
                Trường Đại học Công nghệ Thông tin - ĐHQG-HCM
              </span>
            </div>
          </div>

          <div
            style={{
              marginTop: "40px",
              fontSize: "18px",
              color: "#7d5c3e",
              fontStyle: "italic",
              borderTop: "2px solid rgba(142, 106, 67, 0.15)",
              paddingTop: "30px",
            }}
          >
            Một buổi lễ ấm, sang và có điểm nhấn riêng
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
