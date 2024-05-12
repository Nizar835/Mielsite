import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import facebookLogo from './facebook.jpg';
import instaLogo from './insta.png';
import twitterLogo from './X.jpg';
import mailLogo from './email.jpg';
import phoneLogo from './tel.jpg';


const initialProducts = [
  { id: 1, name: 'Produit 1', description: 'Pot de miel 250g', quantity: 10, imageUrl: '/images/product1.jpg' },
  { id: 2, name: 'Produit 2', description: 'Pot de miel 500g', quantity: 5, imageUrl: '/images/product2.jpg' },
  { id: 3, name: 'Produit 3', description: 'Pot de miel 1kg', quantity: 3, imageUrl: '/images/product3.jpg' },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults(initialProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="title">
            <img src="/logo1.png" alt="Logo" className="logo" />
            <h1>MIEL Aphrodisiaque</h1>
          </div>
          <nav className="nav-links">
            <Link to="/">Accueil</Link>
            <Link to="/products">Nos Produits</Link>
            <Link to="/about">À Propos</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Rechercher</button>
          </form>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage products={searchQuery ? searchResults : initialProducts} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 MIEL Aphrodisiaque. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="tab-content active">
      <video autoPlay loop muted className="background-video">
        <source src="/fondv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <div className="content">
          <h2>Bienvenue sur MIEL Aphrodisiaque</h2>
          <p>Découvrez nos produits de miel aphrodisiaque de qualité supérieure.</p>
        </div>
      </div>
    </div>
  );
}

function ProductsPage({ products }) {
  return (
    <div className="tab-content active">
      <h2>Nos Produits</h2>
      {products.length > 0 ? (
        products.map(product => (
          <Product key={product.id} name={product.name} description={product.description} imageUrl={product.imageUrl} />
        ))
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
}

function Product({ name, description, imageUrl }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="tab-content active">
      <h2>À Propos</h2>
      <p>En savoir plus sur MIEL Aphrodisiaque et notre engagement envers la qualité.</p>
    </div>
  );
}
function ContactPage() {
  return (
    <div className="tab-content active">
      <h2>Contactez-nous</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <label htmlFor="name">Nom:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Coordonnées de contact:</h3>
          <p><img src={mailLogo} alt="Mail" /> Adresse e-mail: contact@mielaphrodisiaque.com</p>
          <p><img src={phoneLogo} alt="Phone" /> Numéro de téléphone: +123456789</p>
          <p>Réseaux sociaux:</p>
          <ul className="social-links">
            <li><a href="#"><img src={facebookLogo} alt="Facebook" /></a></li>
            <li><a href="#"><img src={instaLogo} alt="Instagram" /></a></li>
            <li><a href="#"><img src={twitterLogo} alt="Twitter" /></a></li>
          </ul>
        </div>
      </div>
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          className="video"
          width="100%"
          height="auto"
        >
          <source src="./fond2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="map-container">
        <h3>Localisation:</h3>
        <iframe
          title="Adresse"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.581694631136!2d5.886126115690148!3d43.09685479914529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9f94c2e2f3f0b%3A0xa3f733bf77d55b7d!2s83500%20La%20Seyne-sur-Mer!5e0!3m2!1sen!2sfr!4v1623378296870!5m2!1sen!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}




export default App;
