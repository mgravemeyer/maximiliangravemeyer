import { useRouter } from 'next/router';

const Impressum = () => {
  const router = useRouter();

  const redirectPortfolio = () => {
    router.push('/');
  };

  return (
    <div className="p-8 sm:p-24">
      <a className="hover:cursor-pointer" onClick={redirectPortfolio}>
        Back
      </a>

      <h1 className="mt-8">Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Maximilian Gravemeyer
        <br />
        Softwareentwicklung als Dienstleistung, Ver&ouml;ffentlichung von
        Artikeln.
        <br />
        Weinbergsweg 20
        <br />
        10119 Berlin
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 175 7441765
        <br />
        E-Mail: m.gravemeyer@icloud.com
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>Maximilian Gravemeyer, Weinbergsweg 20, 10119 Berlin</p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{' '}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
      </p>
    </div>
  );
};

export default Impressum;
