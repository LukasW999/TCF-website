<script lang="ts">
  import { base } from '$app/paths';
  const boardMembers = [
    { name: "Claudio Sanzone", role: "Vorsitzender", email: "claudio.sanzone@tcf77.de", image: `${base}/media/firstPresident.png` },
    { name: "Jadranka Herburg", role: "Vorsitzende", email: "Jadi.Herburg@tcf77.de", image: `${base}/media/secondPresident.jpg` },
    { name: "Claudia Süßmann", role: "Vorsitzende", email: "claudia.suessmann@tcf77.de", image: `${base}/media/ThirdPresident.jpg` },
    { name: "Hilde Rothenberger", role: "Vorstand Finanzen", email: "schatzmeister@tcf77.de", image: `${base}/media/ChiefFinancialOfficer.jpg` },
    { name: "Michael Stier", role: "Vorstand Sport", email: "vorstand.sport@tcf77.de", image: `${base}/media/ChiefSportOfficer.jpg` },
    { name: "Ira Wenzel", role: "Vorstand Jugend", email: "vorstand.jugend@tcf77.de", image: `${base}/media/ChiefYouthOfficer.jpg` },
    { name: "Jörg Guse", role: "Vorstand Vereinsanlage", email: "vorstand.vereinsanlage@tcf77.de", image: `${base}/media/BoardMember.jpg` },
    { name: "Britta Kracun", role: "Schriftführerin", email: "schriftfuehrer@tcf77.de", image: `${base}/media/secretary.jpg` },
    { name: "Nadine Deller", role: "Beisitzerin", email: "nadine.deller@tcf77.de", image: `${base}/media/placeholderForBoardMembers.jpg` },
    { name: "Christian Krawutschke", role: "Beisitzer", email: "christian.krawutschke@tcf77.de", image: `${base}/media/placeholderForBoardMembers.jpg` }
  ];

  const trainers = [
    { name: "Vorname Nachname", role: "Trainer Jugend & Erwachsene", image: `${base}/media/placeholderForBoardMembers.jpg` },
    { name: "Vorname Nachname", role: "Trainer Jugend & Erwachsene", image: `${base}/media/placeholderForBoardMembers.jpg` },
    { name: "Vorname Nachname", role: "Trainer Jugend & Erwachsene", image: `${base}/media/placeholderForBoardMembers.jpg` }
  ];
</script>

<svelte:head>
  <title>Verein & Vorstand | TCF77</title>
</svelte:head>

<div class="bg-background py-16 sm:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Unser Verein</h1>
      <p class="text-xl text-gray-600">Lerne die Menschen hinter dem Tennisclub Froschhausen 1977 e.V. kennen.</p>
    </div>

    <!-- Drone Image -->
    <div class="mb-20 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
      <img src="{base}/media/TCNFromHumansDroneShot.png" alt="Mitglieder bilden Vereinsnamen aus der Vogelperspektive" class="w-full h-auto object-cover max-h-[600px] object-center" />
    </div>

    <!-- About Section -->
    <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Tradition & Moderne</h2>
      <p class="text-lg text-gray-600 mb-6">
        Seit der Gründung im Jahr 1977 steht unser Verein für die Liebe zum Tennissport und ein starkes Gemeinschaftsgefühl in Froschhausen. Auf unserer idyllisch gelegenen Anlage mit gepflegten Sandplätzen finden Sportler jeden Alters und Spielniveaus beste Bedingungen für ihren Lieblingssport.
      </p>
      <p class="text-lg text-gray-600 mb-6">
        Neben dem sportlichen Ehrgeiz bei Medenspielen und Clubmeisterschaften kommt bei uns auch die Geselligkeit nicht zu kurz. Unser Clubhaus mit großer Sonnenterrasse lädt zum Verweilen, Fachsimpeln und Feiern ein. Wir sind stolz auf unsere Vereinsgeschichte und freuen uns darauf, diese gemeinsam mit langjährigen und neuen Mitgliedern weiterzuschreiben.
      </p>

      <div class="bg-tennis-sand/30 rounded-2xl p-6 mt-8 border border-tennis-sand">
        <h3 class="text-xl font-bold text-gray-900 mb-3">Der TCF-Hüttendienst: Freitagabends gemeinsam genießen</h3>
        <p class="text-lg text-gray-600">
          Ein besonderes Highlight unseres Vereinslebens ist der traditionelle Hüttendienst. Jedes aktive Mitglied engagiert sich einmal im Jahr gemeinsam mit etwa 7 anderen Mitgliedern für eine Woche rund um das Clubhaus. Dank dieses tollen Engagements gibt es bei uns <strong>jeden Freitagabend warmes Essen und kühle Getränke zu einem kleinen Preis</strong>! Das ist die perfekte Gelegenheit, um entspannt ins Wochenende zu starten und sich mit anderen Mitgliedern in gemütlicher Runde auszutauschen.
        </p>
      </div>
    </div>

    <!-- Board Section -->
    <div>
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Der Vorstand</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {#each boardMembers as member}
          <!-- Board Member -->
          <div class="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 flex flex-col items-center">
            <div class="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-gray-50 flex-shrink-0">
              <img src={member.image} alt={member.name} class="w-full h-full object-cover object-top" />
            </div>
            <h3 class="text-xl font-bold text-gray-900">{member.name}</h3>
            <p class="text-tennis-clay font-medium mb-3">{member.role}</p>
            <a href="mailto:{member.email}" class="text-sm text-gray-500 hover:text-tennis-green mt-auto inline-flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              {member.email}
            </a>
          </div>
        {/each}
        
      </div>
    </div>

    <!-- Trainer Section -->
    <div class="mt-24">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Unser Trainerteam</h2>
      <p class="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        Unsere qualifizierten Trainer bieten professionelles Training für alle Altersklassen an – von den ersten spielerischen Schritten in der Jugend bis zum leistungsorientierten Training für Erwachsene.
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each trainers as trainer}
          <div class="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 flex flex-col items-center">
            <div class="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-gray-50 flex-shrink-0">
              <img src={trainer.image} alt={trainer.name} class="w-full h-full object-cover object-top" />
            </div>
            <h3 class="text-xl font-bold text-gray-900">{trainer.name}</h3>
            <p class="text-tennis-clay font-medium">{trainer.role}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>


