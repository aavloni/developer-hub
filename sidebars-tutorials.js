// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  allcontent: [
    //Tutorial Parent
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "doc",
        id: "all-tutorials",
      },
      collapsed: false,
      // items: [{ type: "autogenerated", dirName: "." }],
      items: [
        // Set up CI Pipelines
        {
          type: "category",
          label: "Set up CI Pipelines",
          link: {
            type: "doc",
            id: "ci-pipelines",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "ci-pipelines" }],
        },

        // Set up CD Pipelines
        {
          type: "category",
          label: "Set up CD Pipelines",
          link: {
            type: "doc",
            id: "cd-pipelines",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "cd-pipelines" }],
        },

        // Manage Feature Flags - feature-flags
        {
          type: "category",
          label: "Manage Feature Flags",
          link: {
            type: "doc",
            id: "feature-flags",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "feature-flags",
            },
          ],
        },

        // Manage Cloud Costs - cloud-cost-management
        {
          type: "category",
          label: "Manage Cloud Costs",
          link: {
            type: "doc",
            id: "cloud-costs",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "cloud-costs",
            },
          ],
        },

        // Manage Service Reliability - service-reliability-management
        {
          type: "category",
          label: "Manage Service Reliability",
          link: {
            type: "doc",
            id: "service-reliability",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "service-reliability",
            },
          ],
        },
        
        // Orchestrate Security Tests - security-testing-orchestration
        {
          type: "category",
          label: "Orchestrate Security Tests",
          link: {
            type: "doc", // "generated-index",
            id: "security-tests",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "security-tests",
            },
          ],
        },

        // Run Chaos Experiments - chaos-engineering
        {
          type: "category",
          label: "Run Chaos Experiments",
          link: {
            type: "doc",
            id: "chaos-experiments",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "chaos-experiments",
            },
          ],
        },

         // Track Errors - error-tracking
         {
          type: "category",
          label: "Track Errors",
          link: {
            type: "doc",
            id: "error-tracking",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "error-tracking",
            },
          ],
        },

        // Platform - platform
        {
          type: "category",
          label: "Administer Harness Platform",
          link: {
            type: "doc",
            id: "platform",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "platform" }],
        },

        //Additional Items in this parent can go here.
      ],
    },

   // Docs Link from Tutorials
  {
    type: "link",
    label: "Documentation",
    href: "/docs",
  },
  ],
};

module.exports = sidebars;
