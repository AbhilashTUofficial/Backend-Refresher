import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'test',

  projectId: 'nlfd2ua5',
  dataset: 'testsanity',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
