import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare const MainBoard: ({ title, children, }: {
    title?: string | undefined;
    children?: ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const Column: () => react_jsx_runtime.JSX.Element;

type GoalType = { url: string; name: string; id: number };

declare const Goal: ({ url, name, id, }: GoalType & {
    isDragging?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const TaskListDnD: () => react_jsx_runtime.JSX.Element;

export { Column, Goal, MainBoard, TaskListDnD };
