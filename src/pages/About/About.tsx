import "./About.css";

function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>O NAS</span>

          <h1>
            Piękno zaczyna się
            <br />
            od dobrych chwil.
          </h1>

          <p>
            Tworzymy miejsce, w którym możesz zwolnić, zadbać o siebie i poczuć
            się naprawdę dobrze.
          </p>
        </div>

        <div className="about-hero-image">
          <img
            src="/src/assets/about-salon.png"
            alt="Wnętrze ÉLIA Beauty Studio"
          />
        </div>
      </section>

      {/* NASZA HISTORIA */}
      <section className="about-story">
        <div className="about-story-image">
          <img src="/src/assets/about-history.png" alt="ÉLIA Beauty Studio" />
        </div>

        <div className="about-story-content">
          <span>NASZA HISTORIA</span>

          <h2>
            Miejsce stworzone
            <br />z miłości do piękna.
          </h2>

          <p>
            ÉLIA Beauty Studio powstało z potrzeby stworzenia miejsca, w którym
            profesjonalna pielęgnacja spotyka się ze spokojem i przyjemną
            atmosferą.
          </p>

          <p>
            Od początku zależało nam na tym, aby każda osoba odwiedzająca nasze
            studio mogła na chwilę zwolnić, odpocząć i zadbać o siebie w
            komfortowych warunkach.
          </p>

          <p>
            Łączymy doświadczenie, dokładność i indywidualne podejście, aby
            każdy zabieg był dopasowany do Twoich potrzeb.
          </p>
        </div>
      </section>

      {/* NASZE PODEJŚCIE */}
      <section className="about-intro">
        <span>NASZE PODEJŚCIE</span>

        <h2>
          Piękno, które
          <br />
          zaczyna się od Ciebie.
        </h2>

        <p>
          Wierzymy, że najlepsze efekty powstają wtedy, gdy piękno idzie w parze
          z troską, spokojem i odpowiednio dobraną pielęgnacją.
        </p>
      </section>

      {/* WARTOŚCI */}
      <section className="about-values">
        <div className="about-values-heading">
          <span>NASZE WARTOŚCI</span>

          <h2>
            To właśnie one
            <br />
            tworzą ÉLIA.
          </h2>
        </div>

        <div className="values-grid">
          <div className="value-item">
            <span>01</span>
            <h3>Indywidualne podejście</h3>
            <p>
              Każda osoba jest inna, dlatego dobieramy zabiegi odpowiednio do
              jej potrzeb.
            </p>
          </div>

          <div className="value-item">
            <span>02</span>
            <h3>Jakość</h3>
            <p>
              Stawiamy na dokładność, profesjonalizm i wysoką jakość
              wykonywanych usług.
            </p>
          </div>

          <div className="value-item">
            <span>03</span>
            <h3>Naturalne piękno</h3>
            <p>
              Zależy nam na efektach, które podkreślają Twoje naturalne piękno.
            </p>
          </div>

          <div className="value-item">
            <span>04</span>
            <h3>Spokój</h3>
            <p>
              Chcemy, aby wizyta w naszym studio była również chwilą odpoczynku
              i relaksu.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <span>ELIA BEAUTY STUDIO</span>

        <h2>
          Zadbaj o siebie.
          <br />
          Zasługujesz na chwilę dla siebie.
        </h2>

        <a href="/kontakt">Umów wizytę →</a>
      </section>
    </main>
  );
}

export default About;
