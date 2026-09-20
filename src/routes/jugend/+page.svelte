<svelte:head>
  <title>Jugend | TCF77</title>
</svelte:head>

<div class="bg-background py-16 sm:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Jugend & Training</h1>
      <p class="text-xl text-gray-600">Spielerisch Tennis lernen – mit Freude, Teamgeist und professionellem Training für alle Altersklassen.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <img 
          src="/media/YouthWinners.jpeg" 
          alt="Jugend Sieger" 
          class="rounded-3xl shadow-lg object-cover w-full h-[400px]"
        />
      </div>
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Unser Jugendkonzept</h2>
        <div class="space-y-6 text-lg text-gray-600">
          <p>
            Beim TCF 1977 legen wir großen Wert auf eine fundierte und spaßorientierte Jugendarbeit. Unser Ziel ist es, Kindern und Jugendlichen nicht nur die Technik des Tennissports zu vermitteln, sondern auch Werte wie Fairness, Teamgeist und Durchhaltevermögen zu fördern.
          </p>
          <p>
            Unser ausgebildetes Trainerteam sorgt für ein abwechslungsreiches Training, das auf die jeweiligen Alters- und Leistungsklassen optimal abgestimmt ist. Vom spielerischen Einstieg bei den Jüngsten bis hin zum leistungsorientierten Training für unsere Jugendmannschaften bieten wir für jeden das richtige Konzept.
          </p>
        </div>
      </div>
    </div>

    <!-- Info Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 class="text-xl font-bold text-tennis-green mb-4 border-b pb-2">Trainingszeiten</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            Sommersaison: Mai bis September auf unserer Anlage
          </li>
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            Wintersaison: Oktober bis April in der Halle
          </li>
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            Feste Gruppen nach Alter und Spielstärke
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 class="text-xl font-bold text-tennis-green mb-4 border-b pb-2">Altersklassen</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            U8 / U10: Spielerischer Einstieg, Motorik (Kleinfeld/Midcourt)
          </li>
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            U12 / U15: Technikfestigung und Taktik (Großfeld)
          </li>
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            U18: Wettkampforientiertes Training
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 class="text-xl font-bold text-tennis-green mb-4 border-b pb-2">Aktivitäten</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            Teilnahme an der HTV-Team-Runde (Medenspiele)
          </li>
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            Jährliches Jugendcamp in den Sommerferien
          </li>
          <li class="flex items-start">
            <span class="text-tennis-clay mr-2 font-bold">•</span>
            Jugend-Clubmeisterschaften
          </li>
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Interesse an einem Schnuppertraining?</h3>
      <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Komm einfach vorbei und probiere es aus! Schläger können wir für den Anfang gerne stellen. Melde dich bei unserem Jugendwart für weitere Infos.
      </p>
      <a href="mailto:jugend@tcf77.de" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-tennis-green hover:bg-opacity-90 md:py-4 md:text-lg transition-all">
        Jugendwart kontaktieren
      </a>
    </div>

  </div>
</div>
