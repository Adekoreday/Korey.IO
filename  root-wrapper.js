import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/Code';


const components = {
    
    'p.inlineCode': props => (
        <code style={{ backgroundColor: 'lightgray', fontSize: '14px', padding: "0.5rem" }} {...props}/>
      ),
    pre: (props) => {
        const className = props.children.props.className || '';
        const matches = className.match(/language-(?<lang>.*)/);
          return (
            <Code
              codeString={props.children.props.children.trim()}
              language={
                matches && matches.groups && matches.groups.lang
                  ? matches.groups.lang
                  : ''
              }
              {...props}
            />
          );
      }
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);