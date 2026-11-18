# Security Policy

This covers the **keyorix-landing** marketing site (keyorix.com) only. For
the Keyorix product itself (server, CLI, API, auth, secret storage), see
[keyorix/SECURITY.md](https://github.com/keyorixhq/keyorix/blob/main/SECURITY.md)
— that is the canonical policy for anything product-security-related.

## Reporting a vulnerability

Found something here — exposed secrets, XSS, an open redirect, a
misconfigured header, anything that shouldn't be reachable from a static
marketing site?

- Preferred: GitHub private vulnerability reporting on this repository
  ([report here](https://github.com/keyorixhq/keyorix-landing/security/advisories/new)).
- Or email **security@keyorix.com**.

We acknowledge within 48 hours. We follow coordinated disclosure: fixed
first, disclosed once a fix ships, with credit unless you prefer otherwise.

## Scope

In scope: this repository and what it deploys to keyorix.com.

Out of scope: the Keyorix product itself (see link above), third-party
services the site merely links to, and denial-of-service by volume.
