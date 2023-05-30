import type { App } from 'vue'
import { setupTrimDirective } from './trim'
import { setupTrackClickDirective } from './trackClick'
import { setupTrackVisibilityDirective } from './trackVisibility'

export default function setupGlobDirectives(app: App) {
  setupTrimDirective(app)
  setupTrackClickDirective(app)
  setupTrackVisibilityDirective(app)
}
