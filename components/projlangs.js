
const projlangs = ({langs}) => {

  return (
    <>
    <div className="langs">
      {
        langs.map( (lang) => (<h5 key={lang.id}>{lang.language} </h5>))
      }       

    </div>
    </>
  )
}

export default projlangs