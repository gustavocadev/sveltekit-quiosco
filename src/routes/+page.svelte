<script lang="ts">
  // @ts-nocheck
  import ProductCard from '$lib/product/ProductCard.svelte';
  import type { Product } from '@prisma/client';
  type Data = {
    products: Product[];
  };

  export let data: Data;

  const { products } = data;
</script>

<main class="grid grid-cols-3 gap-4 p-10">
  {#each products as product}
    <ProductCard {product} />
  {/each}
</main>
