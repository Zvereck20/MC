const parent = document.querySelector('.arenas');

const Object1 = {
    name: 'Shang Sung',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [''],
    attack: {
        let () {
            console.log(name + '' + 'Fight...');
        }
    }
}

const Object2 = {
    name: 'Lue Kang',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: [''],
    attack: {
        let () {
            console.log(name + '' + 'Fight...');
        }
    }
}

const createDiv = (name) => {
    const element = document.createElement('div');
    element.classList.add(name);
    return element;
}

const createPlayer = (playerName, heroName, hp, source) => {
    const player = createDiv(playerName);
    const progressbar = createDiv('progressbar');
    const character = createDiv('character');
    const life = createDiv('life');
    life.style.width = hp;
    const name = createDiv('name'); 
    name.textContent = heroName;
    const img = document.createElement('img');
    img.src = source;

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);

    return player;
};

parent.appendChild(createPlayer('player1', Object1.hp, Object1.name, Object1.img));
parent.appendChild(createPlayer('player2', Object2.hp, Object2.name, Object2.img));

console.log(createPlayer());