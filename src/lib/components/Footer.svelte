<script lang="ts">
  import { base } from '$app/paths';
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-tennis-green text-white">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Address -->
      <div>
        <h3 class="text-lg font-semibold tracking-wider uppercase mb-4 text-tennis-sand">TCF 1977 e.V.</h3>
        <p class="text-sm text-gray-300 mb-2">Tennisclub Froschhausen 1977 e.V.</p>
        <p class="text-sm text-gray-300 mb-2">Am Sportplatz 1</p>
        <p class="text-sm text-gray-300 mb-2">63500 Seligenstadt (Froschhausen)</p>
        <a href="mailto:info@tcf77.de" class="text-sm text-tennis-sand hover:text-white transition-colors">info@tcf77.de</a>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold tracking-wider uppercase mb-4 text-tennis-sand">Schnellzugriff</h3>
        <ul class="space-y-2">
          <li><a href="{base}/mitgliedschaft" class="text-sm text-gray-300 hover:text-white transition-colors">Mitglied werden</a></li>
          <li><a href="https://tcf77.courtbooking.de/login.php?standard=true" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-300 hover:text-white transition-colors">Platz buchen</a></li>
          <li><a href="{base}/infos" class="text-sm text-gray-300 hover:text-white transition-colors">HTV & Infos</a></li>
          <li><a href="{base}/jugend" class="text-sm text-gray-300 hover:text-white transition-colors">Jugendtraining</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h3 class="text-lg font-semibold tracking-wider uppercase mb-4 text-tennis-sand">Rechtliches</h3>
        <ul class="space-y-2">
          <li><a href="{base}/impressum" class="text-sm text-gray-300 hover:text-white transition-colors">Impressum</a></li>
          <li><a href="{base}/datenschutz" class="text-sm text-gray-300 hover:text-white transition-colors">Datenschutz</a></li>
          <li><a href="{base}/infos" class="text-sm text-gray-300 hover:text-white transition-colors">Satzung</a></li>
        </ul>
      </div>
    </div>
    
    <div class="mt-12 border-t border-tennis-light pt-8 md:flex md:items-center md:justify-between">
      <p class="text-base text-gray-400 md:order-1">
        &copy; {currentYear} Tennisclub Froschhausen 1977 e.V. Alle Rechte vorbehalten.
      </p>
    </div>
  </div>
</footer>

