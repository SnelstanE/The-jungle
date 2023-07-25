const myButton = document.getElementById('myButton')
const line = document.getElementById('line')
const Home = document.getElementById('Home')
const About = document.getElementById('About')
const Blog = document.getElementById('Blog')
const Contact = document.getElementById('Contact')

myButton.addEventListener('mouseout', function(){
    myButton.style.cssText = `
    background-color: transition;
    -webkit-transition: all 1s;
    `;
})

myButton.addEventListener('mousemove', function(){
    line.style.cssText = `
    margin-left: 320px;
    -webkit-transition: all 1s;
    `;
})

myButton.addEventListener('mouseout', function(){
    line.style.cssText = `
    margin-left: 290px;
    -webkit-transition: all 1s;
    `;
})

Home.addEventListener('mousemove', function sx(){
    Home.style.width = '67px';
    Home.style.height = '3px';
    Home.style.content = '';
    Home.style.background = 'white';
    Home.style.marginTop = '60px';
})
Home.addEventListener('mouseout', function (){

    Home.style.width = '0px';
    Home.style.height = '3px';
    Home.style.content = '';
    Home.style.background = 'white';
    Home.style.marginTop = '65px';
})
About.addEventListener('mousemove', function sx(){
    Home.style.width = '67px';
    Home.style.height = '3px';
    Home.style.content = '';
    Home.style.background = 'white';
    Home.style.marginTop = '60px';
})
About.addEventListener('mouseout', function (){

    Home.style.width = '0px';
    Home.style.height = '3px';
    Home.style.content = '';
    Home.style.background = 'white';
    Home.style.marginTop = '65px';
})

Blog.addEventListener('mousemove', function sx(){
    Home.style.width = '67px';
    Home.style.height = '3px';
    Home.style.content = '';
    Home.style.background = 'white';
    Home.style.marginTop = '60px';
})
Blog.addEventListener('mouseout', function (){

    Home.style.width = '0px';
    Home.style.height = '3px';
    Home.style.content = '';
    Home.style.background = 'white';
    Home.style.marginTop = '65px';
})

Contact.addEventListener('mousemove', function sx(){
    Home.style.width = '67px';
    Home.style.height = '3px';
    Home.style.content = '';
    Home.style.background = 'white';
    Home.style.marginTop = '60px';
})
Contact.addEventListener('mouseout', function (){

    Home.style.width = '0px';
    Home.style.height = '3px';
    Home.style.content = '';
    Home.style.background = 'white';
    Home.style.marginTop = '65px';
})
