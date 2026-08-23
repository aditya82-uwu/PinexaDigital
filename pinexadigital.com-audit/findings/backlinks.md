# Backlink Profile Findings — pinexadigital.com

**Score: 5/100 (directional floor score — see "On Scoring" below, not a confidence-weighted 7-factor score)** | Audit date: 2026-08-23 (re-verified; previous audit: 2026-07-04, same score)
**Tier: 0 (Common Crawl + Verification crawler only — no Moz, Bing Webmaster, or DataForSEO configured)**

---

## Summary

Re-checked today after the site rebuild. **The bottom-line conclusion from the 2026-07-04 audit still holds and was re-verified, not assumed:** pinexadigital.com has no measurable backlink profile. A forced, non-cached re-download of Common Crawl's web graph (`--update`, timestamp 2026-08-23T09:54:27Z, still release `cc-main-2026-jan-feb-mar` — no newer quarterly CC snapshot has shipped since the last audit) confirms the domain is still absent from the crawl entirely: no in-degree, no PageRank, no harmonic centrality, zero referring domains sampled. WHOIS lookup confirms this is a genuinely young domain (registered 2026-06-21 via NameCheap, ~2 months old) with no expired-domain heritage risk, consistent with "too new to be crawled" rather than any penalty or negative signal.

One material change since the last audit: the site's indexability blockers are now **fixed**. `robots.txt` was previously `Disallow: /` (flagged Critical in `findings/technical.md`); it now correctly reads `Allow: /` with a sitemap reference, and the homepage `<meta name="robots">` is `index, follow`. This doesn't create backlinks by itself, but it removes the prior audit's stated precondition for backlink acquisition to be worthwhile at all — the site can now actually be discovered and indexed.

The `sameAs` entity URLs also changed since last audit (now LinkedIn `+ Instagram` rather than LinkedIn `+ Twitter/X`). Checked directly today: Instagram (`instagram.com/pinexadigital`) returns a clean HTTP 200 — live and reachable. LinkedIn (`linkedin.com/in/pinexa-digital-064059420`) returns HTTP 999, LinkedIn's standard anti-automation block for non-browser requests — this is inconclusive, not evidence of a broken link (same finding independently reached in `findings/schema.md`). Note this LinkedIn URL is a **personal profile** (`/in/`), not a company page.

No known/candidate backlinks were supplied for this task, so `verify_backlinks.py` had nothing to check — this is expected at Tier 0 with no discovery API and is not itself a finding.

---

## What Works

- Re-verification used a forced, non-cached Common Crawl download today, not a reused cache — the "not in CC" conclusion is current as of 2026-08-23, not stale
- Domain is clean: no toxic/spammy link history of any kind, and confirmed genuinely new (not a recycled/expired domain with off-topic backlink baggage)
- `sameAs` JSON-LD correctly wired to real, matching URLs in the live homepage source (`https://www.linkedin.com/in/pinexa-digital-064059420`, `https://www.instagram.com/pinexadigital/`)
- Instagram profile confirmed live (HTTP 200)
- The indexability blockers that previously made backlink-building premature (sitewide `robots.txt` disallow) are now resolved — link building is no longer gated behind a technical fix

---

## Findings

### 1. Zero referring domains / no backlink authority signal exists (High)
**Evidence:** Forced re-download of Common Crawl's web graph (release `cc-main-2026-jan-feb-mar`, the current latest release — no newer snapshot has published since 2026-07-04) still returns `in_crawl: false`, `in_rankings: false`, `pagerank: null`, `referring_domains_sample: 0` for both `pinexadigital.com` and `www.pinexadigital.com`. No other free discovery source is configured at Tier 0.
**Recommendation:** Expected for a ~2-month-old domain; not a defect. Begin structured outreach now that indexability is fixed (see Finding 3).

