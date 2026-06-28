# Latent — A Masterclass

A beginner-first course on neural networks, latent space, and "continuous machines" —
built from first shapes, ending at the open research frontier.

It starts from *"I only know shapes, nothing specific"* and walks all the way to the
distinction between **persistent state** and **endogenous dynamics** — the gap between
a model that *resumes* and a mind that *lives*.

Built with [Astro](https://astro.build).

## Curriculum

**Part I · The Object at Rest**
1. What Is a Model, Really?
2. Neurons, Weights, and Layers
3. Latent Space: The Hidden Middle

**Part II · Bringing It to Life**
4. The Forward Pass: One Single Shot
5. The Loop You Already Have
6. The Oracle Trap

**Part III · Reaching Inside**
7. Steering & Probing the Landscape
8. Thinking by Settling

**Part IV · Machines That Run**
9. The Token Clock
10. Continuous Machines: State That Carries
11. The Brain That Never Rests
12. Synthesis: Stone, River, Flame

## Develop

```bash
npm install
npm run dev       # live dev server at http://localhost:4321
npm run build     # static build to ./dist
npm run preview   # serve the built site
```

## Structure

- `src/content/lessons/` — the twelve lessons as Markdown (with inline SVG diagrams)
- `src/pages/index.astro` — landing page + curriculum
- `src/pages/lessons/[...slug].astro` — lesson renderer with prev/next nav
- `src/layouts/Base.astro` — shared layout
- `src/styles/global.css` — the latent-space theme
