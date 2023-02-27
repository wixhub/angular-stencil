export default {
    // this creates a ‘Components’ folder and a ‘TextComponent’ subfolder
    title: 'Components/TextComponent',
};

const Template = (args) => `<text-component text="${args.text}"></text-component>`;

export const Example = Template.bind({});
Example.args = {
    text: 'Storybook for Stencil Components'
};