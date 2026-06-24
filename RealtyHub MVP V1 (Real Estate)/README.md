# RealtyHub MVP V1 (Real Estate)

An initial prototype and full-stack real estate marketplace built with Next.js App Router, TypeScript, Tailwind CSS, Zustand, Prisma, PostgreSQL, Better Auth, Cloudinary, Resend, and React Email—serving as a solid foundation that can be fully customized and expanded to fit your specific business requirements.

## Features

- Email/password authentication with secure Better Auth password hashing
- Google OAuth through Better Auth
- Protected dashboard and listing creation routes
- Property CRUD foundation with create, detail, delete, and owner dashboard
- Optimized property search by keyword, location, type, and price range
- Multiple image upload through Cloudinary
- Agent inquiry form with Resend transactional emails
- React Email templates for welcome and property inquiry messages
- AI-generated inquiry tone variations: formal, friendly, and short
- Zustand stores for user, filters, and UI state
- Prisma schema compatible with Neon PostgreSQL
- Vercel-ready App Router architecture

## Live Demo & Screenshots

- **Live Preview:** [Click here to view the live application](https://realtyhub-app.vercel.app) 
- **Initial Version Screenshots:** The complete layout and interface screenshots of the initial release are attached below for visual review.

## Setup

1. Install dependencies:
   npm install

2. Copy environment variables:
   cp .env.example .env

3. Start development:
   npm run dev

Open http://localhost:3000.

##git remote remove origin Authentication

Better Auth is configured in lib/auth.ts.

- Email/password is enabled.
- Google OAuth is enabled when GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are present.
- Auth routes are exposed at app/api/auth/[...all]/route.ts.
- Protected pages call auth.api.getSession() and redirect to /login.

## Image Uploads

app/api/upload/route.ts accepts multipart image uploads from authenticated users. Images are uploaded to Cloudinary via lib/services/cloudinary.ts, with web-friendly transformations.

## Emails

Transactional email is handled in lib/services/email.tsx.

- WelcomeEmail lives in components/emails/welcome-email.tsx.
- PropertyInquiryEmail lives in components/emails/property-inquiry-email.tsx.

## AI Email Variations

app/api/ai/email-variations/route.ts generates formal, friendly, and short inquiry drafts.

If OPENAI_API_KEY is configured, it calls the OpenAI Responses API. Without a key, it returns deterministic production-safe fallback variations so the UI still works.

---
Looking to build a custom, AI-powered high-performance platform for your business? Let's turn your vision into reality. Contact us to get started!

<img width="1920" height="1249" alt="RealtyH - localhost" src="https://github.com/user-attachments/assets/dce20f59-618a-40bd-8421-15fdc344b5cd" />
<img width="1377" height="768" alt="Image_s6593ks6593ks659" src="https://github.com/user-attachments/assets/fa327ee2-1633-4fda-87b9-97fdb2c0aea7" />
<img width="1920" height="1365" alt="RealtyHub32 - localhost" src="https://github.com/user-attachments/assets/04d77ba3-9968-4548-8197-56f137e843fa" />
<img width="1920" height="1841" alt="FireShot Capture 004 - RealtyHub - localhost" src="https://github.com/user-attachments/assets/c1c2be1e-6065-4e0d-94d2-d3e54d6c1ae3" />
<img width="1920" height="1325" alt="FireShot Capture 003 - RealtyHub - localhost" src="https://github.com/user-attachments/assets/984ab681-f671-4705-915e-1e9ea3a5dad8" />
<img width="1920" height="1522" alt="FireShot Capture 002 - RealtyHub - localhost" src="https://github.com/user-attachments/assets/eb9472b2-bc9d-4939-ac41-e23bf71a727c" />

