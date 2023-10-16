export const mockClientItems = (itemsNumber = 10) => {
  const mockItems = []
  const dob = '01/01/1990'
  const country = 'IN'
  for (let i = 1; i < itemsNumber + 1; i += 1) {
    mockItems.push({
      name: `name-${i}`,
      email: `${i}-test@gmail.com`,
      dob,
      country,
    })
  }
  return mockItems
}
