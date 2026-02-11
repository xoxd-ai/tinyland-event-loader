/**
 * @tinyland-inc/tinyland-event-loader
 *
 * File-based markdown event loader with frontmatter parsing and query helpers.
 * Reads .md, .mdx, and .svx files from a configurable directory, parses
 * gray-matter frontmatter, and provides filtering/sorting utilities.
 *
 * @example
 * ```typescript
 * import { configure, loadEventsServer, getUpcomingEventsServer } from '@tinyland-inc/tinyland-event-loader';
 *
 * configure({ baseDir: process.cwd() });
 * const events = loadEventsServer();
 * const upcoming = getUpcomingEventsServer(5);
 * ```
 */

// Types
export type { EventContent, EventContentFrontmatter } from './types.js';

// Configuration
export type { EventLoaderConfig } from './config.js';
export { configure, getConfig, resetConfig } from './config.js';

// Loader functions
export {
  loadEventsServer,
  getUpcomingEventsServer,
  getPastEventsServer,
  getEventBySlugServer,
  getFeaturedEventsServer,
  getRelatedEventsServer,
  getEventsByOrganizerServer,
} from './event-loader.js';
