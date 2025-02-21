<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center mb-4">Create Account</div>
      <h2 class="text-2xl font-bold text-gray-900 text-center mb-6">Join Our Community</h2>
      <p class="text-gray-600 text-center mb-8">Fill out the form below to create your account.</p>
      <form class="mt-4 space-y-4">
        <div>
          <label for="first-name" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="First Name">
        </div>
        <div>
          <label for="last-name" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Last Name">
        </div>
        <div>
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
        </div>
        <div>
          <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone Number">
        </div>
        <div>
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        </div>
        <div>
          <label for="confirm-password" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm Password">
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="terms" class="mr-2">
          <label for="terms" class="text-sm text-gray-700">I agree to the <a href="#" class="text-indigo-500 hover:text-indigo-800">Terms and Conditions</a></label>
        </div>
        <div class="flex items-center justify-between mt-4">
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Register
          </button>
        </div>
        <div class="mt-4 text-center">
          <p class="text-gray-600">
            Already have an account?
            <RouterLink to="/login" class="text-indigo-500 hover:text-indigo-800">
              Sign In
            </RouterLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
