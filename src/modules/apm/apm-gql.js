export const APM_ENTITIES_GQL = {
  query: `query ($cursor: String) {
    actor {
      entitySearch(queryBuilder: {domain: APM, type: APPLICATION}) {
        results(cursor: $cursor) {
          nextCursor
          entities {
            accountId
            guid
            name
            reporting
            ... on ApmApplicationEntityOutline {
              applicationId
              name
              language
              apmSummary {
                throughput
              }
              settings {
                apdexTarget
              }
              runningAgentVersions {
                minVersion
                maxVersion
              }
              tags {
                key
                values
              }
            }
            ... on AlertableEntityOutline {
              alertSeverity
            }
          }
        }
        count
      }
    }
  }`,
  variables: {
    // cursor: null
  }
};

export const APM_ENTITIES_SUBSCRIBER_ID_GQL = {
  query: `query ($cursor: String, $nrql: String) {
    actor {
      entitySearch(query: $nrql) {
        results(cursor: $cursor) {
          nextCursor
          entities {
            accountId
            guid
            name
            reporting
            ... on ApmApplicationEntityOutline {
              applicationId
              name
              language
              apmSummary {
                throughput
              }
              settings {
                apdexTarget
              }
              runningAgentVersions {
                minVersion
                maxVersion
              }
              tags {
                key
                values
              }
            }
            ... on AlertableEntityOutline {
              alertSeverity
            }
          }
        }
        count
      }
    }
  }`,
  variables: {
    // cursor: null
    // nrql:  "domain IN ('APM') AND type IN ('APPLICATION') and accountId=xxxxxx"
  }
};
