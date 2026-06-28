---
order: 8
part: "Part III · Reaching Inside"
title: "Thinking by Settling"
subtitle: "The loop you imagined — computation that circles inside latent space until it relaxes into an answer."
takeaway: "Some models compute by iterating a latent state until it settles, like a ball rolling to the bottom of a valley. This is the real 'loop inside latent space' — but it still only runs when poked."
duration: "7 min"
---

This is the lesson where your exact phrase — *"the loop happening inside latent space"* — becomes a real, named family of machines. Not the external word-by-word loop of Lesson 5, but computation that **circles inside the latent landscape until it relaxes into a result.**

## A different way to compute: relax toward an answer

The forward pass (Lesson 4) walks straight up the layers, once, and stops. But there's another way to get an answer: instead of marching forward, **start somewhere and keep adjusting until the state stops changing.**

The mental image is a ball on a hilly landscape. You drop it anywhere; it rolls downhill, sloshes around, and eventually **settles** at the bottom of a valley. The resting spot *is* the answer. The model defines the *shape of the hills*; the computation is the *rolling-until-still*.

<div class="diagram">
<svg viewBox="0 0 420 160" role="img" aria-label="a ball settling into a valley">
  <path d="M20 40 Q110 200 210 110 Q310 40 400 120" fill="none" stroke="#262a3d" stroke-width="2"/>
  <circle cx="60" cy="58" r="8" fill="#7c9cff" opacity="0.4"/>
  <circle cx="120" cy="120" r="8" fill="#7c9cff" opacity="0.6"/>
  <circle cx="175" cy="128" r="8" fill="#7c9cff" opacity="0.8"/>
  <circle cx="205" cy="118" r="9" fill="#c08cff"/>
  <text x="205" y="150" fill="#aab0c6" font-size="10" text-anchor="middle" font-family="monospace">settled = the answer</text>
  <text x="60" y="40" fill="#aab0c6" font-size="10" text-anchor="middle" font-family="monospace">start (noise)</text>
</svg>
<div class="cap">computation as <em>descent to equilibrium</em> — many small steps, looping inside the landscape</div>
</div>

This is iterative. It **loops** — adjust, check, adjust, check — and the loop happens *inside* the latent space, on the state itself, not by emitting words. That is precisely the thing you were picturing.

## Three real flavors of this

**Diffusion models** — the engines behind AI image generation, and increasingly text. They start with pure *noise* (a random point) and iteratively **denoise** it, step by step, until it relaxes into a coherent image or sentence. Each step nudges the latent point toward the "valley" of realistic data. Generation *is* a settling process — dozens of internal loops before anything is shown. The closest mainstream thing to a "continuous machine relaxing toward a sample."

**Equilibrium models** — instead of stacking, say, 50 distinct layers, they apply *one* layer over and over and **solve for the point where applying it again changes nothing** — the equilibrium. Effectively infinite depth. The model "thinks" by finding the fixed point of its own dynamics: run until still.

**Latent reasoning** ("thinking in continuous space") — newer research where, instead of reasoning out loud in words (Lesson 5's expensive trick), the model loops a *latent thought-state* back into itself silently, only decoding to text at the very end. This directly fixes the "thinking is welded to output" problem: the reasoning loop lives in the landscape, private, and only the conclusion surfaces. It is your instinct, implemented.

## Why this is genuinely closer to what you imagined

Compare the two loops you've now met:

| | External loop (Lesson 5) | Internal settling (this lesson) |
|---|---|---|
| Where it loops | software pasting words back | the latent state itself |
| Visible? | yes — every step is a word | no — silent until it settles |
| Thinking tied to output? | yes | **no — decoupled** |
| Feels like | flip-book of stills | a process relaxing |

The internal-settling machines **decouple thinking from talking**. They can churn in latent space for many steps and surface only the result. That's a real step toward "a stream… a continuous machine."

## But — be honest about the ceiling

Here's the catch that sets up Part IV. Even these settling machines have a hard edge:

<div class="callout warn" data-label="the limit that remains">
The ball only rolls <strong>when you drop it</strong>. The settling starts on an input and <strong>stops</strong> once equilibrium is reached. Then — exactly like the forward pass — the machine goes inert. It is a more elaborate, more loop-like lightning bolt, but it is still a bolt: triggered, finite, and followed by stillness. It does not run on its own.
</div>

So we've climbed a long way from "one straight shot": we now have computation that loops inside latent space and settles into answers without narrating. This is the richest "loop inside the model" that mainstream architectures offer, and much of it is real today (diffusion) or active research (latent reasoning).

But none of it is *never resting.* Every machine so far waits to be poked, runs, and freezes. To chase the last piece of your intuition — a model that doesn't stop between questions because it never really started or stopped — we have to change the architecture itself. That's Part IV.
