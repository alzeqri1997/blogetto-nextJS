export function getTags(array) {
  console.log('this is called')

  const sortedArray = []
  array.forEach((tag) => {
    if (!sortedArray.includes(Object.values(tag)[1])) {
      const names = Object.values(tag)[1]
      sortedArray.push(names)
    }
  })

  const sortedArrayWithCounter = sortedArray.map((selectedTag) => {
    const counter = array.reduce((counter, tag) => {
      if (tag.tag.toLowerCase() === selectedTag.toLowerCase()) {
        counter++
      }

      return counter
    }, 0)

    return { name: selectedTag, counter: counter }
  })
  console.log('till here')
  return sortedArrayWithCounter
}
