---
title: 'The probabilistic method in three proofs'
description: 'Three short existence proofs that show why "a random object works" is one of the most powerful arguments in combinatorics.'
date: 2024-11-02
tags: ['Combinatorics', 'Probabilistic Method']
---

The probabilistic method proves that something exists by showing a random construction
produces it with positive probability. No example is ever built. Here are three proofs,
each shorter than the last, that converted me.

## 1. Large cuts exist

Every graph has a cut containing at least half its edges. Color each vertex by a fair
coin. Each edge is cut with probability one half, so the expected number of cut edges is
half the total — and some outcome must meet the average.

## 2. Ramsey lower bounds

Color the edges of the complete graph at random. The probability that a fixed set of
vertices is monochromatic is tiny; a union bound over all such sets stays below one when
the graph is small enough. So a coloring with no large monochromatic clique exists.

## 3. High girth and high chromatic number

This is the one that felt impossible before I saw it. A random sparse graph has few short
cycles in expectation; delete a vertex from each. What remains still cannot be colored
with few colors, because its independence number is too small.

Each proof replaces a construction with an average. That move — from "build it" to "show
the average is good enough" — is the whole method.
