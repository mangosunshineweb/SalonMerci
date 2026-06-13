"use client";

import { useEffect, useState } from "react";

function useFonts() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600&family=Raleway:wght@300;400;500&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
}

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#E8C97A";
const BLACK = "#0A0A0A";
const CHARCOAL = "#141414";
const DARK = "#1A1A1A";
const OFF_WHITE = "#F0EAD6";

const NAV_LINKS = [
  { id: "services", label: "Ydelser" },
  { id: "book", label: "Booking" },
];

const SERVICES = [
  {
    title: "Dame klip vask og føn",

    price: "Fra 470 kr",
  },
  {
    title: "Herre klip",

    price: "Fra 360 kr",
  },
  {
    title: "Pensionist rabat",
    sub: "Mandag - torsdag før kl 12:00. ",
  },
  {
    title: "Farvebehandling",
    sub: "Priser fra",
    price: "Fra 590 kr",
  },

  {
    title: "Permanent",
    sub: "Priser fra",
    price: "Fra 850 kr",
  },
  {
    title: "Bryn og vipper",
    sub: "Priser fra",
    price: "Fra 180 kr",
  },
  {
    title: "Håropsætning",
    sub: "Priser fra",
    price: "Fra 650 kr",
  },
  {
    title: "Vi tilbyder meget andet",
    sub: "Ring gerne og hør nærmere",
  },
];

const GALLERY_CAPTIONS = [
  "Naturlig blond",
  "Præcis bob",
  "Kobber balayage",
  "Elegant opsætning",
  "Naturlige bølger",
  "Dyb brunette",
];

const BANNER_ITEMS = [
  "Farve & Klip",
  "Balayage",
  "Bryllupsstyling",
  "Hårbehandlinger",
];
const BANNER_MARQUEE_SEQUENCE = [
  ...BANNER_ITEMS,
  ...BANNER_ITEMS,
  ...BANNER_ITEMS,
  ...BANNER_ITEMS,
];

function GoldDivider({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...style,
      }}
    >
      <div
        style={{
          flex: 1,
          height: "0.5px",
          background: `linear-gradient(to right, transparent, ${GOLD})`,
        }}
      />
      <span style={{ color: GOLD, fontSize: "10px", letterSpacing: "4px" }}>
        ✦
      </span>
      <div
        style={{
          flex: 1,
          height: "0.5px",
          background: `linear-gradient(to left, transparent, ${GOLD})`,
        }}
      />
    </div>
  );
}

