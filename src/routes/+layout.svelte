<script lang="ts">
  // @ts-ignore
  import Navbar from '$lib/ui/Navbar.svelte';
  import '@brainandbones/skeleton/themes/theme-skeleton.css';
  import '@brainandbones/skeleton/styles/all.css';
  import '@brainandbones/skeleton/styles/typography.css';
  import '@brainandbones/skeleton/styles/forms.css';
  import '@brainandbones/skeleton/styles/elements/buttons.css';
  import '@brainandbones/skeleton/styles/elements.css';

  import '../app.css';
</script>

<Navbar />
<slot />
