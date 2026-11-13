"use client"

import { X } from "lucide-react"
import type { ReactNode } from "react"

const sectionClass = "flex flex-col gap-2"
const headingClass = "text-sm font-semibold text-area-deep"
const paragraphClass = "text-sm leading-7 text-area-muted"
const subheadingClass = "text-sm font-semibold text-area-deep"
const orderedListClass = "list-decimal pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2"
const listClass = "list-disc pl-5 text-sm leading-7 text-area-muted [&>li+li]:mt-2"
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
        <h3 className={headingClass}>Gliederung</h3>
        <ul className={`${listClass} list-none pl-0`}>
          <li><strong className="text-area-deep">Allgemeine Bestimmungen (für alle Leistungen):</strong> 1. Geltungsbereich · 2. Vertragsschluss · 3. Preise und Zahlung · 4. Verbraucher, Unternehmer und Widerruf · 5. Haftung · 6. Datenschutz · 7. Schlussbestimmungen</li>
          <li><strong className="text-area-deep">Besondere Bestimmungen:</strong> Teil A: IT, Webdesign und Datenrettung · Teil B: Waldbaden · Teil C: KI-Studio und digitale Medien</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>1. Geltungsbereich und Geschäftsbereiche</h3>
        <ol className={orderedListClass}>
          <li>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen und Angebote zwischen Uwe Christian (swea.de), Freiburgstr. 12, 73614 Schorndorf (nachfolgend „Anbieter“) und seinen Kunden (nachfolgend „Kunde“), also Verbraucherinnen und Verbrauchern sowie Unternehmerinnen und Unternehmern.</li>
          <li>
            Der Anbieter erbringt ausschließlich Dienstleistungen, keine Warenverkäufe. Diese gliedern sich in drei Geschäftsbereiche, die in den Besonderen Bestimmungen (Teile A bis C) geregelt sind:
            <ul className={`${listClass} mt-2`}>
              <li><strong className="text-area-deep">Teil A, IT, Webdesign und Datenrettung:</strong> IT-Dienstleistungen und technische Unterstützung, Webdesign und digitale Betreuung sowie die Abwicklung von Datenrettungsanfragen unter Einbindung des externen Partners DataPhoenix, jeweils nach ausdrücklicher Freigabe durch den Kunden.</li>
              <li><strong className="text-area-deep">Teil B, Waldbaden:</strong> Veranstaltungen, Kurse und Angebote im Bereich Waldbaden, einschließlich Buchung, Teilnahme, Absage und Stornierung.</li>
              <li><strong className="text-area-deep">Teil C, KI-Studio und digitale Medien:</strong> individuelle Erstellung digitaler Bilder und Grafiken, Videos sowie Songs und Jingles und die digitale Bereitstellung der vereinbarten Ergebnisse.</li>
            </ul>
          </li>
          <li>Die Allgemeinen Bestimmungen (Abschnitte 1 bis 7) gelten für alle Geschäftsbereiche. Die Teile A, B und C gelten ergänzend nur für den jeweiligen Geschäftsbereich. Bei Abweichungen gehen die Besonderen Bestimmungen vor, danach das jeweilige Angebot.</li>
          <li>Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn der Anbieter ihrer Geltung ausdrücklich schriftlich zustimmt.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>2. Vertragsschluss</h3>
        <ol className={orderedListClass}>
          <li>Der Anbieter betreibt auf dieser Website keinen Online-Shop. Es gibt keinen Warenkorb, keinen Bestellvorgang und keine Online-Zahlung. Der Anbieter verkauft und versendet keine physischen Produkte.</li>
          <li>Die Darstellung der Leistungen auf der Website ist eine unverbindliche Information und kein verbindliches Angebot. Das Kontaktformular der Website öffnet lediglich das E-Mail-Programm des Kunden und begründet für sich keinen Vertrag.</li>
          <li>Verträge werden individuell angebahnt, etwa durch Anfrage des Kunden per E-Mail, Telefon oder auf einem anderen tatsächlich genutzten Kommunikationsweg. Ein Vertrag kommt zustande, wenn der Kunde ein Angebot des Anbieters annimmt oder der Anbieter eine Anfrage oder Buchung ausdrücklich bestätigt, jeweils in Textform, zum Beispiel per E-Mail.</li>
          <li>Allgemeine Leistungsbeschreibungen auf der Website sind keine Zusage eines bestimmten Leistungsumfangs. Die konkrete Leistung ergibt sich aus dem jeweiligen Angebot oder der Auftragsbestätigung. Umfang, Preis, Leistungszeitraum beziehungsweise Bearbeitungszeit, besondere Anforderungen und gegebenenfalls Nutzungsrechte werden individuell vereinbart. Individuelle Absprachen gehen diesen AGB vor.</li>
          <li>Änderungen des Leistungsumfangs und Zusatzleistungen bedürfen einer entsprechenden Vereinbarung in Textform.</li>
          <li>Der Anbieter gibt keine pauschalen Erfolgsgarantien, insbesondere nicht für eine Datenrettung oder für mit KI-Unterstützung erstellte Ergebnisse. Eine Garantie besteht nur, wenn sie ausdrücklich in Textform vereinbart wurde.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>3. Preise und Zahlung</h3>
        <ol className={orderedListClass}>
          <li>Es gelten die zum Zeitpunkt des Vertragsschlusses vereinbarten Preise. Sofern nicht anders angegeben, handelt es sich um Endpreise.</li>
          <li>Der Anbieter ist Kleinunternehmer im Sinne von § 19 UStG. Es wird daher keine Umsatzsteuer berechnet und auf Rechnungen nicht ausgewiesen.</li>
          <li>Rechnungsbeträge sind, sofern im Angebot, in den Besonderen Bestimmungen oder schriftlich nichts anderes vereinbart wurde, innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar. Eine Vorauszahlung gilt, soweit sie in Teil C oder im Angebot vorgesehen ist.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>4. Verbraucher, Unternehmer und Widerruf</h3>
        <ol className={orderedListClass}>
          <li>Verbraucher ist, wer den Vertrag zu Zwecken abschließt, die überwiegend weder seiner gewerblichen noch seiner selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB). Unternehmer ist, wer bei Vertragsschluss in Ausübung seiner gewerblichen oder selbständigen beruflichen Tätigkeit handelt (§ 14 BGB).</li>
          <li>Gesetzliche Rechte von Verbrauchern bleiben durch diese AGB unberührt. Das gilt auch dann, wenn einzelne Regelungen nur für Unternehmer bestimmt sind.</li>
          <li>Unternehmern steht kein gesetzliches Widerrufsrecht zu. Für sie gelten die Regelungen dieser AGB und des Angebots.</li>
          <li>Verbrauchern kann bei Fernabsatzverträgen ein gesetzliches Widerrufsrecht zustehen. Einzelheiten, Folgen und das Muster-Widerrufsformular finden Sie in der <button className={linkClass} data-legal-modal-trigger="withdrawal-modal" type="button">Widerrufsbelehrung</button>. Ob das Widerrufsrecht im Einzelfall besteht oder vorzeitig erlischt, richtet sich nach den gesetzlichen Vorschriften.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>5. Haftung</h3>
        <ol className={orderedListClass}>
          <li>Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.</li>
          <li>Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), also einer Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. In diesem Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.</li>
          <li>Die Haftung nach zwingenden gesetzlichen Vorschriften sowie die Haftung aus einer ausdrücklich übernommenen Garantie bleiben unberührt.</li>
          <li>Regelungen zu Datensicherung und Datenverlust (A2), zu Gefahren im Wald (B3) und zu Inhalten von Kunden (C2) konkretisieren die Pflichten der Parteien. Sie schränken die vorstehende Haftung nicht ein.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>6. Datenschutz</h3>
        <p className={paragraphClass}>Personenbezogene Daten werden nach den gesetzlichen Bestimmungen der DSGVO und des DDG verarbeitet. Einzelheiten finden Sie in unserer <button className={linkClass} data-legal-modal-trigger="privacy-modal" type="button">Datenschutzerklärung</button>.</p>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>7. Schlussbestimmungen und Gerichtsstand</h3>
        <ol className={orderedListClass}>
          <li>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als dadurch nicht der Schutz durch zwingende Bestimmungen des Rechts des Staates entzogen wird, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat.</li>
          <li>Sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, ist Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen der Sitz des Anbieters (Schorndorf).</li>
          <li>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>Teil A: IT-Dienstleistungen, Webdesign und Datenrettung</h3>
        <h4 className={subheadingClass}>A1. Leistungsumfang</h4>
        <ol className={orderedListClass}>
          <li>Der Umfang der IT-Dienstleistungen, etwa Vor-Ort-Support, Fernwartung, Netzwerk- oder WLAN-Einrichtung, Hardware- und Softwareberatung, Individualprogrammierung, Webdesign und digitale Betreuung, ergibt sich aus dem jeweiligen Angebot oder der Auftragsbestätigung.</li>
          <li>Soweit der Anbieter Dienstleistungen erbringt, wird kein bestimmter Erfolg geschuldet, sofern dies nicht ausdrücklich, zum Beispiel bei der Erstellung einer Website oder Individualsoftware als Werkvertrag, vereinbart ist.</li>
        </ol>
        <h4 className={subheadingClass}>A2. Mitwirkung und Datensicherung</h4>
        <ol className={orderedListClass}>
          <li>
            Der Kunde stellt dem Anbieter alle für die vereinbarte Leistung erforderlichen Informationen rechtzeitig zur Verfügung. Dazu gehört insbesondere, dass er
            <ul className={listClass}>
              <li>notwendige Unterlagen, Dateien und Materialien vollständig übermittelt,</li>
              <li>erforderliche Zugänge oder Freigaben ermöglicht,</li>
              <li>seine Angaben auf Richtigkeit und Vollständigkeit prüft,</li>
              <li>Rückfragen und Freigabeanforderungen des Anbieters innerhalb angemessener Zeit beantwortet und</li>
              <li>Änderungen oder neue Anforderungen rechtzeitig mitteilt.</li>
            </ul>
          </li>
          <li>Der Kunde stellt sicher, dass er zur Bereitstellung und zur vereinbarten Nutzung der übermittelten Materialien berechtigt ist. Das betrifft insbesondere Fotos und Bilder, Texte und Dokumente, Logos und Grafiken, Videos und Tonaufnahmen sowie Musik und sonstige kreative Inhalte. Sind auf dem Material Personen erkennbar oder hörbar, müssen deren erforderliche Einwilligungen vorliegen.</li>
          <li>Fehlen Informationen oder ist eine Mitwirkung des Kunden erforderlich, weist der Anbieter den Kunden darauf hin und setzt, falls erforderlich, eine angemessene Frist. Verzögerungen aufgrund fehlender oder verspäteter Mitwirkung können sich auf vereinbarte Termine auswirken. Dadurch entstehender Mehraufwand wird nur berechnet, soweit dies vereinbart ist oder sich aus dem Gesetz ergibt. Die gesetzlichen Rechte beider Vertragsparteien bleiben unberührt.</li>
          <li>Der Kunde soll vor Arbeiten an seiner Hard- oder Software, etwa Vor-Ort-Service, Fernwartung oder Reparaturen, eine vollständige und funktionsfähige Datensicherung (Backup) durchführen. Die Datensicherung gehört nur dann zur Leistung des Anbieters, wenn sie ausdrücklich beauftragt wurde.</li>
          <li>Eine unterlassene Datensicherung kann bei der Bemessung von Schadensersatzansprüchen nach den gesetzlichen Regeln zum Mitverschulden berücksichtigt werden. Im Übrigen richtet sich die Haftung nach Abschnitt 5.</li>
        </ol>
        <h4 className={subheadingClass}>A3. Datenrettung unter Einbindung von DataPhoenix</h4>
        <ol className={orderedListClass}>
          <li>Der Anbieter nimmt Anfragen zur Datenrettung entgegen, bewertet die Situation und wickelt die Datenrettung ab. Je nach Situation versucht der Anbieter zunächst ohne externen Partner, Daten mit eigenen Werkzeugen wiederherzustellen. Bei Bedarf wird der externe Partner DataPhoenix eingebunden.</li>
          <li>Der Anbieter berechnet für Bearbeitung und Abwicklung eine Aufwandspauschale von 40 Euro. Sie deckt die Erstanalyse, die gegebenenfalls erforderliche Abklärung mit dem Partner und die Kommunikation mit dem Kunden ab. Sie wird dem Kunden vor der Beauftragung mitgeteilt und fällt unabhängig davon an, ob der Kunde ein späteres Angebot annimmt. Die erste Diagnose durch DataPhoenix ist durch die Aufwandspauschale abgedeckt.</li>
          <li>Der Datenträger wird erst an DataPhoenix weitergegeben, nachdem der Anbieter dem Kunden eine unverbindliche Preisinformation gegeben und der Kunde der Untersuchung durch DataPhoenix ausdrücklich zugestimmt hat. Abholung beziehungsweise Versand erfolgen entsprechend der vereinbarten Abwicklung und Dringlichkeit.</li>
          <li>Für die tiefergehende technische Diagnose und die mögliche Datenrettung erhält der Kunde vom Anbieter einen individuellen Kostenvoranschlag. Die Kalkulation richtet sich nach der gerätespezifischen Preisliste von DataPhoenix. Über die Datenrettung entscheidet der Kunde erst nach Kenntnis dieses Kostenvoranschlags.</li>
          <li>Der Anbieter schuldet ein sorgfältiges Tätigwerden, jedoch keinen Erfolg. Ob und in welchem Umfang Daten wiederhergestellt werden können, hängt vom Schadensbild und vom Datenträger ab. Angaben zu Erfolgsquoten stammen von DataPhoenix und sind keine Zusicherung des Anbieters.</li>
          <li>Die Allgemeinen Geschäftsbedingungen von DataPhoenix werden durch diese AGB nicht automatisch Vertragsbestandteil.</li>
        </ol>
        <h4 className={subheadingClass}>A4. Webdesign, Softwareerstellung und Nutzungsrechte</h4>
        <ol className={orderedListClass}>
          <li>Der Kunde stellt dem Anbieter Inhalte wie Bilder, Texte und Logos zur Verfügung und garantiert, dass er über die entsprechenden Nutzungsrechte verfügt und keine Rechte Dritter verletzt.</li>
          <li>Bis zur vollständigen Bezahlung der Vergütung verbleiben sämtliche Urheber- und Nutzungsrechte an individuell erstellten Websites, Layouts, Programmierungen oder Skripten beim Anbieter. Nach vollständiger Bezahlung erhält der Kunde das vertraglich vereinbarte einfache Nutzungsrecht.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>Teil B: Waldbaden, Achtsamkeit und Entschleunigungskurse</h3>
        <h4 className={subheadingClass}>B1. Buchung, Teilnahme und Eigenverantwortung</h4>
        <ol className={orderedListClass}>
          <li>Termine, Treffpunkt, Teilnehmerzahl und Preis ergeben sich aus der jeweiligen Kursbeschreibung, dem Angebot oder der Buchungsbestätigung. Der Vertrag kommt gemäß Abschnitt 2 zustande.</li>
          <li>Kurse, Wanderungen und Übungen finden vorwiegend in der freien Natur (Wald) statt. Die Teilnehmenden entscheiden eigenverantwortlich, ob ihre Gesundheit und Belastbarkeit eine Teilnahme zulassen.</li>
          <li>Den Anweisungen des Kursleiters im Wald ist zur eigenen Sicherheit und zum Schutz der Natur Folge zu leisten. Die Teilnehmenden sind für angemessene, wetterfeste Bekleidung und festes Schuhwerk selbst verantwortlich.</li>
          <li>Waldbaden und Achtsamkeitstraining stellen keine medizinische oder therapeutische Behandlung dar und ersetzen nicht die Diagnose oder Behandlung durch einen Arzt, Psychotherapeuten oder Heilpraktiker.</li>
        </ol>
        <h4 className={subheadingClass}>B2. Absage, Rücktritt und Stornierung</h4>
        <p className={paragraphClass}>Für Einzelpersonen und Kleingruppen gelten folgende Stornierungsbedingungen:</p>
        <ul className={listClass}>
          <li>Bis einschließlich 7 Tage vor Kursbeginn ist eine kostenfreie Stornierung möglich.</li>
          <li>Bei einer Stornierung ab 6 Tagen bis einschließlich 48 Stunden vor Kursbeginn werden 50 % des vereinbarten Preises fällig.</li>
          <li>Bei einer Stornierung weniger als 48 Stunden vor Kursbeginn oder bei Nichterscheinen wird der volle Kursbeitrag fällig. Dem Kunden steht der Nachweis frei, dass ein geringerer Schaden entstanden ist.</li>
        </ul>
        <p className={paragraphClass}><strong className="text-area-deep">Firmenevents und individuelle Gruppenbuchungen:</strong> Stornobedingungen richten sich nach den im jeweiligen Einzelangebot getroffenen Vereinbarungen.</p>
        <p className={paragraphClass}><strong className="text-area-deep">Absage durch den Anbieter:</strong> Bei extremen Wetterlagen, etwa Sturmwarnung, Gewitter oder Unwettergefahr, bei Krankheit des Kursleiters oder in sonstigen Fällen höherer Gewalt kann der Anbieter Termine aus Sicherheitsgründen auch kurzfristig absagen. In diesem Fall wird ein Ersatztermin vereinbart oder bereits gezahlte Gebühren werden vollständig erstattet.</p>
        <h4 className={subheadingClass}>B3. Typische Waldgefahren</h4>
        <p className={paragraphClass}>Zu den typischen Gefahren des Waldes zählen herabfallende Äste, Unebenheiten des Bodens, Insektenstiche und witterungsbedingte Einflüsse. Die Teilnehmenden werden darauf hingewiesen und achten darauf eigenverantwortlich. Die Haftung des Anbieters richtet sich auch hierfür nach Abschnitt 5.</p>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>Teil C: KI-Studio und digitale Medien</h3>
        <h4 className={subheadingClass}>C1. Leistungsumfang und Auftrag</h4>
        <ol className={orderedListClass}>
          <li>Das KI-Studio erstellt individuelle digitale Medien, nämlich digitale Bilder und Grafiken, Videos, Songs, Jingles und sonstiges Audiomaterial. Art, Umfang und Ergebnis ergeben sich aus dem Angebot oder der Auftragsbestätigung.</li>
          <li>Der Anbieter beginnt erst nach dem schriftlichen Auftrag des Kunden. Sollen Personen abgebildet oder ihre Stimme beziehungsweise ihr Aussehen verwendet werden, beginnt der Anbieter erst nach der Einwilligung dieser Person.</li>
          <li>Sexualisierte oder gewaltbeinhaltende Inhalte erstellt der Anbieter nicht. Er prüft jeden Auftrag individuell und kann Aufträge ablehnen.</li>
        </ol>
        <h4 className={subheadingClass}>C2. Material und Inhalte des Kunden</h4>
        <ol className={orderedListClass}>
          <li>Fotos, Texte, Logos, Musik und sonstiges Material darf der Kunde nur übergeben, wenn er die erforderlichen Rechte daran besitzt und keine Rechte Dritter verletzt werden.</li>
          <li>Der Kunde stellt sicher, dass Personen, die auf übergebenem Material erkennbar sind oder deren Stimme verwendet wird, in die vorgesehene Verwendung eingewilligt haben.</li>
        </ol>
        <h4 className={subheadingClass}>C3. Digitale Bereitstellung</h4>
        <ol className={orderedListClass}>
          <li>Die fertigen Ergebnisse werden ausschließlich digital übergeben. Der Anbieter druckt nicht, produziert keine bedruckten Waren und versendet keine physischen Produkte.</li>
          <li>Möchte der Kunde ein Ergebnis drucken oder anderweitig verarbeiten lassen, beauftragt er dafür selbst einen externen Anbieter.</li>
        </ol>
        <h4 className={subheadingClass}>C4. Nutzungsrechte, Urheberrecht und Referenzen</h4>
        <ol className={orderedListClass}>
          <li>Nutzungsrechte an den Ergebnissen werden nicht pauschal, sondern nur im ausdrücklich vereinbarten Umfang eingeräumt. Maßgeblich sind Angebot und Auftragsbestätigung.</li>
          <li>Eigene kreative Beiträge des Anbieters werden respektiert. Ein Urheberrechtsschutz besteht nur, soweit die gesetzlichen Voraussetzungen erfüllt sind. Nicht jedes mit KI-Unterstützung erstellte Ergebnis ist automatisch urheberrechtlich geschützt. Der Anbieter sichert daher keinen Urheberrechtsschutz und keine Ausschließlichkeit der Ergebnisse zu, sofern dies nicht ausdrücklich vereinbart ist.</li>
          <li>Aufträge und Ergebnisse veröffentlicht der Anbieter nicht als Referenz oder Werbung, ohne dass der Kunde gesondert zugestimmt hat.</li>
        </ol>
        <h4 className={subheadingClass}>C5. Vergütung</h4>
        <p className={paragraphClass}>Die Bezahlung der Leistungen des KI-Studios erfolgt im Voraus. Der Anbieter stellt eine Rechnung ohne ausgewiesene Umsatzsteuer aus (siehe Abschnitt 3).</p>
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
          <p className={paragraphClass}>Wenn Sie Verbraucher im Sinne des § 13 BGB sind, können Sie einen Fernabsatzvertrag grundsätzlich innerhalb von 14 Tagen ohne Angabe von Gründen widerrufen. Bei Dienstleistungen und digitalen Inhalten, die nicht auf einem körperlichen Datenträger geliefert werden, beginnt die Frist grundsätzlich mit Vertragsschluss. Sie beginnt am Folgetag und endet nach 14 Tagen. SWEA verkauft und versendet keine Waren.</p>
          <p className={paragraphClass}>Um zu widerrufen, informieren Sie Uwe Christian mit einer eindeutigen Erklärung (zum Beispiel per Brief oder E-Mail) über Ihren Entschluss. Zur Wahrung der Frist reicht es aus, dass Sie die Erklärung vor Ablauf der Widerrufsfrist absenden.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Folgen des Widerrufs</h3>
          <p className={paragraphClass}>Im Fall eines wirksamen Widerrufs erstatten wir erhaltene Zahlungen grundsätzlich innerhalb von 14 Tagen ab Eingang Ihrer Widerrufserklärung mit demselben Zahlungsmittel, das Sie bei der Zahlung eingesetzt haben, sofern nichts anderes vereinbart wurde.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Vorzeitiges Erlöschen bei digitalen Inhalten</h3>
          <p className={paragraphClass}>Bei digitalen Inhalten, die nicht auf einem körperlichen Datenträger geliefert werden, erlischt das Widerrufsrecht vorzeitig erst, wenn wir mit der Vertragserfüllung begonnen haben, nachdem Sie ausdrücklich zugestimmt haben, dass wir vor Ablauf der Widerrufsfrist beginnen, Sie bestätigt haben, dass Ihnen der Verlust des Widerrufsrechts mit Beginn der Vertragserfüllung bekannt ist, und wir Ihnen eine Vertragsbestätigung zur Verfügung gestellt haben.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>AGB-Hinweise und Steuerhinweis</h3>
          <p className={paragraphClass}>Bei individuell erstellten digitalen Inhalten und Dienstleistungen werden Leistungsumfang, Preis, Bereitstellungs- bzw. Bearbeitungszeit und gegebenenfalls Nutzungsrechte im jeweiligen Angebot oder in der Auftragsbestätigung festgehalten. Individuelle Absprachen ergänzen diese Angaben. Für Verbraucher gelten die gesetzlichen Rechte, insbesondere das gesetzliche Widerrufsrecht, soweit keine gesetzliche Ausnahme greift.</p>
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
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*) / die Bereitstellung der folgenden digitalen Inhalte (*):<br />
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
