# iFloat Privacy & Terms

Static privacy policy and terms of use for **iFloat（iFloat实时语音翻译）**.

- App: iFloat / iFloat实时语音翻译
- Platform: iOS
- Bundle ID: `com.osofts.vstdemo`
- Developer: Lijia
- Contact: tianya1110@gmail.com
- Effective: 2026-10-22

## URLs

| Document | URL |
| --- | --- |
| 隐私政策（简中，App Store 填写） | `https://likky.github.io/ifloat-privacy/privacy.html` |
| 使用条款（简中） | `https://likky.github.io/ifloat-privacy/terms.html` |
| Privacy Policy (English) | `https://likky.github.io/ifloat-privacy/privacy-en.html` |
| Terms of Use (English) | `https://likky.github.io/ifloat-privacy/terms-en.html` |
| Portal | `https://likky.github.io/ifloat-privacy/` |

## Files

```text
index.html              Portal (privacy + terms, zh/en)
privacy.html            简体中文隐私政策
privacy-en.html         English privacy policy
terms.html              简体中文使用条款
terms-en.html           English terms of use
assets/legal.css        Shared design system (light/dark, print, responsive)
assets/legal.js         Optional print + TOC highlight; no tracking
.nojekyll               Disable GitHub Pages Jekyll processing
README.md               This file
```

## Design

- Tokens mirror the app's `DesignTokens.swift`: light page `#F2F2F7`, card `#FFFFFF`, accent `#0B5FD0`; dark page `#000000`, card `#1C1C1E`, accent text `#4EA1FF`.
- No external fonts, images, CDNs, cookies or analytics.
- WCAG AA targeted: 4.5:1 text contrast, visible focus, skip link, 200% zoom, reduced-motion and print styles.
- Language switching is plain links; no JavaScript required for content.
- `assets/legal.js` only adds a print button and a TOC highlight; it degrades gracefully.

## Deploy

### GitHub Pages

1. Create `likky/ifloat-privacy` on GitHub.
2. Push this folder to `main`:

   ```sh
   git remote add origin https://github.com/likky/ifloat-privacy.git
   git push -u origin main
   ```

3. Settings → Pages → Deploy from branch → `main` / root.
4. Confirm the four URLs resolve over HTTPS without login.

### Own domain (recommended for mainland China)

GitHub Pages may be slow or unstable in mainland China. The site uses only relative paths, so it can be deployed to any static host (Aliyun OSS + CDN, Tencent COS, Cloudflare Pages, etc.) without changing the HTML. If you use a custom domain, update the `canonical` and `hreflang` URLs in the HTML.

## App configuration

After the pages are live, set both values in `Vision_Speech_Translation/app/project.yml`:

```yaml
settings:
  base:
    MEMBERSHIP_PRIVACY_URL: "https://likky.github.io/ifloat-privacy/privacy.html"
    MEMBERSHIP_TERMS_URL: "https://likky.github.io/ifloat-privacy/terms.html"
```

Then run:

```sh
cd Vision_Speech_Translation/app
xcodegen generate
plutil -p Generated/Info.plist | grep -E 'MembershipPrivacyURL|MembershipTermsURL'
```

`MembershipPolicy.isConfigured` requires **both** URLs. Do not enable purchases until both pages are publicly reachable.

## App Store Connect

- **Privacy Policy URL**: `https://likky.github.io/ifloat-privacy/privacy.html`
- **Terms of Use**: either this page (custom EULA) or Apple's Standard EULA
- **App Privacy**: answer **Data Not Collected** only if the shipped build still has no server, account, ads, analytics or crash-reporting SDK. Re-audit before every submission.
- **Privacy manifest**: the app still needs `PrivacyInfo.xcprivacy` for `UserDefaults`, file timestamps and `systemUptime` before submission.

## Maintenance checklist

- [ ] Any new SDK (ads, analytics, crash reporting, cloud speech, cloud translation) is added to the policy and App Privacy answers.
- [ ] Any new permission has a purpose string and a row in the permissions table.
- [ ] Any new server, account or cloud sync changes the "not collected" claim.
- [ ] Update "Last updated" and the version table.
- [ ] Re-check Apple Review Guidelines 5.1.1 and 3.1.2.
- [ ] Have a qualified lawyer review before relying on these documents for a commercial launch.

> These documents are a product-grade draft, not legal advice. Laws and App Store rules vary by jurisdiction and change over time.
