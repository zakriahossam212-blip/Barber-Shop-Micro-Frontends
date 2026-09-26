---
name: Microfrontend styling
description: Durable styling rule for the React shell, React remote, and Angular remote sharing one document.
---

Shared UI primitives should use a namespaced class prefix and be imported from the design-token package. App styles should keep page-specific layout local and avoid generic selectors such as `.cta-button`, `.spinner`, or `.btn-primary`.

**Why:** Single-spa remotes inject their CSS into the same document, so generic selectors can override another microfrontend based on load order.

**How to apply:** Put reusable controls, fields, media, loading, and empty-state rules in the shared components stylesheet; use app-specific names for local variants and data-driven modifier classes instead of inline styles.