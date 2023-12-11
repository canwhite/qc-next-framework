'use client'

//处理的是顶层layout和template
export default function Error({ error, reset }:{
  error:Error,
  reset:()=>void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
