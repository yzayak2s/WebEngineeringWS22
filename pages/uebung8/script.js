// Keep clicked button highlighted
// Reference: https://stackoverflow.com/questions/68347721/how-do-i-keep-a-clicked-navigation-button-highlighted-in-css/68348062#68348062
import {CONTENT} from "./fetchContent.js";

let elements = document.querySelectorAll('.header-nav-button')

const asideMain = document.querySelector('.aside-main');

elements.forEach(el => {
    el.addEventListener('click', () => {
        elements.forEach(el => el.classList.remove('active'));
        Object.entries(CONTENT).filter(([key,value]) => {
            if (key === el.innerHTML.toLowerCase()) {
                const mainDivButtons = document.body.querySelector('.main-div-button')

                while (mainDivButtons.hasChildNodes()) {
                    mainDivButtons.removeChild(mainDivButtons.lastChild);
                }
                Object.entries(value).map(([key,value]) => {
                    const button = document.createElement('button')
                    button.setAttribute('class', 'main-nav-button')
                    if (!mainDivButtons.hasChildNodes()) {
                        button.setAttribute('class', 'main-nav-button active')
                    }
                    button.innerHTML = key[0].toUpperCase() + key.slice(1);
                    mainDivButtons.append(button)

                    const activeBtn = mainDivButtons.querySelector('.main-nav-button.active');
                    if (key === activeBtn.innerHTML.toLowerCase()) {
                        const content = value['content']
                        const references = value['references']
                        const p = document.querySelector('.p-main-content')
                        let aAside = document.body.querySelector('.a-aside')
                        if ( null === aAside) {
                            aAside = document.createElement('a')
                            aAside.setAttribute('class', 'a-aside')
                        }
                        aAside.setAttribute('href', references[0])
                        p.innerHTML = content;
                        aAside.innerHTML = references[0].split('/').slice(-1)[0]
                        const divMain = document.body.querySelector('.div-main')
                        divMain.append(p)
                        asideMain.append(aAside)
                    }
                });
            }

            el.classList.add('active')
            const mainDivBtn = document.querySelectorAll('.main-nav-button');
            mainDivBtn.forEach((elemBtn) => {
                elemBtn.addEventListener('click', () => {
                    mainDivBtn.forEach((elementBtn) => elementBtn.classList.remove('active'));
                    Object.entries(value).filter(([key, value]) => {
                        if (key === elemBtn.innerHTML.toLowerCase()) {
                            const content = value['content']
                            const references = value['references']
                            const p = document.querySelector('.p-main-content')
                            const aAside = document.querySelector('.a-aside')
                            aAside.setAttribute('href', references[0]);
                            p.innerHTML = content;
                            aAside.innerHTML = references[0].split('/').slice(-1)[0];
                            const divMain = document.body.querySelector('.div-main')
                            divMain.append(p)
                        }
                    });
                    elemBtn.classList.add('active')
                })
            })
        })
    })
})

let elementsBtn = document.querySelectorAll('.main-nav-button')

elementsBtn.forEach(el => {
    el.addEventListener('click', () => {
        elementsBtn.forEach(elem => elem.classList.remove('active'));
        Object.entries(CONTENT['html']).filter(([key, value]) => {
            if (key === el.innerHTML.toLowerCase()) {
                const content = value['content']
                const references = value['references']
                const p = document.querySelector('.p-main-content')
                const aAside = document.querySelector('.a-aside')
                aAside.setAttribute('href', references[0]);
                p.innerHTML = content;
                aAside.innerHTML = references[0].split('/').slice(-1)[0];
                const divMain = document.body.querySelector('.div-main')
                divMain.append(p)
            }
        })
        el.classList.add('active')
    })
})
