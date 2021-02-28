import sanityClient from '@sanity/client';
import { sanityConfig } from '../constants/sanityConfig';

export default sanityClient(sanityConfig);