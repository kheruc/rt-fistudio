const Footer = () => (
  <div className="footer-wrapper">
    <div className="copyright">© {new Date().getFullYear()} Fi Studio.</div>
    <div className="info">
      <p>
        Note: This is a demo website.{' '}
        <a href="https://reacttricks.com/learn-react-by-building-websites-with-next">Learn how to build it.</a>
      </p>
      <p>
        Photography source: <a href="https://unsplash.com">Unsplash</a>
      </p>
    </div>
    <style jsx>{`
      .footer-wrapper {
        text-align: center;
        margin-top: 80px;
        padding: 80px 30px;
      }
      .copyright {
        margin-bottom: 20px;
      }
      .info {
        color: #777;
        font-size: 16px;
      }
    `}</style>
  </div>
);

export default Footer;
