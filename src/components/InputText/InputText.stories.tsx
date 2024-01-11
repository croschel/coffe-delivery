import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from '@components/InputText';
const meta: Meta<typeof InputText> = {
  component: InputText,
  args: {
    controlled: true,
    disabled: false,
    hasError: false,
    name: 'Input 1',
    placeholder: 'Insert Text Here',
    required: true,
    value: '',
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  render: (args) => <InputText {...args} />,
};
