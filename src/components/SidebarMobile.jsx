'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function SidebarMobile() {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();
  

  const handleLogout = () => {
    localStorage.removeItem('user');
    setSelectedOption(null); 
    setIsOpen(!isOpen);
    router.push('/auth/signin');
  };


  

  return (
    <div className="relative flex flex-col gap-5 bg-clip-border rounded-xl bg-[#fefdfd] text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-xl">
      <div className="grid gap-4">
        <span>
        <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0361 51.5C17.9217 51.5 8.96084 51.5 1.53822e-06 51.5C6.16538e-07 34.5 6.14458e-07 17.5 0 0.500005C17 0.500002 34 0.500002 51 0.5C51 17.5 51 34.5 51 51.5C43.0633 51.5 35.1265 51.5 27.0361 51.5ZM37.7947 27.4058C40.3022 27.3958 42.8101 27.4131 45.3169 27.3663C46.9734 27.3354 47.8511 26.4527 47.9163 24.7955C47.9463 24.0328 47.9214 23.2542 47.8034 22.5013C45.8428 9.99245 34.3593 1.5087 21.9062 3.61201C12.9665 5.12189 6.85872 10.3586 4.08995 18.9886C1.27366 27.7666 3.36933 35.7064 9.88858 42.0849C21.6822 53.6241 41.5251 48.6443 46.8798 32.9992C47.4638 31.2931 47.0423 30.172 45.5985 29.591C44.079 28.9795 42.5756 29.5245 41.8359 30.9767C41.2101 32.2054 40.6749 33.4849 39.9845 34.6752C35.9656 41.6031 27.684 44.614 19.9416 41.9987C12.3559 39.4364 7.50824 31.7505 8.53648 23.9162C9.57983 15.9668 15.7725 9.68526 23.4275 8.81151C31.2571 7.91782 38.8341 12.5863 41.6053 20.0308C41.842 20.6666 41.9617 21.3458 42.1728 22.1449C40.3662 22.1449 38.1764 22.023 36.5 22C34.0866 15.6739 29.1547 13.0349 23.6909 13.8098C17.6665 14.6642 13.2681 19.8389 13.2512 25.8442C13.2344 31.7868 17.5424 36.8494 23.5193 37.8144C28.2434 38.577 32.0678 36.9524 35.0933 33.2455C36.0561 32.0658 36.0034 30.7045 34.9972 29.6949C34.079 28.7736 32.7546 28.7698 31.5262 29.7148C31.0813 30.0571 30.698 30.4789 30.2564 30.8261C28.3151 32.3526 26.2136 33.1383 23.6868 32.4668C20.8701 31.7183 18.9117 29.4309 18.5508 26.2645C18.2574 23.6913 20.0442 20.7472 22.6018 19.5896C25.1897 18.4183 28.318 18.9973 30.2422 21.0272C30.4528 21.2494 30.5581 21.5714 30.8182 22.0368C29.3535 22.0368 28.1267 21.9789 26.9076 22.0518C25.4572 22.1384 24.5906 23.1118 24.5373 24.5568C24.4756 26.231 25.2758 27.4423 26.7908 27.4685C30.3671 27.5304 33.9463 27.4227 37.7947 27.4058Z" fill="white"/>
          <path d="M36.8679 22.0061C38.4445 22.0061 40.3773 22.105 42.184 22.105C41.9729 21.3059 41.8531 20.6267 41.6165 19.9909C38.8453 12.5464 31.2683 7.87793 23.4387 8.77161C15.7837 9.64536 9.59102 15.9269 8.54767 23.8763C7.51943 31.7106 12.3671 39.3965 19.9528 41.9588C27.6952 44.5741 35.9767 41.5632 39.9956 34.6353C40.6861 33.445 41.2213 32.1655 41.8471 30.9368C42.5868 29.4846 44.0902 28.9396 45.6097 29.5511C47.0535 30.1321 47.4749 31.2532 46.891 32.9593C41.5363 48.6044 21.6934 53.5842 9.89977 42.0451C3.38052 35.6665 1.28486 27.7267 4.10114 18.9487C6.86991 10.3188 12.9777 5.082 21.9173 3.57211C34.3705 1.4688 45.854 9.95255 47.8146 22.4614C47.9326 23.2143 47.9575 23.9929 47.9275 24.7556C47.8623 26.4129 46.9846 27.2955 45.3281 27.3264C42.8213 27.3732 39.9402 27.3826 37.3288 27.3826C37.318 25.7331 37.0107 23.7361 36.8679 22.0061Z" fill="#404040" fillOpacity="0.9"/>
          <path d="M36.8675 22.0308C37.3283 23.5666 37.3288 25.5393 37.3288 27.3826C33.7956 27.3826 30.317 27.4969 26.7428 27.4353C25.2287 27.4092 24.4289 26.204 24.4906 24.5381C24.5438 23.1002 25.4099 22.1316 26.8595 22.0454C28.0779 21.973 29.3041 22.0305 30.7679 22.0305C30.5079 21.5674 30.4027 21.247 30.1922 21.026C28.2691 19.0061 25.1426 18.43 22.5562 19.5955C20 20.7474 18.2143 23.6768 18.5074 26.2373C18.8682 29.388 20.8255 31.6641 23.6405 32.4089C26.1659 33.077 28.2662 32.2952 30.2064 30.7763C30.6477 30.4308 31.0308 30.0111 31.4755 29.6705C32.7032 28.7302 34.0268 28.734 34.9445 29.6507C35.9501 30.6552 36.0556 32.0717 35.0933 33.2455C32 37 28.1454 38.5582 23.4241 37.7994C17.4505 36.8392 13.1941 31.7322 13.2109 25.8191C13.2278 19.8436 17.6237 14.6945 23.6446 13.8443C29.1053 13.0733 34.4096 15.7323 36.8675 22.0308Z" fill="#ED7A26"/>
        </svg>
        </span>
       <nav className="grid gap-6 min-w-[`0rem] p-2 font-sans text-base font-normal text-gray-700">
       <ul>
          <button
            onClick={toggleSidebar}
            className="flex items-center w-full p-3 rounded-lg bg-[#F5F5F5] text-[#404040]  text-start leading-tight transition-all hover:bg-[#DBDBDB] hover:bg-opacity-80 focus:bg-[#DBDBDB] focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <span className="material-icons">menu</span>
          </button>
        </ul>
        <ul>
          <Link href={"/"} className="material-iscons">
            <button
              className="flex items-center w-full p-3 rounded-lg bg-[#F47E36] text-[#F5F5F5]  text-start leading-tight transition-all hover:bg-[#DBDBDB] hover:bg-opacity-80 focus:bg-[#DBDBDB] focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              >
                <span className="material-icons">home</span>        
            </button>
            </Link>
          <Link href={"/follow"}>
            <button
              className="flex items-center w-full p-3 rounded-lg bg-[#F5F5F5] text-[#404040]  text-start leading-tight transition-all hover:bg-[#DBDBDB] hover:bg-opacity-80 focus:bg-[#DBDBDB] focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              >
                <span className="material-icons">folder</span>        
            </button>
          </Link>
        </ul>
        <ul className="absolute inset-x-0 bottom-0 p-4">
          <Link href={"/support"} className="material-iscons">
           <button className="flex items-center w-full p-3 rounded-lg bg-[#F47E36] text-[#F5F5F5] text-start leading-tight transition-all hover:bg-[#DBDBDB] hover:bg-opacity-80 focus:bg-[#DBDBDB] focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
               <span className="material-icons">contact_support </span>  
              </div>     
            </button>
          </Link>
          <button onClick={handleLogout} className="flex items-center w-full p-3 rounded-lg bg-[#F5F5F5] text-[#404040] shadow-xl text-start leading-tight transition-all hover:bg-[#DBDBDB] hover:bg-opacity-80 focus:bg-[#DBDBDB] focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div className="grid place-items-center mr-4">
             <span className="material-icons">logout</span>
            </div>
          </button>
        </ul>
      </nav>
    </div>
  </div> 
  );
}
