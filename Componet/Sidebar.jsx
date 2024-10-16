import React from 'react'
 
const Sidebar = () => {
  
  return (
   <>
   <div class="w-full h-auto lg:h-screen bg-sitebg">
 <div>
  
   <nav class="bg-white shadow-sm px-4 py-3 fixed left-0 right-0 top-0 z-50">
     <div class="flex flex-wrap justify-between items-center">
       <div class="flex justify-start items-center">
         <button class="p-2 mr-2 text-acent1 rounded-lg cursor-pointer lg:hidden hover:bg-bgLight focus:bg-bgLight focus:ring-2 focus:ring-acent1">
           <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
           </svg>
         
         </button>

         <h4 class="hidden lg:block text-base lg:text-2xl font-medium text-primary ml-5">Dashboard</h4>
       </div>
       <button type="button" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" >
           <span class="sr-only">Open user menu</span>
           <img class="w-8 h-8 rounded-full object-cover" src="" alt="user photo" />
         </button>
     </div>
   </nav>


   <div  class=" fixed top-0 left-0 z-40 w-72 lg:w-56 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 bg-b">
     <div class="overflow-y-auto py-5 px-3 h-full bg-white">

       <ul class="space-y-0.5 inline lg:hidden">
         <li>
      
             <i class="fa-solid fa-house text-lg text-acent1 group-hover:text-white transition duration-75"></i>
             <span class="ml-3">Dashboard</span>
      
         </li>
        
       </ul>

       <ul class="hidden lg:inline space-y-0.5">
         <li>
       
             <i class="fa-solid fa-house text-lg text-acent1 group-hover:text-white transition duration-75"></i>
             <span class="ml-3">Dashboard</span>
          
         </li>
         <li>
         
             <i class="fa-solid fa-chalkboard-user text-lg text-acent1 transition duration-75 group-hover:text-white"></i>
             <span class="flex-1 ml-3 text-left whitespace-nowrap">Team</span>
       
         </li>
         <li>
          
             <i class="fa-solid fa-graduation-cap text-lg text-acent1 transition duration-75 group-hover:text-white"></i>
             <span class="flex-1 ml-3 text-left whitespace-nowrap">Project </span>
         
         </li>
         <li>
           
             <i class="fa-solid fa-clipboard-user text-lg text-acent1 transition duration-75 group-hover:text-white"></i>
             <span class="flex-1 ml-3 text-left whitespace-nowrap">Calender</span>
          
         </li>

         <li>
      
             <i class="fa-solid fa-file-pen text-lg text-acent1 transition duration-75 group-hover:text-white"></i>
             <span class="flex-1 ml-3 text-left whitespace-nowrap">Documenet</span>
           
         </li>
         <li>
       
             <i class="fa-solid fa-book text-lg text-acent1 group-hover:text-white transition duration-75"></i>
             <span class="ml-3">Subject</span>
           
         </li>
         <li>
          
             <i class="fa-solid fa-square-poll-vertical text-lg text-acent1 transition duration-75 group-hover:text-white"></i>
             <span class="flex-1 ml-3 text-left whitespace-nowrap">Report</span>
         
         </li>
         <li>
         
         </li>
       
         <li>
         
         </li>
       </ul>
     </div>
  
     
   </div>
   

  
 </div>

</div>
   </>
  )
}

export default Sidebar