---
title: 'spectral-cluster'
summary: 'A fast spectral clustering library with a Rust core and Python bindings, built around dynamic sparsifiers for graphs that update over time.'
year: 2025
tags: ['Algorithms', 'Graphs', 'Open Source']
stack: ['Rust', 'Python', 'PyO3', 'NumPy']
repo: 'https://github.com/dhruvajmera/spectral-cluster'
featured: true
order: 1
---

## What it does

`spectral-cluster` computes clusterings from the eigenvectors of a graph Laplacian. The
Rust core handles the heavy linear algebra and exposes a small, typed Python API for
analysis workflows.

## Why I built it

Existing libraries recompute everything from scratch when the graph changes. This one
maintains a spectral sparsifier incrementally, so streaming and online use cases stay
fast. It started as the implementation accompanying my sparsification paper and grew
into a general-purpose tool.

## Highlights

- Incremental sparsifier maintenance with polylogarithmic update cost
- Lanczos and LOBPCG eigensolvers with deterministic fallbacks
- Zero-copy data exchange between Rust and NumPy via PyO3
