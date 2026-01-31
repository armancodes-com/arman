// import type { ReactElement } from 'react';

import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { render as renderComponent } from "@testing-library/react";

export * from "@testing-library/react";

type TRenderOptionProps = Parameters<typeof renderComponent>[1];

export const render = (ui: ReactElement, option?: TRenderOptionProps) => {
  return {
    ...renderComponent(ui, option),
    user: userEvent.setup(),
  };
};
