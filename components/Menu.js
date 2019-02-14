import Link from 'next/link';

const Menu = () => (
  <ul className="menu">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/services">
        <a>Services</a>
      </Link>
    </li>
    <li>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
  </ul>
);

export default Menu;
