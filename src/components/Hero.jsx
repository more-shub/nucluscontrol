import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  const domain = "https://digitalflowmeter.net";
  const images = useMemo(
    () => [
      { src: `${domain}/heroimg1.webp`, alt: "Flow meter display" },
      { src: `${domain}/heroimg2.webp`, alt: "Flow meter field mount" },
      { src: `${domain}/heroimg3.webp`, alt: "Flow meter panel mount" },
      { src: `${domain}/heroimg4.webp`, alt: "Battery Operated Flow Meter" },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <Helmet>
        <title>Nuclus Control | Digital Flow Meters for Industrial Use</title>
        <meta
          name="description"
          content="Discover high-precision digital flow meters including battery operated, field mount, and panel mount options for accurate fluid management in industries."
        />
        <meta
          name="keywords"
          content="Digital Flow Meter, Flow Meter, Battery Operated Flow Meter, Panel Mount Flow Meter, Field Mount Flow Meter, Nuclus Control, Industrial Flow Meters"
        />
        <meta name="author" content="Nuclus Control" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${domain}/`} />
        <link rel="icon" type="image/webp" href={`${domain}/favicon.webp`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Nuclus Control | Digital Flow Meters" />
        <meta
          property="og:description"
          content="Explore precision flow control solutions from Nuclus Control – advanced digital flow meters for various industrial needs."
        />
        <meta property="og:image" content={images[0].src} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={domain} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nuclus Control",
              url: domain,
              logo: `${domain}/favicon.webp`,
              sameAs: [],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Nuclus Control | Digital Flow Meters",
              url: domain,
              description:
                "High-precision digital flow meters by Nuclus Control including battery operated, panel mount, and field mount options for industrial applications.",
              inLanguage: "en",
            },
          ])}
        </script>
      </Helmet>

      <section className="hero" itemScope itemType="https://schema.org/WebPage">
        <div className="hero-content">
          <h1 itemProp="headline">
            Digital Flow Meters – Battery Operated, Panel & Field Mount Options
          </h1>
          <p itemProp="description">
            Nuclus Control’s advanced digital flow meters ensure accurate flow
            measurement and efficient fluid management for industrial applications.
          </p>

          <Link to="/products" className="cta-button">
            View All Digital Flow Meters
          </Link>

          <div className="logos-section" aria-label="Trusted by leading brands">
            <div className="images-wrapper">
              <div className="images-container">
                {[
                  "glenmark", "decore", "loreal", "ion-exchange", "britannia",
                  "raymond", "adani", "emcure", "ruttonsha", "nrb", "leo",
                  "prakash-ind", "vhm",
                ].map((brand) => (
                  <figure key={brand}>
                    <img
                      src={`${domain}/${brand}.webp`}
                      alt={brand.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="slideshow-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
