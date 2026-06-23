0:00 — Cold open (webcam, no screen share yet)

▎ "Hey — quick walkthrough of the script generator I built. The goal was to take that style of YouTube video — you know, the Amish guy or the old grandmother who reveals some 'lost' trick that saves you money and blames an industry for hiding it — and make it so we can crank out scripts in that exact voice, consistently, on any topic. Let me show you how it works, and then I'll explain why it's built the way it is."

0:20 — Show the reference, frame the problem

▎ [Screen: the original YouTube video, or just the transcript scrolled]
▎
▎ "So this is the format we're copying. It's not random — it follows the same emotional pattern every time: you're quietly suffering, here's the hidden cause, here's the cheap fix, and here's the villain who profited from you not knowing. Once you see that pattern, you can rebuild it for any subject. That's basically what I encoded."

0:45 — Live demo of the app

▎ [Screen: the app at localhost, fresh page]
▎
▎ "Here's the app. It's a simple form. Up toI key once — it saves in your browser, so you
▎ never touch a config file. Then you've gotor is, their name, where their family camefrom, the topic, the cheap fix, the villain, a teaser for the next video, and a catchphrase."
▎
▎ [Click "Load example"]
▎
▎ "I'll hit 'Load example' so you can see a eep-your-house-cool episode. And there's a
▎ length slider down here, set to about 2,8018-minute video."
▎
▎ [Click "Generate script"]
▎
▎ "Now I hit generate — and it streams the sl spoken monologue, no headers, ready to read
▎ "Now I hit generate — and it streams the sl spoken monologue, no headers, ready to read
▎ to camera. When it's done I can copy it or

1:45 — The key idea: the form is the prompt

▎ [Screen: scroll the streaming output a bit
▎
▎ "Here's the important part. Those eight fo that change between episodes. Everythingelse — the structure, the voice, the pacing — is baked into a fixed template behind the scenes. So you're not
▎ re-prompting every time. You just feed it proven structure."

2:15 — Why it's structured this way (the 16

▎ [Screen: open 03_WHY_IT_WORKS.md]
▎
▎ "Let me explain the 'why,' because this isscript always runs in the same 16 beats, andeach one has a job. The cold open drops you into your own discomfort with hard numbers — that's pure
▎ first-15-seconds retention. Then authoritycredentials, because the whole audiencedistrusts experts — that's the premise."
▎
▎ [Scroll to beat 8 in the doc]
▎"This one's my favorite, and it's the tric you talk about who profits, you have toexplicitly deny a grand conspiracy — 'ther replace it with 'everyone who profits justquietly agrees not to mention it.' That's what keeps it credible instead of sounding like a crank. It's the single most important credibility move in the whole format."

3:15 — The accuracy guardrail (why I added i

▎ [Screen: scroll to the accuracy section]
▎
▎ "One thing I added on purpose: an accuracy guardrail. This format tells real people to climb into attics or hang things on windows, so I told the model to keep the actual mechanism true and to soften a claim rather than fabricate
▎ fake studies. Two reasons — one, safety anhannels get torn apart in the comments when
▎ a claim is physically wrong. The drama shoin fake physics. That makes the channel
▎ harder to debunk, which is better for us l

3:55 — The supporting files

▎ [Screen: file list — 01 through 04]
▎
▎ "Everything's documented too. There's the tion prompt that screens ideas through afive-point filter so we don't pick topics that won't work, the breakdown I just showed you, and a flattened copy-paste version of the full prompt if you ever want to run it outside the app. So you can use the nice form, or just grab the raw prompt — your call."

4:25 — Wrap

▎ [Screen: back to the app]
▎
▎ "So that's it. Paste a key, fill eight fields, get a full script in the channel's voice in about a minute — and the structure that makes the format actually wIf you want, I can wire up a topic-generatortab so it suggests the eight fields for yocripts. Let me know. Thanks!"