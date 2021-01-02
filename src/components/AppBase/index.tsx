import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// @ts-ignore
import { AuthConsumer, AuthProvider } from "react-check-auth";

export type Auth = {
  isAuthenticated: (userInfo: any) => boolean;
  authUrl: string;
  onAuthLoadingRouter?: React.ReactElement;
};

type AuthConsumerParams = {
  userInfo: any;
  isLoading: boolean;
};

// https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2
const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactElement;
  children: React.ReactNode;
}) => (condition ? wrapper(children) : children) as React.ReactElement<any>;

export default function AppBase(props: {
  authRouter?: React.ReactElement;
  nonAuthRouter?: React.ReactElement;
  allRouter?: React.ReactElement;
  auth?: Auth;
  disableRootSwitch?: boolean;
}) {
  if (props.auth != null) {
    return (
      <AuthProvider authUrl={props.auth.authUrl}>
        <Router>
          <AuthConsumer>
            {({ userInfo, isLoading }: AuthConsumerParams) => (
              <ConditionalWrapper
                condition={!props.disableRootSwitch}
                wrapper={(children) => <Switch>{children}</Switch>}
              >
                {props.allRouter}
                {props.auth.isAuthenticated(userInfo) && !isLoading
                  ? props.authRouter
                  : !isLoading
                  ? props.nonAuthRouter
                  : // Show this when auth is loading
                    props.auth.onAuthLoadingRouter || <></>}
              </ConditionalWrapper>
            )}
          </AuthConsumer>
        </Router>
      </AuthProvider>
    );
  }

  return (
    <Router>
      <ConditionalWrapper
        condition={!props.disableRootSwitch}
        wrapper={(children) => <Switch>{children}</Switch>}
      >
        {props.nonAuthRouter}
        {props.allRouter}
      </ConditionalWrapper>
    </Router>
  );
}
