const horoscopes = {
  aries:
    'Aries: Today, you will have the amazing ability to find all the missing socks in the universe. Embrace your superpower and start a sock-reunion business!',
  taurus:
    'Taurus: Beware of spontaneous dance-offs today. You may find yourself in the middle of a surprise dance battle at the grocery store. Remember your moves!',
  gemini:
    'Gemini: Today, you will discover your hidden talent for speaking fluent dolphin. Prepare to be the star of the next aquarium show!',
  cancer:
    'Cancer: You will accidentally become an internet sensation today. Your video of trying to juggle marshmallows while singing opera will go viral!',
  leo: 'Leo: Today, you will magically turn into a human disco ball. Embrace the glittery glory and dance your way through the day!',
  virgo:
    'Virgo: Beware of rogue rubber ducks today. They may conspire against you and stage a coup in your bathtub. Stay alert!',
  libra:
    'Libra: Today, you will stumble upon a secret portal that leads to a world filled with talking unicorns. Make sure to bring some glitter and fairy dust!',
  scorpio:
    'Scorpio: You will develop a remarkable talent for communicating with squirrels today. Expect some deep conversations about acorns and tree-climbing techniques.',
  sagittarius:
    'Sagittarius: Today, you will find yourself in a spontaneous game of hide-and-seek with a mischievous leprechaun. Watch out for hidden pots of gold!',
  capricorn:
    'Capricorn: Congratulations! You will win the Nobel Prize for inventing a teleportation device. Start planning your world tour!',
  aquarius:
    'Aquarius: Today, you will become a master of disguise. Blend in with your surroundings and surprise your friends with your chameleon skills!',
  pisces:
    'Pisces: Beware of flying cupcakes today. They will mysteriously appear out of nowhere and try to cover you in frosting. Stay vigilant!',
}

// Function to get the selected zodiac sign and display the horoscope
function getHoroscope() {
  const zodiacSelect = document.getElementById('zodiac')
  const selectedSign = zodiacSelect.value

  const horoscopeContainer = document.getElementById('horoscope-container')
  horoscopeContainer.innerText = horoscopes[selectedSign]
}
