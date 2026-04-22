export default function Home() {
  return (
    <main className="page-shell">
      <section className="simple-card">
        <p className="eyebrow">Salon Merci</p>
        <h1>Vi er snart klar</h1>
        <p className="lead">
          Mens vi gør den nye hjemmeside klar, kan du stadig booke din tid
          hos Salon Merci her.
        </p>
        <a
          href="https://book.timma.dk/salonmerci"
          className="booking-link"
          target="_blank"
          rel="noreferrer"
        >
          Book tid online
        </a>
      </section>
    </main>
  );
}