<template>
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  .navbar ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }
  .navbar a {
    color: white;
    text-decoration: none;
  }
  </style>
  