<svelte:head>
  <title>Mitgliedschaft | TCF77</title>
</svelte:head>

<div class="bg-background py-16 sm:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Werde Teil des TCF</h1>
      <p class="text-xl text-gray-600">Genieße Tennis in einer tollen Gemeinschaft. Finde hier alle Informationen zu unseren Beiträgen und dem Aufnahmeantrag.</p>
    </div>

    <!-- CTA Form Download -->
    <div class="max-w-4xl mx-auto bg-tennis-sand rounded-3xl p-8 sm:p-12 text-center shadow-md mb-20">
      <h3 class="text-2xl font-extrabold text-tennis-green mb-4">Bereit loszulegen?</h3>
      <p class="text-gray-800 mb-8 max-w-2xl mx-auto">
        Lade dir einfach unseren Aufnahmeantrag herunter, fülle ihn aus und schicke ihn uns per E-Mail oder wirf ihn am Clubhaus ein. Wir freuen uns auf dich!
      </p>
      <a href="/downloads/TCF_Aufnahmeantrag_2025.pdf" target="_blank" class="inline-flex flex-col sm:flex-row items-center px-4 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-xl shadow-sm text-white bg-tennis-clay hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tennis-clay transition-all gap-2 text-center">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        <span>Aufnahmeantrag PDF Download</span>
      </a>
    </div>

    <!-- Benefits Section -->
    <div class="mb-20">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">Deine Vorteile bei uns</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each ['Freie Platznutzung während der gesamten Sommersaison', 'Teilnahme an internen Turnieren & Events', 'Möglichkeit zum Mannschaftsspiel', 'Gemütliches Clubhaus mit toller Terrasse'] as benefit}
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-tennis-sand text-tennis-green rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <p class="text-gray-800 font-medium">{benefit}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Pricing Table -->
    <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
      <div class="px-6 py-8 sm:p-10 sm:pb-6 bg-tennis-green text-white text-center">
        <h3 class="text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl">Jahresbeiträge</h3>
        <p class="mt-4 text-lg text-gray-200">Stichtag für die Jahresbeiträge gilt jeweils der 01. Januar.</p>
      </div>
      
      <div class="px-6 pt-6 pb-8 sm:p-10 bg-white">
        <ul class="space-y-4">
          <li class="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 gap-2 sm:gap-0">
            <div>
              <p class="font-bold text-gray-900 text-lg">1. Erwachsene</p>
            </div>
            <div class="text-xl font-extrabold text-tennis-green sm:text-right">92 €</div>
          </li>
          <li class="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 gap-2 sm:gap-0">
            <div>
              <p class="font-bold text-gray-900 text-lg">2. Schüler, Auszubildende und Studenten</p>
              <p class="text-sm text-gray-500">ab vollendetem 18. bis max. 27. Lebensjahr</p>
            </div>
            <div class="text-xl font-extrabold text-tennis-green sm:text-right">46 €</div>
          </li>
          <li class="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 gap-2 sm:gap-0">
            <div>
              <p class="font-bold text-gray-900 text-lg">3. Kinder, Jugendliche und Passive</p>
            </div>
            <div class="text-xl font-extrabold text-tennis-green sm:text-right">46 €</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Arbeitsstunden -->
    <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 mb-12 p-8 sm:p-10">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Arbeitsstunden</h3>
      <p class="text-gray-600 mb-6">
        Jedes aktive Mitglied vom vollendeten 16. bis zum vollendeten 70. Lebensjahr (Stichtag ist jeweils der 01. Januar) ist verpflichtet Arbeitsstunden zur Erhaltung der Platzanlage zu leisten. Wer nicht arbeiten kann oder will, kann diese finanziell abgelten.
      </p>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start">
          <span class="text-tennis-clay mr-2 font-bold">•</span>
          <strong>Erwachsene:</strong> 10 Stunden pro Jahr (Abgeltung 10 € je nicht geleisteter Stunde)
        </li>
        <li class="flex items-start">
          <span class="text-tennis-clay mr-2 font-bold">•</span>
          <strong>Schüler/Studenten (18-27):</strong> 10 Stunden pro Jahr (Abgeltung 5 € je nicht geleisteter Stunde)
        </li>
        <li class="flex items-start">
          <span class="text-tennis-clay mr-2 font-bold">•</span>
          <strong>Jugendliche (ab 16):</strong> 5 Stunden pro Jahr (Abgeltung 5 € je nicht geleisteter Stunde)
        </li>
      </ul>
    </div>

    <!-- Hüttendienst -->
    <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Hütten-/Clubhausdienst</h3>
      <p class="text-gray-600 mb-4">
        Von allen aktiven erwachsenen Mitgliedern bis zum vollendeten 70. Lebensjahr (Stichtag ist jeweils der 01. Januar) ist ein Clubhausdienst zu erbringen. Er umfasst die Bewirtschaftung des Clubhauses in einem Team von Mitgliedern (meist 7 Personen) während einer Woche nach den Vorgaben des Vorstands.
      </p>
      <p class="text-gray-600 mb-4">
        Ist das Mitglied am geplanten Dienst verhindert, hat es eigenständig eine/n Tauschpartner/-in zu suchen. Bei Nichtleistung des Clubhausdienstes wird ein Betrag von 50 Euro erhoben.
      </p>
      <p class="text-sm text-gray-500 italic">
        In Ausnahmefällen kann der Vorstand Abweichungen zu den Arbeitsstunden und zum Clubhausdienst beschließen.
      </p>
    </div>

  </div>
</div>
