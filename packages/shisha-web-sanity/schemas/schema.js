// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { Brand, Flavor, Tabacco } from './documents/Bussiness';
import { MenuItem } from './documents/Application';
import { LocaleString } from './objects';
import Cookies from './documents/Application/Cookies';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    LocaleString,
    //APPLICATION
    MenuItem,
    Cookies,
    //BUSSINESS
    Brand,
    Tabacco,
    Flavor
  ]),
});