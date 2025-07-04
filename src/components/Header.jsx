import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// informacion de contacto
const contacts = [
  { icon: faEnvelope, text: 'lautaromalleret@gmail.com', link: 'mailto:lautaromalleret@gmail.com' },
  { icon: faLinkedin, text: 'LinkedIn', link: 'https://linkedin.com/in/lautaro-malleret-79b03919b' },
  { icon: faGithub, text: 'GitHub', link: 'https://github.com/LautaroMalleret' },
  { icon: faPhoneAlt, text: '+54 9 11 25400531', link: 'tel:+5491125400531' },
];

export default function Header() {
  return (
    <header className="w-full py-4 bg-blue-600 border-b">
      <div id="contact" className="flex flex-wrap justify-center gap-6">
        {contacts.map(({ icon, text, link }, i) => (
          <div className="flex items-center gap-2" key={i}>
            <a href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={icon} className="text-xl text-white hover:text-gray-300 transition" />
            </a>
            <span className="text-sm text-white hidden md:inline">{text}</span>
          </div>
          
        ))}
      </div>
    </header>
  );
}

