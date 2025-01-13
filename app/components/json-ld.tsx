export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GamingHubPlay",
    "url": "https://gaminghubplay.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gaminghubplay.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

