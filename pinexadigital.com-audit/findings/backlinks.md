# Backlink Profile Findings — pinexadigital.com

**Score: 5/100 (directional floor score — see "On Scoring" below, not a confidence-weighted 7-factor score)** | Audit date: 2026-07-04
**Tier: 0 (Common Crawl + Verification crawler only — no Moz, Bing Webmaster, or DataForSEO configured)**

---

## Summary

pinexadigital.com is a newly-launched site with **no measurable backlink profile** as of this audit. It does not appear in Common Crawl's most recent web graph snapshot at all (not just "low ranked" — genuinely absent from the crawl), meaning no in-degree, PageRank, or harmonic centrality data exists for the domain. No candidate backlinks were available to run through the verification crawler (no known links list was supplied, and no free discovery/search API is available at Tier 0 to surface candidates). The two `sameAs` social profile URLs in the site's JSON-LD were checked directly: the Twitter/X handle returns a 404 consistent with a non-existent, private, or unclaimed account, while the LinkedIn page could not be conclusively checked due to anti-automation blocking.

This is expected and not itself a defect — brand-new sites have no backlink history. It is reported here as a baseline/opportunity area, not as evidence of a problem with the site itself.

---

## Data Collected

### Common Crawl Web Graph — `commoncrawl_graph.py pinexadigital.com`
**Source: Common Crawl (domain-level, confidence: 0.50) | Release: cc-main-2026-jan-feb-mar | Freshness: quarterly**

| Metric | Value |
|---|---|
| In crawl (any presence) | **False** |
| In PageRank/centrality rankings | **False** |
| PageRank | N/A |
| Harmonic centrality | N/A |
| Referring domains (CC sample) | 0 |

**Interpretation (per CC validation rules):** A domain absent from Common Crawl's graph should **not** be read as "low authority" — it means CC has not yet crawled/indexed the domain in this snapshot. This is consistent with a site launched too recently to have been picked up by CC's last quarterly crawl (CC-MAIN releases run on a roughly quarterly cadence), and does not rule out backlinks existing elsewhere that CC simply hasn't seen. No referring domains, no top-referrer list, and no PageRank/centrality figures are available — full stop, not "zero and confirmed."

### Backlink Verification Crawler — `verify_backlinks.py`
**Not run.** This script verifies a supplied candidate list of known/suspected backlinks against a target URL. No candidate list was provided, and Tier 0 has no search/discovery API to generate one (that capability requires Moz, Bing Webmaster, or DataForSEO — all unconfigured). **Result: no backlinks to verify, none found, none ruled out.**

### sameAs Social Profile Check (entity/authority signal, not a backlink)
**Source: direct HTTP check (confidence: 0.60 — see caveats per URL)**

| Profile | URL | Result | Notes |
|---|---|---|---|
| Twitter/X | `twitter.com/pinexadigital` → resolved to `x.com/pinexadigital` | **HTTP 404** — "We're unable to show this account. The account may be private, deleted, or only available on the app." | Reasonably strong signal the handle is not a live public account. Not a false-negative-prone platform for this specific message string. |
| LinkedIn | `linkedin.com/company/pinexadigital` | **HTTP 999** | LinkedIn returns 999 to block automated/non-browser requests regardless of whether a page exists — this is **inconclusive**, not evidence the page is missing. Requires manual browser check to confirm. |

**Recommendation:** Manually verify the LinkedIn company page in a logged-in browser session. If either profile does not yet exist, create both — `sameAs` currently points at unverified/likely-broken URLs, which weakens rather than strengthens the entity signal it's meant to provide (see also `findings/schema.md` finding #8 history — this was flagged as missing, then added, but appears not to have been created/verified before being referenced).

---

## What Works

