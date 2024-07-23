interface NavItem {
  name: string;
  page: string;  // Menggunakan string biasa untuk path
}

const navItems: NavItem[] = [
  { name: 'News', page: '/news' },
  { name: 'Video', page: '/video' },
  { name: 'JLPT Test', page: '/jlpt-test/jlpt-main' },
  { name: 'Dictionary', page: '/dictionary' },
];

const NavList = () => {
  return (
    <ul className="flex space-x-8">
      {navItems.map((item) => (
        <li key={item.name} className='text-ocean-600 font-bold'>
          <a
            href={item.page}
            className="text-lg hover:text-ocean-300"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
