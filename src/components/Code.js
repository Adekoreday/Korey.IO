import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import styled from 'styled-components';
import { copyToClipboard } from '../utils/copy-to-clipboard';
import {
    LiveEditor,
    LiveError,
    LivePreview,
    LiveProvider,
  } from 'react-live';


export const Pre = styled.pre`
         @media (max-width: 768px) {
           font-size: 12px;
           margin: 3rem 0;
           padding: 2rem 1rem;
         }
         text-align: left;
         margin: 5rem 0;
         padding: 3rem 2rem;
         overflow-x: scroll;
         -webkit-overflow-scrolling: touch;
         border-radius: 3px;
         font-size: 16px;
         & .token {
           font-family: Consolas, "Courier New", "monospace" !important;
         }
         & .token-line {
           line-height: 4.5rem;
           height: 2rem;
         }
       `

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

const Code = ({ codeString, language, ...props }) => {
    const handleClick = () => {
        copyToClipboard(codeString);
      };
      if (props['react-live']) {
        return (
          <LiveProvider code={codeString} noInline={true} theme={theme}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        );
      }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}>
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <Pre className={className} style={style}>
        <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;