### 2. LinkedIn `sameAs` link uses a personal profile and is unverifiable by automated check (Medium)
**Evidence:** `https://www.linkedin.com/in/pinexa-digital-064059420` returns HTTP 999 (LinkedIn's standard bot-block response, not necessarily a dead link). It is a personal-profile URL pattern (`/in/`) rather than a company page. Independently corroborated in `findings/schema.md` Finding 4.
**Recommendation:** Manually confirm in a logged-in browser. If PinexaDigital has (or creates) a LinkedIn **Company Page**, switch `sameAs` to that URL — it is a stronger, more canonical entity signal for `Organization`/`ProfessionalService` schema than a personal profile, and company pages are themselves a legitimate first inbound link/citation source.

### 3. No directory or citation presence yet (Medium)
**Evidence:** No Google Business Profile, Clutch.co, DesignRush, GoodFirms, or industry directory links found or verifiable through any Tier 0 source. Consistent with `findings/content.md` and `findings/schema.md` findings on missing review/citation infrastructure.
**Recommendation:** With indexability now fixed, this is the highest-leverage, lowest-effort starting point for real backlinks on an agency/professional-services site:
  - List on **Clutch, DesignRush, GoodFirms, and Google Business Profile** — free, high-authority, industry-relevant referring domains
  - Add client **testimonial links** (link back to client sites in exchange for a testimonial/case study credit, and ask satisfied clients to link back to pinexadigital.com from their own site footer/about page)
  - Pursue **partner/tool integration listings** (e.g., if using Webflow, Shopify, WordPress, or similar platforms/agencies-partner directories, apply for partner/agency-directory inclusion)
  - **Guest posts** on small-business/marketing blogs relevant to the US SMB target audience

### 4. Tier 0 ceiling — no discovery capability for new inbound links (Low)
**Evidence:** Without Moz, Bing Webmaster, or DataForSEO, this and future audits can only detect CC-crawled links (quarterly lag, and CC has never yet indexed this domain) and verify manually-supplied candidate URLs. There is no way to discover new inbound links as they appear.
**Recommendation:** Once directory listings/guest posts in Finding 3 go live, configure Moz's free tier (2,500 rows/month, `python scripts/backlinks_auth.py --check` documents setup) to start tracking referring domains, DA/spam score, and anchor text as the profile grows.

---

## On Scoring

Per the confidence-weighted scoring model, a Backlink Health Score requires data across 7 factors (referring domains, domain quality distribution, anchor text naturalness, toxic link ratio, link velocity, follow/nofollow ratio, geographic relevance). At Tier 0, **only 1 of 7 factors has any data at all** (referring domain count — and even that is "confirmed absent from CC," not a discovery-based zero). This does not meet the bar for a legitimately confidence-weighted 0-100 score; `validate_backlink_report.py` was run against this cycle's data and returned `PASS` (0 issues) specifically because this report avoids presenting a numeric score as anything other than a directional floor.

The **5/100 shown above is unchanged from the prior audit** and is a directional floor score, kept only for consistency with this audit's category-scoring format. It reflects the plain fact that no measurable backlinks or authority signals exist yet — it is **not** a confidence-weighted assessment of link quality, toxicity, or velocity. Treat this category as **INSUFFICIENT DATA / not yet applicable** and down-weight or exclude it from any overall site health rollup.

---

## Validator Output

`validate_backlink_report.py` run 2026-08-23 against this cycle's collected data returned `PASS` — 0 errors, 0 warnings, 0 infos across all checks (schema claims, verification results, H1 claims, CC interpretation, reciprocal links, health-score sufficiency). No verify-crawler false negatives applicable (no candidate list supplied this cycle either).

---

## Data Source & Confidence Key

- Common Crawl domain-level web graph — confidence 0.50, freshness quarterly, **re-verified today via forced non-cached download** (not a reused cache)
- WHOIS / domain registration lookup (`domain_history.py`) — confidence 0.60
- Direct HTTP check of `sameAs` URLs — confidence 0.90 (Instagram, clean 200), inconclusive (LinkedIn, blocked by anti-bot HTTP 999)
- Direct HTTP check of `robots.txt` and homepage meta robots tag — confidence 0.95
- Verification crawler (`verify_backlinks.py`) — not applicable this cycle, no candidate backlink list supplied
- Moz / Bing / DataForSEO — not configured (Tier 0)

Cross-reference: for on-page authority/entity signals (`sameAs`, LinkedIn personal-vs-company URL), see `findings/schema.md` Finding 4. For the now-resolved indexability blockers that previously gated backlink growth, see `findings/technical.md`. For citation/review platform gaps (GBP, Clutch, testimonials), see `findings/content.md`.

```json
{
  "category": "Authority / Off-Page",
  "audit_date": "2026-08-23",
  "tier": 0,
  "score": 5,
  "score_type": "directional_floor_not_confidence_weighted",
  "factors_scored": 1,
  "factors_total": 7,
  "confidence": 0.50,
  "status": "INSUFFICIENT_DATA",
  "referring_domains": 0,
  "in_common_crawl_graph": false,
  "domain_age_days": 63,
  "domain_registrar": "NameCheap, Inc.",
  "expired_domain_heritage_risk": "none",
  "indexability_blockers_resolved_since_prior_audit": true,
  "same_as_profiles": {
    "linkedin": { "url": "https://www.linkedin.com/in/pinexa-digital-064059420", "type": "personal_profile", "http_check": 999, "status": "inconclusive_bot_block" },
    "instagram": { "url": "https://www.instagram.com/pinexadigital/", "http_check": 200, "status": "live" }
  },
  "top_recommendation": "Directory/citation listings (Clutch, DesignRush, GoodFirms, Google Business Profile) as first realistic backlink source for an agency site",
  "validator_status": "PASS",
  "unchanged_from_prior_audit": true,
  "prior_audit_date": "2026-07-04"
}
```
