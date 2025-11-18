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
      
      /* --- Keyframes for "pop-in" animation --- */
      @keyframes popIn {
        0% {
          opacity: 0;
          transform: scale(0.9);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      /* --- Hero Section (Colorful Gradient) --- */
      .hero {
        /* --- NEW COLOR SCHEME --- */
        background: linear-gradient(45deg, #1abc9c, #2ecc71, #3498db);
        
        height: 100vh;
        background-size: 400% 400%;
        animation: gradientBG 15s ease infinite; /* Animates the gradient */
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
      }
      
      /* --- Animation for the background gradient --- */
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }


      .hero h1 {
        font-size: 3.5rem;
        font-weight: 700;
        max-width: 800px;
        line-height: 1.2;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }

      .hero p {
        font-size: 1.25rem;
        font-weight: 300;
        margin-bottom: 2.5rem;
      }

      /* --- New Button Style --- */
      .hero-button {
        display: inline-block;
        padding: 12px 24px;
        background-color: #ffffff; /* White button */
        color: #333; /* Dark text */
        text-decoration: none;
        font-weight: 700;
        border-radius: 5px;
        transition: transform 0.3s ease;
      }

      .hero-button:hover {
        transform: scale(1.05); /* Grow on hover */
      }

      /* --- This is the new details box --- */
      .details-container {
        /* --- NEW MATCHING COLOR SCHEME --- */
        background: linear-gradient(45deg, rgba(26, 188, 156, 0.8), rgba(52, 152, 219, 0.8));
        
        border-radius: 8px;
        padding: 20px 30px;
        margin-top: 25px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        
        /* Apply the pop-in animation */
        animation: popIn 0.8s ease-out forwards;
      }
      
      .detail-item {
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0;
        margin: 0;
        line-height: 1.7;
  S       text-align: left;
      }
      
      .detail-item strong {
        font-weight: 700;
        margin-right: 10px;
      }
      
    </style><thead>
</thead><tbody>
</tbody>
</head>
<body>

    <header class="hero">
        <h1>Hello, World! This is my CI/CD pipeline!</h1>
        <p>This application was deployed automatically by Jenkins.</p>
        <a href="httpss://github.com/ShruttzziiSundarr/ci_cd_cia" class="hero-button">
          View Project on GitHub
        </a>
        
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
