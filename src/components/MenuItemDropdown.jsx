'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function MenuItemDropdown({title, icon, handleClick }) {

  const [openMenu, setOpenMenu] = useState(true);
  const [itemsMenu, setItemsMenu] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user ) {
      setItemsMenu(user.metricas);
      setOpenMenu(true);
    }
  }, []);

  function handleDropdown() {
    setOpenMenu(!openMenu);
  }
  
  return (
    <>
      <li 
        role="button" 
        className="flex items-center w-full p-3 gap-1 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
        onClick={handleDropdown}
      >
        <div className="grid place-items-center mr-4">
          <span className="material-icons">{icon}</span>
        </div>
        {title}
        <span className="material-icons">arrow_drop_down</span>
      </li>
      {openMenu && 
        <div>
          {itemsMenu.map((item, index) => (
            <button 
              key={index} 
              className="flex flex-col items-start w-full p-3 gap-1  rounded-lg text-start font-extralight text-base transition-all hover:bg-blue-50  focus:bg-[#DBDBDB] active:bg-[#DBDBDB] hover:text-blue-900 focus:[#DBDBDB] active:text-blue-900 outline-none"
              onClick={() => handleClick(item.id_metrica)}
            >
              {item.nombre_metrica}
            </button>
          ))}
        </div>
      }
    </>
  );
}
