type OgImageProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageUrl: string;
};

export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

export default function OgImage({
  title,
  subtitle = "Diagnostico y asesoria predictiva",
  eyebrow = "Grupo DIAPSA",
  imageUrl,
}: OgImageProps) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#002e46",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <img
        src={imageUrl}
        alt=""
        width={OG_IMAGE_SIZE.width}
        height={OG_IMAGE_SIZE.height}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 48,
          bottom: 58,
          display: "flex",
          flexDirection: "column",
          width: 660,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 6,
            marginBottom: 26,
            background: "#00aeef",
          }}
        />

        <div
          style={{
            display: "flex",
            marginBottom: 14,
            color: "#5ed7ff",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 0,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: title.length > 42 ? 48 : 58,
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: 0,
            textShadow: "0 4px 22px rgba(0, 0, 0, 0.55)",
          }}
        >
          {title}
        </div>

        {subtitle ? (
          <div
            style={{
              display: "flex",
              marginTop: 20,
              color: "#d9f3ff",
              fontSize: 27,
              fontWeight: 500,
              lineHeight: 1.25,
              textShadow: "0 3px 14px rgba(0, 0, 0, 0.5)",
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
