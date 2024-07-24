import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    fetch('http://localhost:3000').then((res) => res.text()).then(console.log)
  }, []);

  return (
    <div>Hello world</div>
  )
}
