import Script from "next/script";

/**
 * Microsoft Clarity — analítica de comportamiento.
 *
 * Por qué existe: el sitio no tenía ninguna medición instalada. Search Console
 * dice cuánta gente llega desde Google; Clarity dice qué hace una vez adentro
 * (grabaciones de sesión y mapas de calor), que es lo que hace falta para
 * entender por qué el formulario no se llena.
 *
 * Seguro de publicar sin configurar: si NEXT_PUBLIC_CLARITY_ID no está puesto,
 * este componente no renderiza nada y el sitio no carga script alguno.
 */
export default function ClarityAnalytics() {
  const id = process.env.NEXT_PUBLIC_CLARITY_ID;

  if (!id) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${id}");`}
    </Script>
  );
}
