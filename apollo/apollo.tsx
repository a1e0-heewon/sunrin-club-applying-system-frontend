import {
  ApolloClient,
  ApolloProvider,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useRouter } from "next/router";
import nextWithApollo from "next-with-apollo";
import { Cookies } from "react-cookie";

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    const httpLink = new HttpLink({ uri: "https://club.pukuba.dev/api" });

    const authLink = new ApolloLink((operation, forward) => {
      const cookies = new Cookies();
      const token = cookies.get("token");

      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
      return forward(operation);
    });

    return new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: authLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter();
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
