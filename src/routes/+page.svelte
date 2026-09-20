<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>TCF77 - Tennisclub Froschhausen</title>
</svelte:head>

<section class="relative bg-tennis-green overflow-hidden">
  <div class="absolute inset-0">
    <img 
      src="{base}/media/DroneViewOnTenniscourt.jpg" 
      alt="Tennisplatz" 
      class="w-full h-full object-cover opacity-20"
    />
  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
    <div class="text-center md:text-left md:w-2/3">
      <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
        <span class="block">Willkommen beim</span>
        <span class="block text-tennis-sand">TCF 1977 e.V.</span>
      </h1>
      <p class="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl md:mx-0 mb-10">
        Wir sind dein familienfreundlicher Tennisverein in Froschhausen. Ob Anfänger, Hobbyspieler oder ambitionierter Turnierspieler – bei uns findest du die passende Gemeinschaft auf und neben dem Platz.
      </p>
      
      <div class="mt-5 max-w-md mx-auto flex flex-col sm:flex-row sm:justify-center md:justify-start md:mx-0 sm:flex-wrap gap-4">
        <div class="rounded-xl shadow w-full sm:w-auto">
          <a href="{base}/mitgliedschaft" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-tennis-clay hover:bg-opacity-90 md:py-4 md:text-lg transition-all">
            Mitglied werden
          </a>
        </div>
        <div class="rounded-xl shadow w-full sm:w-auto">
          <a href="https://tcf77.courtbooking.de/login.php?standard=true" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-tennis-green bg-tennis-sand hover:bg-white md:py-4 md:text-lg transition-all">
            Platz buchen
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-base font-semibold text-tennis-clay tracking-wide uppercase">Unser Verein</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Mehr als nur Tennis
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Card 1 -->
      <div class="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
        <div class="w-16 h-16 mx-auto bg-tennis-green text-tennis-sand rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Familiäre Atmosphäre</h3>
        <p class="text-gray-600">Bei uns steht das Miteinander im Vordergrund. Wir freuen uns über jedes neue Gesicht und integrieren neue Mitglieder schnell in unser Vereinsleben.</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
        <div class="w-16 h-16 mx-auto bg-tennis-clay text-white rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Sportlicher Ehrgeiz</h3>
        <p class="text-gray-600">Wir bieten mit zahlreichen Mannschaften im HTV die perfekte Plattform für wettkampforientiertes Tennis in allen Altersklassen.</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
        <div class="w-16 h-16 mx-auto bg-tennis-green text-tennis-sand rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Jugendförderung</h3>
        <p class="text-gray-600">Die Jugend ist unsere Zukunft. Mit gezieltem Training und Spaß am Sport führen wir Kinder und Jugendliche spielerisch an den Tennissport heran.</p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-gradient-to-r from-tennis-green to-tennis-light rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between">
      <div class="text-center md:text-left mb-8 md:mb-0 md:mr-8">
        <h2 class="text-3xl font-extrabold text-white mb-4">News & Aktuelle Events</h2>
        <p class="text-lg text-tennis-sand max-w-2xl">
          Verpasse keine Neuigkeiten! Wir posten alle aktuellen Events, Turnierergebnisse und News aus dem Vereinsleben direkt auf Instagram. Folge uns und bleibe immer auf dem Laufenden.
        </p>
      </div>
      <div class="flex-shrink-0">
        <a href="https://www.instagram.com/tcfroschhausen77/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-tennis-green bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all shadow-md">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
          </svg>
          Auf Instagram folgen
        </a>
      </div>
    </div>
  </div>
</section>

