function App() {
  return (
    <main>
      <section>
        <h1 className="head-title">Smoke & Mirrors</h1>
      </section>
      
      <section>
        <p className="small-text">Rest, replenish, and venture forth.</p>
      </section>
      <article className="item-card">
        <div className="item-visuals">
          <div className="food-image-container">
            <div className="food-image">🍢</div>
            
            <ul>
              <li className="food-category">Category: Food</li>
              <li className="rarity">Rarity: Common</li>
            </ul>
          </div>

          <section>
            <h2 className="food-name">Dragon Skewer</h2>
          </section>
        </div>
      </article>
    </main>
  );
}

export default App;