const defaultMessage = ' Using word of the day instead.'

export function getDayNumber() {
  const now = new Date()
  const start = new Date(2022, 1, 13)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return day
}
export function getWordOfTheDay(day: number) {
  return answers[day]
}

// copied from Wordle source
const answers = [
'fionn', 
  'zoey', 
  'fishton', 
  'jerry', 
  'mrwaffle', 
  'pickles', 
  'polenta', 
  'chou', 
  'trashley', 
  'eggbert', 
  'manebow', 
  'cindy', 
  'pancakes', 
  'yamyam', 
  'goat', 
  'marbles', 
  'mibbles', 
  'brenda', 
  'stephen', 
  'speen', 
  'shimp', 
  'vtuber', 
  'lesbian', 
  'queer', 
  'trans', 
  'rights', 
  'nonbinary', 
  'fizone', 
  'twitch', 
  'lemmy', 
  'wafflebucks',  
  'maply', 
  'grandprix', 
  'nice', 
  'meatball', 
  'parade',
  'track',  
  'frittaflan',
  'rack',
  'tea',
  'chat',
  'bat',
  'stream',
  'subathon',
  'washer',
  'lewd',
  'sack',
  'horse',
  'puddle',
  'pegathon',
  'sub',
  'follow',
  'mods'
]

export const allWords = [...answers]
