"use client"

import { X } from "lucide-react"
import type { ReactNode } from "react"

const sectionClass = "flex flex-col gap-2"
const headingClass = "text-sm font-semibold text-area-deep"
const paragraphClass = "text-sm leading-7 text-area-muted"
const linkClass = "font-semibold text-brand-primary underline decoration-brand-border underline-offset-2 hover:decoration-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"

function LegalDialog({ id, title, eyebrow, children }: { id: string; title: string; eyebrow: string; children: ReactNode }) {
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
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-area-deep sm:text-3xl" id={`${id}-title`}>{title}</h2>
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

export function LegalModals() {
  return (
    <>
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
