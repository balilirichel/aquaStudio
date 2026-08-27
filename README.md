# Aquascape Studio

Aquascape Studio is a mobile-first application that helps aquascaping enthusiasts design and visualize aquarium layouts using AI-powered image editing. Instead of writing complex prompts, users interact directly with their aquarium photos by selecting areas, adding plants or hardscape elements, and previewing different design variations.

The goal is to make aquascape planning faster, more intuitive, and accessible for hobbyists of all experience levels.

---

## Overview

Traditional AI image editors require users to describe edits with detailed text prompts, often producing inconsistent or unpredictable results.

Aquascape Studio replaces prompt-based editing with a visual workflow that allows users to:

- Select regions directly on an aquarium photo
- Add plants, stones, and driftwood from a visual library
- Upload reference photos of real items
- Generate multiple AI-assisted design variations
- Refine layouts without manually writing prompts

---

## Features

- Region-based aquarium editing
- Visual library for plants, stones, and driftwood
- Reference image upload
- Aquascaping style presets
  - Iwagumi
  - Dutch
  - Nature
  - Jungle
  - Biotope
- Multiple AI-generated variations
- Edit history and version management
- Tank compatibility recommendations
- Personal inventory management
- Automatic shopping list generation

---

## Technology Stack

### Mobile

| Technology | Purpose |
|------------|---------|
| React Native | Cross-platform mobile application |
| Expo | Development platform and native APIs |
| Expo Router | File-based routing |
| React Native Skia | Canvas rendering |
| React Native Gesture Handler | Touch gestures |
| React Native Reanimated | Smooth animations |
| Expo Camera | Capture reference images |
| Expo Image Picker | Import photos |
| Zustand | State management |

### Backend

| Technology | Purpose |
|------------|---------|
| Fastify | Backend framework |
| TypeScript | Shared language across frontend and backend |
| Supabase | Authentication, PostgreSQL, and file storage |
| BullMQ | Background job processing |
| Redis | Queue management |
| Segment Anything Model (SAM) | Object segmentation |
| Gemini / Flux / Stable Diffusion | AI image editing and inpainting |
