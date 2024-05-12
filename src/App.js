import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Pocket Miel Aphrodisiaque', description: 'Pot de miel 70g', imageUrl: 'Pot300.png' },
  { id: 2, name: 'Tank Miel Aphrodisiaque', description: 'Pot de miel 300g',imageUrl: 'Pot300.png' },
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
      <form>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <div className="contact-info">
        <h3>Coordonnées de contact:</h3>
        <p>Adresse e-mail: contact@mielaphrodisiaque.com</p>
        <p>Numéro de téléphone: +123456789</p>
        <p>Adresse postale: 123 Rue du Miel, 75000 Paris</p>
        <p>Horaires d'ouverture: Lundi - Vendredi: 9h00 - 18h00</p>
        <p>Réseaux sociaux:</p>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;


