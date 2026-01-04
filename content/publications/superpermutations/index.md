---
title: 'An O(n) Construction of Superpermutations'

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me

date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: TBD
publication_short: TBD

abstract: A superpermutation is a sequence that contains every permutation of n distinct symbols as a contiguous substring. For example, a valid example for three symbols is a sequence that contains all six permutations. This paper introduces a new algorithm that constructs such sequences more efficiently than existing recursive and graph-theoretic methods. Unlike traditional techniques that suffer from scalability and factorial memory demands, the proposed approach builds superpermutations directly and compactly. This reduces space complexity to linear in the number of symbols, enabling the construction of larger sequences previously considered impractical under the factorial growth typical of other approaches.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
  - Combinatorics
  - Algorithms

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.48550/arXiv.2505.09628

# Custom links
links:
  - type: pdf
    url: "https://arxiv.org/pdf/2505.09628"
  - type: code
    url: https://github.com/dajmera-24/Superpermutation-Algorithm

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Wikipedia**](https://en.wikipedia.org/wiki/Superpermutation)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
