import type { Meta, StoryObj } from '@storybook/react';

import { Cart } from '@components/Cart';
const meta: Meta<typeof Cart> = {
  component: Cart,
  args: {
    itensCount: 1,
    onClick: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Cart>;

export const Empty: Story = {
  render: (args) => <Cart {...args} itensCount={0} onClick={() => {}} />,
};

export const Full: Story = {
  render: (args) => <Cart {...args} itensCount={3} onClick={() => {}} />,
};
