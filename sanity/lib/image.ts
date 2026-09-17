import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

export const urlForImage = (source: any): string => {
  if (!source || (!source.asset && !source._ref)) return ''
  try {
    return builder.image(source).auto('format').url()
  } catch {
    return ''
  }
}
