import { InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        heroStats: {
          keyArgs: ["winDay", ["take", "gameModeIds", "positionIds"]],
          merge(existing = { winDay: [] }, incoming) {
            return {
              ...existing,
              ...incoming,
              winDay: incoming.winDay,
            };
          },
        },
      },
    },
  },
});

export { cache };
