import { Sheet } from '@grand-hawk/ui-components';
import Vide, { mount } from '@rbxts/vide';

export default class App {
  render() {
    return <Sheet Size={new UDim2(0, 150, 0, 150)} />;
  }

  constructor(parent: Instance) {
    mount(() => this.render(), parent);
  }
}
