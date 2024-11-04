import {MyButton} from '@/components/ui/myButton'

export default function App() {
  return (
    <div className="container my-6 grid grid-cols-4 place-items-center gap-[2.5rem]">
      <div className="col-span-full">
        <h1 className="text-center font-medium text-[5em] text-red-600">Hello World!</h1>
      </div>
      <div className="col-span-full">
        <MyButton className="bg-secondary text-foreground ring-secondary">Click me!</MyButton>
      </div>
    </div>
  )
}
