import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
  
  <div class="  font-outfit flex flex-col items-center justify-center px-6  mx-auto md:mt-[20px] mt-[20px] lg:py-0">
     
     <div className="w-full border-black border-4 bg-white rounded-sm shadow-hard md:mt-0 sm:max-w-md xl:p-0">
     <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                     <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email: name@company.com" required=""/>
                  </div>
                  <div>
                     <input type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  
                  <button type="submit" className="w-full border-black border-2 shadow-hardbutton text-black bg-button transform hover:scale-105 transition duration-300 ease-in-out font-medium rounded-sm text-sm px-5 py-2.5 text-center"
                    >Login</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Not have an account? 
                      <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here.</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>


    );
};

export default Login;
