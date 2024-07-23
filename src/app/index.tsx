import Vide, { mount } from '@rbxts/vide';

export default class App {
  render() {
    return <frame />;
  }

  constructor(parent: Instance) {
    mount(this.render, parent);
  }
}
