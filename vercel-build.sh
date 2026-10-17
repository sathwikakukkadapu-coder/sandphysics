#!/bin/bash
set -e

echo "=== 1/4 Installing Rust & Cargo ==="
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable
source "$HOME/.cargo/env"
export PATH="$HOME/.cargo/bin:$PATH"

echo "=== 2/4 Adding wasm32-unknown-unknown target ==="
rustup target add wasm32-unknown-unknown

echo "=== 3/4 Installing wasm-pack ==="
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

echo "=== 4/4 Building Webpack distribution ==="
if command -v pnpm &> /dev/null; then
  pnpm run build
else
  npm run build
fi

echo "=== Build finished successfully ==="
