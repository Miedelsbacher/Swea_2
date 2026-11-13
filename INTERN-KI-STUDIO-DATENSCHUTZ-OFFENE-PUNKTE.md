# Intern – offene Datenschutzpunkte zum KI-Studio

Stand: 13. November 2026. Diese Arbeitsnotiz ist nicht Teil der veröffentlichten Datenschutzerklärung. Sie hält fest, was sich aus dem Repository belegen lässt und was SWEA vor einer abschließenden Anbieter- und Transferbeschreibung noch bestätigen muss.

## Im Projekt nachweisbare technische Datenflüsse

- **Keine Kundenuploads oder serverseitigen KI-Aufrufe:** Im geprüften Next.js-Quellcode gibt es keine Datei-Upload-Steuerung, keine Upload-API/Route und keine Aufrufe an generative KI-APIs. Das Kontaktformular erzeugt lediglich einen `mailto:`-Link und übermittelt die Formularfelder nicht an den Webserver. Daraus folgt nicht, dass SWEA außerhalb der Website keine KI-Dienste verwendet.
- **Vercel Blob – öffentliche Beispielmedien:** Mehrere statische Bilder, Audio- und Videodateien werden direkt von `hebbkx1anhila5yf.public.blob.vercel-storage.com` geladen. Die Dateien sind öffentlich eingebundene Website-Medien, darunter KI-Beispiele und Hörproben; der Code weist sie nicht als Kundenuploads aus. Beim Abruf kann Vercel technische Verbindungsdaten der Besucher erhalten. Speicherregion, Konfiguration und einschlägige Vertragsbedingungen sind nicht aus dem Repository ableitbar.
- **Vercel AI Gateway:** Für den v0-/Vercel-Arbeitskontext ist diese Integration verbunden; im Website-Quellcode wurde keine Verwendung davon gefunden. Die Verbindung allein belegt weder eine Verarbeitung von SWEA-Kundenmaterial noch die Nutzung für KI-Studio-Aufträge.
- **Paket `@vercel/analytics`:** Es ist in `package.json` aufgeführt, aber in den geprüften Komponenten nicht importiert oder eingebunden. Die Paketabhängigkeit allein belegt keine aktive Analytics-Erhebung. Eine zusätzliche Konfiguration auf der Deployment-Plattform wurde nicht geprüft.
- **Dateinamen mit „Gemini_Generated“:** Einige bestehende Beispieldateien tragen diesen Text im Dateinamen. Das ist kein hinreichender Beleg dafür, welcher Anbieter für Kundenaufträge tatsächlich verwendet wird oder ob Kundendaten dorthin übertragen werden.
- **Andere erkannte Dienste:** Die Datenschutzerklärung nennt hosting.de und Cloudflare als Produktionshosting/DNS/CDN/Sicherheitsdienst; diese Angaben wurden bei dieser Prüfung nicht unabhängig verifiziert und bewusst nicht verändert. Die Projektvorschau/Entwicklungsumgebung wird über Vercel bereitgestellt; dies ist nicht mit der angegebenen Produktionsumgebung gleichzusetzen. DataPhoenix betrifft laut Website die Datenrettung, nicht das KI-Studio. RustDesk, TeamViewer, Google Remote Desktop und die Waldbaden-Akademie erscheinen als externe Links, nicht als eingebettete KI-Verarbeitung.

## Vor einer abschließenden Anbieterbeschreibung durch SWEA zu bestätigen

