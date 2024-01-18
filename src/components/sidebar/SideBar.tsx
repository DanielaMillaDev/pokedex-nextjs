import Image from 'next/image'

import {IoFlashOutline, IoFootball, IoHeartOutline, IoLogoReact} from 'react-icons/io5'
import SideBarMenuItem from './SideBarMenuItem'

const menuItems = [
    {
        path:'/dashboard/pokemons',
        icon:<IoFootball size={40}/>,
        title:'Pokemons',
        subTitle:'Pokemones disponibles'
    },
    {
        path:'/dashboard/favorites',
        icon:<IoHeartOutline size={40}/>,
        title:'Favoritos',
        subTitle:'Ver tus favoritos'
    }
]

export const SideBar = () =>{
  return (
    <div id="menu"
        style={{width : '400px'}}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 overflow-y-scroll">
        <div id="logo" className="my-4 px-6">
         <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
            <IoFlashOutline className ='mr-2'/>
            <span>POKEDEX</span>
        </h1>
        </div>
        <div id="nav" className="w-full px-6">
            {
               menuItems.map(item=>(
                   <SideBarMenuItem  key={item?.path || ''} {...item}
                   />
               ))
            }
         

        </div>
 </div>
  )
}
