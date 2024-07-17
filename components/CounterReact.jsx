import * as React from 'react'

export default function CounterReact() {
  console.log(React.useState)
  // const [counter, setCounter] = React.useState(0)
  // console.log(counter)

  return (
  <div flex="~" w="min" border="~ main rounded-md">
    <button
      border="r main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      // onClick={() => setCounter(counter - 1)}
    >
      -
    </button>
    <span m="auto" p="2">{'counter'}</span>
    <button
      border="l main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      // onClick={() => setCounter(counter + 1)}
    >
      +
    </button>
  </div>
  )
}
