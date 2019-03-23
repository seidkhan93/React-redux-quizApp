import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-9b6db.firebaseio.com/'
})