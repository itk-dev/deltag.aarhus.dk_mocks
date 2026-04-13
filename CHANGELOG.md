# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Refactored monolithic CSS (2,165 lines) into 21 component files in mock/css/
- Refactored monolithic JS (965 lines) into 12 module files in mock/js/
- Reusable design tokens file (css/tokens.css) with 93 custom properties
- Shared modal controller (js/modal.js) with createModalController pattern
- Centralized state management via window.DeltagMock.state namespace
- ITK Dev style code comments explaining non-obvious values and patterns
- Expanded mock comment data to 15 comments per høringssvar item
- "Vis flere kommentarer" pagination button in modal (loads 5 at a time)
- Scrollable modal body with sticky prev/next navigation bar
- Mock data generator producing 525 høringssvar (matching stats total)
- Continuous "Vis flere" loading for høringssvar grid (16 items per batch)
- Moved "Mere viden om lokalplaner" info-box below the map section
- Consistent spacing between statistics sections (removed doubled margins)
- Replaced bar chart with SVG line chart showing daily submissions over 3-week hearing period (11–31 dec 2025) with two peaks
- Decision modal ("Afgørelse") with meeting summary, PDF referat, video link, and hvidbog
- Glossary tooltips on municipal terms (omdannelsesområde, boligbebyggelse, Kommuneplan 2009, rammeområde) with explanations and learn-more links
- Added year to decision banner date ("30. sep. 2026")
- Restyled material list items: icon moved after size text, smaller icon, lighter gray for meta info
- Material document modal for "Forslag til Lokalplan nr. 923" with mock content, open-in-new-page and download buttons

### Changed

- Initial hearing detail page mock (Høring detalje visning) based on Figma design
- Navigation bar with active state, sub-menu links, and search icon
- Hero image section with full-width layout
- Decision banner (Afgørelse) with yellow alert styling
- Hearing header with title, lead text, metadata sidebar (Svarfrist, Type, ID), and tags
- Body content section with two-column layout (text + contact card sidebar)
- Høringssvar card grid (4-column responsive) with 16 mock entries
- Sort dropdown (Flest synes om, Nyeste, Ældste, Flest kommentarer)
- Category filter dropdown (Alle, Trafik, Miljø, Bolig, Andet)
- "Vis alle / Vis færre" pagination toggle
- Interactive modal dialog for viewing full høringssvar content
- Modal prev/next navigation with keyboard support (Arrow keys)
- URL hash deep-linking for individual høringssvar (#svar-{id})
- Focus trap and ESC-to-close for modal accessibility
- Statistics section with pure CSS bar chart (8 months)
- Materials section with 5 downloadable file entries
- Info box (Mere viden om lokalplaner) with links
- Contact card with department info
- Map section (placeholder image)
- Related activities section with 2 activity cards (Høring + Dialog)
- Projects CTA section with button
- Footer with Aarhus Kommune info
- CSS custom properties from deltag.aarhus.dk design tokens
- Full responsive layout (mobile, tablet, desktop)
- prefers-reduced-motion support
- Accessible ARIA attributes throughout
