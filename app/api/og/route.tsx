import { ImageResponse } from "next/og";
import OgImage, { OG_IMAGE_SIZE } from "@/components/atoms/OgImage";

export const runtime = "edge";

const TEMPLATE_PATH = "/images/og-images/template.png";

function getParam(searchParams: URLSearchParams, key: string, fallback: string) {
  const value = searchParams.get(key)?.trim();

  return value ? value.slice(0, 140) : fallback;
}

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = getParam(
    url.searchParams,
    "title",
    "Mantenimiento Predictivo Industrial"
  );
  const subtitle = getParam(
    url.searchParams,
    "subtitle",
    "Monitoreo de condicion, diagnostico y confiabilidad de activos"
  );
  const eyebrow = getParam(url.searchParams, "eyebrow", "Grupo DIAPSA");
  const templateUrl = new URL(TEMPLATE_PATH, url.origin).toString();

  return new ImageResponse(
    (
      <OgImage
        title={title}
        subtitle={subtitle}
        eyebrow={eyebrow}
        imageUrl={templateUrl}
      />
    ),
    {
      ...OG_IMAGE_SIZE,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
