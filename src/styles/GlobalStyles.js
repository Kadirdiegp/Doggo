import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #9370ff; /* Purple */
    --secondary-color: #fdde59; /* Yellow */
    --background-color: #fffbe6; /* Light yellow background */
    --text-color: #333;
    --light-color: #ffffff;
    --grey-color: #555;
    --light-grey: #f8f9fa;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', 'Roboto', 'Segoe UI', 'Arial', sans-serif;
    line-height: 1.5;
    color: var(--text-color);
    background-color: var(--background-color);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }
  
  img {
    max-width: 100%;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  /* Common utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-primary {
    color: var(--primary-color);
  }
  
  .text-secondary {
    color: var(--secondary-color);
  }
  
  .bg-light {
    background-color: var(--light-color);
  }
  
  .bg-primary {
    background-color: var(--primary-color);
    color: var(--light-color);
  }
  
  .bg-secondary {
    background-color: var(--secondary-color);
    color: var(--text-color);
  }
  
  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  .mt-5 { margin-top: 3rem; }
  
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  .mb-5 { margin-bottom: 3rem; }
  
  .py-1 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .py-2 { padding-top: 1rem; padding-bottom: 1rem; }
  .py-3 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
  .py-4 { padding-top: 2rem; padding-bottom: 2rem; }
  .py-5 { padding-top: 3rem; padding-bottom: 3rem; }
  
  .px-1 { padding-left: 0.5rem; padding-right: 0.5rem; }
  .px-2 { padding-left: 1rem; padding-right: 1rem; }
  .px-3 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .px-4 { padding-left: 2rem; padding-right: 2rem; }
  .px-5 { padding-left: 3rem; padding-right: 3rem; }
  
  /* Button styles */
  .btn {
    display: inline-block;
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .btn-primary {
    background-color: var(--primary-color);
    color: var(--light-color);
    
    &:hover {
      background-color: darken(var(--primary-color), 10%);
      text-decoration: none;
    }
  }
  
  .btn-secondary {
    background-color: var(--secondary-color);
    color: var(--text-color);
    
    &:hover {
      background-color: darken(var(--secondary-color), 10%);
      text-decoration: none;
    }
  }
  
  .btn-outline {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: var(--light-color);
      text-decoration: none;
    }
  }
  
  .btn-lg {
    padding: 14px 28px;
    font-size: 1.1rem;
  }
  
  .btn-block {
    display: block;
    width: 100%;
  }
  
  /* Card styles */
  .card {
    background-color: var(--light-color);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .card-header {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .card-footer {
    padding: 15px 20px;
    border-top: 1px solid #eee;
  }
  
  /* Animation keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
  
  .animate-bounce {
    animation: bounce 2s ease infinite;
  }
  
  /* Font for the special "love" text */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
`;

export default GlobalStyles;
