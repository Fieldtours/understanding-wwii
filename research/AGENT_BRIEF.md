# Research brief: "Understanding WWII" (DZ Charlie field guide)

A free, phone-first battlefield guide to the Second World War in Europe (1939–1945) for history
enthusiasts who will travel there. It belongs to a series (Easy Company, Spanish Civil War, Into Europe).
Accuracy matters more than volume. Readers are knowledgeable enthusiasts, so write in clear, concrete,
plain English (UK spelling) without hype.

## Your job
Research every stop listed for your region(s) in /home/claude/uwwii/Research/stoplist.json
(each entry is [id, name, priority 1-4, kind]). Keep the ids. You may correct a stop's name.
You may ADD up to 2 extra stops per region if something clearly essential is missing (give them new ids,
pri 3-4); never drop a listed stop unless it does not exist (then explain in "notes").

Use WebSearch and WebFetch (Wikipedia, Wikidata, official museum/memorial sites, CWGC, ABMC,
Volksbund, TracesOfWar, national tourism sites). The shell has NO internet; do not try curl.

## GPS (critical)
Every stop needs coordinates taken from a named source you actually opened (Wikipedia's coordinates in
the infobox / {{coord}}, Wikidata P625, the site's own contact page, CWGC/ABMC page, TracesOfWar).
Never estimate or round. Give at least 5 decimals when the source has them. Record the URL in
"coord_src". Point at the visitor entrance/main feature (museum building, memorial, cemetery gate).
Certainty "conf": "HIGH" = exact spot of the event/feature known; "MEDIUM" = close, exact spot uncertain;
"AREA" = general area only (e.g. a battlefield region); "DOC" = a museum, memorial or cemetery
(a place visited for its documentation rather than the exact event spot).

## Output
Write ONE JSON file per region: /home/claude/uwwii/Research/regions/<regionId>.json
(use the Write tool; make sure it is valid JSON — check with `python3 -m json.tool file > /dev/null`).

{
 "region": "<regionId>",
 "story": "120–200 words: what happened in this region during the war and why it matters to the whole story",
 "stops": [ {
   "id": "...", "name": "display name (max ~45 chars)", "short": "map label, max 20 chars",
   "town": "town/locality", "country": "country",
   "lat": 0.0, "lon": 0.0, "coord_src": "URL", "conf": "HIGH|MEDIUM|AREA|DOC",
   "cat": "one of: Battlefield, Landing beach, Bridge, Fortification, Bunker, Airfield, Museum, Memorial, Cemetery, Camp memorial, Headquarters, Ruins, Town, Codebreaking, Naval base",
   "kind": "battle|camp|historic", "pri": 1-4,
   "when": "historical date(s) of what happened here, e.g. '1 Sep 1939' or 'Jul–Oct 1940'",
   "sort": "ISO date of the key moment, e.g. 1939-09-01 (for ordering)",
   "min": visit minutes (integer: 20, 30, 45, 60, 90, 120, 180, 240),
   "text": "70–120 words: what happened here, who was involved, why it mattered. Concrete names, units, dates. No hype.",
   "look": "30–60 words: what the visitor sees today and what to look for",
   "plan": "20–50 words: practical visiting info checked on the official site in October 2026: opening pattern, whether booking is needed/advised, rough price or 'free', closures/works. Say 'check the website before you go' where things change.",
   "url": "official website URL (or best page)",
   "private": false,  (true only if the feature is on private land, viewed from the road)
   "solemn": true/false  (true for cemeteries, memorials to the dead, camps, prisons, execution or massacre sites, mass graves, civilian-bombing memorials),
   "disputed": "" or 1–2 sentences on a real disagreement between sources (numbers, myths, popular-book vs record),
   "links": [["Title (Wikipedia)","url"], ["Title (official)","url"]],
   "sources": ["url", "url"],
   "aar": {
     "when": "e.g. '6 JUN 1944' (uppercase month, the key date)",
     "ev": "ONE sentence, max 18 words, present tense, what happened here (e.g. 'British gliders land beside the canal bridge and seize it in ten minutes.')",
     "st": "55–85 words: 2–3 sentences of history from your text, then ONE sentence starting 'Today' describing what the visitor sees (from your look text)",
     "q": null for solemn stops, otherwise {"t":"a question about this site's history","o":["option","option","option"],"a":0|1|2,"x":"the real story, max 40 words"},
     "rem": "one sentence, max 30 words: one thing to remember"
   },
   "notes": "anything the editor should know (closures, travel advice, uncertainty)"
 } ]
}

Rules for "aar": use only facts from your own stop text; never ask about how many died/were killed;
vary which option (0/1/2) is correct; no questions at solemn stops (q: null).
For Russia/Belarus/any place with current government travel advice against travel, say so in "notes" and "plan".

When finished, reply with a 3-line summary: number of stops, anything you could not verify, any disputes found.
