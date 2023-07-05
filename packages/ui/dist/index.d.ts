import { ReactNode } from 'react';

declare const MainMenuPanel: ({ title, children, }: {
    title?: string | undefined;
    children?: ReactNode;
}) => JSX.Element;

export { MainMenuPanel };
