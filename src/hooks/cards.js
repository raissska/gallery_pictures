import { useEffect, useState } from 'react';
import { LIMIT } from "../utils/constants";


export function useCards(page) {

  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(true)

  async function fetchCards() {
    try {
      setError('')
      setLoading(true)
      setHasMore(true)
      const response = await fetch(`https://picsum.photos/v2/list?page=${page || 1}&limit=${LIMIT}`);
      if (response.ok) {
        const data = await response.json();
        const res = [...cards].concat(data)
        setCards(res)
        setLoading(false)
      } else {
        setError('Failed to fetch')
        setCards([])
        setLoading(false)
        setHasMore(false)
      }

    } catch (e) {
      console.log(e)
      setLoading(false)
      setError('Failed to fetch')
      setCards([])
      setHasMore(false)
    }
  }

  useEffect(() => {

    fetchCards()

    // eslint-disable-next-line
  }, [page])


  const cleanData = () => {
    setHasMore(false)
    setCards([])
  }


  return { loading, cards, cleanData, hasMore, error }

}