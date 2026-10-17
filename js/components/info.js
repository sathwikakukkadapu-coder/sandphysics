import React from "react";

const Info = () => {
  return (
    <div className="Info">
      <h1>sandphysics</h1>
      <p>
        An interactive cellular automata and physics simulator built with Rust,
        WebAssembly, and WebGL.
      </p>
      <hr />
      <br />
      <p>
        Welcome, and thanks for playing! Enjoy experimenting with elements,
        creating reactions, and simulating physical phenomena in real time.
      </p>
      <br />
      <hr />
      <br />
      <h2>Element Information:</h2>
      <h4>Wall </h4>
      Indestructible barrier.
      <h4>Sand </h4>
      Sinks in water, piles naturally.
      <h4>Water </h4>
      Flows and puts out fire.
      <h4>Stone </h4>
      Forms arches and bridges; breaks down under intense pressure.
      <h4>Ice </h4>
      Freezes nearby water, highly slippery surface.
      <h4>Gas </h4>
      Rises quickly and is highly flammable.
      <h4>Cloner </h4>
      Replicates the first element it comes into contact with.
      <h4>Mite </h4>
      Crawls around, eats wood and plant matter, and slides across ice.
      <h4>Wood </h4>
      Sturdy building material, but combustible.
      <h4>Plant </h4>
      Absorbs water and thrives in moist conditions.
      <h4>Fungus </h4>
      Spreads steadily across organic material.
      <h4>Seed </h4>
      Sprouts and grows when planted in sand, soil, or fungus.
      <h4>Fire </h4>
      Ignites combustible materials and burns out over time.
      <h4>Lava </h4>
      Extremely hot, heavy liquid that melts objects on contact.
      <h4>Acid </h4>
      Corrodes and dissolves most matter it encounters.
      <h4>Dust </h4>
      Fine floating powder, explosive when exposed to spark.
      <h4>Oil </h4>
      Light flammable fluid that produces thick smoke when burned.
      <h4>Rocket </h4>
      Launches and scatters elements upon impact.
      <h4>Empty </h4>
      Erases any element on the canvas.
      <hr />
    </div>
  );
};

export default Info;
