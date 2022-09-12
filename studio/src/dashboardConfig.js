export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "631ed153775c3444d895c7dc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8wv2ters",
                  apiId: "0082c760-00d7-45b2-a1e1-3c9614da2cf3",
                },
                {
                  buildHookId: "631ed154b9acb853fd5ae386",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yjuq8xvb",
                  apiId: "3f21a21c-f9d4-4783-839b-6e29cc838af5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Nauman440/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yjuq8xvb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
