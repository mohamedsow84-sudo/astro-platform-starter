<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LABBO AND CO</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    body { margin:0; font-family:'Poppins', sans-serif; background:#f5f5f5; color:#333; }
    header { background:#ffffff; padding:20px 40px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 10px rgba(0,0,0,0.05); position:sticky; top:0; }
    header h1 { margin:0; font-size:22px; }
    nav a { margin-left:20px; text-decoration:none; color:#333; font-weight:500; }
    .btn { background:#000; color:#fff; padding:12px 20px; border-radius:30px; text-decoration:none; display:inline-block; }
    .hero { padding:100px 20px; text-align:center; background:linear-gradient(to right,#eaeaea,#f9f9f9); }
    .hero h2 { font-size:40px; margin-bottom:20px; }
    .section { padding:80px 20px; max-width:1100px; margin:auto; }
    .cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:30px; }
    .card { background:#fff; padding:30px; border-radius:20px; box-shadow:0 10px 25px rgba(0,0,0,0.05); text-align:center; }
    footer { background:#111; color:#fff; text-align:center; padding:20px; }
    .whatsapp-float {
      position:fixed;
      bottom:20px;
      right:20px;
      background:#25D366;
      color:white;
      border-radius:50%;
      width:60px;
      height:60px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:28px;
      text-decoration:none;
      box-shadow:0 10px 20px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body>

<header>
  <h1>LABBO AND CO</h1>
  <nav>
    <a href="#about">À propos</a>
    <a href="#products">Produits</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section class="hero">
  <h2>Votre partenaire commercial entre Istanbul et le Sénégal</h2>
  <p>Spécialisé dans les habits, la vaisselle plastique et les produits alimentaires.</p>
  <br>
  <a class="btn" href="https://wa.me/221775708338" target="_blank">Contact WhatsApp</a>
</section>

<section id="about" class="section">
  <h2>À propos de nous</h2>
  <p>LABBO AND CO est une entreprise basée à Istanbul spécialisée dans le commerce international vers l’Afrique, notamment le Sénégal. Nous proposons des produits de qualité pour distributeurs, restaurateurs et commerçants.</p>
</section>

<section id="products" class="section">
  <h2>Nos Produits</h2>
  <div class="cards">
    <div class="card">
      <h3>Habits</h3>
      <p>Vêtements pour hommes, femmes et enfants en gros.</p>
    </div>
    <div class="card">
      <h3>Vaisselle Plastique</h3>
      <p>Produits jetables pour mariages, baptêmes et restaurations.</p>
    </div>
    <div class="card">
      <h3>Produits Alimentaires</h3>
      <p>Produits sélectionnés pour commerce et distribution.</p>
    </div>
  </div>
</section>

<section id="contact" class="section">
  <h2>Contact</h2>
  <p>WhatsApp : +221 77 570 83 38</p>
  <br>
  <a class="btn" href="https://wa.me/221775708338" target="_blank">Discuter sur WhatsApp</a>
</section>

<footer>
  © 2026 LABBO AND CO - Tous droits réservés
</footer>

<a href="https://wa.me/221775708338" target="_blank" class="whatsapp-float">💬</a>

</body>
</html>
