const users = {
    "Kayra": {
        name: "Kayra Çelik",
        followers: "152 Takipçi",
        following: "278 Takip",
        description: "Merhabalar ben Kayra bu siteyi denemek için kurdum. Düzenlemelere devam edeceğim."
    },
    "Deniz": {
        name: "Deniz Yılmaz",
        followers: "200 Takipçi",
        following: "300 Takip",
        description: "Merhaba ben Deniz bu platformu kurulduğundan beri kullanıyorum."
    },
    "Ali": {
        name: "Ali Veli",
        followers: "180 Takipçi",
        following: "150 Takip",
        description: "Ben Ali."
    },
    "Doruk": {
        name: "Doruk Demir",
        followers: "120 Takipçi",
        following: "220 Takip",
        description: "Doruğa ulaştın."
    },
    "Derin": {
        name: "Derin Su",
        followers: "250 Takipçi",
        following: "280 Takip",
        description: "Derin bir profile giriş yaptın."
    }
};

const profileCard = document.querySelector('.kart');
const profileImage = profileCard.querySelector('img');
const profileIcons = profileCard.querySelectorAll('i');

document.querySelectorAll('.paylasim').forEach(post =>{
    post.addEventListener('mouseover',()=>{
        const user = post.querySelector('h2').textContent;
        const userInfo = users[user];

        profileCard.querySelector('.kartismin').textContent = userInfo.name;
        profileCard.querySelector('.takiptakipci').textContent = `${userInfo.followers} ${userInfo.following}`
        profileCard.querySelector('.kart > p:nth-of-type(2)').textContent = userInfo.description;

        profileCard.style.display = 'flex';
        profileImage.style.display = 'block';
        profileIcons.forEach(icon => icon.style.display = 'inline-block');

        profileCard.classList.add('fade-in')
    });
});

document.querySelectorAll('.paylasim').forEach(post2 =>{
    post2.addEventListener('click',function(){
        const openCard = document.querySelector('.bigger-card');
        if (openCard && openCard !== this){
            openCard.classList.remove("bigger-card");
        }
        this.classList.toggle('bigger-card');
    });
});

document.addEventListener('click',function(event){
    const openCard = document.querySelector('.bigger-card');
    if (openCard && !openCard.contains(event.target)){
        openCard.classList.remove('bigger-card');
    }
});
