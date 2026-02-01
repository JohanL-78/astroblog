import { sanityClient } from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
    .auto('format') // Automatically serve WebP/AVIF based on browser support
    .quality(80) // Optimized quality (default is 100)
}

export { sanityClient }
