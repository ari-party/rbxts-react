import { Sheet, Typography } from '@grand-hawk/ui-components';
import React from '@rbxts/react';
import { createPortal } from '@rbxts/react-roblox';
import { Players } from '@rbxts/services';

import type ReactRoblox from '@rbxts/react-roblox';

const playerGui = Players.LocalPlayer.FindFirstChild('PlayerGui') as PlayerGui;

export default class App {
  render() {
    return (
      <screengui>
        <Sheet
          HorizontalAlignment={Enum.HorizontalAlignment.Center}
          Size={new UDim2(0, 300, 0, 150)}
          VerticalAlignment={Enum.VerticalAlignment.Center}
        >
          <Typography Text="Hello world!" />
        </Sheet>
      </screengui>
    );
  }

  constructor(root: ReactRoblox.Root) {
    root.render(createPortal(this.render(), playerGui));
  }
}