- Domain is clean and unambiguous (no negative CC signal — it's simply new, not penalized)
- JSON-LD already includes a `sameAs` array structurally ready to carry real profile URLs once created (see `findings/schema.md`)
- No toxic, spammy, or manipulative link patterns of any kind — a blank slate is a better starting position than a profile full of low-quality links

---

## Critical

None — there is nothing to flag as critical at the backlink layer for a pre-launch/newly-launched site. (Do not confuse this with Technical SEO's Critical findings around robots.txt/noindex in `findings/technical.md`, which are the actual blockers preventing this site from ever accumulating organic backlinks.)

---

## High

### 1. Zero referring domains — no baseline authority exists yet
No backlink or authority signal exists anywhere in the free-tier data sources checked. Until the indexing blockers documented in `findings/technical.md` (robots.txt `Disallow: /`, global `noindex`) are fixed, the site cannot be organically discovered or linked to at scale even if outreach begins.
**Recommendation:** Treat backlink acquisition as a Phase 2+ activity, gated behind fixing indexability first — links to a noindexed site still pass no ranking value to Google.

### 2. sameAs URLs point to unverified/likely-inactive social profiles
Twitter/X returns 404; LinkedIn is unverifiable via automated check. If neither profile is real and reachable, the `sameAs` array is actively misleading to Google's Knowledge Graph rather than helpful.
**Recommendation:** Create (or confirm) both profiles with matching brand name/logo before relying on them as entity signals. Do not leave `sameAs` pointing at handles that don't resolve.

---

## Medium

### 3. No directory or citation presence checked/found
No Google Business Profile, Clutch.co, or industry directory links were found or verifiable through Tier 0 sources (consistent with `findings/schema.md` and `findings/content.md` findings that these don't exist yet).
**Recommendation:** These are typically the first real, low-effort backlinks/citations a new local-ish service business can acquire — see Phase 4 of the existing action plan.

---

## Low

### 4. Tier 0 data ceiling limits future re-checks
Without Moz, Bing Webmaster, or DataForSEO, future backlink audits will only be able to detect CC-crawled links (quarterly lag) and verify manually-supplied candidate URLs — no discovery of new inbound links is possible.
**Recommendation:** Once real backlinks start appearing (directories, guest posts, press), configure at least Moz's free tier (2,500 rows/month) to unlock referring-domain discovery, DA/spam scoring, and anchor text data. `python scripts/backlinks_auth.py --check` documents setup.

---

## On Scoring

Per the confidence-weighted scoring model, a Backlink Health Score requires data across 7 factors (referring domains, domain quality distribution, anchor text naturalness, toxic link ratio, link velocity, follow/nofollow ratio, geographic relevance). At Tier 0, for this domain, **only 1 of 7 factors has any data at all** (referring domain count — and that data point is "not found in CC," not a confidently-measured zero). Per the skill's own data-integrity rule, this is insufficient to produce a legitimately confidence-weighted 0-100 score, and the automated report validator (`validate_backlink_report.py`) correctly flags a computed score under these conditions as misleading.

The **5/100 shown above is a directional floor score**, included only for consistency with this audit's category-scoring format (all other categories carry a numeric score used in the weighted total). It reflects the plain fact that the site currently has no measurable backlinks or authority signals — it is **not** a confidence-weighted assessment of link quality, toxicity, or velocity, none of which can be measured yet. Treat this category as **"insufficient data / not yet applicable"** rather than as a graded performance score, and exclude or down-weight it accordingly if it's being rolled into the site's overall health score.

---

## Validator Output

`validate_backlink_report.py` was run against the collected data. It correctly returned `FAIL` on a first pass (numeric score with only 1/7 factors populated) and an `info` note (do not interpret CC absence as "low authority"). Both are addressed above via the floor-score caveat and the corrected interpretation language. No verification-crawler false negatives or reciprocal-link issues applicable — no verify data or parsed homepage data was in scope for this task.

---

## Data Source & Confidence Key

- Common Crawl domain-level graph — confidence 0.50, freshness quarterly
- Direct HTTP check of sameAs URLs — confidence 0.60 (Twitter/X), inconclusive (LinkedIn, blocked by anti-bot response)
- Verification crawler — not applicable, no candidate links supplied
- Moz / Bing / DataForSEO — not configured (Tier 0)

Cross-reference: for on-page authority signals (schema `sameAs`, entity consistency), see `findings/schema.md`. For the indexability blockers that gate all future backlink growth, see `findings/technical.md`. For citation/review platform gaps (GBP, Clutch), see `findings/content.md`.
