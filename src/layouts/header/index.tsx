import React from 'react';
import './index.scss';
export interface HeaderProps {
  children: React.ReactChild;
}
const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <div className="blog-wrapper">
      <div className="blog-header">Header</div>
      <span className="iconfont">&#xe8c6;</span>
      {props.children}
    </div>
  );
};

export default Header;
