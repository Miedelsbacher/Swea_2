"use client"

import { X } from "lucide-react"
import type { ReactNode } from "react"

const sectionClass = "flex flex-col gap-2"
const headingClass = "text-sm font-semibold text-area-deep"
const paragraphClass = "text-sm leading-7 text-area-muted"
const linkClass = "font-semibold text-brand-primary underline decoration-brand-border underline-offset-2 hover:decoration-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"

function LegalDialog({ id, title, eyebrow, headerDetails, children }: { id: string; title: string; eyebrow: string; headerDetails?: ReactNode; children: ReactNode }) {
  return (
    <dialog
      aria-labelledby={`${id}-title`}
      className="m-auto max-h-[min(84dvh,58rem)] w-[min(48rem,calc(100%-2rem))] max-w-none overflow-y-auto rounded-3xl border border-area-border bg-area-surface p-0 text-area-deep shadow-2xl backdrop:bg-area-deep/70 backdrop:backdrop-blur-sm"
      id={id}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-area-border bg-area-surface/95 px-5 py-5 backdrop-blur sm:px-8">
        <div className="min-w-0">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-area-deep sm:text-3xl" id={`${id}-title`}>{title}</h2>
          {headerDetails}
        </div>
        <form method="dialog">
          <button aria-label={`${title} schließen`} className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-area-border text-area-deep transition hover:bg-area-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2" type="submit">
            <X aria-hidden="true" size={18} />
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-7 px-5 py-6 sm:px-8 sm:py-8">{children}</div>
    </dialog>
  )
}

