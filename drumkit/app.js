function play(e){
    const audio=document.querySelector(`audio[data-keys="${e.keyCode}"]`);
    if(!audio)
        return;
    const key=document.querySelector(`div[data-keys="${e.keyCode}"]`);
    //OR const key=document.querySelector(`.key[data-keys="${e.keyCode}"]`);
    console.log(audio);
    console.log(key);
    audio.play();
    key.classList.add('playing');
    //key.classList.remove('playing');
}
function removeTransition(e){
    if(e.propertyName!=='transform') return;//skipping if not transform
    this.classList.remove('playing');//this is the key playing
}
const keys=document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown', play)    