import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '@components/Select';
import { CreditCard } from '@phosphor-icons/react';
const meta: Meta<typeof Select> = {
  component: Select,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const NonSelected: Story = {
  render: (args) => (
    <Select
      {...args}
      label="cartão de crédito"
      selected={false}
      onSelect={() => {}}
    />
  ),
};

export const NonSelectedIcon: Story = {
  render: (args) => (
    <Select
      {...args}
      icon={<CreditCard size={16} color={'#8047f8'} />}
      label="cartão de crédito"
      selected={false}
      onSelect={() => {}}
    />
  ),
};

export const Selected: Story = {
  render: (args) => (
    <Select {...args} label="cartão de crédito" selected onSelect={() => {}} />
  ),
};

export const SelectedIcon: Story = {
  render: (args) => (
    <Select
      {...args}
      icon={<CreditCard size={16} color={'#8047f8'} />}
      label="cartão de crédito"
      selected
      onSelect={() => {}}
    />
  ),
};
