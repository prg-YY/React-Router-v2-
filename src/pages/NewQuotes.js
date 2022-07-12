import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import useHttp from "../hooks/use-http"
import { addQuote } from "../lib/api"

import QuoteForm from "../components/quotes/QuoteForm"

const NewQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote)
  const history = useHistory()

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes")
    }
  }, [status, history])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
  }

  return (
    <QuoteForm isLoading={status === "panding"} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuotes
