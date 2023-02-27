export default {
    // this creates a ‘Components’ folder and a ‘CounterComponent’ subfolder
    title: 'Components/CounterComponent',
};

const Template = (args) => `<counter-component btn_increase="${args.btn_increase}" btn_decrease="${args.btn_decrease}" btn_reset="${args.btn_reset}" text_color="${args.text_color}"></counter-component>`;

export const Example = Template.bind({});
Example.args = {
    btn_increase: '+',
    btn_decrease: '-',
    btn_reset: 'Reset',
    text_color: 'red'
};