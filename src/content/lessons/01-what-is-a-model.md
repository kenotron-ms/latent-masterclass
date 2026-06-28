---
order: 1
part: "Part I · The Object at Rest"
title: "What Is a Model, Really?"
subtitle: "Before neurons, before AI — just a frozen function from one shape to another."
takeaway: "A trained model is a static object: a giant fixed lookup of numbers that turns an input shape into an output shape. It does nothing until something runs it."
duration: "5 min"
---

You told me you know **shapes** — not the specifics. That's the perfect place to start, because at the bottom, that's all a model is: a machine for turning one shape into another shape.

## The simplest possible model

Imagine a box. You feed in a number, it gives back a number.

```
3  →  [ box ]  →  6
5  →  [ box ]  →  10
```

You don't know what's inside, but you can guess the rule: *multiply by 2*. That rule — `output = input × 2` — **is a model**. The number `2` is the only thing the box needs to remember. We call a number like that a **parameter**: a knob the box was set to.

That's the whole idea. A model is:

1. A **shape of input** (here: one number),
2. A **shape of output** (here: one number),
3. A pile of **parameters** (here: just `2`),
4. And a fixed **recipe** for combining them.

A real language model is exactly this, except the input shape is "a few thousand numbers representing your text," the output shape is "a probability for every possible next word," and the pile of parameters isn't one number — it's *billions* of them.

## "Shape" is the right instinct

Hold onto the word *shape*. Engineers literally use it. They'll say a chunk of data has "shape `[1, 512, 768]`" — meaning a 3-dimensional block of numbers, 1 deep, 512 across, 768 tall. Everything that happens inside a model is **shapes flowing into other shapes**: a block of numbers goes in, gets multiplied and folded and reshaped step after step, and a different block comes out.

You don't need the arithmetic. You need the picture: *rivers of numbers changing shape as they pass through fixed gates.*

<div class="diagram">
<svg viewBox="0 0 460 120" role="img" aria-label="input shape transforming into output shape">
  <rect x="10" y="40" width="40" height="40" rx="6" fill="#7c9cff" opacity="0.85"/>
  <text x="30" y="105" fill="#aab0c6" font-size="11" text-anchor="middle" font-family="monospace">input</text>
  <path d="M60 60 H120" stroke="#6c7290" stroke-width="2" marker-end="url(#a)"/>
  <rect x="125" y="25" width="70" height="70" rx="8" fill="#161927" stroke="#262a3d"/>
  <text x="160" y="65" fill="#c08cff" font-size="11" text-anchor="middle" font-family="monospace">params</text>
  <path d="M200 60 H260" stroke="#6c7290" stroke-width="2" marker-end="url(#a)"/>
  <rect x="265" y="20" width="20" height="80" rx="4" fill="#7c9cff" opacity="0.5"/>
  <rect x="290" y="20" width="20" height="80" rx="4" fill="#7c9cff" opacity="0.7"/>
  <rect x="315" y="20" width="20" height="80" rx="4" fill="#7c9cff" opacity="0.9"/>
  <text x="300" y="113" fill="#aab0c6" font-size="11" text-anchor="middle" font-family="monospace">output shape</text>
  <path d="M345 60 H405" stroke="#6c7290" stroke-width="2" marker-end="url(#a)"/>
  <text x="430" y="64" fill="#ffb347" font-size="13" text-anchor="middle" font-family="monospace">"the"</text>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#6c7290"/></marker></defs>
</svg>
<div class="cap">numbers in → fixed parameters reshape them → numbers out → decoded to a word</div>
</div>

## The part that matters for everything later

Here is the idea this whole masterclass hinges on, so let it land:

<div class="callout" data-label="the crux">
A trained model is <strong>at rest</strong>. The parameters are frozen — set once during training and never moving again. The model is not "thinking." It is a stone tablet of numbers. It does <em>nothing at all</em> until some outside process picks it up and runs an input through it.
</div>

This is wildly different from your brain, which is never a stone tablet — but we'll get there. For now, just separate two things that are easy to blur together:

- **The model** — the frozen numbers. The object. (This is "the model at rest" you intuited.)
- **The act of running it** — pushing an input through to get an output. The *process*.

When people say "the AI," they usually smear these together. Keeping them apart is the key that unlocks every later question — including yours about whether a model can ever stop being a stone and start being a river.
