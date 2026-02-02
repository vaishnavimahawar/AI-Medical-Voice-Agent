🚀 AI Medical Voice Agent
<div align="center"> <img src="https://img.shields.io/badge/AI-OpenAI-412991?style=for-the-badge&logo=openai" /> <img src="https://img.shields.io/badge/Voice-Vapi-FF9900?style=for-the-badge&logo=vapi" /> <img src="https://img.shields.io/badge/Database-Neon-00E599?style=for-the-badge&logo=neon" /> <img src="https://img.shields.io/badge/Frontend-Next.js-000000?style=for-the-badge&logo=nextdotjs" /> <br /> <strong>Empowering Healthcare through Low-Latency Voice Intelligence</strong> </div>

📌 Overview
The AI Medical Voice Agent is a sophisticated, real-time conversational system designed to bridge the gap between patients and medical information. By leveraging the power of Vapi for voice processing and OpenAI for medical reasoning, this agent provides a human-like, low-latency experience for symptom checking and medical inquiries.

Why this project? In an era where healthcare access is critical, this agent acts as a first-line digital assistant, capable of understanding intent and providing instant, data-driven medical guidance.
⚡ Key Features
  > Ultra-Low Latency Voice: Real-time speech-to-speech interaction powered by Vapi (sub-700ms response).
  > Medical Intelligence: Utilizes OpenAI's latest models for accurate, context-aware health assessments.
  > Secure Auth: Integrated with Clerk for robust and seamless user authentication.
  > Persistent Memory: Managed by Neon (Serverless Postgres) to track patient history and session data.
  > Modern UI: A sleek, responsive dashboard built with Next.js and Tailwind CSS.

🏗️ Technical Architecture
As an Electronics & Communication engineer, I designed this system with a focus on efficient data flow and modularity:
> Voice Layer: Vapi handles the WebRTC/Websocket connection, managing STT (Speech-to-Text) and TTS (Text-to-Speech).
> Logic Layer: OpenAI processes the transcribed text, applying medical-focused prompts to generate structured advice.
> Data Layer: Neon DB stores structured call logs and patient profiles for future retrieval.
> Frontend Layer: Next.js provides the bridge between the user and the AI agent's controls.

🛠️ Tech Stack
Category,Technology
Framework,Next.js 14 (App Router)
AI / LLM,OpenAI GPT-4
Voice API,Vapi.ai
Database,Neon (PostgreSQL)
Auth,Clerk
Styling,Tailwind CSS / Shadcn UI
Deployment,Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# AI Medical Voice Agent

A voice-powered AI agent for medical consultations, symptom analysis, and report generation.

## Features
- Voice input & transcription
- AI-powered responses (OpenAI/Grok)
- Medical report generation
- Chat history

## Tech Stack
Next.js, Drizzle ORM, Shadcn/UI, etc.

## Setup
npm install
npm run dev
