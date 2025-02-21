<template>
        <div class="max-w-md mx-auto mt-20 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Create Account</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Join Our Community</a>
              <p class="mt-2 text-gray-500">Fill out the form below to create your account.</p>
              <form class="mt-4">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Name
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                    Phone Number
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone Number">
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
                    Confirm Password
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm Password">
                </div>
                <div class="flex items-center">
                  <input type="checkbox" id="terms" class="mr-2">
                  <label for="terms" class="text-sm text-gray-700">I agree to the <a href="#" class="text-indigo-500 hover:text-indigo-800">Terms and Conditions</a></label>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                  </button>
                  <a class="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800" href="#">
                    Already have an account?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </template>
