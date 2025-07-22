import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sarjak Consultancy",
    "description": "Building Contractor, Surveyor, and Construction Consultant in Junagadh, Gujarat",
    "owner": {
      "@type": "Person",
      "name": "Rajesh V. Chudasama"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "318, Amba Arcade, M.G. Road",
      "addressLocality": "Junagadh",
      "addressRegion": "Gujarat",
      "postalCode": "362001",
      "addressCountry": "IN"
    },
    "telephone": "+91 94272 18178",
    "priceRange": "$$",
    "openingHours": "Mo-Sa 09:00-18:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "21.5222",
        "longitude": "70.4579"
      },
      "geoRadius": "50000"
    },
    "services": [
      "Building Contracting",
      "Land Surveying",
      "Construction Supervision",
      "Project Consultation"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEO;