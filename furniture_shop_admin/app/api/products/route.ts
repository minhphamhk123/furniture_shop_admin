export async function GET(req: Request, res: Response){
  console.log('GET REQUEST')
}

export async function POST(req: Request){
  const body = req.body
  console.log(body)
  return new Response('OK')
}