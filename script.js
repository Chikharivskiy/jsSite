const title = [
    "Мене звати Максим і розробляю веб-сайти.",
    "Меня зовут Максим. Я разрабатоваю веб-сайти.",
    "I'm Maksim and I developer a web-sites."
];
const about = [
    "Про мене",
    "Обо мне",
    "About me"
];
const aboutText = [
    "Як мене звати ви вже знаєте. Вот я вирішив написати сайт портфоліо і я його написав. В портфоліо робіт поки що немає крім цого сайта, через який ви читає цей текст. Но це питання часу, працювати і вивчати  нове я люблю, тому мене чекає велике портфоліо, яким я зможе пишатися і за яке не буде соромно мені і вам.",
    "Как меня зовут вы уже знаете. Вот я решил написать сайт портфолио и я его написал. В портфолио работ пока нет кроме этого сайта, через который вы читает этот текст. Но это вопрос времени, работать и изучать новое я люблю, поэтому меня ждет большое портфолио, которым я смогу гордиться и за которое не будет стыдно мне и вам.",
    "You already know my name. Here I decided to write a portfolio website and I wrote it. In the portfolio of works there is no other than this site, through which you read this text. But this is a matter of time, work and study I love the new one, so I have a great portfolio that I can be proud of for which you and I will not be ashamed."
];

function changeLanguage(title, about, aboutText){
    let h1 = document.getElementsByTagName('h1')[0];
        h1.textContent = title;
    let h3 = document.getElementsByTagName('h3')[0];
        h3.textContent = about;
    let p = document.getElementsByTagName('p')[0];
        p.textContent = aboutText;

    function animMove(){
        h1.classList.add('animationMove');
        h3.classList.add('animationMove');
        p.classList.add('animationMove');
        setTimeout( () => {
            h1.classList.remove('animationMove');
            h3.classList.remove('animationMove');
            p.classList.remove('animationMove');
        }, 800);
    }
    return animMove();
}

document.getElementById('button-1').addEventListener('click', function(){
    changeLanguage(title[0], about[0], aboutText[0]);
})
document.getElementById('button-2').addEventListener('click', function(){
    changeLanguage(title[1], about[1], aboutText[1]);
})
document.getElementById('button-3').addEventListener('click', function(){
    changeLanguage(title[2], about[2], aboutText[2]);
})