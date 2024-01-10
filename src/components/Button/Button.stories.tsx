import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { ShoppingCartSimple, Trash } from '@phosphor-icons/react';
const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    type: 'primary',
    size: 'M',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args} type="primary" label="Primary" />,
};

export const Secondary: Story = {
  render: (args) => <Button {...args} type="secondary" label="Secondary" />,
};

export const SecondaryIcon: Story = {
  render: (args) => (
    <Button
      {...args}
      type="secondary"
      label="SecondaryBtn"
      icon={<Trash size={22} color={'#8047F8'} />}
    />
  ),
};

export const IconBtn: Story = {
  render: (args) => (
    <Button
      {...args}
      type="icon"
      size="M"
      label="Icon"
      icon={<ShoppingCartSimple size={22} color={'#fff'} weight="fill" />}
    />
  ),
};
