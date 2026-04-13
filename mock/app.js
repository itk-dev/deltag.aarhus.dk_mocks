/* ==========================================================================
   Mock Data
   ========================================================================== */

const horingssvarData = [
  {
    id: 1,
    title: "Bekymring om trafikstøj fra nye boliger",
    description: "Vi er meget bekymrede over den forventede stigning i trafikstøj, som de nye boliger vil medføre. Området er i forvejen belastet af trafik fra Synnedrupvej, og yderligere bebyggelse vil kun forværre situationen for de eksisterende beboere.",
    fullDescription: "Vi er meget bekymrede over den forventede stigning i trafikstøj, som de nye boliger vil medføre. Området er i forvejen belastet af trafik fra Synnedrupvej, og yderligere bebyggelse vil kun forværre situationen for de eksisterende beboere.\n\nDer bør foretages en grundig trafikanalyse, før planerne vedtages. Vi foreslår desuden, at der etableres støjdæmpende foranstaltninger langs de mest belastede vejstrækninger.\n\nDerudover ønsker vi at påpege, at der i den nuværende plan ikke er taget tilstrækkeligt hensyn til den øgede belastning af de eksisterende veje i nærområdet.",
    author: "Maria Jensen",
    date: "15. november 2025",
    comments: 6,
    likes: 51,
    category: "trafik",
    commentsList: [
      { author: "Peter Hansen", date: "16. nov 2025", text: "Helt enig. Trafikken er allerede uholdbar i myldretiden." },
      { author: "Anne Larsen", date: "17. nov 2025", text: "Vi bør kræve en uafhængig trafikanalyse." },
      { author: "Jens Olsen", date: "18. nov 2025", text: "Støjdæmpning er et must. Vores hverdag er allerede påvirket." },
      { author: "Mette Friis", date: "19. nov 2025", text: "Har kommunen overhovedet lavet en støjmåling? Det tvivler jeg stærkt på." },
      { author: "Bo Vang", date: "20. nov 2025", text: "Vi bor på Synnedrupvej og kan bekræfte at støjen allerede er et stort problem." },
      { author: "Karen Winther", date: "21. nov 2025", text: "Der bør laves hastighedsbegrænsning på 40 km/t i hele området." }
    ]
  },
  {
    id: 2,
    title: "Positivt med flere boliger i Malling",
    description: "Det er glædeligt at se, at der arbejdes på at udvide boligmulighederne i Malling. Området har brug for flere familieboliger, og placeringen ved Synnedrupvej virker fornuftig i forhold til infrastrukturen.",
    fullDescription: "Det er glædeligt at se, at der arbejdes på at udvide boligmulighederne i Malling. Området har brug for flere familieboliger, og placeringen ved Synnedrupvej virker fornuftig i forhold til infrastrukturen.\n\nJeg håber, at der bliver taget hensyn til bæredygtige byggematerialer og energieffektivitet i de nye boliger. Det ville være oplagt at sætte en høj standard for grønt byggeri.\n\nDesuden ville det være positivt, hvis der blev integreret fællesarealer og grønne rum i bebyggelsen.",
    author: "Thomas Pedersen",
    date: "14. november 2025",
    comments: 12,
    likes: 34,
    category: "bolig",
    commentsList: [
      { author: "Lisa Møller", date: "14. nov 2025", text: "Enig! Malling mangler boliger til unge familier." },
      { author: "Karl Sørensen", date: "15. nov 2025", text: "Håber de bliver til at betale." },
      { author: "Rikke Holm", date: "16. nov 2025", text: "Vi har ledt efter bolig i Malling i to år. Der er intet at finde." },
      { author: "Søren Dahl", date: "17. nov 2025", text: "Bæredygtigt byggeri bør være et krav, ikke bare et ønske." },
      { author: "Camilla Frost", date: "18. nov 2025", text: "Fantastisk at kommunen tager dette skridt. Malling har brug for vækst." },
      { author: "Henrik Berg", date: "19. nov 2025", text: "Solceller og grønne tage bør være standard i alle nye boliger." },
      { author: "Tine Holm", date: "20. nov 2025", text: "Håber der også bliver plads til rækkehuse og ikke kun parcelhuse." },
      { author: "Ole Mortensen", date: "21. nov 2025", text: "Prisen er afgørende. Almene boliger bør indgå i planen." },
      { author: "Ida Kvist", date: "22. nov 2025", text: "Fællesarealer og legepladser er vigtigt for børnefamilier." },
      { author: "Martin Rye", date: "23. nov 2025", text: "God infrastruktur er en forudsætning. Busforbindelserne skal forbedres." },
      { author: "Gitte Skou", date: "24. nov 2025", text: "Vi flyttede fra Aarhus C for at få mere plads. Malling er perfekt." },
      { author: "Mikkel Skov", date: "25. nov 2025", text: "Håber byggeriet kan stå klar inden 2028." }
    ]
  },
  {
    id: 3,
    title: "Naturområderne skal bevares",
    description: "Det er vigtigt, at de eksisterende naturområder og grønne arealer bevares i forbindelse med den nye lokalplan. Biodiversiteten i området er unik og bør beskyttes mod yderligere bebyggelse.",
    fullDescription: "Det er vigtigt, at de eksisterende naturområder og grønne arealer bevares i forbindelse med den nye lokalplan. Biodiversiteten i området er unik og bør beskyttes mod yderligere bebyggelse.\n\nVi har i de seneste år observeret sjældne fuglearter og planter i området, som vil være truet, hvis bebyggelsen udvides uden hensyn til naturen.\n\nJeg foreslår, at der udarbejdes en miljøkonsekvensrapport, inden planerne endeligt vedtages.",
    author: "Birgit Rasmussen",
    date: "13. november 2025",
    comments: 8,
    likes: 67,
    category: "miljoe",
    commentsList: [
      { author: "Sven Nielsen", date: "13. nov 2025", text: "Har set rødben i området. Det bør undersøges nærmere." },
      { author: "Karen Winther", date: "14. nov 2025", text: "Grønne korridorer bør være et krav." },
      { author: "Lars Winding", date: "15. nov 2025", text: "Vi har dokumenteret mindst 12 fuglearter i området." },
      { author: "Hanne Juhl", date: "16. nov 2025", text: "Træerne langs stien er over 100 år gamle. De må ikke fældes." },
      { author: "Flemming Toft", date: "17. nov 2025", text: "En miljøkonsekvensrapport er det mindste man kan forvente." },
      { author: "Dorte Kruse", date: "18. nov 2025", text: "Biodiversiteten i Danmark er allerede truet. Vi skal passe på det vi har." },
      { author: "Christian Leth", date: "19. nov 2025", text: "Kan man ikke bygge og bevare naturen samtidig? Det kræver omtanke." },
      { author: "Ulla Gram", date: "20. nov 2025", text: "Regnvandshåndtering på egen grund bør være et krav for at beskytte vandløb." }
    ]
  },
  {
    id: 4,
    title: "Infrastrukturen skal opgraderes først",
    description: "Før der bygges nye boliger, bør kommunen sikre, at infrastrukturen kan håndtere den øgede belastning. Kloaksystemet og vejnettet er allerede underdimensioneret i forhold til nuværende behov.",
    fullDescription: "Før der bygges nye boliger, bør kommunen sikre, at infrastrukturen kan håndtere den øgede belastning. Kloaksystemet og vejnettet er allerede underdimensioneret i forhold til nuværende behov.\n\nVi har oplevet gentagne oversvømmelser ved kraftig regn, og det vil kun blive værre med mere befæstet areal. Der bør investeres massivt i klimatilpasning.\n\nDesuden mangler der cykelstier på flere af de centrale strækninger.",
    author: "Henrik Christensen",
    date: "12. november 2025",
    comments: 9999,
    likes: 999,
    category: "trafik",
    commentsList: [
      { author: "Mette Friis", date: "12. nov 2025", text: "Vores kælder blev oversvømmet tre gange sidste år!" },
      { author: "Ole Mortensen", date: "13. nov 2025", text: "Cykelstier er et must for at fremme grøn transport." },
      { author: "Pia Lund", date: "14. nov 2025", text: "Fuldstændig enig. Infrastruktur først!" },
      { author: "Rasmus Bloch", date: "15. nov 2025", text: "Kloakken kan slet ikke håndtere mere regnvand. Det er dokumenteret." },
      { author: "Niels Eriksen", date: "16. nov 2025", text: "Vejnettet omkring Synnedrupvej er allerede overbelastet i myldretiden." },
      { author: "Susanne Krog", date: "17. nov 2025", text: "Vi har skrevet til kommunen fem gange om kloakproblemerne. Ingen svar." },
      { author: "Erik Bak", date: "18. nov 2025", text: "Klimatilpasning koster penge, men oversvømmelser koster mere." },
      { author: "Vibeke Frost", date: "19. nov 2025", text: "LAR-løsninger bør være obligatoriske for alle nye byggerier." },
      { author: "Jørgen Dam", date: "20. nov 2025", text: "Hvem betaler for de nødvendige vejudvidelser? Grundejerne?" },
      { author: "Lone Vestergaard", date: "21. nov 2025", text: "Der mangler fortove på flere strækninger. Det er farligt for fodgængere." },
      { author: "Annette Holm", date: "22. nov 2025", text: "Fjernvarmekapaciteten i området er også underdimensioneret." },
      { author: "Karsten Lund", date: "23. nov 2025", text: "Kommunen bør fremlægge en samlet infrastrukturplan inden byggestart." },
      { author: "Ruth Borg", date: "24. nov 2025", text: "Vi har samlet 500 underskrifter mod projektet uden infrastrukturforbedringer." },
      { author: "Mark Jensen", date: "25. nov 2025", text: "Bredgade kan ikke klare mere trafik. Det er allerede kaotisk." },
      { author: "Stine Brink", date: "26. nov 2025", text: "Forstår ikke hvorfor man vil bygge uden at løse de eksisterende problemer først." }
    ]
  },
  {
    id: 5,
    title: "Børneinstitutioner og skoler",
    description: "Med flere familieboliger i området vil behovet for børneinstitutioner og skolepladser stige. Vi har allerede ventelister på de lokale institutioner, og situationen kan kun forværres.",
    fullDescription: "Med flere familieboliger i området vil behovet for børneinstitutioner og skolepladser stige. Vi har allerede ventelister på de lokale institutioner, og situationen kan kun forværres.\n\nKommunen bør fremlægge en plan for, hvordan de øgede kapacitetsbehov imødekommes, inden byggeriet påbegyndes.\n\nMalling Skole er allerede tæt på kapacitetsgrænsen.",
    author: "Camilla Thomsen",
    date: "11. november 2025",
    comments: 15,
    likes: 42,
    category: "andet",
    commentsList: [
      { author: "Anders Berg", date: "11. nov 2025", text: "Ventelisterne er allerede alt for lange." },
      { author: "Sofie Gram", date: "12. nov 2025", text: "Der bør kræves en daginstitution som del af lokalplanen." },
      { author: "Peter Hansen", date: "13. nov 2025", text: "Malling Skole er allerede presset. Flere elever er ikke realistisk." },
      { author: "Anne Larsen", date: "14. nov 2025", text: "Vores barn stod på venteliste i 8 måneder til vuggestue." },
      { author: "Jens Olsen", date: "15. nov 2025", text: "Kommunen lovede nye institutionspladser i 2023. Intet er sket." },
      { author: "Lisa Møller", date: "16. nov 2025", text: "SFO-kapaciteten er også et problem. Mange børn har ikke plads." },
      { author: "Karl Sørensen", date: "17. nov 2025", text: "Bygherren bør forpligtes til at bidrage til institutionsudvidelse." },
      { author: "Rikke Holm", date: "18. nov 2025", text: "Det handler om børnenes trivsel. Man kan ikke bare proppe flere ind." },
      { author: "Søren Dahl", date: "19. nov 2025", text: "En ny børnehave bør være en betingelse for lokalplanens vedtagelse." },
      { author: "Camilla Frost", date: "20. nov 2025", text: "Vi valgte Malling pga. den gode skole. Den må ikke forringes." },
      { author: "Henrik Berg", date: "21. nov 2025", text: "Klassekvotienten er allerede for høj. 28 elever per klasse er for mange." },
      { author: "Tine Holm", date: "22. nov 2025", text: "Privatskolerne i området har også lange ventelister." },
      { author: "Ole Mortensen", date: "23. nov 2025", text: "Transport til skoler i nabobyer er ikke en løsning for små børn." },
      { author: "Ida Kvist", date: "24. nov 2025", text: "Malling Fritidscenter har heller ikke kapacitet til flere brugere." },
      { author: "Martin Rye", date: "25. nov 2025", text: "En helhedsplan for børn og unge mangler fuldstændig i forslaget." }
    ]
  },
  {
    id: 6,
    title: "Byggehøjder skal begrænses",
    description: "Det er afgørende, at byggehøjderne i den nye lokalplan holdes på et niveau, der harmonerer med det eksisterende byggeri i området. Højhusbyggeri vil ødelægge områdets karakter.",
    fullDescription: "Det er afgørende, at byggehøjderne i den nye lokalplan holdes på et niveau, der harmonerer med det eksisterende byggeri i området. Højhusbyggeri vil ødelægge områdets karakter.\n\nVi foreslår en maksimal byggehøjde på 2 etager, som er i tråd med den nuværende bebyggelse.\n\nDesuden bør der stilles krav til materialevalg, så det nye byggeri falder naturligt ind i omgivelserne.",
    author: "Lars Winding",
    date: "10. november 2025",
    comments: 4,
    likes: 29,
    category: "bolig",
    commentsList: [
      { author: "Hanne Juhl", date: "10. nov 2025", text: "Maks 2 etager bør være et ufravigeligt krav." },
      { author: "Flemming Toft", date: "11. nov 2025", text: "Tre etager ville skæmme hele landsbymiljøet." },
      { author: "Dorte Kruse", date: "12. nov 2025", text: "Materialevalg er også vigtigt. Ikke mere hvidt eternit." },
      { author: "Christian Leth", date: "13. nov 2025", text: "Enig i at det skal passe ind. Men lad os ikke være for konservative." }
    ]
  },
  {
    id: 7,
    title: "Bæredygtigt byggeri som standard",
    description: "Aarhus Kommune har en klimahandlingsplan, og det bør afspejles i denne lokalplan. Alle nye boliger bør som minimum opfylde DGNB Gold-certificering og have solceller installeret.",
    fullDescription: "Aarhus Kommune har en klimahandlingsplan, og det bør afspejles i denne lokalplan. Alle nye boliger bør som minimum opfylde DGNB Gold-certificering og have solceller installeret.\n\nDer bør desuden stilles krav om regnvandshåndtering på egen grund, grønne tage og ladestandere til elbiler.\n\nDet er en oplagt mulighed for at vise, at Aarhus tager bæredygtighed alvorligt.",
    author: "Rasmus Bloch",
    date: "9. november 2025",
    comments: 7,
    likes: 55,
    category: "miljoe",
    commentsList: [
      { author: "Ida Kvist", date: "10. nov 2025", text: "Solceller bør være standard i 2025." },
      { author: "Martin Rye", date: "11. nov 2025", text: "DGNB Gold er et godt udgangspunkt." },
      { author: "Gitte Skou", date: "12. nov 2025", text: "Grønne tage kan også hjælpe med regnvandshåndtering." },
      { author: "Mikkel Skov", date: "13. nov 2025", text: "Ladestandere til elbiler bør medtænkes fra starten." },
      { author: "Sven Nielsen", date: "14. nov 2025", text: "Varmepumper frem for fjernvarme i nye boliger giver bedre CO2-regnskab." },
      { author: "Hanne Juhl", date: "15. nov 2025", text: "Passivhusstandard bør overvejes for at minimere energiforbrug." },
      { author: "Bo Vang", date: "16. nov 2025", text: "Genbrug af byggematerialer bør også indgå i kravene." }
    ]
  },
  {
    id: 8,
    title: "Offentlig transport skal forbedres",
    description: "Busforbindelserne til Malling er utilstrækkelige. Hvis der skal bygges flere boliger, bør der investeres i bedre offentlig transport, herunder hyppigere busafgange og eventuelt letbaneforbindelse.",
    fullDescription: "Busforbindelserne til Malling er utilstrækkelige. Hvis der skal bygges flere boliger, bør der investeres i bedre offentlig transport, herunder hyppigere busafgange og eventuelt letbaneforbindelse.\n\nDen nuværende busrute kører kun én gang i timen uden for myldretiden, hvilket gør det svært at undvære bil.\n\nEn forbedret offentlig transport ville gavne både de nye og eksisterende beboere.",
    author: "Niels Eriksen",
    date: "8. november 2025",
    comments: 3,
    likes: 38,
    category: "trafik",
    commentsList: [
      { author: "Tine Holm", date: "9. nov 2025", text: "Bussen er helt utilstrækkelig. Letbane ville løse mange problemer." },
      { author: "Rasmus Bloch", date: "10. nov 2025", text: "Letbanen bør forlænges til Malling. Det ville gøre en kæmpe forskel." },
      { author: "Susanne Krog", date: "11. nov 2025", text: "Buslinje 302 kører kun hver time. Det er ikke nok for pendlere." }
    ]
  },
  {
    id: 9,
    title: "Friarealer og legepladser",
    description: "Det er vigtigt, at der i lokalplanen afsættes tilstrækkeligt med friarealer og legepladser. Familier med børn har brug for grønne rum tæt på boligen.",
    fullDescription: "Det er vigtigt, at der i lokalplanen afsættes tilstrækkeligt med friarealer og legepladser. Familier med børn har brug for grønne rum tæt på boligen.\n\nVi foreslår mindst 30% af arealet reserveres til fælles friarealer med legepladser, bænke og beplantning.",
    author: "Susanne Krog",
    date: "7. november 2025",
    comments: 2,
    likes: 27,
    category: "bolig",
    commentsList: [
      { author: "Bo Vang", date: "8. nov 2025", text: "Gode friarealer er afgørende for et godt bomiljø." },
      { author: "Rikke Holm", date: "9. nov 2025", text: "30% friareal lyder fornuftigt. Det bør være et minimumskrav." }
    ]
  },
  {
    id: 10,
    title: "Støj fra anlægsarbejdet",
    description: "Vi er bekymrede for støjgenerne under selve anlægsperioden. Erfaringer fra lignende projekter viser, at byggeriet kan tage flere år og medføre betydelige gener for naboerne.",
    fullDescription: "Vi er bekymrede for støjgenerne under selve anlægsperioden. Erfaringer fra lignende projekter viser, at byggeriet kan tage flere år og medføre betydelige gener for naboerne.\n\nDer bør fastsættes klare regler for arbejdstider og støjniveauer, og der bør udpeges en kontaktperson for klager.",
    author: "Erik Bak",
    date: "6. november 2025",
    comments: 5,
    likes: 19,
    category: "andet",
    commentsList: [
      { author: "Gitte Skou", date: "7. nov 2025", text: "Anlægsarbejde bør begrænses til hverdage 7-18." },
      { author: "Vibeke Frost", date: "8. nov 2025", text: "Vi oplevede 2 års byggestøj fra det forrige projekt. Det var uudholdeligt." },
      { author: "Jørgen Dam", date: "9. nov 2025", text: "Tung trafik til og fra byggepladsen bør have faste ruter væk fra boligveje." },
      { author: "Lone Vestergaard", date: "10. nov 2025", text: "En kontaktperson for klager er et minimum." },
      { author: "Annette Holm", date: "11. nov 2025", text: "Støvgener er også et stort problem under anlægsarbejde." }
    ]
  },
  {
    id: 11,
    title: "Arkitektonisk kvalitet",
    description: "Vi opfordrer til, at der stilles krav om arkitektonisk kvalitet i den nye bebyggelse. Malling fortjener byggeri, der beriger bybilledet og ikke blot er billige typehuse.",
    fullDescription: "Vi opfordrer til, at der stilles krav om arkitektonisk kvalitet i den nye bebyggelse. Malling fortjener byggeri, der beriger bybilledet og ikke blot er billige typehuse.\n\nEn arkitektkonkurrence kunne sikre, at det bedste forslag vælges.",
    author: "Vibeke Frost",
    date: "5. november 2025",
    comments: 1,
    likes: 23,
    category: "bolig",
    commentsList: [
      { author: "Mikkel Skov", date: "6. nov 2025", text: "Arkitektkonkurrence er en glimrende idé." }
    ]
  },
  {
    id: 12,
    title: "Vandforsyning og grundvand",
    description: "Området ligger tæt på vigtige grundvandsressourcer. Det skal sikres, at det nye byggeri ikke forurener eller påvirker vandforsyningen negativt for de omkringliggende ejendomme.",
    fullDescription: "Området ligger tæt på vigtige grundvandsressourcer. Det skal sikres, at det nye byggeri ikke forurener eller påvirker vandforsyningen negativt for de omkringliggende ejendomme.\n\nEn hydrogeologisk undersøgelse bør gennemføres inden anlægsstart.",
    author: "Jørgen Dam",
    date: "4. november 2025",
    comments: 3,
    likes: 31,
    category: "miljoe",
    commentsList: [
      { author: "Ruth Borg", date: "5. nov 2025", text: "Grundvandet er vores vigtigste ressource. Det må ikke kompromitteres." },
      { author: "Karsten Lund", date: "6. nov 2025", text: "En hydrogeologisk undersøgelse er absolut nødvendig." },
      { author: "Sven Nielsen", date: "7. nov 2025", text: "Pesticider fra byggepladsen kan sive ned til grundvandet." }
    ]
  },
  {
    id: 13,
    title: "Parkeringspladser er utilstrækkelige",
    description: "Den foreslåede parkeringsnorm ser ud til at være for lav. Med moderne familier, der ofte har to biler, vil der hurtigt opstå parkeringsproblemer i området.",
    fullDescription: "Den foreslåede parkeringsnorm ser ud til at være for lav. Med moderne familier, der ofte har to biler, vil der hurtigt opstå parkeringsproblemer i området.\n\nVi foreslår minimum 1,5 parkeringsplads per bolig, samt gæsteparkering.",
    author: "Flemming Toft",
    date: "3. november 2025",
    comments: 11,
    likes: 15,
    category: "trafik",
    commentsList: [
      { author: "Dorte Kruse", date: "4. nov 2025", text: "Parkering er allerede et problem. Mere byggeri gør det værre." },
      { author: "Christian Leth", date: "5. nov 2025", text: "Der bør også tænkes i delebilsordninger." },
      { author: "Ulla Gram", date: "6. nov 2025", text: "Vores vej bruges allerede som parkeringsplads for pendlere." },
      { author: "Per Vestergaard", date: "7. nov 2025", text: "1,5 plads per bolig er minimum. Gerne 2." },
      { author: "Helle Storm", date: "8. nov 2025", text: "Parkeringskælder under bebyggelsen ville være den bedste løsning." },
      { author: "Knud Erik", date: "9. nov 2025", text: "Delebiler er fint i teorien, men folk har brug for deres egen bil her." },
      { author: "Søren Dahl", date: "10. nov 2025", text: "Cykelparkering er også vigtigt. Overdækket og sikker." },
      { author: "Camilla Frost", date: "11. nov 2025", text: "El-ladestandere ved parkeringspladserne bør være et krav." },
      { author: "Henrik Berg", date: "12. nov 2025", text: "Gæsteparkering glemmes altid. Det skaber konflikter mellem naboer." },
      { author: "Tine Holm", date: "13. nov 2025", text: "Parkering på vejen bør forbydes for at sikre fremkommelighed." },
      { author: "Ole Mortensen", date: "14. nov 2025", text: "Parkeringsnormen i Aarhus Kommune er generelt for lav for forstadsområder." }
    ]
  },
  {
    id: 14,
    title: "Kulturhistoriske værdier",
    description: "Området rummer kulturhistoriske værdier, der bør beskyttes. De gamle markskel og stendiger er vigtige spor af landsbyens historie og bør indarbejdes i den nye bebyggelsesplan.",
    fullDescription: "Området rummer kulturhistoriske værdier, der bør beskyttes. De gamle markskel og stendiger er vigtige spor af landsbyens historie og bør indarbejdes i den nye bebyggelsesplan.\n\nMuseum Østjylland bør inddrages i vurderingen af områdets kulturhistoriske værdier.",
    author: "Lone Vestergaard",
    date: "2. november 2025",
    comments: 2,
    likes: 18,
    category: "andet",
    commentsList: [
      { author: "Knud Erik", date: "3. nov 2025", text: "Gode pointer om stendigerne. De er fredede." },
      { author: "Ruth Borg", date: "4. nov 2025", text: "Museum Østjylland bør absolut inddrages tidligt i processen." }
    ]
  },
  {
    id: 15,
    title: "Almene boliger bør inkluderes",
    description: "Vi opfordrer til, at en del af de nye boliger opføres som almene boliger, så der sikres blandede beboersammensætninger og boliger, som alle indkomstgrupper har råd til.",
    fullDescription: "Vi opfordrer til, at en del af de nye boliger opføres som almene boliger, så der sikres blandede beboersammensætninger og boliger, som alle indkomstgrupper har råd til.\n\nEn 25% andel almene boliger ville være i tråd med kommunens boligpolitiske målsætninger.",
    author: "Annette Holm",
    date: "1. november 2025",
    comments: 9,
    likes: 44,
    category: "bolig",
    commentsList: [
      { author: "Mark Jensen", date: "2. nov 2025", text: "Blandet boligmasse er nøglen til et godt kvarter." },
      { author: "Stine Brink", date: "3. nov 2025", text: "25% alment er et godt mål." },
      { author: "Lars Winding", date: "4. nov 2025", text: "Almene boliger sikrer diversitet og sammenhængskraft." },
      { author: "Hanne Juhl", date: "5. nov 2025", text: "Boligselskaberne bør inviteres til at byde ind allerede nu." },
      { author: "Flemming Toft", date: "6. nov 2025", text: "Ejerboliger blandet med almene boliger giver de bedste kvarterer." },
      { author: "Dorte Kruse", date: "7. nov 2025", text: "Unge par har ikke råd til ejerbolig i Malling. Alment er eneste mulighed." },
      { author: "Christian Leth", date: "8. nov 2025", text: "Seniorboliger bør også tænkes ind. Mange ældre vil gerne blive i Malling." },
      { author: "Ulla Gram", date: "9. nov 2025", text: "Kommunens boligpolitik kræver 25% alment. Det bør overholdes." },
      { author: "Per Vestergaard", date: "10. nov 2025", text: "Kvaliteten af de almene boliger skal være lige så høj som ejerboligerne." }
    ]
  },
  {
    id: 16,
    title: "Inddragelse af borgerne",
    description: "Vi savner en mere grundig borgerinddragelse i denne proces. Et enkelt borgermøde er ikke tilstrækkeligt, når det handler om at ændre et helt lokalområdes karakter.",
    fullDescription: "Vi savner en mere grundig borgerinddragelse i denne proces. Et enkelt borgermøde er ikke tilstrækkeligt, når det handler om at ændre et helt lokalområdes karakter.\n\nVi foreslår oprettelse af et borgerpanel, der løbende inddrages i planlægningen, samt flere offentlige høringer med workshops.",
    author: "Karsten Lund",
    date: "31. oktober 2025",
    comments: 14,
    likes: 63,
    category: "andet",
    commentsList: [
      { author: "Ulla Gram", date: "1. nov 2025", text: "Borgerinddragelse er fundamentalt for demokratiet." },
      { author: "Per Vestergaard", date: "2. nov 2025", text: "Et borgerpanel er en rigtig god idé." },
      { author: "Helle Storm", date: "3. nov 2025", text: "Vi bør have flere workshops og ikke bare informationsmøder." },
      { author: "Knud Erik", date: "4. nov 2025", text: "Det ene borgermøde var ren information. Ingen reel dialog." },
      { author: "Søren Dahl", date: "5. nov 2025", text: "Online høringssvar er godt, men der skal også være fysiske møder." },
      { author: "Camilla Frost", date: "6. nov 2025", text: "Mange ældre borgere deltager ikke digitalt. De bliver overset." },
      { author: "Henrik Berg", date: "7. nov 2025", text: "Borgermødet var overbooket. Mange fik ikke plads." },
      { author: "Tine Holm", date: "8. nov 2025", text: "Der bør være minimum tre borgermøder fordelt over høringsperioden." },
      { author: "Ole Mortensen", date: "9. nov 2025", text: "Kommunen bør opsøge borgerne, ikke omvendt. Gå ud i lokalområdet." },
      { author: "Ida Kvist", date: "10. nov 2025", text: "Børn og unge bør også høres. De bor jo også i området." },
      { author: "Martin Rye", date: "11. nov 2025", text: "Et fast kvartalsvist borgerpanel ville give kontinuitet." },
      { author: "Gitte Skou", date: "12. nov 2025", text: "Referater fra borgermøderne bør offentliggøres hurtigt." },
      { author: "Mikkel Skov", date: "13. nov 2025", text: "Kommunen lyttede ikke ved forrige lokalplan. Forhåbentlig gør de det nu." },
      { author: "Sven Nielsen", date: "14. nov 2025", text: "Transparens i beslutningsprocessen er afgørende for tilliden." }
    ]
  }
];

/* ==========================================================================
   Mock Data Generator
   ========================================================================== */

function generateMockData(baseData, totalCount) {
  if (baseData.length >= totalCount) return baseData;

  const titles = [
    "Bekymring om støjniveauet", "Ønske om flere grønne arealer", "Bedre cykelinfrastruktur",
    "Bevar det åbne landskab", "Skolekapacitet skal udvides", "Højere krav til energieffektivitet",
    "Trafiksikkerhed for børn", "Regnvandshåndtering mangler", "Bevar de gamle træer",
    "Flere parkeringspladser nødvendige", "Almene boliger er vigtigt", "Støj fra byggepladsen",
    "Bedre busforbindelser", "Arkitektonisk kvalitet", "Grundvandsforurening",
    "Manglende fortove", "For høj bebyggelsesprocent", "Lys- og skyggeforhold",
    "Daginstitutionspladser", "Fællesskab og samlingssteder", "Klimatilpasning",
    "Kulturhistoriske hensyn", "Adgang til naturen", "Seniorvenlige boliger",
    "Affaldshåndtering", "Fjernvarmekapacitet", "Indsigelse mod byggehøjde",
    "Ønske om blandede boligtyper", "Værditab for naboer", "Lokal handel påvirkes",
    "Vindforhold mellem bygninger", "Mangel på fritidstilbud", "Vandløb skal beskyttes",
    "Flere familieboliger", "Tilgængelighed for handicappede", "Bæredygtige materialer",
    "Solcelleanlæg bør kræves", "Ladestandere til elbiler", "Støjvold som afskærmning",
    "Bedre belysning i området"
  ];

  const descriptions = [
    "Vi er bekymrede over de konsekvenser, det nye byggeri vil have for vores nærområde. Der bør tages flere hensyn til de eksisterende beboere.",
    "Det er positivt med udvikling, men det skal ske på en bæredygtig og gennemtænkt måde, der respekterer områdets karakter.",
    "Kommunen bør sikre, at infrastrukturen kan følge med den øgede belastning fra nye beboere i området.",
    "Vi efterlyser en mere ambitiøs plan for grønne arealer og biodiversitet i det nye boligområde.",
    "Trafiksikkerheden bør have højeste prioritet, især i forhold til skoleveje og stier for bløde trafikanter.",
    "Der mangler en helhedsplan, der tager højde for alle aspekter af den nye bebyggelse og dens påvirkning.",
    "Vi opfordrer til dialog med de berørte borgere, inden der træffes endelige beslutninger om lokalplanen.",
    "Byggeriet bør tilpasses det eksisterende miljø og ikke dominere landskabet med uforholdsmæssigt højt byggeri.",
    "Kommunen bør stille krav om bæredygtigt byggeri og vedvarende energi i alle nye boliger.",
    "Vi ser frem til nye naboer, men beder om at processen foregår med respekt for de nuværende beboeres livskvalitet."
  ];

  const authors = [
    "Maria Jensen", "Thomas Pedersen", "Birgit Rasmussen", "Henrik Christensen",
    "Camilla Thomsen", "Lars Winding", "Rasmus Bloch", "Niels Eriksen",
    "Susanne Krog", "Erik Bak", "Vibeke Frost", "Jørgen Dam",
    "Flemming Toft", "Lone Vestergaard", "Annette Holm", "Karsten Lund",
    "Mette Friis", "Ole Mortensen", "Pia Lund", "Karen Winther",
    "Peter Hansen", "Anne Larsen", "Jens Olsen", "Lisa Møller",
    "Karl Sørensen", "Rikke Holm", "Søren Dahl", "Bo Vang",
    "Dorte Kruse", "Christian Leth", "Ulla Gram", "Per Vestergaard",
    "Helle Storm", "Knud Erik", "Ruth Borg", "Mark Jensen",
    "Stine Brink", "Tine Holm", "Ida Kvist", "Martin Rye",
    "Gitte Skou", "Mikkel Skov", "Sven Nielsen", "Hanne Juhl",
    "Anders Berg", "Sofie Gram", "Camilla Frost", "Henrik Berg"
  ];

  const categories = ["trafik", "miljoe", "bolig", "andet"];

  const commentTexts = [
    "Helt enig i denne betragtning.", "Det bør undersøges nærmere af kommunen.",
    "Vi har lignende erfaringer i vores kvarter.", "Godt formuleret. Håber politikerne lytter.",
    "Der er brug for handling, ikke bare ord.", "Kan kun støtte dette synspunkt.",
    "Kommunen har lovet forbedringer i årevis uden resultat.", "En uvildig undersøgelse er nødvendig.",
    "Vi bør stå sammen som naboer i denne sag.", "Det handler om livskvalitet for os alle.",
    "Politikerne bør komme ud og se forholdene selv.", "En pragmatisk tilgang er vigtig her.",
    "Der er også positive aspekter ved forslaget.", "Vi skal finde en balance mellem udvikling og bevaring.",
    "Tak for at bringe dette op. Mange tænker det samme."
  ];

  const months = ["januar", "februar", "marts", "april", "maj", "juni",
    "juli", "august", "september", "oktober", "november", "december"];

  function seededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  const result = [...baseData];

  for (let i = baseData.length + 1; i <= totalCount; i++) {
    const r = (n) => seededRandom(i * 997 + n);
    const pick = (arr, n) => arr[Math.floor(r(n) * arr.length)];

    const titleBase = pick(titles, 1);
    const month = Math.floor(r(2) * 12);
    const day = 1 + Math.floor(r(3) * 28);
    const year = r(4) > 0.3 ? 2025 : 2024;
    const commentCount = Math.floor(r(5) * 30);
    const likeCount = Math.floor(r(6) * 80);

    const numComments = 1 + Math.floor(r(7) * 5);
    const commentsList = [];
    for (let c = 0; c < numComments; c++) {
      const cDay = 1 + Math.floor(seededRandom(i * 113 + c * 7) * 28);
      const cMonth = month < 11 ? month + 1 : 0;
      const shortMonth = months[cMonth].substring(0, 3);
      commentsList.push({
        author: pick(authors, 10 + c),
        date: `${cDay}. ${shortMonth} ${year}`,
        text: pick(commentTexts, 20 + c)
      });
    }

    result.push({
      id: i,
      title: `${titleBase} (#${i})`,
      description: pick(descriptions, 8),
      fullDescription: pick(descriptions, 8) + "\n\n" + pick(descriptions, 9),
      author: pick(authors, 11),
      date: `${day}. ${months[month]} ${year}`,
      comments: commentCount,
      likes: likeCount,
      category: pick(categories, 12),
      commentsList: commentsList
    });
  }

  return result;
}

horingssvarData.push(...generateMockData(horingssvarData, 525).slice(horingssvarData.length));

/* ==========================================================================
   State
   ========================================================================== */

let currentSort = "comments";
let currentCategory = "all";
let visibleCount = 16;
let currentModalIndex = -1;
let filteredData = [...horingssvarData];
const ITEMS_PER_PAGE = 16;
const COMMENTS_PER_PAGE = 5;
let commentsVisible = COMMENTS_PER_PAGE;

/* ==========================================================================
   Rendering
   ========================================================================== */

function sortData(data, sortBy) {
  const sorted = [...data];
  switch (sortBy) {
    case "likes":
      sorted.sort((a, b) => b.likes - a.likes);
      break;
    case "newest":
      sorted.sort((a, b) => b.id - a.id);
      break;
    case "oldest":
      sorted.sort((a, b) => a.id - b.id);
      break;
    case "comments":
      sorted.sort((a, b) => b.comments - a.comments);
      break;
  }
  return sorted;
}

function filterData(data, category) {
  if (category === "all") return data;
  return data.filter((item) => item.category === category);
}

function formatNumber(num) {
  return num.toLocaleString("da-DK");
}

function createCard(item, index) {
  const card = document.createElement("article");
  card.className = "horingssvar-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Åbn høringssvar: ${item.title}`);
  card.dataset.index = index;

  card.innerHTML = `
    <h3 class="horingssvar-card__title">${item.title}</h3>
    <p class="horingssvar-card__description">${item.description}</p>
    <div class="horingssvar-card__meta">
      <span class="horingssvar-card__meta-item">
        <i class="fa-regular fa-comment" aria-hidden="true"></i>
        ${formatNumber(item.comments)} kommentarer
      </span>
      <span class="horingssvar-card__meta-item">
        <i class="fa-regular fa-thumbs-up" aria-hidden="true"></i>
        ${formatNumber(item.likes)} synes om
      </span>
    </div>
  `;

  card.addEventListener("click", () => openModal(index));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(index);
    }
  });

  return card;
}

function renderGrid() {
  const grid = document.getElementById("horingssvar-grid");
  const countEl = document.getElementById("horingssvar-count");
  const paginationCount = document.getElementById("pagination-count");
  const showMoreBtn = document.getElementById("show-all-btn");

  filteredData = sortData(filterData(horingssvarData, currentCategory), currentSort);

  grid.innerHTML = "";
  const shown = Math.min(visibleCount, filteredData.length);
  const displayData = filteredData.slice(0, shown);

  displayData.forEach((item, index) => {
    grid.appendChild(createCard(item, index));
  });

  countEl.textContent = filteredData.length;
  paginationCount.textContent = `Viser 1 - ${shown} af ${filteredData.length}`;

  if (shown >= filteredData.length) {
    showMoreBtn.style.display = "none";
  } else {
    showMoreBtn.textContent = "Vis flere";
    showMoreBtn.style.display = "";
  }
}

/* ==========================================================================
   Modal
   ========================================================================== */

const overlay = document.getElementById("modal-overlay");
let previousFocus = null;

function openModal(index) {
  currentModalIndex = index;
  commentsVisible = COMMENTS_PER_PAGE;
  previousFocus = document.activeElement;
  updateModalContent();
  overlay.hidden = false;
  overlay.classList.add("modal-overlay--open");
  document.body.classList.add("modal-open");

  // Update URL hash
  window.history.replaceState(null, "", `#svar-${filteredData[index].id}`);

  // Focus the close button
  overlay.querySelector(".modal__close").focus();
}

function closeModal() {
  overlay.hidden = true;
  overlay.classList.remove("modal-overlay--open");
  document.body.classList.remove("modal-open");
  currentModalIndex = -1;
  window.history.replaceState(null, "", window.location.pathname);

  if (previousFocus) {
    previousFocus.focus();
  }
}

function updateModalContent() {
  const item = filteredData[currentModalIndex];
  if (!item) return;

  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-author").textContent = item.author;
  document.getElementById("modal-date").textContent = item.date;
  document.getElementById("modal-comments-count").textContent = `${formatNumber(item.comments)} kommentarer`;
  document.getElementById("modal-likes-count").textContent = `${formatNumber(item.likes)} synes om`;

  const descEl = document.getElementById("modal-description");
  descEl.innerHTML = item.fullDescription
    .split("\n\n")
    .map((p) => `<p>${p}</p>`)
    .join("");

  // Comments
  const commentsSection = document.getElementById("modal-comments");
  const commentsTitle = commentsSection.querySelector(".modal__comments-title");
  commentsSection.innerHTML = "";
  commentsSection.appendChild(commentsTitle);

  if (item.commentsList && item.commentsList.length > 0) {
    const visibleComments = item.commentsList.slice(0, commentsVisible);
    visibleComments.forEach((comment) => {
      const commentEl = document.createElement("div");
      commentEl.className = "modal__comment";
      commentEl.innerHTML = `
        <span class="modal__comment-author">${comment.author}</span>
        <span class="modal__comment-date">${comment.date}</span>
        <p class="modal__comment-text">${comment.text}</p>
      `;
      commentsSection.appendChild(commentEl);
    });

    const remaining = item.commentsList.length - commentsVisible;
    if (remaining > 0) {
      const showMoreBtn = document.createElement("button");
      showMoreBtn.className = "modal__comments-show-more";
      showMoreBtn.textContent = `Vis flere kommentarer (${remaining} mere)`;
      showMoreBtn.addEventListener("click", () => {
        commentsVisible += COMMENTS_PER_PAGE;
        updateModalContent();
      });
      commentsSection.appendChild(showMoreBtn);
    }
  }

  // Navigation
  const prevBtn = document.getElementById("modal-prev");
  const nextBtn = document.getElementById("modal-next");
  const counter = document.getElementById("modal-counter");

  prevBtn.disabled = currentModalIndex === 0;
  nextBtn.disabled = currentModalIndex === filteredData.length - 1;
  counter.textContent = `${currentModalIndex + 1} af ${filteredData.length}`;
}

function navigateModal(direction) {
  const newIndex = currentModalIndex + direction;
  if (newIndex < 0 || newIndex >= filteredData.length) return;
  currentModalIndex = newIndex;
  commentsVisible = COMMENTS_PER_PAGE;
  updateModalContent();
  window.history.replaceState(null, "", `#svar-${filteredData[currentModalIndex].id}`);
}

/* ==========================================================================
   Dropdowns
   ========================================================================== */

function initDropdowns() {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown__button");
    const menu = dropdown.querySelector(".dropdown__menu");
    const items = dropdown.querySelectorAll(".dropdown__item");
    const buttonText = dropdown.querySelector(".dropdown__button-text");

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      // Close other dropdowns
      document.querySelectorAll(".dropdown__menu--open").forEach((m) => {
        if (m !== menu) m.classList.remove("dropdown__menu--open");
      });
      document.querySelectorAll('.dropdown__button[aria-expanded="true"]').forEach((b) => {
        if (b !== button) b.setAttribute("aria-expanded", "false");
      });

      const isOpen = menu.classList.toggle("dropdown__menu--open");
      button.setAttribute("aria-expanded", isOpen);
    });

    items.forEach((item) => {
      item.addEventListener("click", () => {
        const value = item.dataset.value;
        buttonText.textContent = item.textContent;

        items.forEach((i) => {
          i.classList.remove("dropdown__item--active");
          i.setAttribute("aria-selected", "false");
        });
        item.classList.add("dropdown__item--active");
        item.setAttribute("aria-selected", "true");

        menu.classList.remove("dropdown__menu--open");
        button.setAttribute("aria-expanded", "false");

        if (dropdown.dataset.dropdown === "sort") {
          currentSort = value;
        } else if (dropdown.dataset.dropdown === "category") {
          currentCategory = value;
        }

        visibleCount = ITEMS_PER_PAGE;
        renderGrid();
      });
    });
  });
}

/* ==========================================================================
   Event Listeners
   ========================================================================== */

function init() {
  renderGrid();
  initDropdowns();

  // Show More
  document.getElementById("show-all-btn").addEventListener("click", () => {
    visibleCount += ITEMS_PER_PAGE;
    renderGrid();
  });

  // Modal close
  overlay.querySelector(".modal__close").addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // Modal navigation
  document.getElementById("modal-prev").addEventListener("click", () => navigateModal(-1));
  document.getElementById("modal-next").addEventListener("click", () => navigateModal(1));

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (currentModalIndex === -1) return;

    switch (e.key) {
      case "Escape":
        closeModal();
        break;
      case "ArrowLeft":
        navigateModal(-1);
        break;
      case "ArrowRight":
        navigateModal(1);
        break;
    }
  });

  // Focus trap in modal
  overlay.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;

    const focusable = overlay.querySelectorAll(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Close dropdowns on outside click
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown__menu--open").forEach((m) => {
      m.classList.remove("dropdown__menu--open");
    });
    document.querySelectorAll('.dropdown__button[aria-expanded="true"]').forEach((b) => {
      b.setAttribute("aria-expanded", "false");
    });
  });

  // Deep-link: open modal from URL hash
  const hash = window.location.hash;
  if (hash.startsWith("#svar-")) {
    const id = parseInt(hash.replace("#svar-", ""), 10);
    const index = filteredData.findIndex((item) => item.id === id);
    if (index !== -1) {
      openModal(index);
    }
  }
}

/* ==========================================================================
   Map
   ========================================================================== */

function initMap() {
  var map = L.map("map", { scrollWheelZoom: false }).setView([56.13, 10.19], 13);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
  }).addTo(map);

  // Mock hearing response locations around Malling/Synnedrupvej area
  var responseLocations = [
    { lat: 56.132, lng: 10.185, count: 12, label: "Synnedrupvej" },
    { lat: 56.128, lng: 10.192, count: 8, label: "Malling Byvej" },
    { lat: 56.135, lng: 10.178, count: 15, label: "Bredgade" },
    { lat: 56.130, lng: 10.200, count: 6, label: "Malling Skole" },
    { lat: 56.125, lng: 10.188, count: 10, label: "Syd for byen" },
    { lat: 56.138, lng: 10.195, count: 4, label: "Nord for byen" },
    { lat: 56.133, lng: 10.172, count: 18, label: "Industrivej" },
    { lat: 56.127, lng: 10.210, count: 3, label: "Ajstrup Strandvej" },
    { lat: 56.140, lng: 10.183, count: 7, label: "Obstrupvej" },
    { lat: 56.122, lng: 10.195, count: 5, label: "Beder" },
    { lat: 56.136, lng: 10.205, count: 2, label: "Øst" },
  ];

  var maxCount = Math.max.apply(null, responseLocations.map(function(l) { return l.count; }));

  responseLocations.forEach(function(loc) {
    var ratio = loc.count / maxCount;
    var radius = 20 + ratio * 60;
    var opacity = 0.25 + ratio * 0.4;

    L.circleMarker([loc.lat, loc.lng], {
      radius: radius,
      fillColor: "#3661d8",
      color: "#3661d8",
      weight: 1,
      fillOpacity: opacity,
      opacity: 0.6,
    })
      .addTo(map)
      .bindPopup(
        "<strong>" + loc.label + "</strong><br>" + loc.count + " høringssvar"
      );
  });
}

/* ==========================================================================
   Material Document Modal
   ========================================================================== */

function initMaterialModal() {
  const materialOverlay = document.getElementById("material-modal-overlay");
  const closeBtn = document.getElementById("material-modal-close");
  const trigger = document.getElementById("material-lokalplan");

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    materialOverlay.hidden = false;
    materialOverlay.classList.add("modal-overlay--open");
    document.body.classList.add("modal-open");
    closeBtn.focus();
  });

  function closeMaterialModal() {
    materialOverlay.hidden = true;
    materialOverlay.classList.remove("modal-overlay--open");
    document.body.classList.remove("modal-open");
  }

  closeBtn.addEventListener("click", closeMaterialModal);

  materialOverlay.addEventListener("click", (e) => {
    if (e.target === materialOverlay) closeMaterialModal();
  });
}

/* ==========================================================================
   Decision Modal
   ========================================================================== */

function initDecisionModal() {
  const decisionOverlay = document.getElementById("decision-modal-overlay");
  const openBtn = document.getElementById("open-decision-modal");
  const closeBtn = document.getElementById("decision-modal-close");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    decisionOverlay.hidden = false;
    decisionOverlay.classList.add("modal-overlay--open");
    document.body.classList.add("modal-open");
    closeBtn.focus();
  });

  function closeDecisionModal() {
    decisionOverlay.hidden = true;
    decisionOverlay.classList.remove("modal-overlay--open");
    document.body.classList.remove("modal-open");
  }

  closeBtn.addEventListener("click", closeDecisionModal);

  decisionOverlay.addEventListener("click", (e) => {
    if (e.target === decisionOverlay) closeDecisionModal();
  });
}

/* ==========================================================================
   Glossary Tooltips
   ========================================================================== */

function initGlossary() {
  document.querySelectorAll(".glossary-term__icon").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const term = btn.closest(".glossary-term");
      const wasOpen = term.classList.contains("glossary-term--open");

      // Close all open tooltips
      document.querySelectorAll(".glossary-term--open").forEach((t) => {
        t.classList.remove("glossary-term--open");
      });

      if (!wasOpen) {
        term.classList.add("glossary-term--open");
      }
    });
  });

  // Close tooltips on outside click
  document.addEventListener("click", () => {
    document.querySelectorAll(".glossary-term--open").forEach((t) => {
      t.classList.remove("glossary-term--open");
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  init();
  initMap();
  initMaterialModal();
  initDecisionModal();
  initGlossary();
});
