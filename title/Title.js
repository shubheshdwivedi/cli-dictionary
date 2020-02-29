import CFonts from "cfonts";

const showTitle = (title) =>CFonts.say(title, {
    font: 'block',
    align: 'center',
    colors: ['red','black','red'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: 'red,yellow,green,cyan,blue',
    transitionGradient: true,
    env: 'node'
});

export default showTitle;