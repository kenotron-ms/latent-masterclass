---
order: 4
part: "Part II · Bringing It to Life"
title: "The Forward Pass: One Single Shot"
subtitle: "What actually happens the instant you press enter — and why it's so brief."
takeaway: "Inference is one push of an input shape up through the frozen layers, producing one output. It is a single, finite event with a hard beginning and end — not an ongoing activity."
duration: "5 min"
---

The model is frozen. Latent space is its inner landscape. Now: what happens when you actually *use* it? That single act has a name — the **forward pass** — and understanding its sharp edges is what lets us later ask why a model "rests."

## One push, bottom to top

You give the model an input. It becomes a point (Lesson 3). That point flows **forward** — bottom layer to top layer, once — getting reshaped at each step. Out the top comes the output shape. For a language model, that output is a **score for every possible next word**: "the" 12%, "a" 9%, "cat" 0.3%, and so on for ~100,000 words.

```
your text → [numbers] → layer 1 → layer 2 → ... → layer N → scores for next word
            └───────────────── one forward pass ─────────────────┘
```

That's the entire event. It's called *inference* because the model is *inferring* the output from the input using its frozen knobs. No knobs change. Nothing is remembered. It is pure, one-directional flow.

## It has a hard start and a hard stop

This is the property to burn in:

<div class="callout" data-label="the shape of the event">
A forward pass is <strong>finite and bounded</strong>. It begins when you feed an input, runs a fixed amount of computation, and <strong>ends</strong>. The moment it ends, the model is inert again — back to being a stone tablet. There is no leftover activity, no humming, no continuation. Compute happens <em>only</em> during the push, and the push is short.
</div>

Compare this to a candle versus a lightning bolt. Your brain is a candle — always lit, always burning, even quietly. A forward pass is a lightning bolt: a brief, total discharge that illuminates everything for an instant and then is gone, leaving darkness until the next strike.

## "But it feels like it's thinking for a while…"

It can — and that feeling is the doorway to your whole question. When a model writes a long answer, it is *not* doing one long think. It is firing **many separate lightning bolts**, one per word, each a complete forward pass. We'll unpack that in the next lesson, because it's where the illusion of a continuous mind comes from.

## Why "single shot" limits things

Because a forward pass is fixed in size, the model **cannot choose to think longer** on a hard problem within a single pass. A toddler's question and a proof of a theorem each get *exactly the same amount* of computation per pass — one trip up the layers. The model can't say "hang on, let me ponder this one." It gets one push, then must commit to an output.

That rigidity — *fixed compute per pass, no dial for "think harder"* — is a real limitation, and nearly every clever technique in the later lessons is, at heart, a way to **buy more computation** that the single forward pass won't give you on its own. Some buy it with extra words (Lesson 5). Some buy it by looping inside latent space (Lesson 8). Some change the architecture so the machine keeps state and runs on (Part IV).

For now, lock in the picture: **inference = one bounded push, start to stop, then back to stone.** Hold it next to your candle-brain. The gap between them is the entire subject of this masterclass.
