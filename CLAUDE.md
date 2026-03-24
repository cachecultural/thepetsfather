# CLAUDE.md

## Project Overview
- Project: **The Pets Father** website.
- Purpose: a premium, conversion-focused website for a dog training and integral care brand.
- Success means: faithful brand presentation, clear Spanish-first copy, strong trust signals, smooth responsive UX, and clear paths to consultation/contact.
- Primary audience: dog owners seeking structure, behavior improvement, emotional balance, premium care, and trustworthy guidance.

## Use This File Correctly
- Treat this file as **always-relevant project context**, not a dumping ground.
- Use it for project goals, constraints, quality bar, and non-obvious conventions.
- For detailed rules, look for dedicated docs and local `CLAUDE.md` files in subdirectories before guessing.
- If a rule here conflicts with deeper local project context, prefer the **more local file** unless it conflicts with explicit user instructions.

## Operating Principles
- Inspect before editing.
- For substantial work: **inspect -> plan -> implement -> self-review**.
- Reuse existing components, tokens, utilities, and patterns before creating new ones.
- Prefer small, testable, reversible changes over broad rewrites.
- Fix root causes, not surface symptoms.
- Do not guess business-critical facts; ask or leave clear placeholders.
- Keep outputs practical, maintainable, and brand-safe.

## Brand Foundations
### Positioning
The brand should feel:
- professional
- warm
- structured
- premium but approachable
- calm, confident, and results-oriented

### Core Promise
The Pets Father is not “just a hotel.” It is an integral dog care and training center focused on structure, balance, behavior, emotional regulation, and support for both dogs and their humans.

### Voice and Copy Principles
- Site language is **Spanish first** unless the task explicitly asks for English.
- Keep copy direct, caring, expert, and reassuring.
- Prefer concise, high-clarity Spanish over cleverness.
- Emphasize transformation, structure, emotional balance, personalized attention, and trust.
- Avoid hypey, salesy, cliché pet-industry language.
- Preserve approved screenshot copy exactly unless the user asks to change it.
- Do not invent testimonials, guarantees, certifications, policies, pricing, legal claims, or performance claims.

### Visual Tokens
Use these as the source-of-truth palette unless the user overrides them:
- `#FAFAFA` — page background
- `#E6E6D4` — grayish yellow / section surface
- `#212121` — black / primary text
- `#279A2F` — green accent
- `#3A3937` — gray / secondary dark tone

## Official Links
- Facebook: `https://www.facebook.com/thepetsfather`
- Instagram: `https://www.instagram.com/thepetsfather/`
- WhatsApp CTA: `https://api.whatsapp.com/send/?phone=584127922004&text=Hola%2C+me+interesa+el+servicio+de+%2ACuidado+Exclusivo%2A&type=phone_number&app_absent=0`

## High-End Website Standards
- The site should feel premium, calm, and intentional.
- Use strong hierarchy, generous spacing, and restrained accents.
- Avoid generic templates, clutter, uneven spacing, weak typography contrast, or unnecessary animation.
- Micro-interactions should be subtle and polished, never distracting.
- Preserve conversion clarity: each section should support trust, understanding, or action.
- No stock-feeling UX decisions if existing brand assets or real imagery can do the job better.

## UX, Accessibility, and Performance
- Aim for **WCAG 2.1 AA**-level accessibility.
- Use semantic HTML and correct heading order.
- Ensure all interactive elements are keyboard accessible and have visible focus states.
- Maintain strong contrast, especially over photography.
- Mobile, tablet, and desktop must all feel intentionally designed, not merely “unbroken.”
- Avoid heavy client-side JS when a simpler approach works.
- Prefer fast-loading pages, optimized media, and minimal layout shift.

## Conversion Priorities
- Highest-priority action: consultation/contact.
- Prefer WhatsApp or consultation-booking CTAs over low-intent alternatives.
- Keep CTAs short, specific, and action-oriented.
- Avoid adding extra CTAs that dilute the main action.
- Each major page section should make one of these clearer:
  - what this brand is
  - why its method works
  - what service is available
  - why the visitor should trust it
  - how to contact now

## Known Approved Copy
### Header
- Brand: `The Pets Father`
- Nav: `Home`, `Services`, `Contact`

