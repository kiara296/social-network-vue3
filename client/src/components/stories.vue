<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex ">
    <div class="grid justify-items-center relative m-5 w-23">
      <img
        class="h-12 w-12 rounded-full ring-2 ring-white drop-shadow-2xl "
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute right-2 bottom-4 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p class="text-sm">Peter Taylor</p>
    </div>
    <div class="grid justify-items-center relative m-5 w-23">
      <img
        class="h-12 w-12 rounded-full ring-2 ring-green drop-shadow-lg"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <p class="text-sm">Kiara Heinrich</p>
    </div>
  </div>
</template>
