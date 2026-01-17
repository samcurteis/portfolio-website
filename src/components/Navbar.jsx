import useViewport from '../hooks/useViewport.js';
import DesktopNav from './DesktopNav.jsx';
import MobileNav from './MobileNav.jsx';

export default function Navbar() {
  const { width } = useViewport();
  const breakpoint = 800;

  return width < breakpoint ? <MobileNav /> : <DesktopNav />;
}
