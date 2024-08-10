const SizeButtons = ({ font, setFontSize }) => {
  return (
    <section>
      <button onClick={() => setFontSize(font + -1)}>
        -
      </button>
      <button onClick={() => setFontSize(font + 1)}>
        +
      </button>
    </section>
  )
}

export default SizeButtons