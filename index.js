const letter = [
    "My babylovee, you make my heart smile everyday I love you so much 💗",
    "Every moment with you is my favorite movie my lovieebaby.💗",
    "You are the calm in my chaos and the light in my dark my sunshines babygirl💗",
    "If i had a flower for every time I though of u, I could walk in my garden(If I have one) forever💗",
    "You make everything better my babyy just by being here.💗",
    "I love you then, I love you now, Ill love you forever💗",
    "Babylove, I don’t need paradise because I found you.",
   "My babywifeyy, I still get butterflies every time I see your name pop up. 🦋💬💗",
  "You’re the sweetest part of my day, babycakess. 🍰💗",
  "Hey babygirlll, being with you feels like home. 🏡💗",
  "I wanna be wrapped up in your arms forever, pumpkin pie. 🧁💗",
  "You're the ‘best decision’ I’ll never stop choosing. 💍💗",
  "Even if I had a thousand lifetimes, I’d find you in each one. ⏱️💗",
  "You’re not just my girl — you’re my peace, my muse, my home. 🫶💗",
  "I want to be the reason behind your smile, everyday. 😊💗",
  "Every late night convo, every giggle, every ‘I love you’ — I cherish it all. 🌙💞",
  "You're not my better half — you're the whole damn heart, babylove. ❤️‍🔥",
  "You’re proof that magic exists in human form. ✨💗",
  "If hugs were stars, I’d send you a galaxy every night. 🌌💗",
  "Just thinking of you makes the worst days bearable. ☁️❤️",
  "I hope you never doubt how much I adore you, babywifeyy. 💍💗",
  "You’re the melody to my silence. 🎵💗",
  "You’re the warmest part of my coldest nights. 🧣💗",
  "I could listen to your laugh on loop forever. 🔁😂💗",
  "I wanna hold your hand and annoy you for the rest of our lives. 👫💗",
  "Even when we’re apart, my heart holds onto you. 🫀💗",
  "Babycakess, I love you more than mango float — and that’s saying a lot. 🥭💗",
  "Every cuddle with you is like a restart button on life. 🔄🤗💗",
  "I don’t need fairy tales. I’ve got you. 📖❤️",
  "With you, even silence is beautiful. 🤍💗",
  "You’re the ‘I miss you’ that hits the hardest when we’re not together. 💭💗",
  "No matter how far we are, I carry your love with me always. 🧳💗",
  "My babygirlll, I love you in every language my heart can speak. 🌍💗",
  "You’re the only notification I care about. 📲💖",
  "You’re the type of person I’d stay up all night for. 🌙💗",
  "You give me a reason to look forward to every tomorrow. 🌅💗",
  "Your smile? My favorite addiction. 😍💗",
  "Pumpkin pie, you’re the fluffiest part of my heart. 🧁💖",
  "You’re more than my girlfriend — you’re my daily dose of sunshine. ☀️💗",
  "Loving you feels like breathing: natural, necessary, and endless. 🌬️💗",
  "I’d still fall for you even if I met you a thousand times. 💘🔁",
  "When I count blessings, I start with your name. 🙏💗",
  "You’re the aesthetic of my soul. 🎨💖",
  "Every day with you feels like the best plot twist. 📚💗",
  "You’re my safe place, babylove. 🛏️💗",
  "There’s no playlist sweeter than your laugh. 🎶😂💗",
  "I’d rather argue with you than laugh with anyone else. 🔥💬💗",
  "No matter what happens, I want you by my side — always. 💏💗",
  "You’re my favorite notification, always on do-not-disturb for others. 🔕💗",
  "Babycakess, you complete all my unfinished thoughts. ✍️💗",
  "You don’t just fill the space in my heart — you redesigned it. 🛠️💗",
  "If I had one wish, I’d wish for a million moments with you. 🌠💗"
];

function generateLetter(){
    const box = document.getElementById('letter');
    const random = letter[Math.floor(Math.random() * letter.length)];
    box.textContent = random;
}


const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "Pause🔇";
  } else {
    music.pause();
    musicToggle.textContent = "Play🔈";
  }
});
