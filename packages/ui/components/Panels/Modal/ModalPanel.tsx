import { ReactNode, useEffect, useRef, useState } from "react";
import { Label } from "./ModalLabel";
import { FormInput } from "./ModalInput";

export const ModalPanel = ({ children }: { children: ReactNode }) => (
	<>{children}</>
);

ModalPanel.Label = Label;
ModalPanel.Input = FormInput;
