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

const NAV_LINKS = ["Services", "About", "Gallery", "Book"];

const SERVICES = [
  {
    icon: "✂",
    title: "Signature Cut",
    sub: "Tailored precision cuts crafted for your face & lifestyle.",
    price: "From 395 kr",
  },
  {
    icon: "◈",
    title: "Colour & Balayage",
    sub: "Hand-painted tones and full-colour transformations.",
    price: "From 895 kr",
  },
  {
    icon: "⌁",
    title: "Treatment & Care",
    sub: "Deep conditioning rituals to restore vitality and shine.",
    price: "From 295 kr",
  },
  {
    icon: "❧",
    title: "Bridal & Events",
    sub: "Bespoke styling for your most memorable moments.",
    price: "From 1.200 kr",
  },
];

const GALLERY_CAPTIONS = [
  "Lived-in blonde",
  "Precision bob",
  "Copper balayage",
  "Sleek updo",
  "Natural waves",
  "Rich brunette",
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
      <span style={{ color: GOLD, fontSize: "10px", letterSpacing: "4px" }}>✦</span>
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
      borderBottom: scrollY > 60 ? `0.5px solid ${GOLD}33` : "none",
      transition: "background 0.4s ease, border 0.4s ease",
      backdropFilter: scrollY > 60 ? "blur(12px)" : "none",
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
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      background: "transparent",
      border: `1px solid ${GOLD}`,
      color: GOLD,
      padding: "10px 24px",
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
      padding: "18px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      overflow: "hidden",
    },
    introBandText: {
      fontFamily: "'Cinzel', serif",
      fontSize: "10px",
      letterSpacing: "6px",
      textTransform: "uppercase",
      color: BLACK,
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
      marginBottom: "10px",
    },
    serviceSub: {
      fontSize: "13px",
      lineHeight: 1.7,
      color: `${OFF_WHITE}70`,
      letterSpacing: "0.5px",
      marginBottom: "20px",
    },
    servicePrice: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "15px",
      fontStyle: "italic",
      color: GOLD,
      letterSpacing: "1px",
    },
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "center",
    },
    aboutVisual: {
      position: "relative",
      aspectRatio: "3/4",
      background: CHARCOAL,
      border: `1px solid ${GOLD}33`,
      overflow: "hidden",
    },
    aboutVisualInner: {
      position: "absolute",
      inset: "16px",
      border: `1px solid ${GOLD}55`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    aboutVisualMonogram: {
      fontFamily: "'Cinzel', serif",
      fontSize: "80px",
      color: `${GOLD}40`,
      letterSpacing: "8px",
      userSelect: "none",
    },
    aboutCorner: (pos: "tl" | "tr" | "bl" | "br") => ({
      position: "absolute",
      width: "20px",
      height: "20px",
      borderColor: GOLD,
      borderStyle: "solid",
      borderWidth:
        pos === "tl"
          ? "1px 0 0 1px"
          : pos === "tr"
            ? "1px 1px 0 0"
            : pos === "bl"
              ? "0 0 1px 1px"
              : "0 1px 1px 0",
      top: pos.startsWith("t") ? "8px" : "auto",
      bottom: pos.startsWith("b") ? "8px" : "auto",
      left: pos.endsWith("l") ? "8px" : "auto",
      right: pos.endsWith("r") ? "8px" : "auto",
    }),
    aboutBody: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "18px",
      fontWeight: 300,
      lineHeight: 1.9,
      color: `${OFF_WHITE}90`,
      marginBottom: "32px",
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
      backgroundSize: ["8px 8px", "10px 10px", "20px 20px", "12px 12px", "6px 6px", "16px 16px"][i],
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
      fontSize: "11px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      background: GOLD,
      color: BLACK,
      border: "none",
      padding: "16px 40px",
      cursor: "pointer",
      fontWeight: 500,
      transition: "background 0.3s, transform 0.2s",
    },
    btnOutline: {
      display: "inline-block",
      fontFamily: "'Raleway', sans-serif",
      fontSize: "11px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      background: "transparent",
      color: GOLD,
      border: `1px solid ${GOLD}`,
      padding: "15px 40px",
      cursor: "pointer",
      fontWeight: 400,
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
  } satisfies Record<string, React.CSSProperties | ((...args: never[]) => React.CSSProperties)>;

  return (
    <div style={styles.root}>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.4; transform: scaleY(0.6); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        a { text-decoration: none; }
        button:hover { opacity: 0.88; }
        .service-accent { transition: height 0.4s ease; }

        @media (max-width: 980px) {
          nav { padding: 16px 20px; }
        }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; grid-template-rows: repeat(3, 200px) !important; }
        }

        @media (max-width: 680px) {
          .nav-links { display: none !important; }
          .main-section { padding: 72px 20px !important; }
          .gallery-grid { grid-template-columns: 1fr !important; grid-template-rows: repeat(6, 180px) !important; }
          .footer-wrap { flex-direction: column; gap: 16px; }
        }
      `}</style>

      <nav style={styles.nav}>
        <div style={styles.navLogo} onClick={() => scrollTo("hero")}>
          Salon Merci
        </div>
        <ul style={styles.navLinks} className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <span
                style={styles.navLink}
                onClick={() => scrollTo(l.toLowerCase())}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = GOLD;
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = OFF_WHITE;
                  e.currentTarget.style.opacity = "0.8";
                }}
              >
                {l}
              </span>
            </li>
          ))}
        </ul>
        <button
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
          Book Now
        </button>
      </nav>

      <section id="hero" style={styles.hero}>
        <div style={styles.heroGrid} />
        <div style={styles.heroBg} />

        <p style={styles.heroEyebrow}>Odense · Since 2010</p>

        <h1 style={styles.heroTitle}>
          Salon <span style={styles.heroTitleAccent}>Merci</span>
        </h1>

        <GoldDivider style={{ width: "200px", margin: "24px auto" }} />

        <p style={styles.heroSub}>Where precision meets artistry</p>

        <div style={{ display: "flex", gap: "16px", marginTop: "48px", position: "relative", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            style={styles.btn}
            onClick={() => scrollTo("book")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = GOLD_LIGHT;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = GOLD;
            }}
          >
            Book Appointment
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
            Our Services
          </button>
        </div>

        <div style={styles.heroScroll} onClick={() => scrollTo("services")}>
          <span style={styles.heroScrollText}>Scroll</span>
          <div style={styles.heroScrollLine} />
        </div>
      </section>

      <div style={styles.introBand}>
        <div
          style={{
            display: "flex",
            gap: "40px",
            animation: "marquee 18s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ display: "flex", gap: "40px" }}>
              <span style={styles.introBandText}>Colour &amp; Cut</span>
              <span style={{ color: `${BLACK}60`, fontSize: "10px" }}>✦</span>
              <span style={styles.introBandText}>Balayage</span>
              <span style={{ color: `${BLACK}60`, fontSize: "10px" }}>✦</span>
              <span style={styles.introBandText}>Bridal Styling</span>
              <span style={{ color: `${BLACK}60`, fontSize: "10px" }}>✦</span>
              <span style={styles.introBandText}>Hair Treatments</span>
              <span style={{ color: `${BLACK}60`, fontSize: "10px" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="services" style={{ background: BLACK }}>
        <div style={styles.section} className="main-section">
          <p style={styles.sectionEyebrow}>What We Offer</p>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <GoldDivider style={{ width: "120px" }} />

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
                <span style={styles.serviceIcon}>{s.icon}</span>
                <h3 style={styles.serviceTitle}>{s.title}</h3>
                <p style={styles.serviceSub}>{s.sub}</p>
                <span style={styles.servicePrice}>{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ background: CHARCOAL }}>
        <div style={styles.section} className="main-section">
          <div style={styles.aboutGrid} className="about-grid">
            <div style={styles.aboutVisual}>
              <div style={styles.aboutVisualInner}>
                <span style={styles.aboutVisualMonogram}>SM</span>
              </div>
              {(["tl", "tr", "bl", "br"] as const).map((pos) => (
                <div key={pos} style={styles.aboutCorner(pos)} />
              ))}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "3px",
                  background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                }}
              />
            </div>

            <div>
              <p style={styles.sectionEyebrow}>Our Story</p>
              <h2 style={styles.sectionTitle}>
                The Art of Hair,
                <br />
                <em
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    color: GOLD,
                  }}
                >
                  Elevated
                </em>
              </h2>
              <GoldDivider style={{ width: "100px", margin: "0 0 32px" }} />
              <p style={styles.aboutBody}>
                Salon Merci was born from a passion for the transformative power of hair. Located in the heart of Odense, we combine technical mastery with an intimate, personal approach - crafting looks that feel uniquely you.
              </p>
              <p style={styles.aboutBody}>
                Every visit is a ritual. Every cut, a conversation. We believe that true beauty begins when craft meets care.
              </p>
              <button
                style={{ ...styles.btnOutline, marginTop: "8px" }}
                onClick={() => scrollTo("book")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${GOLD}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" style={{ background: BLACK }}>
        <div style={styles.section} className="main-section">
          <p style={styles.sectionEyebrow}>Portfolio</p>
          <h2 style={styles.sectionTitle}>The Gallery</h2>
          <GoldDivider style={{ width: "120px" }} />

          <div style={styles.galleryGrid} className="gallery-grid">
            {GALLERY_CAPTIONS.map((cap, i) => (
              <div key={i} style={styles.galleryItem(i)}>
                <div style={styles.galleryPattern(i)} />
                <div style={styles.galleryOverlay} />
                <span style={styles.galleryLabel}>{cap}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "15px",
              color: `${OFF_WHITE}55`,
              textAlign: "center",
              marginTop: "20px",
              letterSpacing: "1px",
            }}
          >
            Follow us on Instagram for the latest looks - <span style={{ color: GOLD }}>@salonmerci</span>
          </p>
        </div>
      </section>

      <section id="book" style={styles.bookingSection}>
        <div style={styles.bookingBg} />
        <p style={styles.sectionEyebrow}>Ready?</p>
        <h2 style={{ ...styles.sectionTitle, textAlign: "center", marginBottom: "8px" }}>Book Your Visit</h2>
        <GoldDivider style={{ width: "160px", margin: "0 auto 32px" }} />
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            fontStyle: "italic",
            color: `${OFF_WHITE}80`,
            maxWidth: "480px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Your next transformation is one appointment away.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:66135747"
            style={styles.btn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = GOLD_LIGHT;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = GOLD;
            }}
          >
            Call Us
          </a>
          <a
            href="https://www.salonmerci.dk"
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
            Book Online
          </a>
        </div>

        <div style={{ ...styles.contactInfo, justifyContent: "center", marginTop: "64px" }}>
          {[
            { label: "Phone", value: "66 13 57 47" },
            { label: "Website", value: "salonmerci.dk" },
            { label: "Location", value: "Odense, Denmark" },
            { label: "Hours", value: "Tue - Sat" },
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
        <span style={styles.footerCopy}>© {new Date().getFullYear()} Salon Merci - Odense</span>
      </footer>
    </div>
  );
}