CMS.init({
  load_config_file: false,
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    media_folder: "public/images/uploads",
    public_folder: "/images/uploads",
    slug: {
      encoding: "ascii",
      clean_accents: true,
    },
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        folder: "content/blog",
        create: true,
        format: "frontmatter",
        slug: "{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Date", name: "date", widget: "datetime", format: "YYYY-MM-DD" },
          { label: "Excerpt", name: "excerpt", widget: "string" },
          { label: "Tags", name: "tags", widget: "list", required: false },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
      {
        name: "work",
        label: "Work Projects",
        folder: "content/work",
        create: true,
        format: "frontmatter",
        slug: "{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Date", name: "date", widget: "datetime", format: "YYYY-MM-DD" },
          { label: "Description", name: "description", widget: "string" },
          { label: "Tags", name: "tags", widget: "list", required: false },
          { label: "Body", name: "body", widget: "markdown" },
        ],
      },
    ],
  },
})
