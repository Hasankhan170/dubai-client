import { Link } from 'react-router-dom';

const Sightseen = [
  { name: 'Dubai' },
  { name: 'Abu Dhabi' },
  { name: 'Burj Khalifa' },
  { name: 'Combo Tours' },
];
const Desertsafari = [
  { name: 'Morning Safari' },
  { name: 'Evening Safari' },
  { name: 'Overnight Safari' },
  { name: 'Red Dune Safari' },
];
const Dhowcruise = [
  { name: 'Rental Yacht' },

   { name: 'Theme Park' },
   { name: 'Attraction Ticket' },
];

const watersport = [
  { name: 'Water Park' },
  
];


const footerLinks = [
  { title: 'Sightseeing Tours', items: Sightseen },
  { title: 'Desert Safari', items: Desertsafari },
  { title: 'Popular Tours', items: Dhowcruise },
  { title: 'Water Sport', items: watersport },

];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-8 footer">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* About Section */}
        <div>
          <h2 className="font-bold mb-2 text-xl">About</h2>
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
                    to={`/category-all/${encodeURIComponent(item.name)}`}
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
