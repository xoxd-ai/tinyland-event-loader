/**
 * Type definitions for tinyland-event-loader
 *
 * Internalized from $lib/types/event to remove SvelteKit coupling.
 * Uses a loosely typed frontmatter with Record<string, any> base
 * to accommodate arbitrary frontmatter fields.
 */

export interface EventContentFrontmatter {
  title: string;
  startDate?: string;
  startDateTime?: string;
  date?: string;
  slug?: string;
  layout?: string;
  featured?: boolean;
  categories?: string[];
  tags?: string[];
  organizer?: string | { name: string; email?: string };
  contactEmail?: string;
  [key: string]: unknown;
}

export interface EventContent {
  frontmatter: EventContentFrontmatter;
  content: string;
  slug: string;
  readingTime: number;
  wordCount: number;
}
