# sandphysics

A falling sand physics simulation game built with Rust (WebAssembly), WebGL, and JavaScript.

![](Screenshot.png)

## Overview

**sandphysics** is an interactive cellular automata environment that simulates physical interactions between various elements such as sand, water, fire, lava, plants, gas, and acid in real time with fluid dynamics.

## Features

- **Cellular Automata Engine**: High-performance cellular simulation implemented in Rust and compiled to WebAssembly.
- **Fluid Dynamics**: Smooth fluid and smoke dynamics rendered with WebGL shaders.
- **Multiple Species & Elements**: Sand, dirt, water, acid, fire, lava, ice, plant, fungus, oil, and more.
- **Interactive Canvas**: Draw, mix, erase, and observe chain reactions directly in the browser.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [Rust](https://rustup.rs/) and [wasm-pack](https://rustwasm.github.io/wasm-pack/)

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Build WebAssembly
cd crate && wasm-pack build --target bundler && cd ..

# 3. Start development server
npm run start
```

Visit `http://localhost:8080` to play!

### Production Build

```bash
npm run build
```

The production assets will be output to the `dist/` folder.

## License

MIT License © 2026 Sathwika Kukkadapu
