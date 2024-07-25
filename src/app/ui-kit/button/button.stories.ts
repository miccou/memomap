import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export const buttonData = {
  onClick: action('onClick'),
};

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
      onClick: buttonData.onClick,
    },
    template: `<app-button ${argsToTemplate(args)}></app-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    text: 'hello world',
  },
};
