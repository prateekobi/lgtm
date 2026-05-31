<template>
  <!-- Dot grid — background illustration -->
  <div class="bg-dot-wrap" ref="bgBraceRef" aria-hidden="true"></div>

  <!-- Constellation network graph — opposite parallax -->
  <div class="constellation-parallax" ref="constellationRef">
    <svg class="constellation" viewBox="0 0 210 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <g class="c-lines">
        <line x1="28"  y1="24"  x2="82"  y2="14"/>
        <line x1="28"  y1="24"  x2="62"  y2="60"/>
        <line x1="82"  y1="14"  x2="118" y2="44"/>
        <line x1="62"  y1="60"  x2="118" y2="44"/>
        <line x1="62"  y1="60"  x2="92"  y2="95"/>
        <line x1="18"  y1="76"  x2="62"  y2="60"/>
        <line x1="92"  y1="95"  x2="148" y2="80"/>
        <line x1="118" y1="44"  x2="148" y2="80"/>
        <line x1="148" y1="80"  x2="178" y2="50"/>
        <line x1="118" y1="44"  x2="178" y2="50"/>
        <line x1="178" y1="50"  x2="195" y2="106"/>
        <line x1="148" y1="80"  x2="195" y2="106"/>
        <line x1="92"  y1="95"  x2="106" y2="136"/>
        <line x1="106" y1="136" x2="148" y2="80"/>
      </g>
      <g class="c-nodes">
        <circle cx="28"  cy="24"  r="4.5"/>
        <circle cx="82"  cy="14"  r="3"/>
        <circle cx="62"  cy="60"  r="6"/>
        <circle cx="18"  cy="76"  r="3"/>
        <circle cx="118" cy="44"  r="4"/>
        <circle cx="92"  cy="95"  r="3.5"/>
        <circle cx="148" cy="80"  r="4.5"/>
        <circle cx="178" cy="50"  r="3"/>
        <circle cx="195" cy="106" r="3.5"/>
        <circle cx="106" cy="136" r="3"/>
      </g>
    </svg>
  </div>

  <!-- Fixed nav -->
  <nav class="site-nav" aria-label="Contact links">
    <a
      v-for="link in links"
      :key="link.label"
      :href="link.url"
      target="_blank"
      rel="noopener"
      class="nav-link"
    >{{ link.label }}</a>
  </nav>

  <!-- Page content -->
  <div class="page">

    <!-- Hero -->
    <header class="hero">
      <!-- Avatar with amber glow -->
      <div class="avatar-wrapper">
        <img
          class="headshot"
          src="https://avatars.githubusercontent.com/u/17076581?v=4"
          alt="Prateek Obireddy"
        >
      </div>

      <!-- Name — line-by-line reveal -->
      <h1 class="name" aria-label="Prateek Obireddy">
        <span class="name-line" aria-hidden="true">
          <span class="name-inner">Prateek</span>
        </span>
        <span class="name-line" aria-hidden="true">
          <span class="name-inner name-accent">Obireddy</span>
        </span>
      </h1>

      <!-- Role + status -->
      <div class="hero-meta">
        <p class="role">
          Senior Front-End Engineer<span class="cursor" aria-hidden="true"></span>
        </p>
        <span class="status-pill" aria-label="Open to new opportunities">Open to new opportunities</span>
      </div>

      <p class="bio">
        Senior Front-End Engineer based in Sydney. Six years shipping product interfaces at startups and scale-ups. I care about the gap between what gets designed and what users actually experience.
      </p>
    </header>

    <hr class="rule" aria-hidden="true">

    <!-- Work -->
    <section class="section work-section" aria-labelledby="work-label">
      <p id="work-label" class="section-label">Work</p>
      <ul class="work-list" role="list">
        <li
          v-for="(job, i) in work"
          :key="job.company"
          class="work-item"
          :style="{ '--stagger': `${0.32 + i * 0.14}s` }"
        >
          <div class="work-meta">
            <span class="work-company">{{ job.company }}</span>
            <span class="work-role-title">{{ job.role }}</span>
          </div>
          <span class="work-period">{{ job.period }}</span>
        </li>
      </ul>
    </section>

    <hr class="rule rule-2" aria-hidden="true">

    <!-- Projects -->
    <section class="section projects-section" aria-labelledby="projects-label">
      <p id="projects-label" class="section-label">Projects</p>
      <ul class="project-list" role="list">
        <li
          v-for="(project, i) in projects"
          :key="project.name"
          :style="{ '--stagger': `${0.60 + i * 0.14}s` }"
        >
          <a
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="project-item"
            :aria-label="`${project.name} — ${project.description}`"
          >
            <div class="project-header">
              <span class="project-name">{{ project.name }}</span>
              <span class="project-arrow" aria-hidden="true">↗</span>
            </div>
            <p class="project-desc">{{ project.description }}</p>
          </a>
        </li>
      </ul>
    </section>

  </div>

  <!-- Footer -->
  <footer class="footer">
    <nav class="footer-links" aria-label="Contact links">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.url"
        target="_blank"
        rel="noopener"
        class="footer-link"
      >{{ link.label }}</a>
    </nav>
    <p class="footer-copy">Prateek Obireddy</p>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const work = [
  { company: 'Acme Corp', role: 'Senior Software Engineer', period: '2023 – now' },
  { company: 'Startup Inc', role: 'Software Engineer', period: '2021 – 2023' },
  { company: 'Agency Co', role: 'Frontend Developer', period: '2019 – 2021' },
]

