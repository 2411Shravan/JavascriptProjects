const render = [

    {
        name : 'Nelson Mandela',
        quote : 'he greatest glory in living lies not in never falling, but in rising every time we fall.'
    },

    {
        name : 'Walt Disney',
        quote : 'The way to get started is to quit talking and begin doing'
    },
    {
        name : 'Steve Jobs',
        quote : 'Your time is limited, so dont waste it living someone else life. Dont be trapped by dogma – which is living with the results of other people thinking.'
    },
    {
        name : 'Mother Teresa',
        quote : 'Spread love everywhere you go. Let no one ever come to you without leaving happier.'
    },
    {
        name : 'ranklin D. Roosevelt',
        quote : 'When you reach the end of your rope, tie a knot in it and hang on.'
    },
    {
        name : 'Margaret Mead',
        quote : 'Always remember that you are absolutely unique. Just like everyone else.'
    },
    {
        name : 'Robert Louis Stevenson',
        quote : 'Dont judge each day by the harvest you reap but by the seeds that you plant'
    },
    {
        name : 'Eleanor Roosevelt',
        quote : 'The future belongs to those who believe in the beauty of their dreams.'
    },
    {
        name : 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        quote : 'Benjamin Franklin'
    },
    {
        name : 'Helen Keller',
        quote : 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'
    },
    {
        name : 'Aristotle',
        quote : 'It is during our darkest moments that we must focus to see the light.'
    },
    {
        name : 'Anne Frank',
        quote : 'Whoever is happy will make others happy too'
    },
    {
        name : 'Ralph Waldo Emerson',
        quote : 'Do not go where the path may lead, go instead where there is no path and leave a trail'
    },
    {
        name : 'Margaret Mead',
        quote : 'Always remember that you are absolutely unique. Just like everyone else'
    },
    {
        name : 'Robert Louis Stevenson',
        quote : 'Dont judge each day by the harvest you reap but by the seeds that you plant.'
    },
    {
        name : 'Eleanor Roosevelt',
        quote : 'The future belongs to those who believe in the beauty of their dreams.'
    },
    {
        name : 'Jonathan Swift',
        quote : 'May you live all the days of your life.'
    },
    {
        name : 'Hans Christian Andersen',
        quote : 'Life itself is the most wonderful fairy tale.'
    },
    {
        name : 'D. H. Lawrence',
        quote : 'Life is ours to be spent, not to be saved'
    },
    {
        name : 'James M. Barrie',
        quote : 'Life is a long lesson in humility.'
    },
    {
        name : 'Henry David Thoreau',
        quote : 'Go confidently in the direction of your dreams! Live the life you"ve imagined.'
    },
    {
        name : 'Thomas A. Edison',
        quote : 'Many of lifes failures are people who did not realize how close they were to success when they gave up.'
    },
    {
        name : 'Dr. Seuss',
        quote : 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.'
    },
    {
        name : 'Maya Angelou',
        quote : 'You will face many defeats in life, but never let yourself be defeated.'
    },
    {
        name : 'Confucius',
        quote : 'Life is really simple, but we insist on making it complicated.'
    },
    {
        name : 'Abraham Lincoln',
        quote : 'In the end, its not the years in your life that count. Its the life in your years.'
    },
    {
        name : 'Babe Ruth',
        quote : 'Never let the fear of striking out keep you from playing the game.'
    },
    {
        name : 'Maya Angelou',
        quote : 'You will face many defeats in life, but never let yourself be defeated.'
    },
    {
        name : 'Ralph Waldo Emerson',
        quote : 'Do not go where the path may lead, go instead where there is no path and leave a trail.'
    },
    {
        name : 'Anne Frank',
        quote : 'Whoever is happy will make others happy too.'
    }

]


const btan = document.querySelector('.btn');
const nme = document.querySelector('.name');
const qte = document.querySelector('.quote');






function appear(){
    var num = Math.floor(Math.random()*render.length);
    console.log(num);

    nme.innerHTML = render[num].name;
    qte.innerHTML = render[num].quote;
}

setInterval(appear, 3000);