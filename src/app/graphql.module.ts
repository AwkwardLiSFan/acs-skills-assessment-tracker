import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { NgModule } from "@angular/core";
import { ApolloClientOptions, InMemoryCache } from "@apollo/client/core";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

const uri = `https://realm.mongodb.com/api/client/v2.0/app/${environment.APP_ID}/graphql`;

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({
      uri,
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`,
      ),
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
