const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// This string contains all of your HTML and CSS
const htmlPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Cloud Run</title>
    
    <style>
      /* --- Basic Reset --- */
      body, h1, p {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }

      body {
        background-color: #f4f7f6;
      }

      /* --- Hero Section --- */
      .hero {
        /* You can change this background image URL */
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1504805572947-34074f8d3f71?q=80&w=2070');
        
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
      }

      .hero h1 {
        font-size: 3.5rem;
        font-weight: 700;
        max-width: 800px;
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      .hero p {
        font-size: 1.25rem;
        font-weight: 300;
        margin-bottom: 2.5rem;
      }

      .hero-button {
        display: inline-block;
        padding: 12px 24px;
        background-color: #3498db;
        color: white;
        text-decoration: none;
        font-weight: 600;
        border-radius: 5px;
        transition: background-color 0.3s ease;
      }

      .hero-button:hover {
        background-color: #2980b9;
      }
    </style>
</head>
<body>

    <header class="hero">
        <h1>Hello, World! This is my CI/CD pipeline running on Google Cloud Run!</h1>
        <p>This application was deployed automatically by Jenkins.</p>
        <a href="httpss://github.com/ShruttzziiSundarr/ci_cd_cia" class="hero-button">
          View Project on GitHub
        </a>
    </header>

</body>
</html>
`;

// When someone visits the homepage, send the HTML page
app.get('/', (req, res) => {
  res.send(htmlPage);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
