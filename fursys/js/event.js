const quickmenu = document.querySelector('#quickmenu>h2');
const quickmenuList = document.querySelector('#quickmenu>ul')

quickmenu.addEventListener('click', () => {

if(quickmenuList.style.display=="block"){
  quickmenuList.style.setProperty('display','none')
}else{
  quickmenuList.style.setProperty('display','block')

}
})
