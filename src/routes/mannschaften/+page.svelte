<script lang="ts">
  const teams = [
    { name: "Junioren U12", format: "(4er)" },
    { name: "Gemischt U15", format: "(4er)" },
    { name: "Damen 30", format: "(4er) MSG" },
    { name: "Damen 40", format: "(4er) MSG" },
    { name: "Damen 40 II", format: "(4er) MSG" },
    { name: "Damen 50", format: "(4er)" },
    { name: "Herren", format: "(6er)" },
    { name: "Herren 40", format: "(4er)" },
    { name: "Herren 50", format: "(4er)" },
    { name: "Herren 70", format: "(4er)" }
  ];
</script>

<svelte:head>
  <title>Mannschaften | TCF77</title>
</svelte:head>

<div class="bg-background py-16 sm:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Sport & Mannschaften</h1>
        <p class="text-xl text-gray-600">Entdecke unsere aktiven Teams im HTV-Ligabetrieb. Vom ambitionierten Leistungssport bis zum geselligen Breitensport.</p>
      </div>
      <div>
        <img src="/media/WinnerMenClubChampionchip.png" alt="Herren Clubmeister" class="rounded-3xl shadow-lg object-cover w-full h-[350px]" />
      </div>
    </div>

    <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <!-- Section Header -->
      <div class="bg-tennis-green px-8 py-6">
        <h2 class="text-2xl font-bold text-white">Unsere Teams im Überblick</h2>
      </div>
      
      <div class="p-8">
        <p class="text-gray-600 mb-8 text-lg">
          In der aktuellen Saison ist der TCF 1977 mit zahlreichen Mannschaften im Hessischen Tennis-Verband (HTV) gemeldet. Über die Links zu click-TT gelangst du direkt zu den aktuellen Tabellen, Spielplänen und Ergebnissen.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each teams as team}
            <!-- Team Card -->
            <div class="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-tennis-sand transition-colors">
              <div>
                <h3 class="text-xl font-bold text-gray-900">{team.name}</h3>
                <p class="text-gray-500">{team.format}</p>
              </div>
              <a href="https://htv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubTeams?club=25039" target="_blank" rel="noopener noreferrer" class="text-tennis-clay hover:text-tennis-green font-medium flex items-center">
                HTV-Tabelle
                <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          {/each}
        </div>

        <!-- Hinweis Disclaimer -->
        <div class="mt-10 p-5 bg-tennis-sand/20 rounded-2xl border border-tennis-sand text-gray-700 text-center text-sm">
          <p>
            <strong>Hinweis:</strong> Die hier aufgelisteten Mannschaften zeigen die generelle Bandbreite unseres Vereins. Es kann vorkommen, dass in einer bestimmten Saison nicht alle Mannschaften zustande kommen oder neue hinzukommen. Bitte prüfe für die tagesaktuelle Meldeliste immer die <a href="https://htv.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubTeams?club=25039" target="_blank" class="font-bold text-tennis-green hover:underline">HTV-Seite unseres Vereins</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
