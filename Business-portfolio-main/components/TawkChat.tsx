import Script from "next/script";

// Tawk.to IDs are public (they appear in the embed URL), so they can live in code.
// From Tawk.to → Administration → Channels → Chat Widget → Direct Chat Link:
// https://tawk.to/chat/<PROPERTY_ID>/<WIDGET_ID>
// NEXT_PUBLIC_TAWK_PROPERTY_ID / NEXT_PUBLIC_TAWK_WIDGET_ID override these if set.
const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || "6abfb477e2d47534c410cd91";
const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || "1k3udhtgq";

const isValidId = (id: string | undefined): id is string => !!id && /^[a-z0-9]+$/i.test(id);

export function TawkChat() {
  if (!isValidId(propertyId) || !isValidId(widgetId)) return null;

  // Tawk.to's official embed snippet, loaded during browser idle time so it never
  // competes with the page's own content for bandwidth.
  return (
    <Script id="tawk-to" strategy="lazyOnload">
      {`
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/${propertyId}/${widgetId}";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}
