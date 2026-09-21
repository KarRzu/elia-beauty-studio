import "./Home.css";

function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <img
          src="/src/assets/hero.png"
          alt="Kosmetyki beauty"
          className="hero-image"
        />

        <div className="hero-content">
          <h1>Zadbaj o swoje piękno</h1>

          <button className="hero-button">Poznaj naszą ofertę →</button>
        </div>
      </section>

      {/* USŁUGI */}
      <section className="services-section">
        <div className="services-header">
          <span>USŁUGI</span>

          <h2>
            Poznaj nasze
            <br />
            zabiegi
          </h2>

          <p>
            Zadbaj o siebie w spokojnej i kameralnej atmosferze. Wybierz zabieg
            dopasowany do swoich potrzeb.
          </p>
        </div>

        <div className="services-list">
          {/* ZABIEGI KOSMETYCZNE */}
          <div className="service-item">
            <div className="service-number">01</div>

            <div className="service-info">
              <h3>Zabiegi kosmetyczne</h3>

              <p>
                Profesjonalna pielęgnacja twarzy dopasowana do potrzeb Twojej
                skóry.
              </p>

              <span className="service-details">
                Oczyszczanie · Dermapen · Masaż twarzy
              </span>
            </div>

            <div className="service-image">
              <img src="/src/assets/zabieg.png" alt="Zabieg kosmetyczny" />
            </div>

            <div className="service-arrow">→</div>
          </div>

          {/* BRWI I RZĘSY */}
          <div className="service-item">
            <div className="service-number">02</div>

            <div className="service-info">
              <h3>Brwi i rzęsy</h3>

              <p>
                Delikatne podkreślenie spojrzenia i naturalnego piękna Twojej
                twarzy.
              </p>

              <span className="service-details">
                Laminacja · Regulacja · Stylizacja
              </span>
            </div>

            <div className="service-image">
              <img src="/src/assets/brwi.png" alt="Stylizacja brwi" />
            </div>

            <div className="service-arrow">→</div>
          </div>

          {/* DŁONIE I STOPY */}
          <div className="service-item">
            <div className="service-number">03</div>

            <div className="service-info">
              <h3>Dłonie i stopy</h3>

              <p>
                Zadbane dłonie i stopy oraz chwila relaksu tylko dla Ciebie.
              </p>

              <span className="service-details">
                Manicure · Pedicure · Pielęgnacja
              </span>
            </div>

            <div className="service-image">
              <img src="/src/assets/dlonie.png" alt="Pedicure" />
            </div>

            <div className="service-arrow">→</div>
          </div>
        </div>
      </section>

      {/* ZESPÓŁ */}
      <section className="team-section">
        <h2>POZNAJ NASZ ZESPÓŁ</h2>

        <div className="team-members">
          {/* KAROLINA */}
          <div className="team-member">
            <div className="team-image">
              <img
                src="/src/assets/stylist1.png"
                alt="Karolina - stylistka brwi i rzęs"
              />
            </div>

            <div className="team-info">
              <span>Stylistka brwi i rzęs</span>

              <h3>Karolina</h3>

              <p>
                W branży beauty jestem już od 6 lat, to moja praca ale i ogromna
                pasja. Charakteryzuje mnie w pracy dokładność i precyzja. Jestem
                też otwarta i szybko nawiązuję dobre relacje z klientami. W
                życiu prywatnym uwielbiam długie spacery z psem, zakupy i
                podróże. Jeśli marzysz o pięknym podkreśleniu spojrzenia,
                naturalnym efekcie i chwili relaksu zapraszam Cię do mojego
                świata.
              </p>
            </div>
          </div>

          {/* EWA */}
          <div className="team-member team-member-reverse">
            <div className="team-image">
              <img
                src="/src/assets/stylist2.png"
                alt="Ewa - stylistka paznokci"
              />
            </div>

            <div className="team-info">
              <span>Stylistka paznokci</span>

              <h3>Ewa</h3>

              <p>
                W branży beauty jestem już od 6 lat, to moja praca ale i ogromna
                pasja. Charakteryzuje mnie w pracy dokładność i precyzja. Jestem
                też otwarta i szybko nawiązuję dobre relacje z klientami. W
                życiu prywatnym uwielbiam długie spacery z psem, zakupy i
                podróże. Jeśli marzysz o pięknych paznokciach i chwili relaksu
                zapraszam Cię do mojego świata.
              </p>
            </div>
          </div>

          {/* ANNA */}
          <div className="team-member">
            <div className="team-image">
              <img src="/src/assets/stylist3.png" alt="Anna - kosmetolog" />
            </div>

            <div className="team-info">
              <span>Kosmetolog</span>

              <h3>Anna</h3>

              <p>
                W branży beauty jestem już od 6 lat, to moja praca ale i ogromna
                pasja. Charakteryzuje mnie w pracy dokładność i precyzja. Jestem
                też otwarta i szybko nawiązuję dobre relacje z klientami. W
                życiu prywatnym uwielbiam długie spacery z psem, zakupy i
                podróże. Jeśli marzysz o pięknej, zadbanej skórze i chwili
                relaksu zapraszam Cię do mojego świata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-intro">
          <span className="faq-label">FAQ</span>

          <h2>
            Najczęściej
            <br />
            zadawane pytania
          </h2>

          <p>
            Masz pytania dotyczące wizyty? Sprawdź odpowiedzi na najczęstsze
            pytania naszych klientek.
          </p>

          <div className="faq-contact">
            <span>MASZ INNE PYTANIE?</span>
            <a href="/kontakt">Skontaktuj się →</a>
          </div>
        </div>

        <div className="faq-list">
          <details className="faq-item" open>
            <summary>
              <span>01</span>
              <strong>Jak przygotować się do wizyty?</strong>
              <b>−</b>
            </summary>

            <div className="faq-answer">
              <p>
                Przed wizytą warto przyjść bez makijażu w miejscu wykonywanego
                zabiegu oraz poinformować nas o ewentualnych alergiach i
                przeciwwskazaniach.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span>02</span>
              <strong>Czy mogę odwołać lub przełożyć wizytę?</strong>
              <b>+</b>
            </summary>

            <div className="faq-answer">
              <p>
                Tak. Prosimy o kontakt z odpowiednim wyprzedzeniem, abyśmy mogły
                zaproponować inny dogodny termin.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span>03</span>
              <strong>Jak długo trwa zabieg?</strong>
              <b>+</b>
            </summary>

            <div className="faq-answer">
              <p>
                Czas trwania zależy od wybranego zabiegu. Przy każdej usłudze
                znajdziesz orientacyjny czas jej wykonania.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span>04</span>
              <strong>Jak często należy powtarzać zabiegi?</strong>
              <b>+</b>
            </summary>

            <div className="faq-answer">
              <p>
                Częstotliwość zależy od rodzaju zabiegu oraz indywidualnych
                potrzeb. Podczas wizyty chętnie doradzimy odpowiednią
                częstotliwość.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span>05</span>
              <strong>Czy przed zabiegiem odbywa się konsultacja?</strong>
              <b>+</b>
            </summary>

            <div className="faq-answer">
              <p>
                W przypadku wybranych zabiegów przeprowadzamy krótką
                konsultację, aby dopasować usługę do potrzeb skóry i
                oczekiwanego efektu.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>
              <span>06</span>
              <strong>Jakie są przeciwwskazania do zabiegów?</strong>
              <b>+</b>
            </summary>

            <div className="faq-answer">
              <p>
                Przeciwwskazania zależą od rodzaju zabiegu. Jeśli masz
                wątpliwości, skontaktuj się z nami przed wizytą.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* STOPKA */}
      <footer className="footer">
        <div className="footer-main">
          {/* LOGO */}
          <div className="footer-brand">
            <h2>ÉLIA</h2>
            <span>BEAUTY STUDIO</span>

            <p>Piękno. Spokój. Ty.</p>
          </div>

          {/* KONTAKT */}
          <div className="footer-column">
            <h3>Kontakt</h3>

            <p>
              ul. Przykładowa 12
              <br />
              44-000 Katowice
            </p>

            <a href="tel:+48000000000">+48 000 000 000</a>

            <a href="mailto:kontakt@elia-beauty.pl">kontakt@elia-beauty.pl</a>
          </div>

          {/* GODZINY */}
          <div className="footer-column">
            <h3>Godziny otwarcia</h3>

            <p>
              Poniedziałek – Piątek
              <br />
              9:00 – 19:00
            </p>

            <p>
              Sobota
              <br />
              9:00 – 14:00
            </p>

            <p>Niedziela – zamknięte</p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="footer-column footer-social">
            <h3>Obserwuj nas</h3>

            <div className="social-links">
              <a href="#" aria-label="Instagram">
                Instagram
              </a>

              <a href="#" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* DOLNA CZĘŚĆ */}
        <div className="footer-bottom">
          <p>© 2026 ÉLIA Beauty Studio. Wszystkie prawa zastrzeżone.</p>

          <div className="footer-legal">
            <a href="#">Polityka prywatności</a>
            <a href="#">Regulamin</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
