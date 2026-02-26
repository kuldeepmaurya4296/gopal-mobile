import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    noIndex?: boolean;
}

const SITE_NAME = "Gopal Mobile";
const DEFAULT_DESCRIPTION =
    "Gopal Mobile — Bhopal's trusted mobile store for new smartphones, expert repairs, pre-owned phones, and accessories. Apple, Samsung, Realme, POCO, Vivo, OPPO, OnePlus & more.";
const DEFAULT_KEYWORDS =
    "mobile shop Bhopal, smartphone store MP Nagar, mobile repair Bhopal, second hand phones Bhopal, Gopal Mobile, iPhone Bhopal, Samsung Bhopal, phone accessories Bhopal";

const SEO = ({
    title,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    canonicalUrl,
    ogImage,
    ogType = "website",
    noIndex = false,
}: SEOProps) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Your Trusted Mobile Store in Bhopal`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:site_name" content={SITE_NAME} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* Canonical */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Structured Data — Local Business */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MobilePhone",
                    name: SITE_NAME,
                    description: DEFAULT_DESCRIPTION,
                    address: {
                        "@type": "PostalAddress",
                        streetAddress:
                            "Shop no 35, opp. Hongkong Restaurant, Zone-II, M.P. Nagar",
                        addressLocality: "Bhopal",
                        addressRegion: "Madhya Pradesh",
                        postalCode: "462011",
                        addressCountry: "IN",
                    },
                    openingHoursSpecification: [
                        {
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                            ],
                            opens: "10:00",
                            closes: "21:00",
                        },
                        {
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: "Sunday",
                            opens: "11:00",
                            closes: "19:00",
                        },
                    ],
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
