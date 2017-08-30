import React from 'react';
import { gql, graphql } from 'react-apollo';
import './App.css';

const FooComp = graphql(
  gql`
    {
      foo
    }
  `
)(props =>
  <div>
    Foo is {props.data.foo}
  </div>
);

export default () => <FooComp />;
