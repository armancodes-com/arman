const JsonLd = ({ data }: { data: unknown }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;

// single pages

{
  /* <script type="application/ld+json">
{
    "@context": "http://schema.org/",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "article's URL"
    },
    "author": {
        "@type": "Person",
        "name": "Arman Ahmadi"
    },
    "publisher": {
        "@type": "Organization",
        "name": "armancodes.com",
        "logo": {
            "@type": "ImageObject",
            "url": "our logo"
        }
    },
    "headline": "title of the article",
    "image": "main image",
    "datePublished": "2024-06-18",
    "dateModified": "2024-06-18"
}
</script> */
}
