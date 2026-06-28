---
order: 5
part: "Part II · Bringing It to Life"
title: "The Loop You Already Have"
subtitle: "How a string of single shots fakes a flowing thought — autoregression."
takeaway: "Text generation is already a loop: predict one word, feed it back, predict the next. The model's 'continuity' is an external loop stitching together many separate forward passes."
duration: "6 min"
---

In Lesson 4 a forward pass produced *scores for the next word* — just one word. So how does a model write whole paragraphs? With a loop. And recognizing that this loop *already exists* is the first half of answering your big question.

## Predict one, paste it back, repeat

The trick is called **autoregression** (fancy word, simple act): the model's own output becomes part of its next input.

```
"The cat"                → forward pass → "sat"
"The cat sat"            → forward pass → "on"
"The cat sat on"        → forward pass → "the"
"The cat sat on the"   → forward pass → "mat"
```

Each line is a **complete, separate forward pass** — a fresh lightning bolt from Lesson 4. The model predicts *one* word, that word is glued onto the text, and the whole thing is shoved back in to predict the next. Do this a few hundred times and you get an essay. The flowing answer you see is **many discrete shots played fast**, like film frames becoming motion.

<div class="diagram">
<svg viewBox="0 0 440 150" role="img" aria-label="autoregressive loop">
  <rect x="150" y="20" width="140" height="44" rx="8" fill="#161927" stroke="#262a3d"/>
  <text x="220" y="47" fill="#e7e9f3" font-size="12" text-anchor="middle" font-family="monospace">forward pass</text>
  <path d="M290 42 H360 V100 H110 V42 H150" fill="none" stroke="#7c9cff" stroke-width="2" marker-end="url(#c)"/>
  <text x="220" y="120" fill="#aab0c6" font-size="11" text-anchor="middle" font-family="monospace">append the new word, feed it all back in</text>
  <text x="325" y="34" fill="#ffb347" font-size="11" font-family="monospace">+1 word</text>
  <defs><marker id="c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#7c9cff"/></marker></defs>
</svg>
<div class="cap">a single word-predictor, wrapped in a loop, becomes a paragraph-writer</div>
</div>

## You were right — there *is* a loop

When you said the model felt like it should be "a stream… a continuous machine, the loop happening inside latent space," you were half-correct, and it's worth being precise about *which* half:

- ✅ **There is genuinely a loop.** Generation is recurrent — output feeds back to input. It's not one static answer; it's an evolving trajectory.
- ❌ **But the loop is on the *outside*, not the inside.** It lives in the *software wrapper* that pastes words back, not in the model's own latent landscape. Between each word, the model fully **stops** (Lesson 4). The loop is a person clapping to keep a beat for a musician who freezes silent between every clap.

So the "continuous machine" you intuited is real as an *illusion produced by an external clock* — and the clock's tick is **one word**. That phrase, *the token clock*, becomes the hinge of Part IV. (A "token" is just the technical name for one chunk of text — roughly a word.)

## Why this matters: thinking out loud is buying compute

Remember the limit from Lesson 4 — fixed compute per pass, no "think harder" dial? The loop is the first workaround. When you tell a model to "think step by step" and it writes out its reasoning, something sneaky and real is happening:

<div class="callout" data-label="why 'show your work' actually works">
Every word the model writes is another forward pass — another lightning bolt of computation. So writing a long chain of reasoning literally <strong>buys the model more thinking time</strong>. The words on the page are scaffolding it climbs to reach harder conclusions. Its only way to "think longer" is to <em>think out loud</em>, because words are the sole currency that purchases extra passes.
</div>

Sit with how strange that is: the model cannot ponder privately. To reason more, it *must* externalize — spill the thought into visible tokens — because each token is a heartbeat and it has no other heartbeat available. A human can stare at a wall and reason in total silence for a minute. This model, to do the equivalent, has to keep talking.

That constraint — **thinking is welded to output** — is not a quirk; it's a deep structural fact about the standard architecture. Hold it next to your brain, which decouples thinking-time from speaking-time completely. In the next lesson we'll question whether the Q&A frame itself is even the right way to engage this machine — exactly the instinct you had.
