# Vagabond Muscle Coaching — Website

Standalone static site for Vagabond Muscle Coaching. Pure HTML + CSS, no build step, no framework. Deploys to GitHub Pages (or any static host) as-is.

## Structure

```
index.html              Homepage (hero, tiers, method, about, transformation, proof, one-time, supplier banner, CTA)
about.html              Coach bio / "Why 35+" / how I work
questions.html          FAQ
apply.html              Application page (form embed goes here)
foundations.html        Coaching tier — Foundations
coached.html            Coaching tier — Coached
premium.html            Coaching tier — Premium 1:1
veteran.html            Veteran & First Responder rate
blood-work-review.html  One-time service — Blood Work Review ($149)
in-person-session.html  One-time service — In-Person Session, Pattaya ($125)
supplements.html        Full supplement stack with affiliate links
styles.css              Shared stylesheet
assets/                 Images (hero, portrait, before, logo)
.nojekyll               Tells GitHub Pages to serve files without Jekyll processing
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → **Save**.
3. Site publishes at `https://<username>.github.io/<repo>/` within a minute or two.
4. To use a custom domain, add a `CNAME` file containing the domain and set the DNS record at your registrar.

## To finish before launch

- **Application form:** `apply.html` has a placeholder block. Paste your Tally/Typeform `<iframe>` embed where marked.
- **Booking for one-time services:** Blood Work Review and In-Person Session currently route to the apply page ("get in touch"). Swap in a booking/payment link if you have one.
- **Pricing:** coaching prices are intentionally hidden (application-only). One-time services show $149 / $125.
- **Disclaimers:** the footer and supplement disclaimers are load-bearing (FDA / affiliate / research-compound / physician). Keep them.

## Editing

Every page is self-contained HTML. The header and footer are duplicated in each file — if you change navigation, update it in each page (or move to an include-based build later).