1. Welche Tools/Dienste tatsächlich bei Kundenaufträgen für Bild, Grafik, Video, Musik, Stimme, Audio und Text verwendet werden – einschließlich Anbieter, Produkt/Plan und ob Weboberfläche, API oder lokale Software.
2. Ob Kundendateien, Prompts, Fotos, Videos, Sprachaufnahmen, Namen oder sonstige personenbezogene Inhalte an diese Dienste übermittelt werden; welche Datenfelder jeweils erforderlich sind und ob Übermittlungen optional vermieden werden können.
3. Ob und in welcher Rolle jeder Anbieter handelt (Auftragsverarbeiter oder eigener Verantwortlicher), welche Unterauftragnehmer beteiligt sind und ob ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO besteht.
4. Für jeden konkreten Dienst: Speicher-/Verarbeitungsorte, mögliche Drittlandübermittlungen, einschlägige Garantien (z. B. Angemessenheitsbeschluss/SCC, soweit zutreffend), Anbieterbedingungen zu Training/Verbesserung mit Eingaben, Aufbewahrung und tatsächlicher Löschung. Keine dieser Eigenschaften aus Dateinamen oder Produktwerbung ableiten.
5. Tatsächlicher Weg der Kundenmaterialien: E-Mail-Anbieter und Konten für `edv@swea.de`/`wb@swea.de`, etwaige Datei-Transfer-/Cloudspeicher, Zugriffsberechtigte, lokale Kopien und Backups. Die Website selbst nimmt keine Dateien entgegen.
6. Interne Aufbewahrungs- und Löschpraxis für Eingaben, Entwürfe und fertige Dateien nach Auftragsende, einschließlich Sicherungskopien; gesetzliche Aufbewahrungspflichten für Abrechnungsunterlagen davon getrennt behandeln.
7. Vorgehen bei Abbildungen, Videos und Stimmen Dritter: Rechtsgrundlage/Einwilligungen, Informationspflichten und Rechte zur Weitergabe an den tatsächlich eingesetzten Anbieter. Prüfen, ob Stimmverarbeitung eine Identifizierung ermöglicht oder besondere Kategorien personenbezogener Daten berührt; keine pauschale Einordnung vornehmen.
8. Ob die in der Datenschutzerklärung beschriebene Vorabinformation zu einem konkreten externen Dienst vor jeder Übermittlung operativ umgesetzt werden kann; andernfalls Wortlaut und tatsächlichen Ablauf anpassen.
9. Vercel Blob: Projekt-/Speicherkonfiguration, Region, Vertrags-/Datenschutzbedingungen und Bestätigung, dass dort nur öffentliche Beispielmedien und keine Kundenmaterialien liegen. Zusätzlich prüfen, ob Vercel Analytics außerhalb des Quellcodes auf dem Produktionsdeployment aktiviert oder injiziert wird.
10. Produktionsumgebung separat bestätigen: hosting.de und Cloudflare (genaue Rollen, Vertragstypen, Log-/Löschfristen und etwaige Transfers) sowie Änderungen gegenüber der bestehenden Erklärung. Vercel-Vorschau nicht als Produktionshosting darstellen.

## Zu prüfende Unterlagen

- Auftragsverarbeitungsverträge nach Art. 28 DSGVO und aktuelle Datenschutz-/Produktbedingungen der tatsächlich eingesetzten KI-, E-Mail-, Datei- und Hostinganbieter.
- Angaben zu Subprozessoren, Regionen, Transfers und geeigneten Garantien; bei Drittlandtransfers ggf. SCC und erforderliche Transferprüfung.
- Anbieteroptionen zur Nutzung von Eingaben für Modelltraining/Produktverbesserung und zur Speicherung/Löschung – erst nach Prüfung konkrete Aussagen in die Datenschutzerklärung aufnehmen.
- Rechte-/Einwilligungsnachweise für personenbezogene Inhalte Dritter und Referenz-/Werbenutzung getrennt vom Vertragszweck.
- Falls Kundendaten systematisch oder in größerem Umfang in KI-Dienste übermittelt werden: Datenschutz-Folgenabschätzung prüfen lassen; keine Erforderlichkeit ohne Einzelfallprüfung behaupten.

## Redaktionelle Grenze

Bis SWEA die Punkte oben bestätigt hat, keine konkreten KI-Anbieter, EU-Alleinspeicherung, Trainingsausschlüsse, feste automatische Löschfristen oder pauschale Auftragsverarbeitereigenschaft behaupten. Die veröffentlichte Ergänzung beschreibt deshalb nur den Auftragszweck, die vom Kunden übermittelbaren Datenkategorien, die fehlende Website-Upload-/KI-API-Funktion sowie eine bedingte Information für den Fall, dass im konkreten Auftrag ein externer Dienst eingesetzt wird.
