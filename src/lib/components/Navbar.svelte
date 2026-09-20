<script lang="ts">
  import { base } from '$app/paths';
  import { Menu, X } from 'lucide-svelte';
  import { page } from '$app/stores';

  let isOpen = false;

  const links = [
    { href: base || '/', label: 'Startseite' },
    { href: `${base}/mitgliedschaft`, label: 'Mitgliedschaft' },
    { href: `${base}/jugend`, label: 'Jugend' },
    { href: `${base}/mannschaften`, label: 'Mannschaften' },
    { href: `${base}/verein`, label: 'Verein' },
    { href: `${base}/infos`, label: 'Infos & HTV' }
  ];

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20">
      <div class="flex items-center">
        <a href="{base || '/'}" class="flex-shrink-0 flex items-center">
          <img src="{base}/media/tcflogosmall.png" alt="TCF Logo" class="w-12 h-12 object-contain mr-3" />
          <span class="font-bold text-xl text-tennis-green hidden sm:block">Tennisclub Froschhausen</span>
        </a>
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-8 items-center">
        {#each links as link}
          <a
            href={link.href}
            class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors { $page.url.pathname === link.href ? 'border-tennis-green text-tennis-green' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700' }"
          >
            {link.label}
          </a>
        {/each}
        <a href="https://tcf77.courtbooking.de/login.php?standard=true" target="_blank" rel="noopener noreferrer" class="ml-4 bg-tennis-clay text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-opacity-90 transition-opacity">
          Platz buchen
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="flex items-center md:hidden">
        <button on:click={toggleMenu} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tennis-green">
          <span class="sr-only">Menü öffnen</span>
          {#if isOpen}
            <X class="block h-6 w-6" />
          {:else}
            <Menu class="block h-6 w-6" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <div class="md:hidden border-t border-gray-200">
      <div class="pt-2 pb-3 space-y-1">
        {#each links as link}
          <a
            href={link.href}
            on:click={() => (isOpen = false)}
            class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium { $page.url.pathname === link.href ? 'border-tennis-green text-tennis-green bg-tennis-green/5' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800' }"
          >
            {link.label}
          </a>
        {/each}
        <a href="https://tcf77.courtbooking.de/login.php?standard=true" target="_blank" rel="noopener noreferrer" class="block pl-3 pr-4 py-3 mt-4 text-base font-medium text-white bg-tennis-clay text-center mx-4 rounded-xl hover:bg-opacity-90">
          Platz buchen (Extern)
        </a>
      </div>
    </div>
  {/if}
</header>


