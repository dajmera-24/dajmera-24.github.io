---
title: 'Convex duality without the heavy machinery'
description: 'Lagrangian duality explained through one geometric picture, before any theorems about cones or subgradients.'
date: 2024-06-21
tags: ['Optimization', 'Duality']
---

Most introductions to convex duality open with cones, supporting hyperplanes, and a
wall of conditions. I think the picture comes first and the machinery second. Here is the
picture.

## The shadow

Plot, for every achievable constraint level, the best objective value you can reach. This
traces out a region. Duality is the statement that this region has a lower boundary made
of straight lines, and each line is a dual solution. The best line touching the region
from below gives the dual optimum.

## Why the gap closes

When the region is convex and you can wiggle the constraints a little in every direction,
the best supporting line touches exactly at the primal optimum. That is Slater's
condition, stated as a picture rather than a formula: there has to be room to wiggle.

## What this buys you

Once the geometry is clear, subgradients stop being mysterious — they are just the slopes
of supporting lines. I find that students who see the shadow first never lose the thread
when the formalism arrives.
