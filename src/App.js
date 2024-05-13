import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import instaLogo from './insta.png';

import mailLogo from './email.jpg';
import phoneLogo from './tel.jpg';
import snaplogo from './snap.jpg';

import axios from 'axios';
const initialProducts = [
  { id: 1, name: 'Pocket Miel Aphrodisiaque', description: 'Pot de miel 70g', imageUrl: 'Pot300.png' },
  { id: 2, name: 'Tank Miel Aphrodisiaque', description: 'Pot de miel 300g', imageUrl: 'Pot300.png' },
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
            <img src="logo1.png" alt="Logo" className="logo" />
            <h1>MIEL Aphrodisiaque</h1>
          </div>

          <nav className="nav-links">
            <Link to="/">Accueil</Link>
            <Link to="/products">Nos Produits</Link>
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
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 La Ruche 83. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="tab-content active">

      <div className="content-overlay">
        <div className="content">
          <h2>Bienvenue sur MIEL Aphrodisiaque</h2>

          <p>
            Découvrez nos produits de miel aphrodisiaque de qualité supérieure. Nous vous proposons une sélection de miels naturels et artisanaux, récoltés avec soin dans nos ruches. Chaque pot de miel est produit avec amour et expertise, en respectant les normes les plus strictes de qualité.
          </p>
          <video autoPlay loop muted className="background-video">
            <source src="/fondv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Qu'est-ce qui rend notre miel aphrodisiaque unique ?</h3>
          <p>
            Notre miel aphrodisiaque est issu de fleurs sélectionnées pour leurs propriétés aphrodisiaques naturelles. Il est transformé de manière artisanale pour préserver tous ses bienfaits, puis emballé avec soin pour garantir sa fraîcheur et son goût authentique. Approuvé par nos experts en santé et en nutrition, notre collection de miels aphrodisiaques saura répondre à vos attentes.
          </p>
          <div className="phone-frame">
            <video autoPlay loop muted className="phone-screen">
              <source src="/Composition.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className='IND'>
            Pour découvrir nos produits, consultez l'onglet dédié "Nos Produits". Pour toute commande ou demande d'information, n'hésitez pas à nous contacter via l'onglet "Contact". Nous serons ravis de répondre à toutes vos questions et de vous accompagner dans votre expérience avec notre miel aphrodisiaque.
          </p>

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
        <div className="product-list">
          {products.map(product => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
}

function Product({ name, description, imageUrl }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}


function ContactPage() {
  return (
    <div className="tab-content active">
      <h2>Contactez-nous</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form action="/send-email" method="post">
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
          <p><img src={mailLogo} alt="Mail" /> Adresse e-mail: laruche83@gmail.com</p>
          <p><img src={phoneLogo} alt="Phone" /> Numéro de téléphone: +33621359640</p>
          <p>Réseaux sociaux:</p>
          <ul className="social-links">
            <p>
              <a href="https://www.instagram.com/laruche.miel83?igsh=NnJkY3lxendsN2c0" target="_blank" rel="noopener noreferrer">
                <img src={instaLogo} alt="Instagram" />
              </a>
              <a>
                laruche.miel83
              </a>
            </p>
            <p>
              <a href="https://www.snapchat.com/add/laruchemiel83" target="_blank" rel="noopener noreferrer">
                <img src={snaplogo} alt="Snapchat" style={{ marginRight: '10px', width: '50px' }} />
              </a>
              <span style={{ marginLeft: '10px' }}>laruchemiel83</span>
              <img className='Snap' src="/snapcode.jpg" alt="Snapcode" style={{ width: '100px', marginLeft: '10px' }} />
            </p>
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