### Hero
- Eyebrow: `ENTRENAMIENTO Y CUIDADO INTEGRAL`
- H1: `Somos Más que un Simple Hotel`
- Body: `En The Pets Father transformamos comportamiento, emociones y energía a través de entrenamiento, deporte, estructura y cariño.`
- Benefit points: `Tu perro aprende`, `Tu perro avanza`, `Tu perro se equilibra`
- CTAs: `Ver servicios`, `Agenda una consulta`

### About
- Eyebrow: `SOBRE NOSOTROS`
- H2: `¿QUIÉNES SOMOS?`
- Intro: `Cuidamos, entrenamos y guiamos a tu perro con un método balanceado y personalizado.`
- Body: `En The Pets Father creemos que cada perro puede convertirse en su mejor versión cuando tiene estructura, dirección clara, actividad adecuada y un guía profesional.`

### Method
- H2: `Método Balanceado Diseñado para Enseñar`
- Cards: `Comunicación clara`, `Autocontrol`, `Confianza`, `Hábitos para la Convivencia`, `Manejo de Emociones`

### Services
- H2: `SERVICIOS PRINCIPALES`
- `SERVICIO ESTRELLA`
- `Entrenamiento Personalizado`
- `Cuidado Exclusivo + Refuerzo`
- `Day Care Deportivo`
- `Agility & Disc Dog`
- `Grooming Profesional`
- CTA: `Comprar Servicio`
- Link: `Ver qué incluye`

### Trust / Promise / Social Proof
- `¿POR QUÉ ELEGIR THE PETS FATHER?`
- `NUESTRA PROMESA`
- `ASÍ TRABAJA LA MANADA`
- `TESTIMONIOS REALES`
- `LO QUE DICE LA MANADA`

### Final CTA / Footer
- H2: `¿Listo para ver el Potencial Real de tu perro?`
- Body: `Agenda una evaluación y comencemos a construir su mejor versión juntos.`
- CTA: `Agendar Ahora`
- Copyright: `© 2025. All rights reserved.`

## Conventions and Boundaries
- Preserve screenshot fidelity when rebuilding existing sections.
- Do not rewrite approved copy unless requested.
- Do not hard-code random colors if design tokens or shared styles exist.
- Do not introduce new UI patterns if existing ones can solve the problem.
- Do not make breaking IA, routing, CMS, or design-system changes without flagging them first.
- Do not modify secrets, production config, analytics setup, or legal content unless explicitly asked.
- If a requirement is unclear, ask only when necessary; otherwise make the safest reversible choice and state assumptions.

## Workflows Claude Should Follow
### For visual or front-end changes
1. Inspect the relevant files and current UI patterns.
2. Identify whether an existing component, token, or pattern already solves the need.
3. Propose the smallest high-quality change if the task is substantial.
4. Implement with responsive and accessibility checks in mind.
5. Self-review against the quality checklist before presenting results.

### For copy changes
1. Check whether the copy is approved screenshot copy, CMS content, or temporary placeholder text.
2. Preserve existing hierarchy and CTA clarity.
3. Keep Spanish-first voice unless told otherwise.
4. Do not invent factual claims.

### For bugs
1. Reproduce or identify the actual failure.
2. Read the error or behavior carefully.
3. Fix the root cause with the smallest sensible diff.
4. Verify the fix.
5. Note any durable lesson in docs only if it will help future work.

## Quality Checklist
Before considering work done, Claude should verify:
- the result matches the task and respects approved copy
- no obvious visual regressions exist
- responsive layout works on mobile, tablet, and desktop
- interactive elements are accessible and clearly styled
- there are no known console-breaking issues introduced
- SEO basics remain intact for key pages: title, meta description, heading hierarchy, meaningful links
- the final result still feels premium, calm, and conversion-focused

## Progressive Disclosure: Where to Look Next
When available, prefer dedicated docs over guessing. Look for files like:
- `/docs/design-system.md`
- `/docs/brand-voice.md`
- `/docs/seo.md`
- `/docs/site-map.md`
- `/docs/content-model.md`
- `/docs/deployment.md`
- local `CLAUDE.md` files in subdirectories

## Repo / Stack Notes
- If the repo has a specific stack, scripts, or directory structure, inspect and follow the actual project setup rather than inventing one.
- If helpful, add exact commands and directory notes **after they are confirmed from the repo**.
- Keep this root file lean; move stack-specific details and task-specific instructions into dedicated docs.
