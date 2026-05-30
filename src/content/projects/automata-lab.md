---
title: 'automata-lab'
summary: 'An interactive browser playground for finite automata and regular languages — draw a machine, run inputs, and watch subset construction unfold step by step.'
year: 2023
tags: ['Theory', 'Visualization', 'Web']
stack: ['TypeScript', 'Canvas', 'Vite']
repo: 'https://github.com/dhruvajmera/automata-lab'
demo: 'https://automata-lab.dhruvajmera.com'
order: 4
---

## What it does

A teaching tool for an introductory theory of computation course. You draw an NFA on a
canvas, feed it strings, and step through the determinization and minimization
algorithms with every intermediate state visualized.

## Why I built it

I was a teaching assistant for automata theory and kept drawing the same diagrams by
hand. This turns those diagrams into something students can manipulate themselves.

## Highlights

- Live NFA-to-DFA subset construction with animated state merging
- Hopcroft minimization shown partition by partition
- Shareable URLs that encode an entire machine
