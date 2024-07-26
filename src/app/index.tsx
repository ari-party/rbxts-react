import { Sheet } from '@grand-hawk/ui-components';
import React from '@rbxts/react';
import { createPortal } from '@rbxts/react-roblox';
import { Players } from '@rbxts/services';

import type ReactRoblox from '@rbxts/react-roblox';

const playerGui = Players.LocalPlayer.FindFirstChild('PlayerGui') as PlayerGui;

export default class App {
  render() {
    return <Sheet Size={new UDim2(0, 150, 0, 150)} />;
  }

  constructor(root: ReactRoblox.Root) {
    const rendered = this.render();

    root.render(createPortal(rendered, playerGui));
  }
}
