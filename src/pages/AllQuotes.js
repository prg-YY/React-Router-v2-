import QuoteList from "../components/quotes/QuoteList"

const DOMMY_QUOTES = [
  { id: "q1", author: "PRG", text: "Learning React is fun!" },
  { id: "q2", author: "JOSUB", text: "Learning React is great!!" },
]
const AllQuotes = () => {
  return <QuoteList quotes={DOMMY_QUOTES} />
}

export default AllQuotes
