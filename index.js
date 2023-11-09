$(document).ready(function(){
  const padArray = [
    {id1: 'Heater-1', id2: 'Q', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {id1: 'Heater-2', id2: 'W', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {id1: 'Heater-3', id2: 'E', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {id1: 'Heater-4', id2: 'A', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {id1: 'Kick-1', id2: 'S', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {id1: 'Dsc_Oh', id2: 'D', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {id1: 'Kick_1', id2: 'Z', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {id1: 'Kick-2', id2: 'X', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {id1: 'Cev_H2', id2: 'C', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
  ]
  const ids2 = padArray.map(elem => elem.id2)
  const display = $('#display')
  const padZone = $('#pad-zone')
  const pads = padArray.map(sound =>
    '<div id="'+sound.id1+'" class="drum-pad">'+sound.id2+'<audio id='+sound.id2+' class="clip" src='+ sound.sound+'></audio></div>'
    )
  padZone.html(pads)

  const elementList = $('.drum-pad')

  $.each(elementList, function(key, value){
    value.addEventListener("click", function() {
      const keyPress = value.innerText
      trigger(keyPress)
    })
 })

  window.addEventListener("keypress", function(event) {
    const keyPress = event.key
    trigger(keyPress)
  })

  function trigger(keyPress){
    display.stop()
    display.css('opacity', '1')
    const soundId = ids2.indexOf(keyPress.toUpperCase())
    if(soundId !== -1) {
      const snd = document.getElementById(keyPress.toUpperCase())
      snd.currentTime = 0;
      snd.play()
      display.text(snd.parentElement.id)
      display.animate({opacity: 0}, 4000)
    }
  }

})