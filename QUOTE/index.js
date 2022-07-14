let btn=document.querySelector('#new-quote')
let kindness=document.querySelector('#kindness')
let love=document.querySelector('#love')
let truth=document.querySelector('#truth')

let quote=document.querySelector('.quote')
let author =document.querySelector('.author')


const lovequotes=[{
    quote:`"A loving heart is the truest wisdom.” `,


    author:` — Charles Dickens`
},
{
   quote:`"Love is merely the name for the desire and pursuit of the whole.” `,

   author :` - Aristophanes` 
},
{
  quote:`“The way to love anything is to realize that it may be lost.”`,
  author:` - Gilbert Chesterton`
},
{
    quote:`“Take into account that great love and great achievements involve great risk.”`,
    author:` - Dalai Lama`
  },
  {
    quote:`“A woman unsatisfied must have luxuries. But a woman who loves a man would sleep on a board.”`,
    author:` - D. H. Lawrence`
  },
  {
    quote:`“Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!”`,
    author:` - Sathya Sai Baba`
  }
]



const kindnessquotes=[{
    quote:`“It's wise to tell the truth. It's even wiser to tell it kindly.”`,


    author:` -  Maxime Lagace `

},
{
    quote:`“Rest and be kind, you don't have to prove anything.”`,


    author:` — Jack Kerouac `

},{
    quote:`“Be kind whenever possible. It is always possible.”`,


    author:`  — Dalai Lama `

},
{
    quote:`“In the long run, the sharpest weapon of all is a kind and gentle spirit.” `,


    author:` — Anne Frank `

},{
        quote:`“Be kind, for everyone you meet is fighting a harder battle.”`,


    author:` — Plato `

},{
        quote:`“Treat everyone with politeness and kindness, not because they are nice, but because you are.” `,


    author:` — Roy T. Bennett `

},{
        quote:`“Be mindful. Be grateful. Be positive. Be true. Be kind.” `,


    author:` — Roy T. Bennett `

}]


const truthquotes=[{
        quote:`“Follow the man who seeks the truth; run from the man who has found it.”`,


    author:` — Vaclav Havel `

},
{

},{
        quote:`“The truth is not for all men, but for those who seek it.”`,


    author:` — Ayn Rand `

},
{
        quote:`“The truth is simple. If it was complicated, everyone would understand it.”`,


    author:` — Walt Whitman `

},{
        quote:`“Rather than love, than money, than fame, give me truth.” `,


    author:`  — Henry David Thoreau `

},{
        quote:`“Whatever satisfies the soul is truth.”`,


    author:` — Walt Whitman `

},{
        quote:`“Fear is a natural reaction to moving closer to the truth.” `,


    author:` — Pema Chodron `
    
}]

kindness.addEventListener('click',function()
{
    let rdm=Math.floor(Math.random()*lovequotes.length);

    quote.innerHTML=lovequotes[rdm].quote;
    author.innerHTML=lovequotes[rdm].author;
    
    
btn.addEventListener('click',function()


{
    let rdm=Math.floor(Math.random()*truthquotes.length);

    quote.innerHTML=truthquotes[rdm].quote;
    author.innerHTML=truthquotes[rdm].author;

})

})
love.addEventListener('click',function()
{
    let rdm=Math.floor(Math.random()*kindnessquotes.length);

    quote.innerHTML=kindnessquotes[rdm].quote;
    author.innerHTML=kindnessquotes[rdm].author;

    btn.addEventListener('click',function()


{
    let rdm=Math.floor(Math.random()*kindnessquotes.length);

    quote.innerHTML=kindnessquotes[rdm].quote;
    author.innerHTML=kindnessquotes[rdm].author;

})


})
truth.addEventListener('click',function()
{
    let rdm=Math.floor(Math.random()*truthquotes.length);

    quote.innerHTML=truthquotes[rdm].quote;
    author.innerHTML=truthquotes[rdm].author;

})

btn.addEventListener('click',function()


{
    let rdm=Math.floor(Math.random()*truthquotes.length);

    quote.innerHTML=truthquotes[rdm].quote;
    author.innerHTML=truthquotes[rdm].author;

})

