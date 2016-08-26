# initiative Demokratie - Grundgedanken

Dies ist die offizielle Webseite der Grundgedanken der initiativen Demokratie.

## Installation

Die Webseite basiert auf [Hugo](//gohugo.io/), einer statischen Website-Engine. Hugo basiert wiederum auf der Programmiersprache [go](//golang.org/).

1) Zunächst muss also go [heruntergeladen und installiert](//golang.org/dl/) werden.

2) Dann innerhalb des go-Verzeichnisbaums:

`go get github.com/spf13/hugo`

ausgeführt werden. Danach sollte der Befehl `hugo` im Verzeichnis `$GOPATH/bin/` zur Verfügung stehen.

3) Mit

`git clone https://github.com/open-democracy/Philosophie`

kann dann dieses Projekt hier installiert werden.

4) Für die Dokumente wird zusätzlich das Programm `Asciidoctor` benötigt:

`sudo gem install asciidoctor`

Das Programm `gem` ist aus der Rubywelt und kann unter Debian mit

`sudo apt-get install rubygems`

installiert werden.


## Bearbeiten

Mit dem Kommando `hugo server` wird die Webseite lokal unter der Adresse `localhost:1313` zur Verfügung gestellt.
Das Kommando `hugo` ohne `server` baut die Webseite und hinterlegt sie im Verzeichnis `public`.
Dieses Verzeichnis kann auf einen Webserver kopiert werden.

Die einzelnen Grundgedanken der Philosophie sind im Verzeichnis `data/philosophy` zu finden, pro Gedanke eine Datei.
Die Datei `config.toml` enthält die meisten anderen Texte der Webseite.
Die Grundstruktur der Webseite ist in `layout/index.html` definiert, die einzelnen Bereiche der Webseite im Verzeichnis `layout/partials`.

Weitere Informationen zur Struktur der Webseite und dem verwendeten Theme findest du [hier](https://github.com/digitalcraftsman/hugo-creative-theme/README.md).

## Beitragen ...

(Github Pull-Requests) ... noch nicht beschrieben

