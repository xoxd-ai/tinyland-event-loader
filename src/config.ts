/**
 * Configuration module for tinyland-event-loader
 *
 * Provides dependency injection for baseDir (replaces process.cwd()),
 * contentSubPath, and wordsPerMinute. Uses a module-level singleton
 * with configure/get/reset helpers.
 */

export interface EventLoaderConfig {
  /** Base directory for resolving content paths (replaces process.cwd()) */
  baseDir: string;
  /** Sub-path under baseDir where event markdown files live */
  contentSubPath?: string;
  /** Words per minute for reading time calculation */
  wordsPerMinute?: number;
}

interface ResolvedConfig {
  baseDir: string;
  contentSubPath: string;
  wordsPerMinute: number;
}

const DEFAULT_CONTENT_SUB_PATH = 'src/content/events';
const DEFAULT_WORDS_PER_MINUTE = 225;

let currentConfig: ResolvedConfig | null = null;

/**
 * Configure the event loader with a base directory and optional overrides.
 * Must be called before using any loader functions.
 */
export function configure(config: EventLoaderConfig): void {
  currentConfig = {
    baseDir: config.baseDir,
    contentSubPath: config.contentSubPath ?? DEFAULT_CONTENT_SUB_PATH,
    wordsPerMinute: config.wordsPerMinute ?? DEFAULT_WORDS_PER_MINUTE,
  };
}

/**
 * Get the current resolved configuration.
 * Throws if configure() has not been called.
 */
export function getConfig(): ResolvedConfig {
  if (!currentConfig) {
    throw new Error(
      'tinyland-event-loader: configure() must be called before using loader functions. ' +
      'Call configure({ baseDir: "/path/to/project" }) first.'
    );
  }
  return currentConfig;
}

/**
 * Reset configuration to unconfigured state.
 * Useful for testing.
 */
export function resetConfig(): void {
  currentConfig = null;
}
