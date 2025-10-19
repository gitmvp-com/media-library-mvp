declare module 'react-router-bootstrap' {
  import { ComponentType } from 'react';
  
  export interface LinkContainerProps {
    to: string;
    exact?: boolean;
    activeClassName?: string;
    children?: React.ReactNode;
  }
  
  export const LinkContainer: ComponentType<LinkContainerProps>;
}