export function AGBModal() {
  return (
    <LegalDialog
      eyebrow="Vertragsbedingungen"
      headerDetails={(
        <address className="mt-2 not-italic text-xs leading-5 text-area-muted sm:text-sm sm:leading-6">
          <strong className="text-area-deep">Uwe Christian</strong> · Freiburgstr. 12 · 73614 Schorndorf<br />
          E-Mail: <a className={linkClass} href="mailto:edv@swea.de">edv@swea.de</a> / <a className={linkClass} href="mailto:wb@swea.de">wb@swea.de</a>
        </address>
      )}
      id="agb-modal"
      title="Allgemeine Geschäftsbedingungen"
    >
      <section className={sectionClass}>
        <h3 className={headingClass}>1. Geltungsbereich und Vertragspartner</h3>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen und Angebote zwischen Uwe Christian (swea.de), Freiburgstr. 12, 73614 Schorndorf (nachfolgend „Anbieter“) und seinen Kunden, Verbraucherinnen und Verbrauchern sowie Unternehmerinnen und Unternehmern.</li>
          <li>Der Anbieter betreibt zwei unterschiedliche Geschäftsbereiche: Teil A umfasst IT-, EDV- und Webdesign-Dienstleistungen, Hardware- und Softwareberatung, Individualprogrammierung und Datenwiederherstellung. Teil B umfasst Waldbaden, Achtsamkeitstraining, Entschleunigungskurse sowie Gruppen- und Firmenveranstaltungen.</li>
          <li>Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn der Anbieter ihrer Geltung ausdrücklich schriftlich zustimmt.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>2. Kleinunternehmerregelung</h3>
        <p className={paragraphClass}>Der Anbieter ist Kleinunternehmer im Sinne von § 19 UStG. Es wird daher keine Umsatzsteuer berechnet und auf Rechnungen nicht ausgewiesen.</p>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>3. Preise, Zahlungsbedingungen und Eigentumsvorbehalt</h3>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Es gelten die zum Zeitpunkt des Vertragsschlusses vereinbarten Preise. Sofern nicht anders angegeben, handelt es sich um Endpreise.</li>
          <li>Rechnungsbeträge sind, sofern nicht schriftlich etwas anderes vereinbart wurde, innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.</li>
          <li>Bis zur vollständigen Bezahlung aller Forderungen bleibt gelieferte Hardware, Software oder sonstige Ware Eigentum des Anbieters.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>Teil A: IT-, EDV- und Webdesign-Dienstleistungen, Software</h3>
        <h4 className="text-sm font-semibold text-area-deep">A1. Leistungsumfang</h4>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Der Umfang der EDV-Dienstleistungen, etwa Vor-Ort-Support, Fernwartung, Netzwerk- oder WLAN-Einrichtung, Hardware-Beratung, Individualprogrammierung und Webdesign, ergibt sich aus dem jeweiligen Angebot oder der Auftragsbestätigung.</li>
          <li>Soweit der Anbieter Dienstleistungen erbringt, wird kein bestimmter Erfolg geschuldet, sofern dies nicht ausdrücklich, zum Beispiel bei der Erstellung einer Website oder Individualsoftware als Werkvertrag, vereinbart ist.</li>
        </ol>
        <h4 className="text-sm font-semibold text-area-deep">A2. Mitwirkung und Datensicherung</h4>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Der Kunde ist verpflichtet, vor Arbeiten an seiner Hard- oder Software, etwa Vor-Ort-Service, Fernwartung oder Reparaturen, eine vollständige und funktionsfähige Datensicherung (Backup) durchzuführen.</li>
          <li>Der Anbieter übernimmt keine Haftung für Datenverluste, die darauf zurückzuführen sind, dass der Kunde seiner Pflicht zur ordnungsgemäßen Datensicherung nicht nachgekommen ist, es sei denn, die Datensicherung war ausdrücklich Gegenstand des beauftragten Dienstes.</li>
        </ol>
        <h4 className="text-sm font-semibold text-area-deep">A3. Datenrettung und Wiederherstellung</h4>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Die Überprüfung im Rahmen des Diagnoseservices für Datenrettungen erfolgt unverbindlich.</li>
          <li>Die Abwicklung von Datenrettungen kann unter Einbindung spezialisierter Partnerunternehmen erfolgen. Der Anbieter schuldet hierbei ein bemühtes Tätigwerden, kann jedoch keine Garantie für das Gelingen der Datenwiederherstellung übernehmen.</li>
        </ol>
        <h4 className="text-sm font-semibold text-area-deep">A4. Webdesign, Softwareerstellung und Nutzungsrechte</h4>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Der Kunde stellt dem Anbieter Inhalte wie Bilder, Texte und Logos zur Verfügung und garantiert, dass er über die entsprechenden Nutzungsrechte verfügt und keine Rechte Dritter verletzt.</li>
          <li>Bis zur vollständigen Bezahlung der Vergütung verbleiben sämtliche Urheber- und Nutzungsrechte an individuell erstellten Websites, Layouts, Programmierungen oder Skripten beim Anbieter. Nach vollständiger Bezahlung erhält der Kunde das vertraglich vereinbarte einfache Nutzungsrecht.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>Teil B: Waldbaden, Achtsamkeit und Entschleunigungskurse</h3>
        <h4 className="text-sm font-semibold text-area-deep">B1. Teilnahmevoraussetzungen und Eigenverantwortung</h4>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Kurse, Wanderungen und Übungen im Rahmen des Waldbadens und der Achtsamkeit finden vorwiegend in der freien Natur (Wald) statt. Die Teilnahme erfolgt auf eigene Gefahr und eigene Verantwortung.</li>
          <li>Den Anweisungen des Kursleiters im Wald ist zur eigenen Sicherheit und zum Schutz der Natur Folge zu leisten. Die Teilnehmenden sind für angemessene, wetterfeste Bekleidung und festes Schuhwerk selbst verantwortlich.</li>
          <li>Waldbaden und Achtsamkeitstraining stellen keine medizinische oder therapeutische Behandlung dar und ersetzen nicht die Diagnose oder Behandlung durch einen Arzt, Psychotherapeuten oder Heilpraktiker.</li>
        </ol>
        <h4 className="text-sm font-semibold text-area-deep">B2. Absage, Rücktritt und Stornierung</h4>
        <p className={paragraphClass}>Für Einzelpersonen und Kleingruppen gelten folgende Stornierungsbedingungen:</p>
        <ul className="list-disc pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Bis einschließlich 7 Tage vor Kursbeginn ist eine kostenfreie Stornierung möglich.</li>
          <li>Bei einer Stornierung ab 6 Tagen bis einschließlich 48 Stunden vor Kursbeginn werden 50 % des vereinbarten Preises fällig.</li>
          <li>Bei einer Stornierung weniger als 48 Stunden vor Kursbeginn oder bei Nichterscheinen wird der volle Kursbeitrag fällig. Dem Kunden steht der Nachweis frei, dass ein geringerer Schaden entstanden ist.</li>
        </ul>
        <p className={paragraphClass}><strong className="text-area-deep">Firmenevents und individuelle Gruppenbuchungen:</strong> Stornobedingungen richten sich nach den im jeweiligen Einzelangebot getroffenen Vereinbarungen.</p>
        <p className={paragraphClass}><strong className="text-area-deep">Absage durch den Anbieter:</strong> Bei extremen Wetterlagen, etwa Sturmwarnung, Gewitter oder Unwettergefahr, bei Krankheit des Kursleiters oder in sonstigen Fällen höherer Gewalt kann der Anbieter Termine aus Sicherheitsgründen auch kurzfristig absagen. In diesem Fall wird ein Ersatztermin vereinbart oder bereits gezahlte Gebühren werden vollständig erstattet. Weitergehende Ansprüche des Kunden sind ausgeschlossen, soweit gesetzlich zulässig.</p>
        <h4 className="text-sm font-semibold text-area-deep">B3. Haftung und typische Waldgefahren</h4>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.</li>
          <li>Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht). In diesem Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.</li>
          <li>Für typische Gefahren des Waldes, etwa herabfallende Äste, Unebenheiten des Bodens, Insektenstiche und witterungsbedingte Einflüsse, haftet der Anbieter nur im Rahmen der vorstehenden gesetzlichen Haftungsregelungen.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>4. Datenschutz</h3>
        <p className={paragraphClass}>Personenbezogene Daten werden nach den gesetzlichen Bestimmungen der DSGVO und des DDG verarbeitet. Einzelheiten finden Sie in unserer <button className={linkClass} data-legal-modal-trigger="privacy-modal" type="button">Datenschutzerklärung</button>.</p>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>5. Schlussbestimmungen und Gerichtsstand</h3>
        <ol className="list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2">
          <li>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als dadurch nicht der Schutz durch zwingende Bestimmungen des Rechts des Staates entzogen wird, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat.</li>
          <li>Sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, ist Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen der Sitz des Anbieters (Schorndorf).</li>
          <li>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</li>
        </ol>
      </section>
    </LegalDialog>
  )
}

