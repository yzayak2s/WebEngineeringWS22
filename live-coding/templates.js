export function header() {
    return `
        
<nav class="navbar">
  <ul>
    <a href="index.html"><img src="pictures/HBRS_Logo.svg" id="logo"></a>
    <a href="index.html">Home</a>
    <a href="pages/news.html">News</a>
    <div class="dropdown">
      <button class="dropbtn">Exercises
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="../pages/uebung1/uebung1-4.html">1.4 HTML Wireframe</a>
        <a href="../pages/uebung2/uebung2-2-a.html">2.2 a Dynamisches Verhalten</a>
        <a href="../pages/uebung2/uebung2-2-b.html">2.2 b Dynamisches Verhalten</a>
        <a href="../pages/uebung2/uebung2-3.html">2.3 Wireframe mit HTML und CSS</a>
        <a href="../pages/uebung3/uebung3-1.html">3.1 RWD (Desktop-First)</a>
        <a href="../pages/uebung3/uebung3-2.html">3.2 RWD (Mobile-First)</a>
        <a href="../pages/uebung3/uebung3-3.html">3.3 Responsiv mit Grid</a>
        <a href="../pages/uebung4/uebung4-1.html">4.1 Funktionen</a>
        <a href="../pages/uebung4/uebung4-2.html">4.2 Objekte</a>
        <a href="../pages/uebung4/uebung4-3.html">4.3 Fibonacci</a>
        <a href="../pages/uebung4/uebung4-4.html">4.4 Topsort</a>
        <a href="../pages/uebung5/1-performance.html">5.1 Performanz-Messungen von DOM-Operationen</a>
        <a href="../pages/uebung5/2-rednerliste.html">5.2 Rednerliste mit Zeitmessung</a>
        <a href="#">5</a>
      </div>
    </div>
  </ul>
</nav>
        `;
}