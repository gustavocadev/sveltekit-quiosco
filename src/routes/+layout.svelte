<script lang="ts">
  // @ts-ignore
  import Navbar from '$lib/ui/Navbar.svelte';
  import '@brainandbones/skeleton/themes/theme-skeleton.css';
  import '@brainandbones/skeleton/styles/all.css';
  import '../app.css';
</script>

<Navbar />
<slot />
