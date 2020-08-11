export default function loadMore(res) {
  const messages = []

  console.log(res)
  console.log(res.length)
  // if > 2
  if(res.length > 3){
    //res.forEach( (e) =>{
    for (let i = 0; i < 3; i++){
      // main - false to main - true
      res[i].main = true
      messages.push(res[i])
    }
    return messages
    // if < 2
  } else{
    //res.forEach
    for (let i = 0; i < res.length; i++){
      res[i].main = true
      messages.push(res[i])
    }
    return messages
  }
}