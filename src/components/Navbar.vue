<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6 w-full">
    <a href="/"><div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="@/assets/logo.png" height="45" width="45">
        <span class="font-semibold text-xl tracking-tight ml-4">Ubeer</span>
    </div></a>
    <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
     
        </div>
        <div class="flex items-center">
            <a  v-if="isAuthenticated && !isLoading" @click="logout" class="inline-block text-sm px-4 py-2 bg-red-600 mr-2  rounded text-white mt-4 lg:mt-0">
              Deconnexion
            </a>
            <a v-if="!isAuthenticated && !isLoading" @click="login" class="inline-block text-sm px-4 py-2 bg-red-600 mr-2  rounded text-white mt-4 lg:mt-0">
                  Connexion
            </a>
            <a v-if="!isAuthenticated && !isLoading" @click="login" class="inline-block text-sm px-4 py-2 bg-green-600  rounded text-white mt-4 lg:mt-0">
                  Inscription
            </a>
            <a href="/shopping-cart" class="inline-block text-sm  ml-2  rounded text-white mt-8 lg:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="white">
                <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
              </svg>
            </a>
        </div>
    </div>
</nav>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';
export default {
  name: "NavBar",
  setup() {
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();
    return {
      isAuthenticated,
      isLoading,
      user,
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({
          returnTo: window.location.origin
        });
      }
    }
  }
};
</script>