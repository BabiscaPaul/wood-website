import '../Styles/HomePage/FooterStyles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-main-content">
        <div className="footer-about">
          <h3>Your Company Name</h3>
          <p>Dedicated to excellence and innovation in whatever we do.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">Poze Lemne</a></li>
            <li><a href="/services">Pret Lemne</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Informatii Utile</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <a href="tel: 0722 730 076">+40 722 730 076</a>
          <br />
          <a href="tel: 0763 485 181">+40 763 485 181</a>
        </div>
      </div>
      <div className="footer-bottom">
        <em>
          <p>
            © {new Date().getFullYear()} 'Numele Companiei. Toate drepturile rezervate.'
          </p>
        </em>
      </div>
    </footer>
  );
}

export default Footer;