import { ReactNode } from 'react';

declare const MainMenuPanel: ({ title, menuLinks, children, }: {
    title?: string | undefined;
    menuLinks?: {
        path: string;
        component: any;
    }[] | undefined;
    children?: ReactNode;
}) => JSX.Element;

export { MainMenuPanel };
