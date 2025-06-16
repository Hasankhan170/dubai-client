import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Activities',
    items: [
      { name: 'New Year Eve', path: '/new-year-eve' },
      { name: 'Theme Park', path: '/theme-park' },
      { name: 'Water Sports', path: '/water-sports' },
      { name: 'Yacht Rental Dubai', path: '/yacht-rental' },
    ],
  },
  {
    title: 'Popular Tours',
    items: [
      { name: 'Burj Khalifa', path: '/burj-khalifa' },
      { name: 'Dolphinarium Show', path: '/dolphinarium-show' },
      { name: 'Musandam Dibba', path: '/musandam-dibba' },
    ],
  },
  {
    title: 'Desert & Adventure',
    items: [
      { name: 'Dubai Marina Yacht', path: '/dubai-marina-yacht' },
      { name: 'Polaris Dune Buggy', path: '/polaris-dune-buggy' },
      { name: 'Morning Desert Safari', path: '/morning-desert-safari' },
      { name: 'Evening Desert Safari', path: '/evening-desert-safari' },
    ],
  },
  {
    title: 'Best Selling Tours',
    items: [
      { name: 'Dhow Cruise Dinner Marina', path: '/dhow-cruise-marina' },
      { name: 'Dhow Cruise Dinner Creek', path: '/dhow-cruise-creek' },
      { name: 'Full Day Dubai City Tour', path: '/dubai-city-tour' },
      { name: '6 Emirates Tour', path: '/six-emirates-tour' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-8 footer">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* About Section */}
        <div>
          <h2 className="font-bold mb-2 text-lg">About</h2>
          <p className="text-md">
           Dubai tour is a local tour agency offering the best tours and travel experiences in Dubai since 2022.
          </p>
        </div>

        {/* Dynamic Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="font-bold mb-2 text-lg">{section.title}</h4>
            <ul className="text-md space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="hover:underline hover:text-gray-300 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
