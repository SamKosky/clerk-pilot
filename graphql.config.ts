import { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  projects: {
    web: {
      schema: [
        {
          "https://square-bluebird-95.hasura.app/v1/graphql": {
            headers: {
              "x-hasura-admin-secret":
                "NpAJ7Lqy7xzXUuS5rLdZ2mh4SeurHfS3kuHrtp1WnRXMRGl7GgYmWO1l4cgY4zgb",
            },
          },
        },
      ],
      documents: ["./apps/web/src/**/*.{graphql,js,ts,jsx,tsx}"],
      extensions: {
        codegen: {
          overwrite: true,
          generates: {
            "./apps/web/src/types/generated/": {
              preset: "client",
              config: {
                namingConvention: {
                  typeNames: "change-case-all#pascalCase",
                  transformUnderscore: true,
                },
              },
            },
          },
        },
      },
    },
    //   prj2: {
    //     schema: ['prj2/**/*.graphql'],
    //     documents: ['prj2/**/*.gql'],
    //     extensions: {
    //       codegen: {
    //         generates: {
    //           'graphqlTypes.ts': {
    //             plugins: ['typescript', 'typed-document-node']
    //           }
    //         }
    //       }
    //     }
    //   }
  },
};

export default config;
