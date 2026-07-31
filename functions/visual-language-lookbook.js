const BOT_UA = /facebookexternalhit|Facebot|Twitterbot|Slackbot|WhatsApp|TelegramBot|LinkedInBot|Discordbot|SkypeUriPreview|iMessage|Applebot|Googlebot|bingbot|redditbot|Pinterest|vkShare|W3C_Validator/i;

const PREVIEW_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>El Paso Verse — The Visionary: Visual Language &amp; Lookbook</title>
<meta property="og:type" content="website" />
<meta property="og:title" content="The Visionary — Visual Language &amp; Lookbook" />
<meta property="og:description" content="El Paso Verse production doc — tone, lighting, framing, and camera philosophy across the three worlds." />
<meta property="og:image" content="https://elpaso1880.com/assets/og-visual-language-lookbook.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://elpaso1880.com/visual-language-lookbook" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="The Visionary — Visual Language &amp; Lookbook" />
<meta name="twitter:description" content="El Paso Verse production doc — tone, lighting, framing, and camera philosophy across the three worlds." />
<meta name="twitter:image" content="https://elpaso1880.com/assets/og-visual-language-lookbook.jpg" />
</head>
<body>
<a href="https://elpaso1880.com/visual-language-lookbook">The Visionary — Visual Language &amp; Lookbook</a>
</body>
</html>`;

export async function onRequest(context) {
  const ua = context.request.headers.get("user-agent") || "";
  if (BOT_UA.test(ua)) {
    return new Response(PREVIEW_HTML, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
  return context.next();
}
