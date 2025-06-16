// import { useState } from 'react'
// import {
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
// } from '@headlessui/react'
// import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

// const Sightseen = [
//   { name: 'Dubai' },
//   { name: 'Abu Dhabi' },
//   { name: 'Burj Khalifa' },
//   { name: 'Combo Tours' },
// ]
// const Desertsafari = [
//   { name: 'Morning Safari' },
//   { name: 'Evening Safari' },
//   { name: 'Overnight Safari' },
//   { name: 'Premiun Safari' },
//   { name: 'Red Dune Safari' },
//   { name: 'Dune Baggy Ride' },
// ]
// const Dhowcruise = [{ name: 'Rental Yacht' }]
// const watersport = [
//   { name: 'Water Park' },
//   { name: 'Scuba Diving' },
//   { name: 'Jet Car Ride' },
//   { name: 'Love Boats' },
//   { name: 'Yellow Boat Ride' },
//   { name: 'Jet Ski Ride' },
// ]
// const ticket = [
//   { name: 'Attraction Ticket' },
//   { name: 'Theme Park' },
// ]

// function Dropdown({ title, items }) {
//   return (
//     <Popover className="relative ">
//       <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 ">
//         {title}
//         <ChevronDownIcon aria-hidden="true" className="w-5 h-5 text-gray-400" />
//       </PopoverButton>
//       <PopoverPanel className="absolute top-full left-0 z-50 mt-3 w-44 rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
//         <div className="p-4 ">
//           {items.map((item) => (
//             <button
//               key={item.name}
//               onClick={() => console.log(`Clicked: ${item.name}`)}
//               className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>
//       </PopoverPanel>
//     </Popover>
    
//   )
// }

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState(null)

//   const toggleSection = (section) => {
//     setActiveSection((prev) => (prev === section ? null : section))
//   }

//   const sections = [
//     { title: 'Sightseeing Tours', items: Sightseen },
//     { title: 'Desert Safari', items: Desertsafari },
//     { title: 'Dhow Cruise', items: Dhowcruise },
//     { title: 'Water Sport', items: watersport },
//     { title: 'Tickets', items: ticket },
//   ]

//   return (
//     <header className="bg-white shadow-sm px-20">
//       <nav className="w-full flex items-center justify-between px-4 py-3 lg:px-8 lg:py-4">
//         <div className="flex lg:flex-1">
//           <a href="#" className="block">
//             <img
//               src="/assets/images/logo.png"
//               alt="Logo"
//               className="w-[90px]"
//             />
//           </a>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className="p-2 text-gray-700"
//           >
//             <Bars3Icon className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Desktop Navigation */}
//         <PopoverGroup className="hidden lg:flex lg:gap-x-14">
//           {sections.map((section) => (
//             <Dropdown key={section.title} title={section.title} items={section.items} />
//           ))}
//         </PopoverGroup>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden px-4 pb-3">
//           <div className="flex justify-end mb-2">
//             <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
//               <XMarkIcon className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Mobile Accordion Dropdowns */}
//           <div className="space-y-2">
//             {sections.map((section) => (
//               <div key={section.title}>
//                 <button
//                   onClick={() => toggleSection(section.title)}
//                   className="flex justify-between items-center w-full text-md font-bold py-2 px-3 bg-gray-100 rounded-md"
//                 >
//                   {section.title}
//                   <ChevronDownIcon
//                     className={`h-5 w-5 transform transition-transform ${
//                       activeSection === section.title ? 'rotate-180' : ''
//                     }`}
//                   />
//                 </button>
//                 {activeSection === section.title && (
//                   <ul className="pl-4 mt-1 space-y-2">
//                     {section.items.map((item) => (
//                       <li key={item.name}>
//                         <button
//                           onClick={() => console.log(`Clicked: ${item.name}`)}
//                           className="block font-semibold text-left w-full text-gray-700 text-md hover:text-teal-600"
//                         >
//                           {item.name}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

import { useState } from 'react'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'

// Tour Categories
const Sightseen = [
  { name: 'Dubai' },
  { name: 'Abu Dhabi' },
  { name: 'Burj Khalifa' },
  { name: 'Combo Tours' },
]
const Desertsafari = [
  { name: 'Morning Safari' },
  { name: 'Evening Safari' },
  { name: 'Overnight Safari' },
  { name: 'Premiun Safari' },
  { name: 'Red Dune Safari' },
  { name: 'Dune Baggy Ride' },
]
const Dhowcruise = [{ name: 'Rental Yacht' }]
const watersport = [
  { name: 'Water Park' },
  { name: 'Scuba Diving' },
  { name: 'Jet Car Ride' },
  { name: 'Love Boats' },
  { name: 'Yellow Boat Ride' },
  { name: 'Jet Ski Ride' },
]
const ticket = [
  { name: 'Attraction Ticket' },
  { name: 'Theme Park' },
]

// Dropdown Component
function Dropdown({ title, items }) {
  const navigate = useNavigate()

  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
        {title}
        <ChevronDownIcon aria-hidden="true" className="w-5 h-5 text-gray-400" />
      </PopoverButton>
      <PopoverPanel className="absolute top-full left-0 z-50 mt-3 w-44 rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(`/category-all/${encodeURIComponent(item.name)}`)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {item.name}
            </button>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}

// Navbar Component
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const navigate = useNavigate()

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section))
  }

  const sections = [
    { title: 'Sightseeing Tours', items: Sightseen },
    { title: 'Desert Safari', items: Desertsafari },
    { title: 'Dhow Cruise', items: Dhowcruise },
    { title: 'Water Sport', items: watersport },
    { title: 'Tickets', items: ticket },
  ]

  return (
    <header className="bg-white shadow-sm px-4 lg:px-20">
      <nav className="w-full flex items-center justify-between py-3 lg:py-3">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="block">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="w-[100px]"
            />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-14">
          {sections.map((section) => (
            <Dropdown key={section.title} title={section.title} items={section.items} />
          ))}
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-3">
          <div className="flex justify-end mb-2">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Dropdown Sections */}
          <div className="space-y-2">
            {sections.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex justify-between items-center w-full text-md font-bold py-2 px-3 bg-gray-100 rounded-md"
                >
                  {section.title}
                  <ChevronDownIcon
                    className={`h-5 w-5 transform transition-transform ${
                      activeSection === section.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeSection === section.title && (
                  <ul className="pl-4 mt-1 space-y-2">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => {
                            setMobileMenuOpen(false)
                            navigate(`/category/${encodeURIComponent(item.name)}`)
                          }}
                          className="block font-semibold text-left w-full text-gray-700 text-md hover:text-teal-600"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
