import { navLinks } from '../../../constants/navigation';
import Button from '../../common/Button/Button';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden pt-4`}>
      
      <div className="flex flex-col gap-4 px-4 pb-4 justify-center items-center">
        {navLinks.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            className="font-syne text-body text-white hover:text-orange transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a href="#" className="font-syne text-body text-white hover:text-orange transition-colors">Contact</a>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default MobileMenu; 