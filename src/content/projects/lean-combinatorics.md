---
title: 'lean-combinatorics'
summary: 'A growing Lean 4 formalization of classical extremal and probabilistic combinatorics, with machine-checked proofs of the probabilistic method.'
year: 2024
tags: ['Formal Methods', 'Combinatorics', 'Open Source']
stack: ['Lean 4', 'Mathlib']
repo: 'https://github.com/dhruvajmera/lean-combinatorics'
featured: true
order: 2
---

## What it does

A library of formally verified proofs in combinatorics, built on top of Mathlib. The
current focus is the probabilistic method: existence results proven by showing a random
object succeeds with positive probability.

## Why I built it

Writing these proofs in Lean forces a level of precision that ordinary mathematics often
hides. It is also the best way I know to learn a theorem inside out. The repository
doubles as a teaching resource for a student reading group.

## Contents

- Ramsey lower bounds via the first-moment method
- Existence of graphs with high girth and high chromatic number
- The Lovasz Local Lemma, symmetric form, with a constructive variant in progress
