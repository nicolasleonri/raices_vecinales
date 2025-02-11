import { Content } from "./content-types";

export const de: Content = {
	map: {
		attribution: {
			mapbox: {
				href: "https://www.mapbox.com/about/maps/",
				label: "© Mapbox",
			},
			openStreetMap: {
				href: "https://www.openstreetmap.org/copyright",
				label: "© OpenStreetMap",
			},
			improve: {
				href: "https://www.mapbox.com/map-feedback",
				label: "**Diese Karte verbessern**",
			},
			feedback: {
				href: "https://citylabberlin.typeform.com/to/kCdnCgvC#product_id=GdK",
				label: "Feedback",
			},
			imprint: {
				href: "https://www.technologiestiftung-berlin.de/de/impressum/",
				label: "Impressum",
			},
			privacy: {
				href: "https://www.technologiestiftung-berlin.de/de/datenschutz/",
				label: "Datenschutz",
			},
		},
	},
	locationSearch: {
		placeholder: "Suche nach einer Adresse",
	},
	legend: {
		title: "Legende",
		greenTrees: "Versorgte Bäume",
		yellowTrees: "Mäßig versorgte Bäume",
		orangeTrees: "Gießbedürftige Bäume",
		grayTrees: "nicht dem Filter entsprechend",
	},
	navbar: {
		map: "Karte",
		profile: {
			sidebarLabel: "Profil",
			title: "Dein Profil",
			overview: {
				subtitle: "Deine Übersicht",
				irrigations: "Gießungen",
				liter: "Liter",
				adoptedTrees: "Adoptierte Bäume",
			},
			adoptedTrees: {
				subtitle: "Adoptierte Bäume",
				irrigationTimes: "Mal",
				irrigationAmount: "Liter",
				showAll: "Alle anzeigen",
				showLess: "Weniger anzeigen",
				noAdoptedTreesMessage:
					"Wenn Du einen Baum regelmäßig gießt, kannst Du ihn adoptieren. Deine adoptierten Bäume erscheinen hier in Deiner Profilübersicht.",
			},
			settings: {
				subtitle: "Profildetails",
				username: "Benutzername",
				yourUsername: "Dein Benutzername",
				editUsername: "Neuer Benutzername",
				placeholderUser: "Dein Benutzername",
				email: "E-Mail",
				yourEmail: "Deine E-Mail Adresse",
				editEmail: "Neue E-Mail Adresse",
				placeholderMail: "xyz@ts.berlin",
				updateEmailEmailSentTitle: "E-Mail gesendet!",
				updateEmailEmailSentMessage:
					"Wir haben an Deine neue E–Mail Adresse einen Bestätigungslink zum Ändern Deiner Email gesendet. Checke Dein Postfach!",
				password: "Passwort",
				changePassword: "Passwort ändern",
				newPassword: "Neues Passwort",
				passwordChangeConfirmationTitle:
					"Dein Passwort wurde erfolgreich geändert!",
				passwordChangeConfirmationMessage:
					'Klicke auf "OK" um zu Deinem Profil zu gelangen.',
				passwordChangeWithoutRecoveryLinkTitle:
					"Es ist ein Fehler aufgetreten.",
				passwordChangeWithoutRecoveryLinkMessage:
					"Hinweis: Diese Seite kann nur aufgerufen werden, wenn zuvor der Passwort-Zurücksetzen Link in der E-Mail angeklickt wurde.",
				passwordChangeWithoutRecoveryLinkLinkLabel: "Zurück zur Startseite",
				pleaseWait: "Einen Moment Geduld bitte...",
				deleteAccount: "Account löschen",
				confirmDelete: "Löschen",
				approve: "Fertig",
				checkInput: "Bitte überprüfe Deine Eingabe",
				usernameShould: "Dein Benutzername muss: ",
				usernameLength: "mindestens 3-50 Zeichen lang sein",
				onlyNumberAndLetters: "und nur aus Buchstaben oder Zahlen bestehen",
				usernameTaken: "Dieser Benutzername ist bereits vergeben",
				backToLogin: "zurück zum Login",
				register: "Registrieren",
				confirmEmailTitle: "Account bestätigen",
				confirmEmail: (email: string) =>
					`Überprüfe Dein E-Mail Postfach für ${email} nach einer E-Mail von "no-reply@giessdenkiez.de" mit einem Link um Deinen Account zu bestätigen.`,
				existingAccount: "Du hast schon einen Account?",
				logIn: "Melde Dich an",
				passwordShould: "Dein Passwort muss enthalten:",
				passwordLength: "mindestens 8 Zeichen",
				passwordUpperAndLowerCase: "Klein- und Großbuchstaben",
				passwordSpecialChar: "mindestens ein Sonderzeichen",
				passwordNumber: "mindestens eine Zahl",
				logInShort: "Anmelden",
				missingAccount: "Du hast noch keinen Account?",
				registerNow: "Registriere Dich",
				forgotYourPassword: "Passwort vergessen?",
				ohNoforgotYourPassword: "Oh nein. Du hast Dein",
				passwordForgotten: "Passwort vergessen",
				resetPasswordEmailSentTitle: "E-Mail gesendet!",
				resetPasswordEmailSentMessage:
					"Wir haben Dir eine E-Mail zum Ändern Deines Passworts gesendet. Checke Dein Postfach!",
				clickHere: "Hier klicken",
				resetPassword: "Passwort zurücksetzen",
				invalidCredentials: "Falsches Passwort oder E-Mail Adresse",
				deleteAccountConfirm: "Willst Du Deinen Account wirklich löschen?",
				cancel: "Abbrechen",
				save: "Speichern",
				confirm: "OK",
			},
			logOut: "Ausloggen",
			showPassword: "Zeigen",
			hidePassword: "Verbergen",
		},
		info: "Info",
	},
	notFound: {
		title: "404 - Seite wurde nicht gefunden",
	},
	info: {
		infoTitel: "Info",
		about: {
			head: {
				question: "Über das Projekt",
				answer: `[Erklärung]`,

				aboutUsTitle: "Über uns",
				aboutUsAnswer: `„Gieß den Kiez” ist ein Projekt des [CityLAB Berlin](https://www.citylab-berlin.org/). Das CityLAB ist ein öffentliches Innovationslabor für die Stadt der Zukunft im ehemaligen Flughafen Berlin-Tempelhof. Gemeinsam mit einem großen Netzwerk aus Verwaltung, Zivilgesellschaft, Wissenschaft und Start-ups arbeiten wir hier an Ideen für ein lebenswertes Berlin. Das CityLAB ist ein Projekt der Technologiestiftung Berlin und wird gefördert durch die Berliner Senatskanzlei.`,
				press: `Presseanfragen gehen am besten an [Anna Hantelmann](mailto:anna.hantelmann@ts.berlin?subject=giessdenkiez.de%20Presseanfrage">anna.hantelmann@ts.berlin).`,
				communityTitle: "Community",
				communityAnswer:
					"Du möchtest Dich über das Gießen von Bäumen informieren, Pumpen melden oder Dich mit anderen aktiven Nutzer:innen austauschen? Dann tritt unserem Slack-Chat bei!",
				slackButton: "Zur Slack Community",
				feedback: `Du hast **Feedback** zu *Gieß den Kiez*?

[Beantworte uns gerne ein paar Fragen](https://citylabberlin.typeform.com/to/kCdnCgvC#product_id=GdK)`,
			},
			qa: [
				{
					question: "Nützliche Links",
					answer: `[Lieblingsbauminiative (Berlin)](https://www.lieblingsbaum-initiative.de/)

[Stadtbaumkampagne (SenMVKU Berlin)](https://www.berlin.de/senuvk/umwelt/stadtgruen/stadtbaeume/kampagne/start.shtml)

[Bewässerungsempfehlung für Stadtbäume (Pflanzenschutzamt Berlin)](https://www.berlin.de/pflanzenschutzamt/stadtgruen/beratung/bewaesserungsempfehlung-fuer-stadtbaeume/)

[Gießen bei Trockenheit (Baumpflegeportal)](https://www.baumpflegeportal.de/baumpflege/trockenheit-duerre-wann-baeume-giessen/)

[Stadtbäume - Bedeutung und Herausforderungen in Zeiten des Klimawandels (HCU Hamburg)](https://www.hcu-hamburg.de/fileadmin/documents/REAP/files/Bildungsmaterial_Stadtbaeume_im_Klimawandel_2017.pdf)

[Funktionen von Stadtbäumen (Bund Naturschutz e.V.)](https://www.bund-naturschutz.de/natur-und-landschaft/stadt-als-lebensraum/stadtbaeume/funktionen-von-stadtbaeumen.html)`,
				},
				{
					question: "Datenquellen",
					answer: `Die Karte zeigt einen Großteil der Berliner Straßen- und Anlagenbäume (885.825; Stand: Mai 2024). Zusätzlich wird abgebildet, wie viel Niederschlag in den letzten 30 Tagen bei jedem Baum gefallen ist und ob diese in der Zeit bereits gegossen wurden. Aus verschiedenen Gründen sind leider noch nicht alle Berliner Stadtbäume aufgeführt. Wir arbeiten aber daran, die Datenlage zu verbessern und eine möglichst vollständige Darstellung des Berliner Baumbestandes zu erreichen. Die aktuellen Datenquellen sind:

[Geoportal Berlin / Straßenbäume](https://fbinter.stadt-berlin.de/fb/berlin/service_intern.jsp?id=s_wfs_baumbestand@senstadt&type=WFS)

[Geoportal Berlin / Anlagenbäume](https://fbinter.stadt-berlin.de/fb/berlin/service_intern.jsp?id=s_wfs_baumbestand_an@senstadt&type=WFS)

Regendaten von [Deutscher Wetterdienst](https://www.dwd.de/)

Pumpen aus [Open Street Map](https://www.openstreetmap.de)`,
				},
			],
		},
		faq: {
			title: "F.A.Q.",
			description:
				"Wie funktioniert die App und was will sie schaffen?",
			qa: [
				{
					question:
						"Wie funktioniert die App?",
					answer:
						"[Erklärung]",
				},
				{
					question:
						"Was will sie schaffen?",
					answer:
						"[Erklärung]",
				},
				{
					question:
						"Wer hat sie erstellt?",
					answer:
						"[Erklärung]",
				},
				{
					question:
						"Welche sind die Quellen?",
					answer:
						"[Erklärung]",
				},
			],
		},
		share: {
			title:
				"Teile Gieß den Kiez mit Deinem Umfeld und hilf uns die Gieß-Community zu vergrößern:",
			content:
				"Auf Gieß den Kiez kannst Du Dich über den Berliner Baumbestand erkundigen, durstige Bäume finden, und eintragen, wann Du diese gegossen hast!",
			openSource:
				"Gieß den Kiez ist ein [Open Source Projekt](https://github.com/technologiestiftung/giessdenkiez-de)!",
		},
		credits: {
			projectBy: "Ein Projekt der",
			fundedBy: "Gefördert durch",
		},
	},
	treeDetail: {
		title: "Bauminformationen",
		adoptIt: "Anzahl Nachbar*innen",
		alsoAdoptedByOtherUsers: "Auch von anderen User:innen adoptiert",
		onlyAdoptedByOtherUsers: "Wer wohnt noch hier?",
		adoptLoading: "Baum wird adoptiert...",
		unadoptLoading: "Adoption wird aufgehoben...",
		isAdopted: "Grösse (in m) und Umfang (in cm)",
		adoptHintTitle: "ID:",
		adoptHint:
			"Wenn Du regelmäßig den gleichen Baum gießt, kannst Du diesen adoptieren. So findest Du ihn schnell in Deiner Profilübersicht wieder.",
		adoptErrorMessage:
			"Fehler beim Adoptieren des Baumes. Bitte versuche es erneut.",
		adoptLoginFirst: "Logge Dich ein um diesen Baum zu adoptieren",
		ageTitle: "Standalter",
		age: (age: number) => `${age === 1 ? "Jahr" : "Jahre"}`,
		ageUnknown: "Unbekannt",
		treeTypeUnknown: "Baumart unbekannt",
		managedBy:
			"Dieser Baum wird bereits vom Bezirksamt versorgt und muss nicht gegossen werden.",
		waterNeed: {
			title: "Wasserbedarf",
			hintWinter:
				"Außerhalb der Vegetationszeit (März-Oktober) benötigen die Bäume kein Wasser, sie sind quasi im Winterschlaf.",
			hint: "Je nach Baumalter unterscheidet sich der Bedarf an Wasser.",
			needXLiters: (liters: string) => `Braucht ca. ${liters} Liter pro Monat`,
			needsOnlyOnDryDays: "Braucht nur an trockenen Tagen Wasser",
			waterManaged: "Versorgt, nur in trockenen Phasen bedürftig",
			winterSleep: "Die Bäume sind derzeit im Winterschlaf",
			managedByGroundwater: "Grundwasser",
			unknownTitle: "Wasserbedarf **unbekannt**",
			unknown:
				"Das Alter dieses Baumes ist unbekannt und daher auch sein Wasserbedarf. Vielleicht helfen Dir die weiteren Informationen für eine eigenständige Einschätzung.",
			unknownShort: "Unbekannt",
			seniorTitle: "Braucht nur in trockenen Phasen Wasser",
			seniorExplanation:
				"Ältere Bäume können sich in der Regel über das Grundwasser selbst versorgen, aber bei zunehmender Hitze freuen auch sie sich über zusätzliches Wasser.",
			liters: "Liter",
			watered: "gegossen",
			covered: "versorgt",
			rained: "Regen",
			stillMissing: "fehlen noch",
			dataOfLastXDays: "* Daten der letzen 30 Tage",
			manager: "vom Bezirksamt",
			alreadyWateredByManager: "Bereits vom **Bezirksamt versorgt**",
			alreadyWateredByGroundwater: "Über das **Grundwasser versorgt**",
			winterNeedsNoWater: "Benötigt aktuell kein Wasser",
			stillWaterXLiters: (liters: string) => `
Noch

**${liters} Liter**

gießen`,
			shouldBeWatered: "Sollte gegossen werden",
			sufficientlyWatered: "Momentan ausreichend bewässert",
			readMore: "Mehr anzeigen",
			ageAndWaterHintTitle: "Wasserbedarf und Standalter",
			ageAndWaterHint: `
Insbesondere junge Bäume brauchen in den ersten Jahren Wasser. Lieber seltener, aber dafür viel.

**Unter 5 Jahren**: Wir sind frische Jungbäume und unser Durst wird vom bezirklichen Grünflächenamt gestillt.

**5-10 Jahre**: In dem Alter werden wir nicht mehr in allen Bezirken von der Verwaltung bewässert und sind noch keine „Selbstversorger“. Wir freuen uns gerade in trockenen Zeiten über Wasser - lieber seltener, aber viel auf einmal (ca. 100-200l pro Monat).

**Ältere Bäume (10+ Jahre)**: Wir können uns über das Grundwasser selbst versorgen.
`,
			ageAndWaterHintWinter: `
Wenn die Bäume im Herbst zunehmend ihre Blätter verlieren, reduzieren sich auch ihre photosynthetische Prozesse und sie benötigen weniger Energie – und deswegen auch weniger Wasser.
Mit dem offiziellen Ende der Vegetationsperiode neigt sich deshalb auch die Gießsaison dem diesjährigen Ende zu. Ab März geht es dann wieder los, und zwar volle Kanne!

**Wasserbedarf während der Vegetationsperiode (März-Oktober)**:

`,
			ageAndWaterHintSpecialDistrict: (
				babyAgeLimit: number,
				district: string,
			) => `
Insbesondere junge Bäume brauchen in den ersten Jahren Wasser. Lieber seltener, aber dafür viel.

Der Bezirk ${district} hat uns zusätzliche Informationen zur individuellen Gießstrategie zur Verfügung gestellt.

**Unter ${babyAgeLimit} Jahren**: Wir sind frische Jungbäume und unser Durst wird vom bezirklichen Grünflächenamt gestillt.

**Ältere Bäume (${babyAgeLimit}+ Jahre)**: Wir können uns über das Grundwasser selbst versorgen.
`,
			close: "Weniger anzeigen",
			lastXDaysYLitersWater: (days: number, liters: string) =>
				`Die letzten ${days} Tage wurden **${liters} Liter gegossen**.`,
			lastXDaysYLitersRain: (days: number, liters: string) =>
				`In den letzten ${days} Tagen sind **${liters} Liter Regen** gefallen.`,
			iWatered: "Ich habe gegossen",
			loginToWater: {
				login: "Logge Dich ein",
				toWater: "um eine Gießung einzutragen",
			},
			submitWatering: "Gießung eintragen",
			wateredHowMuch: "Gegossene Liter",
			wateredHowMuchPlaceholder: "Menge in L",
			wateredWhen: "Wann?",
			waterSave: "Speichern",
			waterCancel: "Abbrechen",
			wateringSuccessful: "Deine Gießung wurde eingetragen!",
		},
		lastWaterings: {
			deletedAccount: "Deaktivierter Account",
			title: "Letzte Gießungen",
			last30Days: "Letzte 30 Tage",
			nothingLast30Days: "Keine Gießungen in den letzten 30 Tagen",
			before: "Vorherige",
			nothingBefore: "Keine vorherigen Gießungen",
		},
		problem: {
			title: "Problem melden",
			description:
				"Du hast einen Baumschaden entdeckt, oder die Baumscheibe wird fehlgenutzt? Teile es dem Ordnungsamt mit:",
			link: "Zum offiziellen Formular",
		},
		treeTypeInfos: [
			{
				id: "LINDE",
				title: "Linde (Tilia)",
				description:
					"Die Linde gilt seit Jahren als der berlintypische Straßenbaum. Mit einem Anteil von gut einem Drittel prägt sie den Straßenbaumbestand. Insgesamt lassen sich 10 verschiedene Arten unterscheiden. Bevorzugt gepflanzt wird die Winter-Linde (Tilia cordata), die als mittelgroßer Baum auch in schmaleren Straßen noch Raum findet. Die großkronige Kaiserlinde (Tilia intermedia) ist dagegen den weiträumigen Alleen vorbehalten.",
			},
			{
				id: "AHORN",
				title: "Ahorn (Acer)",
				description:
					"Die Gattung der Ahorne umfasst ca. 20% des Gesamtbestandes. Für den Standort „Straße” ist vor allem der Spitzahorn (Acer platanoides) geeignet. Die frühe Blüte und die bunte Herbstfärbung machen den Ahorn zu einer besonders beliebten Baumgattung.",
			},
			{
				id: "EICHE",
				title: "Eiche (Quercus)",
				description:
					"Der Anteil der Eichen beträgt rund 9% des Gesamtbestandes. In Berlin wird vor allem die Stiel-Eiche (Quercus robur) angepflanzt. Als Lichtbaum ist die Eiche nicht für enge Straßen geeignet. Die jüngsten Alleen im Parlaments- und Regierungsviertel wurden mit der sog. Spree-Eiche (Quercus palustris) bepflanzt, die sich u.a. durch ihre besonders schöne Herbstfärbung auszeichnet.",
			},
			{
				id: "PLATANE",
				title: "Platane (Platanus)",
				description:
					"Ein idealer Alleebaum für breite Straßen ist die Platane (Platanus acerifolia), die neben einer Höhe von 20 bis 30 m auch einen stattlichen Kronendurchmesser von 15 bis 20 m erreichen kann. Am Gesamtbestand haben die Platanen einen Anteil von etwa 6%. Die bekannteste und mit über 120 Jahren älteste Platanenallee in Berlin ist die Puschkinallee in Berlin-Treptow.",
			},
			{
				id: "KASTANIE",
				title: "Kastanie (Aesculus)",
				description:
					"Die Kastanie (Aesculus) hat einen Anteil von ca. 5% am Gesamtbestand, und belegt damit den fünften Platz unter den Berliner Straßenbäumen. Rosskastanien haben fünf- und mehrgliedrige Blätter, die an die Finger einer Hand erinnern; Esskastanien haben einzelne Blätter, die überdies deutlich gezackt sind.",
			},
			{
				id: "ROSSKASTANIE",
				title: "Rosskastanie (Aesculus hippocastanum)",
				description:
					"Die Rosskastanie (Aesculus hippocastanum) hat einen Anteil von ca. 5% am Gesamtbestand, und belegt damit den fünften Platz unter den Berliner Straßenbäumen. Rosskastanien haben fünf- und mehrgliedrige Blätter, die an die Finger einer Hand erinnern; Esskastanien haben einzelne Blätter, die überdies deutlich gezackt sind.",
			},
			{
				id: "ESCHE",
				title: "Esche (Fraxinus)",
				description:
					"Die Esche (Fraxinus) hat einen Anteil von ca. 3% am Gesamtbestand, und belegt damit den sechsten Platz unter den Berliner Straßenbäumen. Mit einer Wuchshöhe von bis zu 40 m zählt sie zu den höchsten Laubbäumen Europas.",
			},
			{
				id: "BIRKE",
				title: "Birke (Betula)",
				description:
					"Die Birke (Betula) hat einen Anteil von ca. 3% am Gesamtbestand. Obwohl die Birke als Pionierbaum sehr anspruchslos und wachsend auf jedem Boden ist, eignet sie sich als Straßenbaum weniger, da die Baumscheiben oft zu wenig Raum für die Flachwurzler bieten.",
			},
			{
				id: "ROBINIE",
				title: "Robinie (Robinia)",
				description:
					"Die Robinie (Robinia) hat einen Anteil von ca. 2% am Gesamtbestand. Sie wurde ab 1672 im Berliner Lustgarten als Parkbaum kultiviert und ist heute in ganz Berlin sehr häufig. Die Robinie stellt nur geringe Anforderungen an den Boden, und sie kann dank der Knöllchenbakterien an ihren Wurzeln Luftstickstoff bindenden und düngt damit den Boden auf.",
			},
			{
				id: "HASEL",
				title: "Hasel Baum (Corylus)",
				description:
					"Der Hasel Baum (Corylus) hat einen Anteil von ca. 2% am Gesamtbestand, und ist somit der neunt häufigste Straßenbaum in Berlin. Die Haselnuss wächst als Strauch oder kleiner Baum bis zu 6 m hoch.",
			},
			{
				id: "HAINBUCHE",
				title: "Hainbuche (Carpinus)",
				description:
					"Der Anteil der Hainbuchen (Carpinus) beträgt rund 2% des Gesamtbestandes. Der Baum erreicht eine Höhe von bis zu 25 m. Die Krone ist erst leicht kegelförmig und später weit ausladend.",
			},
			{
				id: "PAPPEL",
				title: "Pappel (Populus)",
				description:
					"Die Pappel (Populus) hat einen Anteil von ca. 2% am Berliner Gesamtbestand. Sie haben eiförmige bis dreieckige, teils herzförmige Laubblätter.",
			},
			{
				id: "ULME",
				title: "Ulme (Ulmus)",
				description:
					"Der Anteil der Ulmen (Ulmus) beträgt rund 2% des Gesamtbestandes. Es gibt bei uns drei der weltweit 45 Arten dieses sommergrünen Laubbaumes: die Bergulme, die Feldulme und die Flatter-Ulme. Sie kommt mit einer Höhe von bis zu 600 Metern vor und kann 250 Jahre alt werden.",
			},
		],
		treeTypeInfoTitle: "Baumsteckbrief",
	},
	filter: {
		title: "Filter",
		publicPumps: "Öffentliche Pumpen",
		myAdoptedTrees: "Meine adoptierten Bäume",
		allAdoptedTrees: "Adoptierte Bäume",
		lastWateredTrees: "Zuletzt gegossene Bäume",
		treeAge: "Baumalter",
		show: "Anzeigen",
		reset: "Zurücksetzen",
		treeAgeTitle: "Alterspanne der Bäume",
		years: "Jahre",
	},
	common: {
		defaultErrorMessage:
			"Ups, da ist etwas schief gelaufen. Bitte versuche es erneut.",
	},
	contact: {
		dialogTitle: (contactName: string) =>
			`**Sende eine E-Mail an *${contactName}***`,
		dialogDetail: (contactName: string, userMail: string) =>
			`Die E-Mail an *${contactName}* enthält automatisch Deine E-Mail-Adresse (*${userMail}*) sowie Deine Textnachricht:`,
		dialogPlaceholder: "Beschreibe kurz, warum Du Dich vernetzen möchtest...",
		dialogCancel: "Abbrechen",
		dialogSubmit: "Senden",
		dialogAlreadyContactedError: (contactName: string) =>
			`Du hast *${contactName}* bereits eine Kontaktanfrage gesendet.`,
		dialogAlreadyContactedExplanation:
			"Du hast dieser Person bereits eine Kontaktanfrage gesendet. Eine erneute Anfrage ist nicht möglich.",
		genericErrorTitle: "Kontaktanfrage nicht möglich",
		genericError: `Ups, da ist etwas schief gelaufen. Bitte versuche es erneut.`,
		dialogSuccess: (contactName: string) =>
			`Die Kontaktanfrage an *${contactName}* wurde versendet.`,
		dailyLimitError: "Tageslimit für Kontaktanfragen erreicht.",
		dailyLimitExplanation:
			"Du hast das Tageslimit von 3 Kontaktanfragen erreicht. Bitte versuche es morgen erneut.",
		containsUrlHint:
			" Bitte beachte, dass Deine Nachricht keine Links enthalten darf.",
		messageTooLongError: "Die Nachricht darf max. 200 Zeichen lang sein.",
		messageRestrictionsHint: (maxLength: number, message: string) =>
			`Noch ${Math.max(0, maxLength - message.length)} Zeichen übrig.`,
		loginFirst: "Einloggen für Kontaktanfrage",
		loginFirstReason:
			"Du kannst Personen nur eine Kontaktanfrage stellen, wenn Du eingeloggt bist.",
		loginFirstAction: "Logge Dich ein",
		confirm: "Alles klar!",
	},
	pumps: {
		title: "Öffentliche Straßenpumpe",
		status: "Status",
		lastCheck: "Letzter Check",
		update: "Status in OpenStreetMap aktualisieren",
		working: "Funktionsfähig",
		defect: "Defekt",
		unknown: "Unbekannt",
	},
	splash: {
		headline:
			"Willkommen zu der App!",
		subheadlineWinter: `Wir werden mit einem Formular anfangen. [Anweisungen]`,
		subheadline:
			"Erkundige Dich über den Wasserbedarf der Bäume in Deiner Nachbarschaft, adoptiere den Baum vor Deiner Haustür und werde Teil der aktiven Gieß-Community in Berlin!",
		actionTitle: "Los geht's",
		actionTitleWinter: "Erkunden!",
		discoverTitle: "Entdecken",
		discoverContent:
			"Die Karte visualisiert über 800.000 Stadtbäume und zeigt Informationen zu Art, Alter und Wasserbedarf an. Nutze die Filter- und Suchfunktionen, um schnell einen Überblick zu erhalten.",
		waterTitle: "Gießen",
		waterContent:
			"Schnapp Dir eine Gießkanne und werde Teil der Gieß-Community! Bereits über tausend Aktive haben sich für die Bäume Berlins zusammengeschlossen und tragen ihre Gießungen regelmäßig ein.",
		adoptTitle: "Adoptieren",
		adoptContent:
			"Durch das Adoptieren eines Baumes - oder auch mehrerer - lässt Du Deine Nachbarschaft wissen, dass für diese Bäume gesorgt wird. So gelingt ein koordiniertes Engagement.",
		networkTitle: "Vernetzen",
		networkContent:
			"Tritt unserem Slack-Chat bei, um Dich mit der Gieß-Community zu vernetzen, Fragen auszutauschen und die Bewässerung in Deinem Kiez abzustimmen.",
		questionHeadline: "Wie wurde diese App erstellt?",
		questionSubheadline:
			"Dank des Projektes [Details]",
		discoverMoreTitle: "Aprende más!",
		letsGo: "Los geht's",
	},
	loading: {
		mapLoading: "Wir laden gerade 885.825 Bäume aus dem Berliner Baumbestand.",
		treeLoading: "Lade Bauminformationen...",
	},
	stats: {
		title: "Statistiken Berlin",
		subtitle: "Gieß den Kiez in Zahlen",
		streetTrees: "Stadtbäume",
		publicPumps: "Öffentliche Pumpen",
		activeUsers: "Aktive Gießer:innen",

		backToFront: "zurück",
		wateringsStat: {
			title: "Gießungen",
			unit: "mal",
			legend: "Anzahl der Gießungen",
			hint: (currentYear) => `wurde im Jahr ${currentYear} gegossen.`,
			backContent: `Die Gießaktivität variiert in den zwölf Berliner Bezirken je nach ehrenamtlichem Engagement. In einigen Bezirken haben sich engagierte Anwohner:innen bereits zu Gießgruppen organisiert ([Slack Community](https://giessdenkiez.slack.com/ssb/redirect)).

Zudem ist der Bedarf der bezirklichen [Straßen- und Grünflächenamt (SGA)](https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/strassen-und-gruenflaechenamt/) unterschiedlich. Um bestmöglich zu helfen, sollte man das zuständige SGA zuvor kontaktieren - und schon kann es losgehen.`,
		},
		wateringBehaviorStat: {
			title: "Gießverhalten",
			unit: "Liter",
			legend: `∑ Gegossene Liter pro Monat
`,
			watered: "gegossen",
			rain: "Regen",
			hint: () => `wurden insgesamt schon seit 2020 gegossen.`,
			backContent: `Über stolze 2 Millionen Liter wurden bereits ehrenamtlich gegossen! 

		
“Je mehr desto besser” gilt jedoch nicht immer angesichts immer größerer Wasserknappheit. Und das weiß die Berliner Gieß-Community natürlich, und ist daher hauptsächlich dann aktiv wenn die Bäume tatsächlich durstig sind: während der  Vegetationsperiode (April-Oktober) in besonders heißen trockenen Jahren. 

Datenquelle: [Wetterdaten (DWD)](https://opendata.dwd.de/)`,
		},
		wateringAmountStat: {
			title: "Gießvolumen",
			unit: "Liter",
			legend: "Ø Liter pro Jahr",
			hint: (currentYear) =>
				`werden ${currentYear} durchschnittlich pro Gießung eingetragen.`,
			backContent: `“Je mehr desto besser” gilt hier eingeschränkt: viel auf einmal, aber nicht zu oft. Und auch das weiß die aktive Community bereits.

Eine Gießung sollte eher mehr als weniger Liter auf einmal beinhalten, damit sich das Wurzelwerk der durstigen Jungbäume nach unten ausbilden kann. 

Aber Achtung! Jungbäume können auch überwässert werden. Mehr Informationen zur [Bewässerungsempfehlung für Stadtbäume](https://www.berlin.de/pflanzenschutzamt/stadtgruen/beratung/bewaesserungsempfehlung-fuer-stadtbaeume/).`,
		},
		treeSpeciesStat: {
			title: "Baumarten",
			unit: "Baumarten",
			hint: () => `stehen in Berlin.`,
			other: "Andere",
			legend: "Anteile Berliner Baumbestand",
			backContent: `Berlin ist vielfältig - inklusive der Bäume!

Diese Übersicht zeigt die zwanzig häufigsten Arten, jeweils zusammengefasst nach der übergreifenden Gattung.

Die [Gieß den Kiez Karte](https://www.giessdenkiez.de/map) zeigt die volle Pracht, und somit fast 900.000 Stadtbäume, mit Infos zu Art, Alter und Wasserbedarf. Nutze die Filter und Suche, um mehr über die Bäume in Deiner Nachbarschaft zu erfahren.

Datenquelle: [Berliner Baumkataster (Geoportal Berlin)](https://daten.berlin.de/datensaetze/baumbestand-berlin-wms )`,
		},
		adoptionStat: {
			title: "Baumadoptionen",
			unit: "Bäume",
			hint: () => `sind adoptiert.`,
			legend: "der adoptierten Bäume sind besonders durstig.",
			backContent: `Einen Baum auf Gieß den Kiez zu adoptieren zeigt, dass sich regelmäßig um diesen gesorgt wird und erleichtert somit die nachbarschaftliche Koordination. Über tausende Bäume können sich also bereits glücklich schätzen.

Durstig sind vor allem Jungbäume (unter 10 Jahren). Diese werden in der Regel mind. bis zum fünften Jahr vom Grünflächenamt gegossen. “Besonders durstig” sind somit die **5 - 10 Jahre** alten Bäume.`,
		},
		gdKSalesPitch: `*Gieß den Kiez* für **Deine Stadt**?

[Erfahre mehr!](https://deinestadt.giessdenkiez.de/)`,
	},
};
