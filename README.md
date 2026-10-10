# tinyland-event-loader (retired)

**Retired 2026-10-09 (RU2, RU7).** This module was merged into
[`xoxd-ai/tinyland-content`](https://github.com/xoxd-ai/tinyland-content) and
this repository is archived. Nothing here receives updates.

## Replacement

- Bazel module: `tummycrypt_tinyland_content` 0.6.0 or later, from the
  Tinyland Bazel registry (`xoxd-ai/bazel-registry`). Bazel is the only
  distribution path (RU6).
- Import path: `@tummycrypt/tinyland-content/event-loader`, with the same API
  as 0.2.3: `configure`, `getConfig`, `resetConfig`, `loadEventsServer`,
  `getUpcomingEventsServer`, `getPastEventsServer`, `getEventBySlugServer`,
  `getFeaturedEventsServer`, `getRelatedEventsServer`,
  `getEventsByOrganizerServer` and the `EventContent`,
  `EventContentFrontmatter` and `EventLoaderConfig` types. The root
  `@tummycrypt/tinyland-content` facade also exports them as
  `configureEventLoader`, `getEventLoaderConfig`, `resetEventLoaderConfig` and
  the seven query functions.

## Migration

1. Drop `bazel_dep(name = "tummycrypt_tinyland_event_loader", ...)`, any
   `single_version_override` for it and its `npm_link_package`.
2. Depend on `bazel_dep(name = "tummycrypt_tinyland_content", version = "0.6.0")`
   or later.
3. Replace `from '@tummycrypt/tinyland-event-loader'` with
   `from '@tummycrypt/tinyland-content/event-loader'`.

## Existing versions

- Bazel registry: `tummycrypt_tinyland_event_loader` 0.2.2 and 0.2.3 stay
  resolvable and are marked deprecated. Nothing is yanked.
- npm: no new versions will be published. Existing `@tummycrypt/tinyland-event-loader`
  versions are not unpublished; their deprecation pointer is an operator step (RU8).
