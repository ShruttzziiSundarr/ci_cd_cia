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

      /* --- This is the new "Submitted by" text --- */
      .submitted-by {
        font-size: 1rem;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 0; /* Reset margin */
        cursor: pointer;
        border-bottom: 2px dotted #ffffff80;
      }

      /* --- This is the new details box --- */
      .details-container {
        background: rgba(0, 0, 0, 0.4);
        border-radius: 8px;
        
        /* These properties make it hidden by default */
        opacity: 0;
        max-height: 0;
        overflow: hidden;

        /* This is the animation */
        transition: all 0.5s ease-in-out;
        
        /* Remove default <p> margins */
        padding: 0 24px;
      }
      
      .detail-item {
        font-size: 1rem;
        font-weight: 400;
        padding: 0;
        margin: 0;
        line-height: 1.7;
        text-align: left;
      }

      /* --- INTERACTIVE PART --- */
      /* When you hover the "submitted-by" text, this reveals the details container */
      .submitted-by:hover + .details-container {
        opacity: 1;
        max-height: 200px; /* Needs to be large enough to show content */
        margin-top: 15px;
        padding: 16px 24px;
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
        
        <p class="submitted-by">
          Submitted by
        </p>
        
        <div class="details-container">
            <p class="detail-item"><strong>Name:</strong> M S Shruthi</p>
            <p class="detail-item"><strong>Reg. No:</strong> 22011102051</p>
            <p class="detail-item"><strong>Class:</strong> IOT-A</p>
        </div>
        
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
