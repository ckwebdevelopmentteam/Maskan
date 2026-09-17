import {CaseIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Kochi, Kerala or Perinthalmanna, Kerala',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Residential, Commercial, Residential Villa',
      options: {
        list: [
          {title: 'Residential', value: 'Residential'},
          {title: 'Residential Villa', value: 'Residential Villa'},
          {title: 'Commercial', value: 'Commercial'},
          {title: 'Hospitality', value: 'Hospitality'},
        ],
      },
    }),
    defineField({
      name: 'scale',
      title: 'Scale / Scope',
      type: 'string',
      description: 'e.g. 112 units + new tower or 42 villas',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'On Going', value: 'ON GOING'},
          {title: 'Completed', value: 'COMPLETED'},
        ],
        layout: 'radio',
      },
      initialValue: 'ON GOING',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main / Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'stats',
      title: 'Project Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'val', title: 'Value', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Project Story',
      type: 'object',
      fields: [
        defineField({name: 'theWhere', title: 'The Where', type: 'text', rows: 3}),
        defineField({name: 'theHow', title: 'The How', type: 'text', rows: 3}),
        defineField({name: 'theDetails', title: 'The Details', type: 'text', rows: 3}),
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'highlightImages',
      title: 'Highlight Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Optional number for sorting (lower numbers appear first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'mainImage',
    },
  },
})
