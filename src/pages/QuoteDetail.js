import { Fragment } from "react"
import { useParams, Route, Link } from "react-router-dom"

import HighlightedQuote from "../components/quotes/HighlightedQuote"
import Comments from "../components/comments/Comments"
import NotFound from "./NotFound"

const DOMMY_QUOTES = [
  { id: "q1", author: "PRG", text: "Learning React is fun!" },
  { id: "q2", author: "JOSUB", text: "Learning React is great!!" },
]

const QuoteDetail = () => {
  const params = useParams()

  const quote = DOMMY_QUOTES.find((quote) => quote.id === params.quoteId)

  if (!quote) {
    return <NotFound />
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail
