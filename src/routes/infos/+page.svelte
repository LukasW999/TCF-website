<script lang="ts">
  import { base } from '$app/paths';
  const tcfLinks = [
    { title: "Courtbooking", url: "https://tcf77.courtbooking.de/login.php?standard=true", target: "_blank", desc: "Unser Online-Platzbuchungssystem" },
    { title: "Buchungs-Anleitung: App", url: `${base}/downloads/ManualBookingSmartphoneApp.pdf`, target: "_blank", desc: "Anleitung zur Nutzung der Smartphone-App" },
    { title: "Buchungs-Anleitung: Web", url: `${base}/downloads/ManualBookingWebbrowser.pdf`, target: "_blank", desc: "Anleitung zur Nutzung im Webbrowser" },
    { title: "TCF FAQ", url: `${base}/downloads/FaqTcFroschhausen.pdf`, target: "_blank", desc: "Häufig gestellte Fragen" },
    { title: "Regeln zur Platzpflege", url: `${base}/downloads/RulesOnForCleanTennisCourts.pdf`, target: "_blank", desc: "Wichtige Hinweise zur Instandhaltung der Plätze" },
    { title: "Spiel- und Platzordnung", url: `${base}/downloads/TCFPlayRules.pdf`, target: "_blank", desc: "Unsere verbindlichen Verhaltensregeln auf der Anlage" },
    { title: "Jugendtennis-Fibel", url: `${base}/downloads/TCFChildrenTennis.pdf`, target: "_blank", desc: "Alles Wichtige rund um das Kindertennis" },
    { title: "Vereinssatzung", url: `${base}/downloads/TCFClubRules.pdf`, target: "_blank", desc: "Die rechtliche Grundlage unseres Vereins" },
    { title: "Aufnahmeantrag", url: `${base}/downloads/TCF_Aufnahmeantrag_2025.pdf`, target: "_blank", desc: "Antrag auf Mitgliedschaft" },
  ];

  const htvLinks = [
    { title: "Hessischer Tennis Verband News", url: "https://www.tennis.de/htv.html", desc: "Aktuelle Meldungen des HTV" },
    { title: "TCF Spielbegegnungen", url: "https://htv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubMeetings?club=25039", desc: "Termine und Ergebnisse unserer Mannschaften" },
    { title: "TCF Mannschaften im HTV", url: "https://htv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubTeams?club=25039", desc: "Übersicht aller gemeldeten Teams" },
    { title: "TCF Vereinsinfo im HTV", url: "https://htv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubInfoDisplay?club=25039", desc: "Unser Vereinsprofil beim Verband" },
    { title: "HTV Team-Tennis (Medenrunde)", url: "https://www.tennis.de/htv/wettbewerbe/team-tennis/sommer-medenrunde.html", desc: "Rahmenterminpläne und Infos zur Saison" },
    { title: "HTV Regeln und Ordnungen", url: "https://www.tennis.de/htv/wettbewerbe/regeln-ordnungen.html", desc: "Offizielles Regelwerk des Verbandes" },
    { title: "HTV Turnierkalender", url: "https://htv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/tournamentCalendar?federation=HTV", desc: "LK- und Ranglistenturniere in Hessen" },
    { title: "Tennis.de", url: "https://www.tennis.de/", desc: "Das Portal des Deutschen Tennis Bundes" },
  ];
</script>

<svelte:head>
  <title>Infos, Regeln & HTV | TCF77</title>
</svelte:head>

<div class="bg-background py-16 sm:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Infos, Regeln & Verband</h1>
      <p class="text-xl text-gray-600">Alle wichtigen Dokumente, Regeln und Links zu unserem Verein und dem Hessischen Tennis-Verband (HTV) übersichtlich auf einen Blick.</p>
    </div>

    <div class="space-y-16">
      <!-- Section 1: TCF Intern -->
      <section>
        <div class="flex items-center mb-8 border-b border-gray-200 pb-4">
          <div class="w-10 h-10 rounded-full bg-tennis-green text-white flex items-center justify-center mr-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">TCF Intern</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each tcfLinks as link}
            <a href={link.url} target={link.target || undefined} rel={link.target === '_blank' ? 'noopener noreferrer' : undefined} class="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-tennis-green hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-tennis-green mb-2 flex items-center">
                {link.title}
                <svg class="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </h3>
              <p class="text-sm text-gray-500">{link.desc}</p>
            </a>
          {/each}
        </div>
      </section>

      <!-- Section 2: HTV Infos -->
      <section>
        <div class="flex items-center mb-8 border-b border-gray-200 pb-4">
          <div class="w-10 h-10 rounded-full bg-tennis-clay text-white flex items-center justify-center mr-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">HTV Infos</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each htvLinks as link}
            <a href={link.url} target="_blank" rel="noopener noreferrer" class="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-tennis-clay hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-tennis-clay mb-2 flex items-center">
                {link.title}
                <svg class="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </h3>
              <p class="text-sm text-gray-500">{link.desc}</p>
            </a>
          {/each}
        </div>
      </section>
    </div>
  </div>
</div>