export function LegalModals() {
  return (
    <>
      <AGBModal />
      <LegalDialog eyebrow="Datenschutz · Stand: 13. November 2026" id="privacy-modal" title="Datenschutzerklärung">
        <section className={sectionClass}>
          <h3 className={headingClass}>Geltungsbereich</h3>
          <p className={paragraphClass}>Diese Datenschutzerklärung gilt für den Internetauftritt unter <a className={linkClass} href="https://www.swea.de/" rel="noreferrer" target="_blank">www.swea.de</a>.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Verantwortlicher</h3>
          <p className={paragraphClass}>Verantwortlich für die Verarbeitung personenbezogener Daten ist Uwe Christian, Freiburgstr. 12, 73614 Schorndorf. Sie erreichen ihn unter <a className={linkClass} href="mailto:edv@swea.de">edv@swea.de</a> oder <a className={linkClass} href="mailto:wb@swea.de">wb@swea.de</a>, telefonisch unter <a className={linkClass} href="tel:+497181253147">+49 7181 253147</a>.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Hosting, Cloudflare und technische Protokolle</h3>
          <p className={paragraphClass}>Die Website unter <a className={linkClass} href="https://www.swea.de/" rel="noreferrer" target="_blank">https://www.swea.de</a> wird bei hosting.de gehostet. Für die Domain swea.de wird Cloudflare zur DNS-Verwaltung sowie als Content Delivery Network (CDN) und Sicherheitsdienst eingesetzt. Dabei können insbesondere IP-Adresse, Datum und Uhrzeit, angeforderte Seite, Referrer sowie Browser- und Geräteinformationen in Server- und Sicherheitsprotokollen verarbeitet werden. Die Verarbeitung durch Cloudflare erfolgt insbesondere zur Gewährleistung der Sicherheit und Leistungsfähigkeit auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Informationen zu den Anbietern und ihren Datenschutzbedingungen finden Sie bei <a className={linkClass} href="https://www.hosting.de/datenschutz/" rel="noreferrer" target="_blank">hosting.de</a> und <a className={linkClass} href="https://www.cloudflare.com/privacypolicy/" rel="noreferrer" target="_blank">Cloudflare</a>.</p>
          <p className={paragraphClass}>Protokolldaten werden nur so lange aufbewahrt, wie dies für Betrieb, Fehleranalyse und Abwehr von Angriffen erforderlich ist, und anschließend nach den Vorgaben des jeweiligen Anbieters gelöscht oder anonymisiert, soweit keine gesetzlichen Pflichten entgegenstehen.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Kontakt per E-Mail, Telefon und Formular</h3>
          <p className={paragraphClass}>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Kontakt- und Inhaltsdaten, um Ihre Anfrage zu beantworten und gegebenenfalls einen Auftrag vorzubereiten oder durchzuführen. Das Kontaktformular dieser Website übermittelt seine Eingaben nicht an unseren Webserver; beim Absenden wird Ihr E-Mail-Programm geöffnet. Erst wenn Sie die Nachricht versenden, erhalten wir die darin enthaltenen Angaben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen oder vertraglichen Anliegen und Art. 6 Abs. 1 lit. f DSGVO bei sonstigen Anfragen.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>IT- und EDV-Unterstützung, Fernwartung und Datenrettung</h3>
          <p className={paragraphClass}>Für IT- und EDV-Unterstützung verarbeiten wir die zur Diagnose, Fehlerbehebung und Abwicklung des Auftrags erforderlichen Kontakt-, Geräte- und Fehlerangaben. Bei Datenrettung können wir im erforderlichen Umfang mit Dateien oder Datenträgern arbeiten, die personenbezogene Daten enthalten. Der Zugriff wird auf das für den Auftrag notwendige Maß beschränkt; eine Sicherung oder Übergabe von wiederhergestellten Daten erfolgt nur nach individueller Abstimmung.</p>
          <p className={paragraphClass}>Eine Fernwartung wird ausschließlich verschlüsselt und erst nach Ihrer aktiven Zustimmung bzw. Freigabe der Verbindung gestartet. Sie können die Sitzung jederzeit beenden. Zugangsdaten werden nicht für einen unbeaufsichtigten späteren Zugriff gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für die Auftragsdurchführung; soweit erforderlich, Art. 6 Abs. 1 lit. f DSGVO für sichere Fehlerdiagnose und IT-Betrieb.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Waldbaden-Kursanfragen und Buchungen</h3>
          <p className={paragraphClass}>Bei Anfragen und Buchungen zu Waldbaden-Kursen verarbeiten wir Name, Kontaktdaten, gewünschte Termine und die für Organisation und Durchführung erforderlichen Angaben. Die Daten verwenden wir zur Beantwortung der Anfrage, zur Buchungsabwicklung und für notwendige Informationen zum Kurs. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Wir speichern die Angaben nur so lange, wie es für Anfrage, Kursabwicklung und etwaige gesetzliche Aufbewahrungspflichten erforderlich ist.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Cookies, externe Medien und Speicherdauer</h3>
          <p className={paragraphClass}>Diese Website bindet derzeit keine Analyse- oder Werbedienste ein. Einzelne Bilder, Audio- und Videodateien können von externen Speicherdiensten geladen werden; dabei erhält der jeweilige Anbieter technische Verbindungsdaten. Links zu Fernwartungs- oder anderen Drittanbietern sind nicht in die Website eingebettet. Erst wenn Sie einen solchen Link öffnen, gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Anfragen löschen wir, sobald sie für die Bearbeitung nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Ihre Rechte und Beschwerdemöglichkeit</h3>
          <p className={paragraphClass}>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Sie können einer Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation ergeben, nach Art. 21 DSGVO widersprechen. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen; die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.</p>
          <p className={paragraphClass}>Zur Ausübung Ihrer Rechte genügt eine Nachricht an <a className={linkClass} href="mailto:edv@swea.de">edv@swea.de</a>. Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, insbesondere beim <a className={linkClass} href="https://www.baden-wuerttemberg.datenschutz.de/" rel="noreferrer" target="_blank">Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg</a>.</p>
        </section>
      </LegalDialog>

      <LegalDialog eyebrow="Verbraucherinformationen" id="withdrawal-modal" title="Widerrufsbelehrung & AGB-Hinweise">
        <section className={sectionClass}>
          <h3 className={headingClass}>Widerrufsrecht für Verbraucher</h3>
          <p className={paragraphClass}>Wenn Sie Verbraucher im Sinne des § 13 BGB sind, können Sie einen Fernabsatzvertrag grundsätzlich innerhalb von 14 Tagen ohne Angabe von Gründen widerrufen. Bei einem Warenkauf beginnt die Frist an dem Tag, an dem Sie oder eine von Ihnen benannte Person die Ware erhalten. Bei Dienstleistungen und digitalen Inhalten, die nicht auf einem körperlichen Datenträger geliefert werden, beginnt sie grundsätzlich mit Vertragsschluss. Die Frist beginnt jeweils am Folgetag und endet nach 14 Tagen.</p>
          <p className={paragraphClass}>Um zu widerrufen, informieren Sie Uwe Christian mit einer eindeutigen Erklärung (zum Beispiel per Brief oder E-Mail) über Ihren Entschluss. Zur Wahrung der Frist reicht es aus, dass Sie die Erklärung vor Ablauf der Widerrufsfrist absenden.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Folgen des Widerrufs und Rücksendekosten</h3>
          <p className={paragraphClass}>Im Fall eines wirksamen Widerrufs erstatten wir erhaltene Zahlungen grundsätzlich innerhalb von 14 Tagen ab Eingang Ihrer Widerrufserklärung mit demselben Zahlungsmittel, das Sie bei der Zahlung eingesetzt haben, sofern nichts anderes vereinbart wurde. Bei Waren können wir die Rückzahlung verweigern, bis wir die Ware zurückerhalten oder Sie den Nachweis erbracht haben, dass Sie sie zurückgesandt haben.</p>
          <p className={paragraphClass}>Sie tragen die unmittelbaren Kosten der Rücksendung, wenn Sie darüber vor Vertragsschluss informiert wurden. Bei Waren, die aufgrund ihrer Beschaffenheit nicht normal mit der Post zurückgesandt werden können, teilen wir Ihnen die voraussichtlichen Rücksendekosten vor Vertragsschluss mit.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Ausnahmen und vorzeitiges Erlöschen</h3>
          <p className={paragraphClass}>Das Widerrufsrecht besteht insbesondere nicht bei Waren, die nicht vorgefertigt sind und für deren Herstellung Ihre individuelle Auswahl oder Bestimmung maßgeblich ist oder die eindeutig auf Ihre persönlichen Bedürfnisse zugeschnitten sind (§ 312g Abs. 2 Nr. 1 BGB).</p>
          <p className={paragraphClass}>Bei versiegelten Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, erlischt das Widerrufsrecht, wenn die Versiegelung nach der Lieferung entfernt wurde. Bei versiegelten Ton- oder Videoaufnahmen sowie versiegelter Software erlischt es, wenn die Versiegelung nach der Lieferung entfernt wurde.</p>
          <p className={paragraphClass}>Bei digitalen Inhalten, die nicht auf einem körperlichen Datenträger geliefert werden, erlischt das Widerrufsrecht vorzeitig erst, wenn wir mit der Vertragserfüllung begonnen haben, nachdem Sie ausdrücklich zugestimmt haben, dass wir vor Ablauf der Widerrufsfrist beginnen, Sie bestätigt haben, dass Ihnen der Verlust des Widerrufsrechts mit Beginn der Vertragserfüllung bekannt ist, und wir Ihnen eine Vertragsbestätigung zur Verfügung gestellt haben.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>AGB-Hinweise und Steuerhinweis</h3>
          <p className={paragraphClass}>Bei individuell angefertigten Produkten, digitalen Inhalten und Dienstleistungen werden Leistungsumfang, Preis, Liefer- bzw. Bearbeitungszeit und gegebenenfalls Nutzungsrechte im jeweiligen Angebot oder in der Auftragsbestätigung festgehalten. Individuelle Absprachen ergänzen diese Angaben. Für Verbraucher gelten die gesetzlichen Rechte, insbesondere das gesetzliche Widerrufsrecht, soweit keine gesetzliche Ausnahme greift.</p>
          <p className={paragraphClass}><strong className="text-area-deep">Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer ausgewiesen.</strong></p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Muster-Widerrufsformular</h3>
          <p className={paragraphClass}>Wenn Sie den Vertrag widerrufen wollen, können Sie dieses Formular ausfüllen und an uns zurücksenden. Die Verwendung ist nicht verpflichtend.</p>
          <address className="not-italic text-sm leading-7 text-area-deep">
            An Uwe Christian<br />
            Freiburgstr. 12<br />
            73614 Schorndorf<br />
            E-Mail: <a className={linkClass} href="mailto:edv@swea.de">edv@swea.de</a>
          </address>
          <div className="rounded-2xl border border-area-border bg-area-soft p-4 text-sm leading-7 text-area-muted sm:p-5">
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*):<br />
            Bestellt am (*) / erhalten am (*):<br />
            Name des/der Verbraucher(s):<br />
            Anschrift des/der Verbraucher(s):<br />
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):<br />
            Datum:<br />
            (*) Unzutreffendes streichen.
          </div>
        </section>
      </LegalDialog>

      <LegalDialog eyebrow="Anbieterkennzeichnung" id="imprint-modal" title="Impressum">
        <section className={sectionClass}>
          <h3 className={headingClass}>Angaben gemäß § 5 DDG</h3>
          <p className={paragraphClass}>Diese Anbieterkennzeichnung gilt für den Internetauftritt unter <a className={linkClass} href="https://www.swea.de/" rel="noreferrer" target="_blank">www.swea.de</a>.</p>
          <address className="not-italic text-sm leading-7 text-area-deep">
            <strong>Uwe Christian</strong><br />
            Freiburgstr. 12<br />
            73614 Schorndorf
          </address>
          <p className={paragraphClass}>Telefon: <a className={linkClass} href="tel:+497181253147">+49 7181 253147</a><br />Telefax: <a className={linkClass} href="tel:+497181253151">+49 7181 253151</a><br />E-Mail: <a className={linkClass} href="mailto:edv@swea.de">edv@swea.de</a><br />Weitere E-Mail: <a className={linkClass} href="mailto:wb@swea.de">wb@swea.de</a><br />Internet: <a className={linkClass} href="https://www.swea.de/" rel="noreferrer" target="_blank">www.swea.de</a></p>
          <p className={paragraphClass}><strong className="text-area-deep">Inhaber:</strong> Uwe Christian</p>
        </section>
        <section className={sectionClass}>
          <h3 className={headingClass}>Umsatzsteuer und redaktionelle Inhalte</h3>
          <p className={paragraphClass}>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE352438907</p>
          <p className={paragraphClass}>Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen (Kleinunternehmerregelung).</p>
          <p className={paragraphClass}>Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2 MStV: Uwe Christian, Freiburgstr. 12, 73614 Schorndorf.</p>
        </section>
        <section className={sectionClass}>
          <h3 className={headingClass}>Haftung und Bildnachweise</h3>
          <p className={paragraphClass}>Für Inhalte verlinkter externer Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich. Urheber und Bildquelle der eigenen Bilder: Uwe Christian, soweit bei einzelnen Medien nichts anderes angegeben ist.</p>
        </section>
      </LegalDialog>
    </>
  )
}
