import './header.css';
import { useLocation, useParams } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getPageTitle = (pathname) => {
    if (pathname === '/') return 'Dashboard';
    if (pathname.startsWith('/users')) {
      const match = pathname.match(/^\/users(\/\d+)?$/);
      if (match) return 'Users';
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header>
      <div>
        <h1 className="heading">{pageTitle}</h1>
        <p className="subheading">Welcome, user</p>
      </div>
    </header>
  );
};

export default Header;
