import { sanityConfig } from './config';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

const builder = imageUrlBuilder(sanityConfig);

export const urlFor = (source: SanityImageSource) : ImageUrlBuilder => {
    return builder.image(source);
};
