<script lang="ts">
  import { enhance } from '$app/forms';
  import type { Product } from '@prisma/client';

  export let product: Product;
  let count = 0;

  const increase = () => {
    count += 1;
  };
  const decrease = () => {
    count -= Math.min(count, 1);
  };
</script>

<div class="card">
  <header class="card-header">
    <figure class="">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={`/assets/img/${product.image}.jpg`}
        alt="a picture with mountains"
        class="mx-auto"
      />
    </figure>
  </header>
  <div class="card-body">
    <h2 class="card-title">{product.name}</h2>
    <p class="card-description" />
    <div class="card-price">
      <h4>Precio: <span class="card-price__old">${product.price}</span></h4>
    </div>
  </div>
  <footer class="card-footer flex flex-col gap-4 items-center">
    <div>
      <h2>Cantidad: <span>{count}</span></h2>
    </div>
    <form
      action="?/createOrder"
      method="post"
      class="w-full flex flex-col gap-4"
      use:enhance
    >
      <div>
        <button
          class="btn bg-primary-500 btn-base text-black"
          type="button"
          on:click={increase}>+1</button
        >
        <button
          class="btn bg-primary-500 btn-base text-black"
          type="button"
          on:click={decrease}>-1</button
        >
      </div>
      <button
        class="btn bg-primary-500 btn-base text-black w-full"
        type="submit">Crear Orden</button
      >
      <input type="hidden" name="id" value={product.categoryId} />
      <input type="hidden" name="quantity" value={count} />
    </form>
  </footer>
</div>
