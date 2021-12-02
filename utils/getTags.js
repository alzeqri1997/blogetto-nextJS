export function getTags(arr) {
  console.log('this is called')
  const sortedArr = []
  arr.forEach((tag) => {
    if (!sortedArr.includes(Object.values(tag)[0])) {
      const names = Object.values(tag)[0]
      sortedArr.push(names)
    }
  })

  const sortedArrWithCounter = sortedArr.map((selectedTag) => {
    const counter = arr.reduce((counter, tag) => {
      if (tag.tag.toLowerCase() === selectedTag.toLowerCase()) {
        counter++
      }

      return counter
    }, 0)

    return { name: selectedTag, counter: counter }
  })
  console.log('till here')
  return sortedArrWithCounter
}
