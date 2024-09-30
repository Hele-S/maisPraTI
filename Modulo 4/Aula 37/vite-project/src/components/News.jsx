import { useState, useEffect } from 'react'

function Newsletter() {
    const [news, setNews] = useState(null)
    const [frontNews, setFrontNews] = useState(1)

    useEffect(() => {
        const timerId = setInterval(async() => {
            setFrontNews(prevCount => prevCount + 1)
            FetchNews()
        },5000)
        const FetchNews = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${frontNews}`)
            const newsData = await response.json()
            setNews(newsData)
        }

        return () => {
            setNews(null)
            clearInterval(timerId)
            console.log('desmontou')
        }
    }, [frontNews])
    return (
        <div>
        {news ? (
            <div>
                <h1>Notícia {frontNews - 1}</h1>
                <h2>{news.title}</h2>
                <p>{news.body}</p>
            </div>
        ) : (
            <p>Carregando notícia...</p>
        )}
    </div>
    )
} export default Newsletter