export default function SalonMerci() {
  useFonts();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const styles = {
    root: {
      fontFamily: "'Raleway', sans-serif",
      background: BLACK,
      color: OFF_WHITE,
      overflowX: "hidden",
      minHeight: "100vh",
    },
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "20px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrollY > 60 ? "rgba(10,10,10,0.95)" : "transparent",
      boxShadow: scrollY > 60 ? `inset 0 -1px 0 ${GOLD}33` : "none",
      transition: "background 0.4s ease, box-shadow 0.4s ease",
      backdropFilter: scrollY > 60 ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrollY > 60 ? "blur(12px)" : "none",
    },
    navLogo: {
      fontFamily: "'Cinzel', serif",
      fontSize: "18px",
      letterSpacing: "6px",
      color: GOLD,
      textTransform: "uppercase",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      gap: "40px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: OFF_WHITE,
      cursor: "pointer",
      opacity: 0.8,
      transition: "color 0.2s, opacity 0.2s",
      textDecoration: "none",
    },
    navCta: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "13px",
      letterSpacing: "1.5px",
      fontWeight: 600,
      textTransform: "uppercase",
      background: "transparent",
      border: `1px solid ${GOLD}`,
      color: GOLD,
      padding: "14px 30px",
      lineHeight: 1.1,
      cursor: "pointer",
      transition: "background 0.3s, color 0.3s",
    },
    hero: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "0 24px",
    },
    heroBg: {
      position: "absolute",
      inset: 0,
      background: `
        radial-gradient(ellipse 60% 50% at 50% 60%, ${GOLD}14 0%, transparent 70%),
        radial-gradient(ellipse 40% 60% at 80% 20%, ${GOLD}08 0%, transparent 60%),
        ${BLACK}
      `,
    },
    heroGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage: `
        linear-gradient(${GOLD}08 1px, transparent 1px),
        linear-gradient(90deg, ${GOLD}08 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
      transform: `translateY(${scrollY * 0.15}px)`,
    },
    heroEyebrow: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "10px",
      letterSpacing: "8px",
      textTransform: "uppercase",
      color: GOLD,
      marginBottom: "24px",
      position: "relative",
    },
    heroTitle: {
      fontFamily: "'Cinzel', serif",
      fontSize: "clamp(56px, 10vw, 120px)",
      fontWeight: 400,
      letterSpacing: "12px",
      color: OFF_WHITE,
      lineHeight: 1,
      textAlign: "center",
      position: "relative",
      margin: 0,
    },
    heroTitleAccent: {
      color: GOLD,
      fontStyle: "normal",
    },
    heroSub: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(16px, 2vw, 22px)",
      fontWeight: 300,
      fontStyle: "italic",
      color: `${OFF_WHITE}99`,
      textAlign: "center",
      marginTop: "20px",
      letterSpacing: "2px",
      position: "relative",
    },
    heroScroll: {
      position: "absolute",
      bottom: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    },
    heroScrollText: {
      fontSize: "9px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: `${GOLD}80`,
    },
    heroScrollLine: {
      width: "1px",
      height: "40px",
      background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
      animation: "scrollPulse 2s ease-in-out infinite",
    },
    introBand: {
      background: GOLD,
      padding: "22px 0 22px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      overflow: "hidden",
    },
    introBandText: {
      fontFamily: "'Cinzel', serif",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: "2px",
      lineHeight: 1.3,
      textTransform: "uppercase",
      color: "#111111",
      textShadow: "0 0.5px 0 rgba(255,255,255,0.35)",
      whiteSpace: "nowrap",
    },
    section: {
      padding: "100px 48px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    sectionEyebrow: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "9px",
      letterSpacing: "6px",
      textTransform: "uppercase",
      color: GOLD,
      marginBottom: "16px",
    },
    sectionTitle: {
      fontFamily: "'Cinzel', serif",
      fontSize: "clamp(28px, 4vw, 48px)",
      fontWeight: 400,
      letterSpacing: "4px",
      color: OFF_WHITE,
      margin: "0 0 24px",
      lineHeight: 1.2,
    },
    serviceGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "2px",
      marginTop: "48px",
      border: `1px solid ${GOLD}33`,
    },
    serviceCard: (i: number) => ({
      padding: "40px 32px",
      background: hoveredService === i ? CHARCOAL : DARK,
      borderRight: i % 2 === 0 ? `1px solid ${GOLD}22` : "none",
      cursor: "pointer",
      transition: "background 0.3s",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      minHeight: "220px",
    }),
    serviceCardAccent: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "2px",
      height: hoveredService !== null ? "100%" : "0%",
      background: GOLD,
      transition: "height 0.4s ease",
    },
    serviceIcon: {
      fontSize: "24px",
      color: GOLD,
      marginBottom: "20px",
      display: "block",
    },
    serviceTitle: {
      fontFamily: "'Cinzel', serif",
      fontSize: "16px",
      letterSpacing: "2px",
      color: OFF_WHITE,
      margin: "0 0 10px",
    },
    serviceSub: {
      fontSize: "13px",
      lineHeight: 1.7,
      whiteSpace: "pre-line",
      color: `${OFF_WHITE}70`,
      letterSpacing: "0.5px",
      margin: "0",
    },
    servicePrice: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "15px",
      fontStyle: "italic",
      color: GOLD,
      letterSpacing: "1px",
      marginTop: "auto",
      display: "inline-block",
    },
    galleryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 220px)",
      gap: "2px",
      marginTop: "48px",
    },
    galleryItem: (i: number) => ({
      background: [CHARCOAL, DARK, "#1C1C1C", "#111", CHARCOAL, DARK][i],
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      display: "flex",
      alignItems: "flex-end",
      padding: "16px",
    }),
    galleryLabel: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "13px",
      fontStyle: "italic",
      color: `${GOLD}CC`,
      letterSpacing: "1px",
      position: "relative",
      zIndex: 1,
    },
    galleryOverlay: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(to top, ${BLACK}CC 0%, transparent 60%)`,
    },
    galleryPattern: (i: number) => ({
      position: "absolute",
      inset: 0,
      opacity: 0.06,
      backgroundImage: [
        `repeating-linear-gradient(45deg, ${GOLD} 0px, ${GOLD} 1px, transparent 1px, transparent 8px)`,
        `repeating-linear-gradient(-45deg, ${GOLD} 0px, ${GOLD} 1px, transparent 1px, transparent 10px)`,
        `radial-gradient(circle, ${GOLD} 1px, transparent 1px)`,
        `repeating-linear-gradient(90deg, ${GOLD} 0px, ${GOLD} 1px, transparent 1px, transparent 12px)`,
        `repeating-linear-gradient(45deg, ${GOLD} 0px, ${GOLD} 1px, transparent 1px, transparent 6px)`,
        `radial-gradient(${GOLD} 1px, transparent 1px)`,
      ][i],
      backgroundSize: [
        "8px 8px",
        "10px 10px",
        "20px 20px",
        "12px 12px",
        "6px 6px",
        "16px 16px",
      ][i],
    }),
    bookingSection: {
      background: CHARCOAL,
      padding: "100px 48px",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    },
    bookingBg: {
      position: "absolute",
      inset: 0,
      backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 50%, ${GOLD}0D 0%, transparent 70%)`,
      pointerEvents: "none",
    },
    btn: {
      display: "inline-block",
      fontFamily: "'Raleway', sans-serif",
      fontSize: "14px",
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      background: GOLD,
      color: BLACK,
      border: "none",
      padding: "18px 44px",
      cursor: "pointer",
      fontWeight: 700,
      lineHeight: 1.1,
      transition: "background 0.3s, transform 0.2s",
    },
    btnOutline: {
      display: "inline-block",
      fontFamily: "'Raleway', sans-serif",
      fontSize: "14px",
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      background: "transparent",
      color: GOLD,
      border: `1px solid ${GOLD}`,
      padding: "17px 44px",
      cursor: "pointer",
      fontWeight: 600,
      lineHeight: 1.1,
      transition: "background 0.3s, color 0.3s",
    },
    contactInfo: {
      display: "flex",
      gap: "48px",
      flexWrap: "wrap",
      marginTop: "32px",
    },
    contactItem: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    contactLabel: {
      fontSize: "9px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: GOLD,
    },
    contactValue: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "18px",
      color: OFF_WHITE,
      letterSpacing: "1px",
    },
    policyCard: {
      margin: "44px auto 0",
      maxWidth: "760px",
      textAlign: "left",
      padding: "26px 28px",
      border: `1px solid ${GOLD}66`,
      background: "rgba(10,10,10,0.7)",
      boxShadow: `0 0 0 1px ${GOLD}1A inset`,
    },
    policyEyebrow: {
      fontSize: "10px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: GOLD,
      marginBottom: "10px",
    },
    policyHeading: {
      fontFamily: "'Cinzel', serif",
      fontSize: "clamp(18px, 2.4vw, 24px)",
      letterSpacing: "1.5px",
      color: OFF_WHITE,
      margin: "0 0 12px",
      lineHeight: 1.2,
    },
    policyList: {
      margin: 0,
      paddingLeft: "20px",
      color: `${OFF_WHITE}CC`,
      fontSize: "14px",
      lineHeight: 1.8,
      letterSpacing: "0.2px",
    },
    policyStrong: {
      color: GOLD_LIGHT,
      fontWeight: 700,
    },
    footer: {
      background: BLACK,
      borderTop: `0.5px solid ${GOLD}33`,
      padding: "32px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    footerLogo: {
      fontFamily: "'Cinzel', serif",
      fontSize: "14px",
      letterSpacing: "6px",
      color: GOLD,
    },
    footerCopy: {
      fontSize: "11px",
      letterSpacing: "2px",
      color: `${OFF_WHITE}40`,
    },
  } satisfies Record<
    string,
    React.CSSProperties | ((...args: never[]) => React.CSSProperties)
  >;

  return (
    <div style={styles.root}>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.4; transform: scaleY(0.6); }
        }
        @keyframes marqueeTrack {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        a { text-decoration: none; }
        button:hover { opacity: 0.88; }
        .service-accent { transition: height 0.4s ease; }
        .intro-marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .intro-marquee-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          will-change: transform;
          animation: marqueeTrack 28s linear infinite;
        }
        .intro-marquee-group {
          display: flex;
          gap: 40px;
          align-items: center;
          padding-right: 40px;
          flex-shrink: 0;
        }
        .intro-marquee-item {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 980px) {
          nav { padding: 16px 20px; }
        }

        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; grid-template-rows: repeat(3, 200px) !important; }
        }

        @media (max-width: 680px) {
          .nav-links { display: none !important; }
          .main-section { padding: 72px 20px !important; }
          .gallery-grid { grid-template-columns: 1fr !important; grid-template-rows: repeat(6, 180px) !important; }
          .footer-wrap { flex-direction: column; gap: 16px; }
          .intro-marquee-track { animation-duration: 34s !important; }
          .intro-marquee-group { gap: 28px !important; padding-right: 28px !important; }
          .intro-marquee-item { gap: 28px !important; }
          button, a[style] { font-size: 13px !important; }
        }
      `}</style>

      <nav style={styles.nav}>
        <div style={styles.navLogo} onClick={() => scrollTo("hero")}>
          Salon Merci
        </div>
        <ul style={styles.navLinks} className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <span
                style={styles.navLink}
                onClick={() => scrollTo(l.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = GOLD;
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = OFF_WHITE;
                  e.currentTarget.style.opacity = "0.8";
                }}
              >
                {l.label}
              </span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          style={styles.navCta}
          onClick={() => scrollTo("book")}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = GOLD;
            e.currentTarget.style.color = BLACK;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = GOLD;
          }}
        >
          Book tid
        </button>
      </nav>

      <section id="hero" style={styles.hero}>
        <div style={styles.heroGrid} />
        <div style={styles.heroBg} />

        <p style={styles.heroEyebrow}>Odense · Siden 2019</p>

        <h1 style={styles.heroTitle}>
          Salon <span style={styles.heroTitleAccent}>Merci</span>
        </h1>

        <GoldDivider style={{ width: "200px", margin: "24px auto" }} />

        <p style={styles.heroSub}>
          En hyggelig lille salon i hjertet af Odense
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "48px",
            position: "relative",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            style={styles.btn}
            onClick={() => scrollTo("book")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = GOLD_LIGHT;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = GOLD;
            }}
          >
            Book tid
          </button>
          <button
            style={styles.btnOutline}
            onClick={() => scrollTo("services")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${GOLD}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Se ydelser
          </button>
        </div>

        <div style={styles.heroScroll} onClick={() => scrollTo("services")}>
          <span style={styles.heroScrollText}>Scroll ned</span>
          <div style={styles.heroScrollLine} />
        </div>
      </section>

      <div style={styles.introBand}>
        <div className="intro-marquee" aria-label="Salon ydelser banner">
          <div className="intro-marquee-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="intro-marquee-group"
                aria-hidden={groupIndex === 1}
              >
                {BANNER_MARQUEE_SEQUENCE.map((item, itemIndex) => (
                  <span
                    key={`${groupIndex}-${item}-${itemIndex}`}
                    className="intro-marquee-item"
                  >
                    <span style={styles.introBandText}>{item}</span>
                    {itemIndex < BANNER_MARQUEE_SEQUENCE.length - 1 && (
                      <span
                        style={{
                          color: "#2B2100",
                          fontSize: "14px",
                          fontWeight: 700,
                        }}
                      >
                        ✦
                      </span>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="services" style={{ background: BLACK }}>
        <div style={styles.section} className="main-section">
          <p style={styles.sectionEyebrow}>Det tilbyder vi</p>
          <h2 style={styles.sectionTitle}>Priser</h2>

          <div style={styles.serviceGrid}>
            {SERVICES.map((s, i) => (
              <div
                key={i}
                style={styles.serviceCard(i)}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  style={{
                    ...styles.serviceCardAccent,
                    height: hoveredService === i ? "100%" : "0%",
                  }}
                />

                <h3 style={styles.serviceTitle}>{s.title}</h3>
                {s.sub ? <p style={styles.serviceSub}>{s.sub}</p> : null}
                {s.price ? (
                  <span style={styles.servicePrice}>{s.price}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
      <section id="gallery" style={{ background: BLACK }}>
        <div style={styles.section} className="main-section">
          <p style={styles.sectionEyebrow}>Galleri ????</p>
          <h2 style={styles.sectionTitle}>Galleri ?????</h2>

          <div style={styles.galleryGrid} className="gallery-grid">
            {GALLERY_CAPTIONS.map((cap, i) => (
              <div key={i} style={styles.galleryItem(i)}>
                <div style={styles.galleryPattern(i)} />
                <div style={styles.galleryOverlay} />
                <span style={styles.galleryLabel}>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      <section id="book" style={styles.bookingSection}>
        <div style={styles.bookingBg} />
        <h2
          style={{
            ...styles.sectionTitle,
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Ring til os eller
        </h2>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://book.timma.dk/salonmerci"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.btnOutline}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${GOLD}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Book online
          </a>
        </div>

        <div style={styles.policyCard}>
          <p style={styles.policyEyebrow}>Vigtig information</p>
          <h3 style={styles.policyHeading}>Afbud og udeblivelse</h3>
          <ul style={styles.policyList}>
            <li>Afmelding kan ikke ske via mail.</li>
            <li>
              Ring gerne og afbestil, eller fjern din tidsbestilling på Timma.
            </li>
            <li>
              Ved udeblivelse hæfter man for{" "}
              <span style={styles.policyStrong}>100% af behandlingen</span>.
            </li>
          </ul>
        </div>

        <div
          style={{
            ...styles.contactInfo,
            justifyContent: "center",
            marginTop: "64px",
          }}
        >
          {[
            { label: "Telefon", value: "66 13 57 47" },
            { label: "Adresse", value: "Søndergade 20, 5000 Odense C" },
            { label: "Åbningstider", value: "Tirs - Lør" },
          ].map((c) => (
            <div key={c.label} style={styles.contactItem}>
              <span style={styles.contactLabel}>{c.label}</span>
              <span style={styles.contactValue}>{c.value}</span>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer} className="footer-wrap">
        <span style={styles.footerLogo}>Salon Merci</span>
        <GoldDivider style={{ flex: 1, margin: "0 40px", maxWidth: "300px" }} />
        <span style={styles.footerCopy}>
          © {new Date().getFullYear()} Salon Merci - Odense
        </span>
      </footer>
    </div>
  );
}
