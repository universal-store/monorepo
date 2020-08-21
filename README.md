# Universal Store

## Technologies Used:
-   React Native
-   Apollo Client
-   React Navigation
-   Styled Components
-   Typescript
-   Prettier and Eslint

## Installation Guide:

> [Download Node (GET THE LTS 12.18.3, NOT CURRENT)](https://nodejs.org/en/download/)

> [Download Yarn](https://classic.yarnpkg.com/en/docs/cli/install/)

> [Set up Prettier with VSCode](https://www.codereadability.com/automated-code-formatting-with-prettier/)

> VSCodeExtensions:
- https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
- https://marketplace.visualstudio.com/items?itemName=Prisma.prisma
- https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql
- https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components
- https://marketplace.visualstudio.com/items?itemName=kelset.rn-full-pack

> Open workspace in your IDE, then run `yarn` in terminal

##### Local DB Setup (Only do this once):
> [Download Docker](https://www.docker.com/products/docker-desktop)

> In root directory, run `yarn start:database`
> In /database directory, run `yarn generate:datamodel`, then `yarn migrate:save`

##### Local Server Setup (Only do this once):

> In root directory, run `yarn generate`

##### Run Server (*Do this every time you work*):

> In root directory, run `yarn start:server`, and leave that terminal tab open

#### Look at Database (*Only run when you want to look at/modify DB directly -> use Playground whenever possible though!*)

> In the /database directory, run `yarn studio`, and leave that terminal tab open
> * Note: Prisma Studio is experimental and can sometimes have annoying crashes if you try to modify data directly through it

>> (Better alternative): Download [DataGrip](https://www.jetbrains.com/datagrip/download/)

## Helpful Resources:

* [React Native Built-in Components](https://reactnative.dev/docs/components-and-apis)

* [TypeScript Cheat-sheet](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

* [Styled-components (styling library)](https://styled-components.com/docs)

* [Apollo Docs](https://www.apollographql.com/docs/)
