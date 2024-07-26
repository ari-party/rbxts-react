import { createRoot } from '@rbxts/react-roblox';

import App from 'app';

const root = createRoot(new Instance('Folder'));

// eslint-disable-next-line no-new
new App(root);
