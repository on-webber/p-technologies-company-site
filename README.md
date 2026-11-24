# P Technologies company website

A standalone Next.js company website. It is intentionally separate from the P Dine application.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally (Windows PowerShell)
Open PowerShell in this folder, then run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000.

For a production build:

```powershell
npm.cmd run build
npm.cmd start
```

## Before publishing
1. Replace the temporary brand name "P Technologies" if the final company name changes.
2. Replace `hello@yourcompany.com` in `app/contact/page.jsx` with a real company email.
3. The contact form currently opens the visitor's email application using `mailto:`. It does not save enquiries. Add a secure server-side form handler and spam protection before relying on it for leads.
4. P Dine is described as in development. Update this wording only when its actual status changes.
5. Add a real P Dine product URL when one exists. The current website keeps the company site and P Dine application separate; they can be linked later without merging their codebases.
6. Add accurate privacy and legal pages before collecting personal information or launching publicly.

## Project structure
- `app/page.jsx` — home page
- `app/solutions/page.jsx` — ready-made solutions
- `app/custom-development/page.jsx` — custom development
- `app/industries/page.jsx` — areas of interest, not claimed client sectors
- `app/products/page.jsx` — product portfolio / P Dine
- `app/about/page.jsx` — company positioning
- `app/contact/page.jsx` — contact page
- `app/globals.css` — responsive visual system