const projects = [
  {
    name: 'second_leash',
    description: 'Django REST API and React frontend for a crowdfunding platform. Users create campaigns, set funding targets, and accept pledges.',
    url: 'https://github.com/prateekobi/second_leash',
  },
  {
    name: 'webpify',
    description: 'Shell script that batch-converts PNG images to WebP. Drops into any project and handles directories recursively.',
    url: 'https://github.com/prateekobi/webpify',
  },
  {
    name: 'd3-network-poc',
    description: 'Interactive network graph built with D3.js and Nuxt. Visualises node relationships with a force-directed layout.',
    url: 'https://github.com/prateekobi/d3-network-poc',
  },
]

const links = [
  { label: 'Email',    url: 'mailto:prateekobi@gmail.com' },
  { label: 'GitHub',   url: 'https://github.com/prateekobi' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/prateekobi/' },
]

// ── Mouse parallax ──────────────────────────────────────────
const bgBraceRef      = ref<HTMLElement | null>(null)
const constellationRef = ref<HTMLElement | null>(null)
let rafId = 0

function onMouseMove(e: MouseEvent) {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    const nx = (e.clientX / window.innerWidth)  - 0.5
    const ny = (e.clientY / window.innerHeight) - 0.5
    if (bgBraceRef.value) {
      bgBraceRef.value.style.transform = `translate(${nx * -28}px, ${ny * -20}px)`
    }
    if (constellationRef.value) {
      constellationRef.value.style.transform = `translate(${nx * 16}px, ${ny * 12}px)`
    }
    rafId = 0
  })
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced) {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
/* ── Keyframes ───────────────────────────────────────────── */
@keyframes enter {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { transform: translateY(115%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  40%      { transform: translateY(-22px) rotate(0.4deg); }
  70%      { transform: translateY(-10px) rotate(-0.2deg); }
}

@keyframes expand-x {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

@keyframes accent-breathe {
  0%, 100% { color: oklch(0.70 0.180 55); }
  50%      { color: oklch(0.79 0.215 55); }
}

@keyframes node-pulse {
  0%, 100% { opacity: 1;   transform: scale(1); }
  50%      { opacity: 0.3; transform: scale(0.55); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ── Dot grid background ─────────────────────────────────── */
.bg-dot-wrap {
  position: fixed;
  inset: -60px;
  z-index: 0;
  pointer-events: none;
  will-change: transform;
  transition: transform 0.09s ease-out;
  background-image: radial-gradient(circle, oklch(0.70 0.180 55 / 0.38) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 100%);
}

/* ── Constellation ───────────────────────────────────────── */
.constellation-parallax {
  position: fixed;
  bottom: clamp(1.5rem, 3vw, 2.5rem);
  left: clamp(1.5rem, 5vw, 4rem);
  z-index: 0;
  pointer-events: none;
  will-change: transform;
  transition: transform 0.11s ease-out;
}

.constellation {
  width: clamp(120px, 18vw, 210px);
  opacity: 0.1;
  animation: float-slow 22s ease-in-out infinite reverse;
}

.c-lines {
  stroke: var(--color-primary);
  stroke-width: 0.85;
  opacity: 0.65;
  fill: none;
}

.c-nodes circle {
  fill: var(--color-primary);
  transform-box: fill-box;
  transform-origin: center;
}

.c-nodes circle:nth-child(1)  { animation: node-pulse 6s 0.00s ease-in-out infinite; }
.c-nodes circle:nth-child(2)  { animation: node-pulse 6s 0.65s ease-in-out infinite; }
.c-nodes circle:nth-child(3)  { animation: node-pulse 6s 1.30s ease-in-out infinite; }
.c-nodes circle:nth-child(4)  { animation: node-pulse 6s 1.95s ease-in-out infinite; }
.c-nodes circle:nth-child(5)  { animation: node-pulse 6s 2.60s ease-in-out infinite; }
.c-nodes circle:nth-child(6)  { animation: node-pulse 6s 3.25s ease-in-out infinite; }
.c-nodes circle:nth-child(7)  { animation: node-pulse 6s 3.90s ease-in-out infinite; }
.c-nodes circle:nth-child(8)  { animation: node-pulse 6s 4.55s ease-in-out infinite; }
.c-nodes circle:nth-child(9)  { animation: node-pulse 6s 5.20s ease-in-out infinite; }
.c-nodes circle:nth-child(10) { animation: node-pulse 6s 5.85s ease-in-out infinite; }

/* ── Fixed nav ───────────────────────────────────────────── */
.site-nav {
  position: fixed;
  top: clamp(1rem, 2.5vw, 1.75rem);
  right: clamp(1.5rem, 5vw, 4rem);
  display: flex;
  gap: 1.5rem;
  z-index: 10;
  animation: fade-in 0.5s ease both;
}

.nav-link {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--color-muted);
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.18s ease;
}

.nav-link:hover { color: var(--color-primary); }

.nav-link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 2px;
}

/* ── Page shell ──────────────────────────────────────────── */
.page {
  position: relative;
  z-index: 1;
  padding-inline: clamp(1.5rem, 5vw, 4rem);
  padding-block-end: 6rem;
  overflow-x: hidden;
}

/* ── Hero ────────────────────────────────────────────────── */
.hero {
  padding-top: clamp(4.5rem, 9vw, 7rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

/* Avatar */
.avatar-wrapper {
  position: relative;
  width: 110px;
  height: 110px;
  margin-block-end: 2.25rem;
  animation: fade-in 0.6s 0s ease both;
}

/* Soft amber glow behind the photo */
.avatar-wrapper::before {
  content: '';
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  background: var(--color-primary);
  opacity: 0.18;
  filter: blur(22px);
  pointer-events: none;
}

.headshot {
  position: relative;
  z-index: 1;
  display: block;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  clip-path: circle(50%);
  object-fit: cover;
  box-shadow: 0 0 0 1.5px oklch(0.70 0.180 55 / 0.25);
}

/* Name */
.name {
  font-family: 'Barlow Condensed', system-ui, sans-serif;
  font-size: clamp(5rem, 16vw, 13rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.93;
  margin-block-end: clamp(1.5rem, 2.5vw, 2.25rem);
  text-wrap: balance;
}

.name-line {
  display: block;
  overflow: hidden;
  /* 1px extra breathing so descenders aren't clipped */
  padding-block-end: 0.06em;
}

.name-inner {
  display: block;
  color: var(--color-ink);
}

.name-line:nth-child(1) .name-inner {
  animation: slide-up 0.9s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.name-line:nth-child(2) .name-inner {
  animation: slide-up 0.9s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.name-accent {
  color: var(--color-primary);
}

/* Higher specificity (0,4,0) to win over .name-line:nth-child(2) .name-inner (0,3,0) */
.name-line:nth-child(2) .name-inner.name-accent {
  animation:
    slide-up 0.9s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both,
    accent-breathe 5s 1.5s ease-in-out infinite;
}

/* Hero meta */
.hero-meta {
  display: flex;
  align-items: baseline;
  gap: 2rem;
  flex-wrap: wrap;
  margin-block-end: 1rem;
  animation: enter 0.7s 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.role {
  font-family: 'Barlow', system-ui, sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: var(--color-ink);
  letter-spacing: 0;
}

/* Blinking cursor */
.cursor {
  display: inline-block;
  width: 2px;
  height: 0.82em;
  background: var(--color-primary);
  margin-left: 3px;
  vertical-align: text-bottom;
  border-radius: 1px;
  animation: blink 1.1s step-end infinite;
}

.status-pill {
  font-size: 0.8125rem;
  font-weight: 400;
  color: var(--color-primary);
  letter-spacing: 0.01em;
  opacity: 0.9;
}

.bio {
  font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
  font-weight: 300;
  color: var(--color-muted);
  max-width: 42ch;
  line-height: 1.72;
  animation: enter 0.7s 0.70s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* ── Rule ────────────────────────────────────────────────── */
.rule {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border);
  border: none;
  margin-block: 0;
  transform-origin: left center;
  animation: expand-x 1.1s 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.rule-2 {
  animation-delay: 0.56s;
}

/* ── Sections ────────────────────────────────────────────── */
.section {
  position: relative;
  z-index: 1;
  padding-block: clamp(3rem, 6vw, 5rem);
}

.work-section    { padding-left: 8vw; }
.projects-section {
  padding-left: clamp(1.5rem, 3vw, 3rem);
  padding-right: 8vw;
}

.section-label {
  font-family: 'Barlow Condensed', system-ui, sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-dim);
  letter-spacing: 0.02em;
  display: block;
  margin-block-end: clamp(1.5rem, 3vw, 2.5rem);
}

/* ── Work list ───────────────────────────────────────────── */
.work-list {
  list-style: none;
  padding: 0;
}

.work-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  padding-block: clamp(1rem, 2vw, 1.375rem);
  border-bottom: 1px solid var(--color-border);
  animation: enter 0.65s var(--stagger, 0.32s) cubic-bezier(0.16, 1, 0.3, 1) both;
}

.work-item:first-child {
  border-top: 1px solid var(--color-border);
}

.work-meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.work-company {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-ink);
  letter-spacing: 0;
}

.work-role-title {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-muted);
}

.work-period {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-dim);
  white-space: nowrap;
  flex-shrink: 0;
  padding-block-start: 0.125rem;
}

/* ── Project list ────────────────────────────────────────── */
.project-list {
  list-style: none;
  padding: 0;
}

.project-list li {
  animation: enter 0.65s var(--stagger, 0.6s) cubic-bezier(0.16, 1, 0.3, 1) both;
}

.project-item {
  display: block;
  padding: clamp(1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1.25rem);
  margin-inline: calc(-1 * clamp(0.75rem, 1.5vw, 1.25rem));
  border-radius: 4px;
  text-decoration: none;
  transition:
    background 0.18s ease,
    transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-item:hover {
  background: var(--color-surface);
  transform: translateX(5px);
}

.project-item:hover .project-name,
.project-item:hover .project-arrow {
  color: var(--color-primary);
}

.project-item:hover .project-arrow {
  transform: translate(4px, -4px);
}

.project-item:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 0;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-block-end: 0.375rem;
}

.project-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-ink);
  transition: color 0.18s ease;
}

.project-arrow {
  font-size: 0.875rem;
  color: var(--color-dim);
  flex-shrink: 0;
  display: inline-block;
  transition: color 0.18s ease, transform 0.18s ease;
}

.project-desc {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-muted);
  line-height: 1.65;
  max-width: 55ch;
}

/* ── Footer ──────────────────────────────────────────────── */
.footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  border-top: 1px solid var(--color-border);
  padding-inline: clamp(1.5rem, 5vw, 4rem);
  padding-block: clamp(2rem, 4vw, 3.5rem) clamp(3rem, 6vw, 5rem);
}

.footer-links {
  display: flex;
  gap: clamp(1rem, 3vw, 2.5rem);
  flex-wrap: wrap;
}

.footer-link {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.18s ease;
}

.footer-link:hover { color: var(--color-primary); }

.footer-copy {
  font-size: 0.8125rem;
  color: var(--color-dim);
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 640px) {
  .site-nav {
    position: static;
    padding-block-start: 1.25rem;
    padding-inline: clamp(1.5rem, 5vw, 4rem);
    justify-content: flex-end;
  }

  .work-section { padding-left: 0; }

  .projects-section {
    padding-left: 0;
    padding-right: 0;
  }

  .hero-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .constellation-parallax { display: none; }
}
</style>
