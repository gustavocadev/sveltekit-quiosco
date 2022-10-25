<script lang="ts">
  // @ts-nocheck
  import ProductCard from '$lib/product/ProductCard.svelte';

  const products = [
    {
      id: 1,
      title: 'Product title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae voluptatem quibusdam necessitatibus quidem voluptatum quos nesciunt. Quisquam, quae voluptates. Quisquam, quae voluptates.',
      price: {
        old: 100,
        new: 50,
      },
    },
    {
      id: 2,
      title: 'Product title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae voluptatem quibusdam necessitatibus quidem voluptatum quos nesciunt. Quisquam, quae voluptates. Quisquam, quae voluptates.',
      price: {
        old: 100,
        new: 50,
      },
    },
    {
      id: 3,
      title: 'Product title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae voluptatem quibusdam necessitatibus quidem voluptatum quos nesciunt. Quisquam, quae voluptates. Quisquam, quae voluptates.',
      price: {
        old: 100,
        new: 50,
      },
    },
    {
      id: 4,
      title: 'Product title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae voluptatem quibusdam necessitatibus quidem voluptatum quos nesciunt. Quisquam, quae voluptates. Quisquam, quae voluptates.',
      price: {
        old: 100,
        new: 50,
      },
    },
    {
      id: 5,
      title: 'Product title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae voluptatem quibusdam necessitatibus quidem voluptatum quos nesciunt. Quisquam, quae voluptates. Quisquam, quae voluptates.',
      price: {
        old: 100,
        new: 50,
      },
    },
  ];
</script>

<main class="grid grid-cols-3 gap-4 p-10">
  {#each products as product}
    <ProductCard />
  {/each}
</main>
