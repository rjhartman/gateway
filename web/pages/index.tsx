import tw from 'twin.macro'

const Div = tw.div`bg-blue-100 text-black text-3xl py-20 flex flex-col gap-2`

export default function Home() {
  return (
    <Div>
      <p>Hello World</p>
      <p>Not Mont</p>
      <p tw="font-mont">Mont</p>
    </Div>
  )
}
