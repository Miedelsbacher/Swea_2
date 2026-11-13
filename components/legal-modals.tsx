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

export function LegalModalTrigger({ dialogId, className, children }: { dialogId: string; className: string; children: ReactNode }) {
  return (
    <button
      className={className}
      onClick={() => {
        const target = document.getElementById(dialogId)
        if (!(target instanceof HTMLDialogElement)) return

        const openDialog = document.querySelector<HTMLDialogElement>("dialog[open]")
        if (openDialog === target) return
        openDialog?.close()
        target.showModal()
      }}
      type="button"
    >
      {children}
    </button>
  )
}

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
          <li>Verbrauchern kann bei Fernabsatzverträgen ein gesetzliches Widerrufsrecht zustehen. Einzelheiten, Folgen und das Muster-Widerrufsformular finden Sie in der <LegalModalTrigger className={linkClass} dialogId="withdrawal-modal">Widerrufsbelehrung</LegalModalTrigger>. Ob das Widerrufsrecht im Einzelfall besteht oder vorzeitig erlischt, richtet sich nach den gesetzlichen Vorschriften.</li>
          <li>Bei Verträgen mit Verbrauchern über Waldbaden-Veranstaltungen kann das Widerrufsrecht nach § 312g Abs. 2 Nr. 9 BGB ausgeschlossen sein, wenn die Veranstaltung eine Dienstleistung im Zusammenhang mit einer Freizeitbetätigung ist und der verbindliche Vertrag einen konkreten Termin oder Zeitraum für ihre Erbringung vorsieht. Das kann etwa für eine verbindlich gebuchte After-Work-Veranstaltung oder einen Kurs mit festgelegtem Zeitraum gelten. Die Ausnahme gilt nicht pauschal für alle Waldbaden-Angebote. Bei flexiblen Angeboten oder wenn im verbindlichen Vertrag noch kein spezifischer Termin oder Zeitraum feststeht, wird sie nicht allein wegen der Bezeichnung „Waldbaden“ angewendet. Einzelheiten stehen in Teil B2 und in der Widerrufsbelehrung.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>5. Haftung</h3>
        <ol className={orderedListClass}>
          <li>Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.</li>
          <li>Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), also einer Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. In diesem Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.</li>
          <li>Die Haftung nach zwingenden gesetzlichen Vorschriften sowie die Haftung aus einer ausdrücklich übernommenen Garantie bleiben unberührt.</li>
          <li>Regelungen zu Datensicherung und Datenverlust (A2), zur Datenrettung unter Einbindung von DataPhoenix (A3), zu Gefahren im Wald (B3) und zu Inhalten von Kunden (C2) konkretisieren die Pflichten der Parteien. Sie schränken die vorstehende Haftung nicht ein.</li>
        </ol>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>6. Datenschutz</h3>
        <p className={paragraphClass}>Personenbezogene Daten werden nach den gesetzlichen Bestimmungen der DSGVO und des DDG verarbeitet. Einzelheiten finden Sie in unserer <LegalModalTrigger className={linkClass} dialogId="privacy-modal">Datenschutzerklärung</LegalModalTrigger>.</p>
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
          <li>Der Kunde stellt sicher, dass er zur Bereitstellung und zur vereinbarten Nutzung der übermittelten Materialien berechtigt ist. Das betrifft insbesondere Fotos und Bilder, Texte und Dokumente, Logos und Grafiken, Videos und Tonaufnahmen sowie Musik und sonstige kreative Inhalte. Sind auf dem Material Personen erkennbar oder hörbar, gelten C2 Nr. 2 bis 7 entsprechend.</li>
          <li>Fehlen Informationen oder ist eine Mitwirkung des Kunden erforderlich, weist der Anbieter den Kunden darauf hin und setzt, falls erforderlich, eine angemessene Frist. Verzögerungen aufgrund fehlender oder verspäteter Mitwirkung können sich auf vereinbarte Termine auswirken. Dadurch entstehender Mehraufwand wird nur berechnet, soweit dies vereinbart ist oder sich aus dem Gesetz ergibt. Die gesetzlichen Rechte beider Vertragsparteien bleiben unberührt.</li>
          <li>Der Kunde soll vor Arbeiten an seiner Hard- oder Software, etwa Vor-Ort-Service, Fernwartung oder Reparaturen, eine vollständige und funktionsfähige Datensicherung (Backup) durchführen. Die Datensicherung gehört nur dann zur Leistung des Anbieters, wenn sie ausdrücklich beauftragt wurde.</li>
          <li>Eine unterlassene Datensicherung kann bei der Bemessung von Schadensersatzansprüchen nach den gesetzlichen Regeln zum Mitverschulden berücksichtigt werden. Im Übrigen richtet sich die Haftung nach Abschnitt 5.</li>
        </ol>
        <h4 className={subheadingClass}>A3. Datenrettung und Einbindung von DataPhoenix</h4>
        <ol className={orderedListClass}>
          <li>Der Kunde beauftragt bei der Datenrettung ausschließlich den Anbieter. Der Anbieter nimmt die Anfrage entgegen, bewertet die Situation und versucht je nach Schadensbild zunächst, Daten mit eigenen Werkzeugen wiederherzustellen. Ist das nicht möglich oder nicht sinnvoll, kann der Anbieter mit Freigabe des Kunden (Nr. 3) den externen Dienstleister DataPhoenix einbinden.</li>
          <li>DataPhoenix übernimmt in diesem Fall die technische Diagnose und gegebenenfalls die eigentliche Wiederherstellung. Der Anbieter bezieht diese Leistung von DataPhoenix und bleibt gegenüber dem Kunden Vertragspartner. Ein Vertrag zwischen dem Kunden und DataPhoenix kommt durch die Einbindung nicht zustande, es sei denn, der Kunde vereinbart dies gesondert mit DataPhoenix. Die Allgemeinen Geschäftsbedingungen von DataPhoenix werden nicht Bestandteil des Vertrags zwischen dem Kunden und dem Anbieter.</li>
          <li>Der Datenträger wird erst an DataPhoenix weitergegeben, nachdem der Anbieter dem Kunden eine unverbindliche Preisinformation gegeben und der Kunde der Untersuchung durch DataPhoenix ausdrücklich zugestimmt hat. Übergabe, Abholung beziehungsweise Versand erfolgen entsprechend der mit dem Kunden vereinbarten Abwicklung und Dringlichkeit.</li>
          <li>Für Bearbeitung und Abwicklung berechnet der Anbieter eine Aufwandspauschale von 40 Euro. Sie deckt die Erstanalyse, die gegebenenfalls erforderliche Abklärung mit DataPhoenix und die Kommunikation mit dem Kunden ab. Die erste Diagnose durch DataPhoenix ist für den Kunden mit der Aufwandspauschale abgegolten. Die Pauschale wird dem Kunden vor der Beauftragung mitgeteilt und fällt unabhängig davon an, ob der Kunde ein späteres Angebot annimmt.</li>
          <li>Nach der ersten Diagnose teilt der Anbieter dem Kunden die Einschätzung der Erfolgsaussichten und einen individuellen Kostenvoranschlag mit dem vom Anbieter angebotenen Gesamtpreis für die Datenrettung mit. Dieser Gesamtpreis ist der Preis, den der Anbieter dem Kunden für die Datenrettung berechnet.</li>
          <li>Die eigentliche Datenrettung beauftragt der Anbieter erst, nachdem der Kunde dem Kostenvoranschlag ausdrücklich zugestimmt hat. Lehnt der Kunde ab, wird keine Datenrettung durchgeführt; der Datenträger wird entsprechend der vereinbarten Abwicklung zurückgeführt und dem Kunden übergeben.</li>
          <li>Nach Abschluss der Datenrettung werden der Datenträger und die wiederhergestellten Daten an den Anbieter zurückgeführt und dem Kunden übergeben. Wie die wiederhergestellten Daten übergeben werden, etwa auf einem bereitgestellten Speichermedium, wird mit dem Kunden abgestimmt.</li>
          <li>Der Anbieter schuldet ein sorgfältiges Tätigwerden, jedoch keinen bestimmten Erfolg. Ob und in welchem Umfang Daten wiederhergestellt werden können, hängt vom Schadensbild und vom Datenträger ab. Angaben zu Erfolgsaussichten oder Erfolgsquoten beruhen auf Einschätzungen von DataPhoenix und sind keine Garantie des Anbieters.</li>
          <li>
            Für die Verantwortungsbereiche gilt:
            <ul className={listClass}>
              <li>Der Anbieter ist verantwortlich für die sorgfältige Auswahl und Einbindung von DataPhoenix, für Organisation und Abwicklung des Auftrags sowie für die Kommunikation mit dem Kunden.</li>
              <li>Solange sich der Datenträger beim Anbieter befindet, verwahrt der Anbieter ihn sorgfältig.</li>
              <li>Während sich der Datenträger bei DataPhoenix befindet, liegen die tatsächliche Obhut und die technische Durchführung bei DataPhoenix.</li>
              <li>Transport und Rücktransport erfolgen auf dem mit dem Kunden vereinbarten Weg. Der Anbieter sorgt für eine geeignete Verpackung und Versandart, soweit er den Versand übernimmt.</li>
            </ul>
          </li>
          <li>Die Haftung richtet sich nach Abschnitt 5. Für eigenes Verschulden sowie für das Verschulden von Personen, deren sich der Anbieter zur Erfüllung seiner Pflichten gegenüber dem Kunden bedient, haftet der Anbieter nach den gesetzlichen Vorschriften. A2 Nr. 4 und 5 zur Datensicherung bleiben unberührt.</li>
          <li>Datenträger enthalten häufig personenbezogene Daten. Mit der Weitergabe erhält DataPhoenix im für Diagnose und Wiederherstellung erforderlichen Umfang Zugriff auf die gespeicherten Inhalte. Einzelheiten finden Sie in der <LegalModalTrigger className={linkClass} dialogId="privacy-modal">Datenschutzerklärung</LegalModalTrigger>. Enthält der Datenträger besonders schutzbedürftige Daten, etwa Gesundheitsdaten oder Daten Dritter, soll der Kunde den Anbieter vor der Weitergabe darauf hinweisen.</li>
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
          <li>Termine, Treffpunkt, Teilnehmerzahl und Preis ergeben sich aus der jeweiligen Kursbeschreibung, dem Angebot oder der Buchungsbestätigung. Maßgeblich ist der Termin oder Zeitraum, der im verbindlichen Vertrag festgelegt ist. Eine unverbindliche Anfrage oder ein noch nicht angenommenes Angebot ist keine Buchung; der Vertrag kommt gemäß Abschnitt 2 zustande.</li>
          <li>Kurse, Wanderungen und Übungen finden vorwiegend in der freien Natur (Wald) statt. Die Teilnehmenden entscheiden eigenverantwortlich, ob ihre Gesundheit und Belastbarkeit eine Teilnahme zulassen.</li>
          <li>Den Anweisungen des Kursleiters im Wald ist zur eigenen Sicherheit und zum Schutz der Natur Folge zu leisten. Die Teilnehmenden sind für angemessene, wetterfeste Bekleidung und festes Schuhwerk selbst verantwortlich.</li>
          <li>Waldbaden und Achtsamkeitstraining stellen keine medizinische oder therapeutische Behandlung dar und ersetzen nicht die Diagnose oder Behandlung durch einen Arzt, Psychotherapeuten oder Heilpraktiker.</li>
        </ol>
        <h4 className={subheadingClass}>B2. Absage, Rücktritt und Stornierung</h4>
        <ol className={orderedListClass}>
          <li><strong className="text-area-deep">Geltungsbereich:</strong> Die Nr. 2 bis 5 gelten für Buchungen von Einzelpersonen und Kleingruppen zu ausgeschriebenen Terminen. Für Firmenevents und individuelle Gruppenbuchungen gelten vorrangig die im jeweiligen Einzelangebot getroffenen Vereinbarungen; fehlen dort Regelungen, gilt diese Nr. B2 entsprechend.</li>
          <li><strong className="text-area-deep">Absage durch den Kunden:</strong> Der Kunde kann seine Teilnahme jederzeit vor Veranstaltungsbeginn absagen. Die Absage soll in Textform erfolgen, etwa per E-Mail. Maßgeblich für die Fristberechnung ist der Zugang der Absage beim Anbieter im Verhältnis zum vereinbarten Beginn der Veranstaltung.</li>
          <li>
            <strong className="text-area-deep">Pauschale Entschädigung:</strong> Sagt der Kunde ab, kann der Anbieter anstelle der vereinbarten Vergütung eine pauschale Entschädigung verlangen. Sie berücksichtigt die bereits gebundene Platzkapazität, die eingeschränkte Möglichkeit einer anderweitigen Vergabe und die gewöhnlich ersparten Aufwendungen. Berechnungsgrundlage ist der vereinbarte Preis für die abgesagte Teilnahme:
            <ul className={listClass}>
              <li>Zugang der Absage mindestens 7 Tage vor Veranstaltungsbeginn: kostenfrei.</li>
              <li>Zugang der Absage weniger als 7 Tage, aber mindestens 48 Stunden vor Veranstaltungsbeginn: 50 % des vereinbarten Preises.</li>
              <li>Zugang der Absage weniger als 48 Stunden vor Veranstaltungsbeginn oder Nichterscheinen ohne Absage: 100 % des vereinbarten Preises.</li>
            </ul>
          </li>
          <li><strong className="text-area-deep">Nachweis eines geringeren Schadens:</strong> Dem Kunden bleibt ausdrücklich der Nachweis gestattet, dass dem Anbieter kein Schaden oder ein wesentlich geringerer Schaden als die Pauschale entstanden ist. Wird der frei gewordene Platz anderweitig vergeben oder erspart der Anbieter Aufwendungen, die in der Pauschale nicht bereits berücksichtigt sind, wird dies angerechnet. Bereits gezahlte Beträge, die über die geschuldete Entschädigung hinausgehen, werden erstattet.</li>
          <li><strong className="text-area-deep">Ersatzteilnehmer und Umbuchung:</strong> Der Kunde kann bis zum Veranstaltungsbeginn eine Ersatzperson benennen, die an seiner Stelle teilnimmt; in diesem Fall fällt keine Entschädigung an. Auf Wunsch des Kunden kann eine Teilnahme auf einen anderen Termin umgebucht werden, sofern dort Plätze frei sind. Erfolgt die Umbuchung mindestens 7 Tage vor dem ursprünglichen Termin, ist sie kostenfrei. Ein Anspruch auf Umbuchung besteht nicht.</li>
          <li><strong className="text-area-deep">Absage durch den Anbieter:</strong> Der Anbieter kann eine Veranstaltung absagen, wenn eine in der Kursbeschreibung genannte Mindestteilnehmerzahl nicht erreicht wird. Er teilt dies dem Kunden spätestens 48 Stunden vor Veranstaltungsbeginn mit. Sagt der Anbieter eine Veranstaltung aus Gründen ab, die in seinem Verantwortungsbereich liegen, etwa wegen Krankheit des Kursleiters, informiert er den Kunden unverzüglich. In allen Fällen einer Absage durch den Anbieter werden bereits gezahlte Beträge vollständig und unverzüglich erstattet, sofern der Kunde nicht einen angebotenen Ersatztermin annimmt. Weitergehende Ansprüche des Kunden richten sich nach den gesetzlichen Vorschriften und Abschnitt 5.</li>
          <li><strong className="text-area-deep">Verschiebung durch den Anbieter:</strong> Der Anbieter kann einen Termin nur mit Zustimmung des Kunden verschieben. Bietet der Anbieter einen Ersatztermin an, kann der Kunde wählen, ob er den Ersatztermin wahrnimmt oder die vollständige Erstattung bereits gezahlter Beträge verlangt. Die Pauschalen nach Nr. 3 gelten für den ursprünglichen Termin nicht.</li>
          <li><strong className="text-area-deep">Höhere Gewalt und Sicherheitsgründe:</strong> Ist die Durchführung aufgrund von Umständen unmöglich oder unzumutbar, die keine Vertragspartei zu vertreten hat, etwa Sturm- oder Unwetterwarnung, Gewitter, behördliche Sperrungen des Waldgebiets oder vergleichbare Ereignisse, kann der Anbieter die Veranstaltung auch kurzfristig absagen oder abbrechen. Der Anbieter informiert den Kunden so früh wie möglich. Bereits gezahlte Beträge werden vollständig erstattet, sofern der Kunde nicht einen angebotenen Ersatztermin annimmt. Wird eine bereits begonnene Veranstaltung aus solchen Gründen abgebrochen, richtet sich die Vergütung nach den gesetzlichen Vorschriften; der Anbieter bietet in diesem Fall vorrangig einen Ersatztermin an.</li>
          <li><strong className="text-area-deep">Abgrenzung zu gesetzlichen Rechten:</strong> Die Stornierungsregelungen in B2 betreffen eine vertragliche Absage und gelten nicht für einen wirksamen gesetzlichen Widerruf. Ob ein Widerrufsrecht besteht oder nach § 312g Abs. 2 Nr. 9 BGB für eine verbindlich auf einen spezifischen Termin oder Zeitraum festgelegte Freizeitveranstaltung ausgeschlossen ist, richtet sich nach Abschnitt 4 und der Widerrufsbelehrung. Besteht ein Widerrufsrecht, gelten dessen gesetzliche Voraussetzungen und Folgen; die Pauschalen nach B2 schränken es nicht ein. Gesetzliche Rücktritts- und Kündigungsrechte beider Vertragsparteien bleiben ebenfalls unberührt.</li>
        </ol>
        <h4 className={subheadingClass}>B3. Typische Waldgefahren</h4>
        <p className={paragraphClass}>Zu den typischen Gefahren des Waldes zählen herabfallende Äste, Unebenheiten des Bodens, Insektenstiche und witterungsbedingte Einflüsse. Die Teilnehmenden werden darauf hingewiesen und achten darauf eigenverantwortlich. Die Haftung des Anbieters richtet sich auch hierfür nach Abschnitt 5.</p>
      </section>

      <section className={sectionClass}>
        <h3 className={headingClass}>Teil C: KI-Studio und digitale Medien</h3>
        <h4 className={subheadingClass}>C1. Leistungsumfang und Auftrag</h4>
        <ol className={orderedListClass}>
          <li>Das KI-Studio erstellt individuelle digitale Medien, nämlich digitale Bilder und Grafiken, Videos, Songs, Jingles und sonstiges Audiomaterial. Art, Umfang und Ergebnis ergeben sich aus dem Angebot oder der Auftragsbestätigung.</li>
          <li>Der Anbieter beginnt erst nach dem schriftlichen Auftrag des Kunden. Sollen Personen abgebildet oder ihre Stimme beziehungsweise ihr Aussehen verwendet werden, beginnt der Anbieter erst, wenn die nach C2 erforderlichen Einwilligungen vorliegen.</li>
          <li>Sexualisierte oder gewaltbeinhaltende Inhalte erstellt der Anbieter nicht. Er prüft jeden Auftrag individuell und kann Aufträge ablehnen.</li>
        </ol>
        <h4 className={subheadingClass}>C2. Material des Kunden, Persönlichkeitsrechte und personenbezogene Inhalte</h4>
        <ol className={orderedListClass}>
          <li>Fotos, Texte, Logos, Musik und sonstiges Material darf der Kunde nur übergeben, wenn er die erforderlichen Rechte daran besitzt und keine Rechte Dritter verletzt werden.</li>
          <li>
            Die folgenden Regelungen gelten für Material, auf dem Personen erkennbar oder hörbar sind. Dazu gehören insbesondere
            <ul className={listClass}>
              <li>Fotos,</li>
              <li>Videos,</li>
              <li>Sprachaufnahmen und</li>
              <li>sonstige personenbezogene Inhalte.</li>
            </ul>
            Sie gelten entsprechend, wenn Aussehen oder Stimme einer realen Person in einem Ergebnis wiedergegeben oder nachgebildet werden sollen.
          </li>
          <li>Der Kunde übergibt solches Material nur, wenn er dazu berechtigt ist und die für die vorgesehene Verwendung erforderlichen Einwilligungen der abgebildeten oder hörbaren Personen vorliegen. Er beachtet dabei insbesondere das Recht am eigenen Bild und das allgemeine Persönlichkeitsrecht, zu dem auch der Schutz der eigenen Stimme gehört.</li>
          <li>Bei Minderjährigen ist die Einwilligung der Sorgeberechtigten erforderlich. Ist die minderjährige Person bereits alt und reif genug, um die Bedeutung der Verwendung zu verstehen, ist zusätzlich ihre eigene Einwilligung erforderlich.</li>
          <li>Der Anbieter verwendet das bereitgestellte Material ausschließlich zur Durchführung des vereinbarten Auftrags und nur in dem dafür erforderlichen Umfang. Eine Verwendung zu anderen Zwecken findet nicht statt.</li>
          <li>Aus der Auftragserteilung folgt keine Erlaubnis, das Material oder die fertigen Ergebnisse zu veröffentlichen, insbesondere nicht auf der Website des Anbieters, in Social-Media-Kanälen, in Werbematerialien, in Portfolios oder auf Referenzseiten. Eine solche Veröffentlichung erfolgt nur mit einer gesonderten, freiwilligen Zustimmung des Kunden und, soweit Personen erkennbar oder hörbar sind, zusätzlich mit deren Einwilligung beziehungsweise der Einwilligung der Sorgeberechtigten. Verweigert der Kunde die Zustimmung, hat das keinen Einfluss auf den Auftrag.</li>
          <li>Folgende Erklärungen und Grundlagen stehen jeweils für sich und ersetzen einander nicht: die Einwilligung der betroffenen Personen in die Verwendung im Rahmen des Auftrags, die Zustimmung zur Veröffentlichung, die datenschutzrechtliche Rechtsgrundlage für die Verarbeitung personenbezogener Daten sowie die urheber- oder persönlichkeitsrechtliche Erlaubnis zur Nutzung. Die Auftragserteilung ersetzt insbesondere weder die Einwilligung abgebildeter oder hörbarer Personen noch die Zustimmung zur Veröffentlichung. Für den Datenschutz gilt Abschnitt 6, für die Nutzungsrechte an den Ergebnissen gilt C4.</li>
        </ol>
        <h4 className={subheadingClass}>C3. Digitale Bereitstellung</h4>
        <ol className={orderedListClass}>
          <li>Die vereinbarten Ergebnisse werden ausschließlich digital bereitgestellt. Die Lieferung körperlicher Gegenstände oder Datenträger ist nicht geschuldet.</li>
          <li>Der konkrete Übergabeweg, etwa per Download-Link, E-Mail oder Freigabe in einem Cloud-Speicher, richtet sich nach der individuellen Vereinbarung mit dem Kunden.</li>
          <li>Dateiformat und Umfang der Ergebnisse ergeben sich aus dem Angebot oder der Auftragsbestätigung.</li>
          <li>Der Zeitpunkt der Bereitstellung richtet sich nach dem vereinbarten Leistungsumfang.</li>
          <li>Die Bereitstellung oder Übermittlung einer Datei bedeutet nicht, dass dem Kunden sämtliche Rechte an dem Ergebnis übertragen werden. Welche Nutzungsrechte der Kunde erhält, richtet sich ausschließlich nach C4.</li>
          <li>Möchte der Kunde ein Ergebnis drucken oder anderweitig verarbeiten lassen, beauftragt er dafür selbst einen externen Anbieter.</li>
        </ol>
        <h4 className={subheadingClass}>C4. Nutzungsrechte, Urheberrecht und Referenzen</h4>
        <ol className={orderedListClass}>
          <li>Eigene kreative Beiträge des Anbieters, die bei der Erstellung der individuellen digitalen Medien entstehen, etwa Konzept, Auswahl, Anordnung, Bearbeitung und Gestaltung, können urheberrechtlich geschützt sein, soweit sie die gesetzlichen Voraussetzungen erfüllen. Soweit ein solcher Schutz besteht, verbleibt das Urheberrecht beim Anbieter. Der Kunde erhält daran Nutzungsrechte ausschließlich nach Nr. 4.</li>
          <li>Nicht jedes mit KI-Unterstützung erstellte Ergebnis ist urheberrechtlich geschützt. Ob und in welchem Umfang ein Schutz besteht, hängt insbesondere von den menschlichen kreativen Beiträgen und ihrer konkreten Ausgestaltung ab. Der Anbieter beansprucht kein Urheberrecht an Ergebnisbestandteilen, die nicht geschützt sind, und sichert weder einen Urheberrechtsschutz noch eine Ausschließlichkeit der Ergebnisse zu, sofern dies nicht ausdrücklich vereinbart ist.</li>
          <li>Rechte an Material, das der Kunde bereitstellt, etwa Fotos, Texte, Logos oder Musikstücke, verbleiben beim jeweiligen Rechteinhaber. Der Kunde räumt dem Anbieter die für die Durchführung des Auftrags erforderlichen einfachen Nutzungsrechte ein beziehungsweise stellt sicher, dass diese vom Rechteinhaber eingeräumt sind. Er stellt kein Material bereit, dessen Nutzung Rechte Dritter verletzt. Im Übrigen gilt C2.</li>
          <li>
            Der Kunde darf die vereinbarten Ergebnisse in dem Umfang nutzen, der sich aus dem Angebot oder der individuellen Vereinbarung ergibt. Dort wird insbesondere festgelegt, ob und in welchem Umfang folgende Nutzungsarten umfasst sind:
            <ul className={listClass}>
              <li>private Nutzung,</li>
              <li>gewerbliche Nutzung,</li>
              <li>Nutzung zu Werbezwecken,</li>
              <li>Veröffentlichung auf eigenen Websites und Social-Media-Kanälen,</li>
              <li>Weitergabe an Dritte,</li>
              <li>Bearbeitung und Veränderung sowie</li>
              <li>Unterlizenzierung.</li>
            </ul>
            Nicht ausdrücklich vereinbarte Nutzungsarten sind nicht umfasst. Ist nichts anderes vereinbart, erhält der Kunde ein einfaches, zeitlich unbeschränktes Nutzungsrecht für den im Auftrag erkennbar vorausgesetzten Zweck; die Rechte werden mit vollständiger Bezahlung eingeräumt. Eine vollständige Übertragung des Urheberrechts findet nicht statt.
          </li>
          <li>Der Besitz der übergebenen Dateien begründet weder ein Urheberrecht noch Nutzungsrechte über den vereinbarten Umfang hinaus. Nutzungsrechte sind unabhängig davon, auf welchem Datenträger oder über welchen Weg die Dateien übergeben werden (siehe C3).</li>
          <li>Rechte Dritter, etwa an Marken, Werken, Musik, Bildern oder Persönlichkeitsmerkmalen realer Personen, werden durch die Einräumung von Nutzungsrechten nach Nr. 4 nicht berührt. Für die Rechtmäßigkeit seiner eigenen Nutzung im konkreten Verwendungszusammenhang ist der Kunde verantwortlich.</li>
          <li>Aufträge und Ergebnisse verwendet der Anbieter nur mit gesonderter Zustimmung des Kunden als Referenz oder für Werbezwecke. Einzelheiten regelt C2 Nr. 6.</li>
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
          <p className={paragraphClass}>Ist für die Datenrettung der externe Dienstleister DataPhoenix erforderlich, wird der Datenträger mit den darauf gespeicherten Inhalten erst nach Ihrer ausdrücklichen Zustimmung an DataPhoenix übergeben. DataPhoenix erhält dabei nur in dem Umfang Zugriff auf die Inhalte, der für Diagnose und Wiederherstellung erforderlich ist. Empfänger ist in diesem Fall DataPhoenix als von uns eingebundener Dienstleister.</p>
          <p className={paragraphClass}>Eine Fernwartung wird ausschließlich verschlüsselt und erst nach Ihrer aktiven Zustimmung bzw. Freigabe der Verbindung gestartet. Sie können die Sitzung jederzeit beenden. Zugangsdaten werden nicht für einen unbeaufsichtigten späteren Zugriff gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für die Auftragsdurchführung; soweit erforderlich, Art. 6 Abs. 1 lit. f DSGVO für sichere Fehlerdiagnose und IT-Betrieb.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Waldbaden-Kursanfragen und Buchungen</h3>
          <p className={paragraphClass}>Bei Anfragen und Buchungen zu Waldbaden-Kursen verarbeiten wir Name, Kontaktdaten, gewünschte Termine und die für Organisation und Durchführung erforderlichen Angaben. Die Daten verwenden wir zur Beantwortung der Anfrage, zur Buchungsabwicklung und für notwendige Informationen zum Kurs. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Wir speichern die Angaben nur so lange, wie es für Anfrage, Kursabwicklung und etwaige gesetzliche Aufbewahrungspflichten erforderlich ist.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>KI-Studio-Aufträge und übermittelte Inhalte</h3>
          <p className={paragraphClass}>Für Anfragen und Aufträge im KI-Studio verarbeiten wir neben Kontakt- und Auftragsdaten auch die Inhalte, die Sie für Ihr Projekt bereitstellen. Dazu können Fotos, Videos, Sprachaufnahmen, Namen, Texte, persönliche Angaben, Logos und sonstige kreative Materialien gehören. Solche Inhalte können auch andere erkennbare Personen betreffen. Wir verwenden sie, um Ihre Anfrage zu beantworten, den Auftrag abzustimmen, die vereinbarten digitalen Bilder, Grafiken, Videos, Songs, Jingles oder sonstigen Audiodateien zu erstellen und zu übergeben sowie Rückfragen zum Auftrag zu bearbeiten.</p>
          <p className={paragraphClass}>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen oder des Auftrags erforderlich ist. Für eine darüber hinausgehende Nutzung, etwa als Referenz oder Werbung, holen wir eine gesonderte Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO ein. Gesetzliche Aufbewahrungspflichten für Abrechnungsunterlagen erfüllen wir auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.</p>
          <p className={paragraphClass}>Die Website enthält kein Uploadformular für Projektdateien; das Kontaktformular öffnet Ihr E-Mail-Programm und übermittelt seine Eingaben nicht an unseren Webserver. Auftragsmaterial wird über den im Einzelfall vereinbarten Weg übermittelt. Empfänger sind zunächst wir. Soweit für einen Auftrag ein externer KI- oder sonstiger technischer Dienst eingesetzt wird, erhält dieser nur die für den Auftrag erforderlichen Daten; wir informieren Sie vor einer Übermittlung über den konkreten Empfänger und die für diesen Dienst maßgeblichen Datenschutzinformationen. Ob ein Anbieter als Auftragsverarbeiter oder als eigenständig Verantwortlicher handelt, welche Unterauftragnehmer beteiligt sind, wo verarbeitet wird und ob Drittlandübermittlungen stattfinden, richtet sich nach dem konkret eingesetzten Dienst und den dazu geprüften Vertrags- und Datenschutzbedingungen. Hierzu machen wir keine pauschalen Zusicherungen.</p>
          <p className={paragraphClass}>Bitte übermitteln Sie nur Inhalte, deren Nutzung Sie für den Auftrag gestatten dürfen. Wenn Materialien andere Personen zeigen oder deren Stimme enthalten, stellen Sie bitte sicher, dass die erforderlichen Informationen, Rechte und gegebenenfalls Einwilligungen vorliegen. Senden Sie besondere Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO bitte nur nach vorheriger Abstimmung mit uns.</p>
          <p className={paragraphClass}>Wir bewahren Auftragsmaterial nur so lange auf, wie es für Anfrage, Durchführung und Nachbearbeitung des Auftrags erforderlich ist oder gesetzliche Pflichten beziehungsweise die Geltendmachung oder Abwehr von Ansprüchen dies erfordern. Für die konkrete Löschung bei externen Diensten gelten die Bedingungen des jeweils eingesetzten Anbieters; eine automatische Löschung nach einer pauschalen Frist sagen wir nicht zu.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Cookies, externe Medien und Speicherdauer</h3>
          <p className={paragraphClass}>Diese Website bindet derzeit keine Analyse- oder Werbedienste ein. Einzelne öffentlich eingebundene Bilder, Audio- und Videodateien werden direkt von Vercel Blob unter vercel-storage.com geladen. Beim Abruf erhält Vercel als Anbieter technische Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt und angeforderte Datei. Dabei handelt es sich um statische Website-Medien, nicht um einen Uploadkanal für Ihre Projektdateien. Weitere externe Medien können ebenfalls technische Verbindungsdaten an den jeweiligen Anbieter übermitteln. Links zu Fernwartungs- oder anderen Drittanbietern sind nicht in die Website eingebettet; erst wenn Sie einen solchen Link öffnen, gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Anfragen löschen wir, sobald sie für die Bearbeitung nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
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
          <p className={paragraphClass}>Wenn Sie Verbraucher im Sinne des § 13 BGB sind und den Vertrag mit SWEA ausschließlich über Fernkommunikationsmittel (zum Beispiel per E-Mail, Telefon oder Kontaktformular) oder außerhalb unserer Geschäftsräume geschlossen haben, steht Ihnen grundsätzlich ein gesetzliches Widerrufsrecht zu. Unternehmern steht kein gesetzliches Widerrufsrecht zu.</p>
          <p className={paragraphClass}>Wie das Widerrufsrecht im Einzelnen ausgestaltet ist, hängt von der Art des Vertrags ab. Für digitale Inhalte aus dem KI-Studio und für Dienstleistungen (IT-Service, Datenrettung, Waldbaden) gelten deshalb die getrennten Hinweise unten. SWEA verkauft und versendet keine Waren.</p>
          <p className={paragraphClass}>Um zu widerrufen, informieren Sie Uwe Christian, Freiburgstr. 12, 73614 Schorndorf, E-Mail: <a className={linkClass} href="mailto:edv@swea.de">edv@swea.de</a>, mit einer eindeutigen Erklärung (zum Beispiel per Brief oder E-Mail) über Ihren Entschluss, den Vertrag zu widerrufen. Sie können dafür das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung vor Ablauf der Widerrufsfrist absenden.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Digitale Inhalte aus dem KI-Studio</h3>
          <p className={paragraphClass}>Dieser Abschnitt gilt für Verträge über die Erstellung und Bereitstellung digitaler Inhalte, also Bilder und Grafiken, Videos, Songs, Jingles und Audiomaterial. Diese Ergebnisse werden ausschließlich digital übermittelt, etwa per E-Mail oder Download-Link, und nicht auf einem körperlichen Datenträger geliefert (Teil C3 der AGB).</p>

          <h4 className={subheadingClass}>Widerrufsfrist</h4>
          <p className={paragraphClass}>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses. Dass die Inhalte individuell nach Ihren Vorgaben erstellt werden, schließt das Widerrufsrecht bei digitalen Inhalten nicht aus.</p>

          <h4 className={subheadingClass}>Folgen des Widerrufs</h4>
          <p className={paragraphClass}>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Für bereits erstellte oder übermittelte digitale Inhalte müssen Sie keinen Wertersatz leisten (§ 357a Abs. 3 BGB).</p>

          <h4 className={subheadingClass}>Vorzeitiges Erlöschen des Widerrufsrechts</h4>
          <p className={paragraphClass}>Ihr Widerrufsrecht erlischt vor Ablauf der vierzehn Tage nur, wenn alle folgenden Voraussetzungen erfüllt sind (§ 356 Abs. 5 BGB):</p>
          <ol className="grid list-decimal gap-2 pl-5 text-sm leading-7 text-area-muted">
            <li>Sie haben ausdrücklich zugestimmt, dass SWEA vor Ablauf der Widerrufsfrist mit der Erstellung und Bereitstellung der digitalen Inhalte beginnt,</li>
            <li>Sie haben bestätigt, dass Ihnen bekannt ist, dass Sie durch diese Zustimmung mit Beginn der Vertragserfüllung Ihr Widerrufsrecht verlieren,</li>
            <li>SWEA hat Ihnen eine Vertragsbestätigung auf einem dauerhaften Datenträger, zum Beispiel per E-Mail, zur Verfügung gestellt, in der Ihre Zustimmung und Ihre Bestätigung festgehalten sind (§ 312f BGB), und</li>
            <li>SWEA hat danach mit der Vertragserfüllung begonnen.</li>
          </ol>
          <p className={paragraphClass}>Fehlt eine dieser Voraussetzungen, bleibt Ihr Widerrufsrecht für die gesamte Widerrufsfrist bestehen.</p>

          <h4 className={subheadingClass}>Ablauf bei SWEA</h4>
          <p className={paragraphClass}>SWEA betreibt keinen Webshop und keinen Online-Checkout. Aufträge werden individuell vereinbart, in der Regel per E-Mail. Möchten Sie, dass mit der Arbeit vor Ablauf der Widerrufsfrist begonnen wird, teilen Sie dies bitte ausdrücklich in Textform mit, zum Beispiel per E-Mail mit folgendem Wortlaut:</p>
          <blockquote className="rounded-2xl border border-area-border bg-area-soft p-4 text-sm leading-7 text-area-deep sm:p-5">
            {'„Ich verlange ausdrücklich, dass SWEA vor Ablauf der Widerrufsfrist mit der Erstellung und Bereitstellung der vereinbarten digitalen Inhalte beginnt. Mir ist bekannt, dass ich durch diese Zustimmung mit Beginn der Vertragserfüllung mein Widerrufsrecht verliere."'}
          </blockquote>
          <p className={paragraphClass}>Die Erklärung ist freiwillig und wird nicht vorausgefüllt oder unterstellt. Erst nachdem Ihre Erklärung vorliegt und Sie unsere Vertragsbestätigung erhalten haben, beginnt SWEA vorzeitig mit der Arbeit. Geben Sie keine Erklärung ab, beginnt SWEA mit der Erstellung grundsätzlich erst nach Ablauf der Widerrufsfrist, sofern nichts anderes vereinbart ist; Ihr Widerrufsrecht bleibt dann bis zum Fristende vollständig erhalten.</p>
        </section>

        <section className={sectionClass}>
          <h3 className={headingClass}>Dienstleistungen</h3>
          <p className={paragraphClass}>Für Dienstleistungen, insbesondere IT-Service, Datenrettung und Waldbaden-Veranstaltungen, beträgt die Widerrufsfrist bei einem Fernabsatzvertrag oder einem außerhalb von Geschäftsräumen geschlossenen Vertrag grundsätzlich vierzehn Tage ab dem Tag des Vertragsschlusses. Gesetzliche Ausnahmen und die gesetzlichen Folgen eines Widerrufs richten sich nach den jeweils anwendbaren Vorschriften, insbesondere §§ 312g Abs. 2, 356 Abs. 4 und 357a Abs. 2 BGB. Die Regelungen zum vorzeitigen Erlöschen bei digitalen Inhalten gelten für Dienstleistungen nicht.</p>
          <p className={paragraphClass}>Im Fall eines wirksamen Widerrufs erstatten wir erhaltene Zahlungen unverzüglich und spätestens binnen vierzehn Tagen ab Eingang Ihrer Widerrufserklärung mit demselben Zahlungsmittel, das Sie bei der Zahlung eingesetzt haben, sofern nichts anderes ausdrücklich vereinbart wurde. Wertersatz für bis zum Widerruf erbrachte Dienstleistungen kann nur unter den gesetzlichen Voraussetzungen verlangt werden, insbesondere wenn Sie ausdrücklich verlangt haben, dass die Leistung vor Ablauf der Widerrufsfrist beginnt, und die erforderlichen Informationen erteilt wurden (§ 357a Abs. 2 BGB).</p>

          <h4 className={subheadingClass}>Waldbaden-Veranstaltungen</h4>
          <p className={paragraphClass}>Waldbaden-Veranstaltungen können Dienstleistungen im Zusammenhang mit einer Freizeitbetätigung sein. Wird eine solche Veranstaltung verbindlich für einen spezifischen Termin oder Zeitraum vereinbart, besteht für Verbraucher nach § 312g Abs. 2 Nr. 9 BGB kein gesetzliches Widerrufsrecht. Das kann insbesondere für ein fest terminiertes After-Work-Waldbaden, einen Kurs mit festgelegtem Zeitraum oder einen individuell vereinbarten privaten Gruppentermin gelten. Ob die Ausnahme greift, hängt von der konkreten Leistung und dem Inhalt des verbindlichen Vertrags ab; sie gilt nicht pauschal für alle Waldbaden-Angebote. Für Firmenevents kommt es außerdem darauf an, wer Vertragspartner ist und ob dieser als Verbraucher oder Unternehmer handelt.</p>
          <p className={paragraphClass}>Ist im verbindlichen Vertrag kein spezifischer Termin oder Zeitraum festgelegt, greift diese Ausnahme nicht allein deshalb, weil es sich um Waldbaden handelt. Eine unverbindliche Anfrage oder ein noch nicht angenommenes Angebot ist noch kein Vertrag. Wird ein Vertrag zunächst ohne festen Termin geschlossen und später ein Termin vereinbart, muss die rechtliche Einordnung anhand der konkreten Vereinbarung geprüft werden; eine pauschale Aussage zum Widerrufsrecht ist dafür nicht möglich.</p>
          <p className={paragraphClass}>Ein gesetzliches Widerrufsrecht ist von einer vertraglichen Stornierung zu unterscheiden. Soweit die Ausnahme nach § 312g Abs. 2 Nr. 9 BGB greift, kann eine freiwillige Absage nach den Stornierungsregelungen in Teil B2 kostenpflichtig sein. Besteht dagegen ein gesetzliches Widerrufsrecht und wird es wirksam ausgeübt, gelten die gesetzlichen Widerrufsfolgen, nicht die Stornierungspauschalen aus B2. Rücktritts- und Kündigungsrechte sowie eine Absage oder Verschiebung durch SWEA richten sich nach den gesetzlichen Vorschriften und den Regelungen in Teil B2.</p>
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
