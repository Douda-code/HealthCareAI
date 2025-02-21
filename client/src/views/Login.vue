<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center mb-4">Member Login</div>
      <h2 class="text-2xl font-extrabold text-gray-900 text-center mb-6">Access Your Account</h2>
      <form class="mt-4 space-y-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
            Sign In
          </button>
          <div class="text-sm">
            <a class="text-indigo-500 hover:text-indigo-800" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <div class="mt-4 text-center">
          <p class="text-gray-600">
            Don't have an account?
            <RouterLink to="/register" class="text-indigo-500 hover:text-indigo-800">
              Sign Up
            </RouterLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
