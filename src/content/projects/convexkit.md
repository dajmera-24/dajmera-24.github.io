---
title: 'convexkit'
summary: 'A small, readable convex optimization solver in JAX — first-order methods with automatic differentiation and clean convergence diagnostics.'
year: 2024
tags: ['Optimization', 'Numerical', 'Open Source']
stack: ['Python', 'JAX']
repo: 'https://github.com/dhruvajmera/convexkit'
demo: 'https://convexkit.dhruvajmera.com'
order: 3
---

## What it does

`convexkit` implements proximal gradient, accelerated gradient, and ADMM for a curated
set of convex problems. Every method is written to be read, with the relevant inequality
from the convergence proof quoted next to the code that realizes it.

## Why I built it

I wanted a solver where the gap between the textbook proof and the running code was as
small as possible — useful both for coursework and for prototyping research ideas.

## Highlights

- Differentiable solves via JAX, so problems can sit inside a larger learning pipeline
- Convergence certificates printed alongside each run
- A notebook gallery mapping each method back to its analysis
