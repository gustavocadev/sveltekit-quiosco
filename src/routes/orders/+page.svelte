<script lang="ts">
  import OrderCard from '$lib/order/OrderCard.svelte';
  import type { Order } from '@prisma/client';

  type Data = {
    orders: Order[];
  };
  export let data: Data;

  const { orders } = data;
</script>

<main class="grid grid-cols-3 gap-4 p-10">
  {#each orders as order}
    <OrderCard {order} />
  {/each}
</main>
