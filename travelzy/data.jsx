import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaPersonBooth, FaReact, FaSearch, FaSun } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#explore', text: 'Explore' },
  { id: nanoid(), href: '#destination', text: 'Destination' },
  { id: nanoid(), href: '#privateTour', text: 'Private Tour' },
  { id: nanoid(), href: '#schedule', text: 'Tour Schedule' },
];

export const settings = [
  {
    id: nanoid(),
    href: '#theme',
    text: 'Theme',
    icon: <FaSun className='h-5 w-5'/>
  },
  { id: nanoid(),
    href: '#search', 
    text: 'Search',
    icon: <FaSearch className='h-5 w-5'/>},
  { id: nanoid(), 
    href: '#signUp', 
    text: 'Sign Up',
    icon: <FaPersonBooth className='h-5 w-5'/>
  },
]

