import React from 'react';

export const Tag = (tag) =>
  React.memo((props) => {
    const Tag = tag;
    const theme = style(props);
    const style = {
      background: theme.background ? theme.background : undefined,
      color: theme.color ? theme.color : undefined,
      padding: theme.size.padding ? theme.size.padding : undefined,
      borderRadius: theme.size.borderRadius ? theme.size.borderRadius : undefined,
    };
    return (
      <Tag style={style} className={props.className}>
        {props.children}
      </Tag>
    );
  });

export const Box = React.memo((props) => <div {...props} />);
export const Section = React.memo((props) => <section {...props} />);
export const Main = React.memo((props) => <main {...props} />);
export const Article = React.memo((props) => <article {...props} />);
export const Header = React.memo((props) => <header {...props} />);
export const Footer = React.memo((props) => <footer {...props} />);
export const Address = React.memo((props) => <address {...props} />);
export const Span = React.memo((props) => <span {...props} />);
export const Text = React.memo((props) => <p {...props} />);
export const H1 = React.memo((props) => <h1 {...props} />);
export const H2 = React.memo((props) => <h2 {...props} />);
export const H3 = React.memo((props) => <h3 {...props} />);
export const H4 = React.memo((props) => <h4 {...props} />);
export const H5 = React.memo((props) => <h5 {...props} />);
export const H6 = React.memo((props) => <h6 {...props} />);
export const UL = React.memo((props) => <ul {...props} />);
export const LI = React.memo((props) => <li {...props} />);
