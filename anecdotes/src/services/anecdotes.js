import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const getAll = async () => {
  const req = await axios.get(baseUrl)
  return await req.data
}

export const createOne = async (string) => {
  const anecToAdd = {
    content: string,
    id: getId(),
    votes:0
  }
  const res = await axios.post(baseUrl, anecToAdd)
  return res
}

export default {getAll, createOne}