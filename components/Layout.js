import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div className="site-wrapper">
    <Header />

    <div className="content-wrapper">{props.children}</div>

    <Footer />
  </div>
);

export default Layout;
