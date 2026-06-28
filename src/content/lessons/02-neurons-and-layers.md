---
order: 2
part: "Part I · The Object at Rest"
title: "Neurons, Weights, and Layers"
subtitle: "The 'neural' part, built from nothing but the multiply-and-add you already understand."
takeaway: "A neural network is just many tiny multiply-add units stacked in layers. 'Learning' means nudging billions of weights until the shapes that flow through come out right."
duration: "6 min"
---

In the last lesson a model was a box with one knob (`×2`). A **neural network** is millions of those boxes wired together. Nothing more mystical than that — let's build one in your head.

## One neuron = weighted vote

A single artificial neuron does three baby steps:

1. Take several input numbers.
2. **Multiply** each by its own weight (its own private knob).
3. **Add** the results into one number.

That's it. It's a *weighted vote*. If the inputs are `[2, 5]` and the weights are `[3, 1]`, the neuron outputs `2×3 + 5×1 = 11`. The **weights are the parameters** — the knobs from Lesson 1, just many of them now.

There's one extra spice: after the add, the neuron passes the result through a tiny "kink" function that lets it ignore weak signals (think: *only fire if the vote is strong enough*). This kink is what lets networks bend — without it, a million neurons would collapse back into a single straight-line rule. You don't need its name; you need the picture: **a switch that adds a little bend.**

## A layer = many neurons looking at the same input

Stack a row of these neurons side by side, all reading the same inputs but each with its *own* weights, and you get a **layer**. A layer takes a shape of numbers in and produces a new shape of numbers out — each output number being one neuron's weighted vote.

<div class="diagram">
<svg viewBox="0 0 440 200" role="img" aria-label="three layers of neurons connected">
  <g stroke="#262a3d" stroke-width="1">
    <line x1="70" y1="40" x2="200" y2="40"/><line x1="70" y1="40" x2="200" y2="100"/><line x1="70" y1="40" x2="200" y2="160"/>
    <line x1="70" y1="100" x2="200" y2="40"/><line x1="70" y1="100" x2="200" y2="100"/><line x1="70" y1="100" x2="200" y2="160"/>
    <line x1="70" y1="160" x2="200" y2="40"/><line x1="70" y1="160" x2="200" y2="100"/><line x1="70" y1="160" x2="200" y2="160"/>
    <line x1="200" y1="40" x2="360" y2="70"/><line x1="200" y1="40" x2="360" y2="130"/>
    <line x1="200" y1="100" x2="360" y2="70"/><line x1="200" y1="100" x2="360" y2="130"/>
    <line x1="200" y1="160" x2="360" y2="70"/><line x1="200" y1="160" x2="360" y2="130"/>
  </g>
  <g fill="#7c9cff">
    <circle cx="70" cy="40" r="13"/><circle cx="70" cy="100" r="13"/><circle cx="70" cy="160" r="13"/>
  </g>
  <g fill="#c08cff">
    <circle cx="200" cy="40" r="13"/><circle cx="200" cy="100" r="13"/><circle cx="200" cy="160" r="13"/>
  </g>
  <g fill="#ffb347">
    <circle cx="360" cy="70" r="13"/><circle cx="360" cy="130" r="13"/>
  </g>
  <text x="70" y="190" fill="#aab0c6" font-size="11" text-anchor="middle" font-family="monospace">input</text>
  <text x="200" y="190" fill="#aab0c6" font-size="11" text-anchor="middle" font-family="monospace">hidden layer</text>
  <text x="360" y="160" fill="#aab0c6" font-size="11" text-anchor="middle" font-family="monospace">output</text>
</svg>
<div class="cap">every line is a weight — a knob. a deep network has billions of these lines.</div>
</div>

## Depth = layers feeding layers

Now feed one layer's output shape into the *next* layer as its input. And again. And again. That stack of layers is why it's called **deep** learning — "deep" just means *many layers tall*. Early layers catch crude patterns; later layers combine those into richer ones. In a language model, early layers might notice "this is a verb," and deep layers assemble "this sentence is sarcastic."

The data **flows in one direction** — input at the bottom, answer at the top. We'll call that the **forward pass** in the next lesson. Remember the river image: numbers pour in, get reshaped layer by layer, and a final shape drips out the top.

## So what is "learning"?

Here's the only piece of magic, and it happens *before* the model is ever used by you:

<div class="callout" data-label="how the knobs get set">
Start with all billions of weights set to <em>random</em> numbers — total nonsense. Show the network an example with a known right answer. Measure how wrong it was. Then nudge every weight a hair in the direction that would have made it <em>less</em> wrong. Repeat across trillions of examples. Slowly, the knobs settle into a configuration that turns input shapes into useful output shapes.
</div>

That nudging process is **training**. It is enormously expensive and happens once. When training stops, the knobs **freeze** — and you're left holding the stone tablet from Lesson 1.

So when we say "a model," we mean: *a particular frozen setting of billions of weights, discovered by training, that reshapes inputs into outputs.* Everything you interact with — every chatbot — is that, plus a process that runs inputs through it. The "neural" part is real but humble: it's multiply, add, bend, stack. The wonder is in the *scale* and the *settling*, not in any single piece.
